#!/usr/bin/env python3
"""Arma senderos.js a partir de herramientas/senderos.json.

Cada sendero toma su trazado de OpenStreetMap (números de vía) o de un
archivo GPX grabado con el teléfono. El resultado se simplifica para que
el archivo quede liviano: se sacan los puntos que no cambian la forma
del camino en más de unos metros.

Uso:  python3 herramientas/trazados.py

No necesita instalar nada: sólo Python 3.
"""
import heapq
import json
import math
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parent
FUENTES = AQUI / 'senderos.json'
SALIDA = RAIZ / 'senderos.js'

# Servidores públicos de OpenStreetMap. Si uno no responde, se prueba el siguiente.
OVERPASS = [
    'https://overpass-api.de/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
]
TOLERANCIA_M = 5  # cuánto puede apartarse la línea simplificada del camino real


def distancia_m(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = (math.sin((la2 - la1) / 2) ** 2
         + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2)
    return 6371000 * 2 * math.asin(math.sqrt(h))


def largo_km(lineas):
    return sum(distancia_m(a, b) for l in lineas for a, b in zip(l, l[1:])) / 1000


def simplificar(puntos, tol=TOLERANCIA_M):
    """Douglas-Peucker sobre coordenadas proyectadas a metros."""
    if len(puntos) < 3:
        return puntos
    lat0 = math.radians(puntos[0][0])
    xy = [(p[1] * 111320 * math.cos(lat0), p[0] * 110540) for p in puntos]

    def desvio(p, a, b):
        dx, dy = b[0] - a[0], b[1] - a[1]
        if dx == dy == 0:
            return math.hypot(p[0] - a[0], p[1] - a[1])
        t = max(0, min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy)))
        return math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy)

    quedan = [False] * len(puntos)
    quedan[0] = quedan[-1] = True
    pila = [(0, len(puntos) - 1)]
    while pila:
        i, j = pila.pop()
        peor, k = 0, None
        for m in range(i + 1, j):
            d = desvio(xy[m], xy[i], xy[j])
            if d > peor:
                peor, k = d, m
        if k is not None and peor > tol:
            quedan[k] = True
            pila += [(i, k), (k, j)]
    return [p for p, q in zip(puntos, quedan) if q]


def encadenar(lineas):
    """Une los tramos que comparten una punta, para que un sendero cortado
    en varias vías de OpenStreetMap quede como una sola línea."""
    lineas = [list(l) for l in lineas]
    unidas = True
    while unidas and len(lineas) > 1:
        unidas = False
        for i in range(len(lineas)):
            for j in range(len(lineas)):
                if i == j:
                    continue
                a, b = lineas[i], lineas[j]
                if a[-1] == b[0]:
                    nueva = a + b[1:]
                elif a[-1] == b[-1]:
                    nueva = a + b[-2::-1]
                elif a[0] == b[-1]:
                    nueva = b + a[1:]
                elif a[0] == b[0]:
                    nueva = b[::-1] + a[1:]
                else:
                    continue
                lineas = [l for k, l in enumerate(lineas) if k not in (i, j)] + [nueva]
                unidas = True
                break
            if unidas:
                break
    # la más larga primero: es la que se usa como recorrido principal
    return sorted(lineas, key=lambda l: -largo_km([l]))


def recorrer(lineas, desde, hasta):
    """El camino más corto entre dos puntos por una red de sendas.

    Sirve cuando un sendero es sólo un pedazo de una red más grande: se dan
    las vías y dónde empieza y termina, y queda sólo el recorrido."""
    vecinos = {}
    for l in lineas:
        for a, b in zip(l, l[1:]):
            d = distancia_m(a, b)
            vecinos.setdefault(a, []).append((b, d))
            vecinos.setdefault(b, []).append((a, d))
    ini = min(vecinos, key=lambda n: distancia_m(n, desde))
    fin = min(vecinos, key=lambda n: distancia_m(n, hasta))
    for nombre, punto, nodo in (('desde', desde, ini), ('hasta', hasta, fin)):
        lejos = distancia_m(punto, nodo)
        if lejos > 300:
            print(f'  ojo: el punto «{nombre}» queda a {lejos:.0f} m del camino', file=sys.stderr)
    dist, previo, cola = {ini: 0}, {}, [(0, ini)]
    while cola:
        d, n = heapq.heappop(cola)
        if n == fin:
            break
        if d > dist[n]:
            continue
        for m, w in vecinos[n]:
            if d + w < dist.get(m, float('inf')):
                dist[m], previo[m] = d + w, n
                heapq.heappush(cola, (d + w, m))
    if fin not in dist:
        sys.exit('No hay camino entre «desde» y «hasta» con esas vías.')
    camino = [fin]
    while camino[-1] != ini:
        camino.append(previo[camino[-1]])
    return [camino[::-1]]


def vias_osm(ids):
    """Baja todas las vías de una sola vez: los servidores públicos cortan
    si se les hacen muchos pedidos seguidos."""
    consulta = f'[out:json][timeout:120];way(id:{",".join(map(str, ids))});out geom;'
    datos = urllib.parse.urlencode({'data': consulta}).encode()
    ultimo_error = None
    for vuelta in range(3):
        for url in OVERPASS:
            try:
                pedido = urllib.request.Request(url, data=datos, headers={
                    'User-Agent': 'ruta-cultural-jujuy/1.0 (Fundacion Puna)'})
                with urllib.request.urlopen(pedido, timeout=180) as r:
                    elementos = json.load(r)['elements']
                por_id = {e['id']: [(g['lat'], g['lon']) for g in e['geometry']] for e in elementos}
                faltan = [i for i in ids if i not in por_id]
                if faltan:
                    sys.exit(f'OpenStreetMap no tiene estas vías: {faltan}')
                return por_id
            except (OSError, ValueError, KeyError) as e:
                ultimo_error = e
                print(f'  {url} no respondió ({e}); pruebo el siguiente…', file=sys.stderr)
        time.sleep(20)
    sys.exit(f'Ningún servidor de OpenStreetMap respondió: {ultimo_error}')


def lineas_gpx(nombre):
    arbol = ET.parse(AQUI / 'gpx' / nombre)
    lineas = []
    for seg in arbol.iter():
        if seg.tag.endswith('trkseg') or seg.tag.endswith('rte'):
            pts = [(float(p.get('lat')), float(p.get('lon')))
                   for p in seg if p.tag.endswith('trkpt') or p.tag.endswith('rtept')]
            if len(pts) > 1:
                lineas.append(pts)
    if not lineas:
        sys.exit(f'{nombre}: no encontré ningún recorrido adentro.')
    return lineas


def main():
    fuentes = {k: v for k, v in json.loads(FUENTES.read_text()).items() if not k.startswith('_')}
    todas = sorted({v for f in fuentes.values() for v in f.get('osm', [])})
    vias = vias_osm(todas) if todas else {}
    trazados = {}
    for id_, f in fuentes.items():
        crudas = [vias[v] for v in f['osm']] if 'osm' in f else lineas_gpx(f['gpx'])
        if 'desde' in f:
            crudas = recorrer(crudas, tuple(f['desde']), tuple(f['hasta']))
        elif f.get('invertir'):
            crudas = [l[::-1] for l in crudas[::-1]]
        lineas = [[(round(la, 5), round(lo, 5)) for la, lo in simplificar(l)]
                  for l in encadenar(crudas)]
        trazados[id_] = lineas
        ini, fin = lineas[0][0], lineas[0][-1]
        print(f'{id_}: {largo_km(lineas):.2f} km, {sum(map(len, lineas))} puntos, '
              f'{len(lineas)} tramo(s) · punta {ini[0]}, {ini[1]} · otra punta {fin[0]}, {fin[1]}')

    cuerpo = ',\n'.join(
        f'  {json.dumps(k)}: {json.dumps([[list(p) for p in l] for l in v], separators=(",", ":"))}'
        for k, v in trazados.items())
    SALIDA.write_text(
        '/* ============================================================\n'
        '   RUTA CULTURAL DE JUJUY — trazados de los senderos\n'
        '   ------------------------------------------------------------\n'
        '   Lo genera herramientas/trazados.py: no se edita a mano.\n'
        '   Cada sendero es una lista de tramos, y cada tramo una lista\n'
        '   de puntos [latitud, longitud].\n'
        '   Trazados de OpenStreetMap © colaboradores de OpenStreetMap,\n'
        '   bajo licencia ODbL (openstreetmap.org/copyright).\n'
        '   ============================================================ */\n\n'
        f'window.TRAZADOS = {{\n{cuerpo}\n}};\n')
    print(f'\nListo: {SALIDA.relative_to(RAIZ)} ({SALIDA.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    main()
