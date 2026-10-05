// Sin dependencias: node tests/relevamiento.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const raiz = path.join(__dirname, '..');
const datos = { window: {} };
vm.createContext(datos);
for (const archivo of ['datos.js', 'relevados.js', 'actividades.js', 'fotos.js', 'rastreo-octubre.js', 'senderos.js']) {
  vm.runInContext(fs.readFileSync(path.join(raiz, archivo), 'utf8'), datos);
}
const { LUGARES, LUGARES_MUESTRA, CATEGORIAS, TEXTOS, REGIONES } = datos.window;
const nuevos = LUGARES.filter(l => /^(pu|qu|va|yu)-r0[1-6]$/.test(l.id));
assert.equal(nuevos.length, 24);
assert.equal(LUGARES_MUESTRA.length, 22);
assert(!LUGARES.some(l => l.muestra));
assert.equal(new Set(LUGARES.map(l => l.id)).size, LUGARES.length);
for (const region of ['puna', 'quebrada', 'valles', 'yungas']) {
  assert.equal(nuevos.filter(l => l.region === region).length, 6);
}
for (const l of nuevos) {
  assert(CATEGORIAS[l.categoria]);
  assert(l.lat >= -24.75 && l.lat <= -21.7);
  assert(l.lng >= -67.35 && l.lng <= -63.85);
  assert.equal(l.relevamiento.estado, 'relevado');
  assert.equal(l.relevamiento.ubicacion, 'referencia');
  assert(l.relevamiento.fuentes.length);
  for (const f of l.relevamiento.fuentes) assert.equal(new URL(f.url).protocol, 'https:');
  for (const idioma of ['es', 'en', 'pt']) assert(l.descripcion[idioma]);
  for (const numero of [l.contacto.telefono, l.contacto.whatsapp].filter(Boolean)) {
    assert(!numero.includes('0000000'));
    assert(/^\+?\d{10,15}$/.test(numero));
  }
}

// Ejercita la ficha real en los tres idiomas, sin cargar mapas externos.
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
assert(html.indexOf('src="datos.js"') < html.indexOf('src="relevados.js"'));
assert(html.indexOf('src="relevados.js"') < html.indexOf('const LUGARES ='));
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script); // Comprobar también toda la sintaxis de la aplicación.
const extraer = (inicio, fin) => script.slice(script.indexOf(inicio), script.indexOf(fin));
const lista = { innerHTML: '', querySelectorAll: () => [], querySelector: () => null };
const estado = { idioma: 'es' };
const contexto = {
  estado, LUGARES, REG: REGIONES, CAT: CATEGORIAS, TRAZADOS: {}, elLista: lista,
  document: { getElementById: () => ({ addEventListener() {} }) },
  t: clave => TEXTOS[estado.idioma][clave],
  tr: campo => typeof campo === 'string' ? campo : campo[estado.idioma],
  tinte: () => '', svg: () => '', porId: id => LUGARES.find(l => l.id === id),
  distanciaKm: () => 1, cerrarFicha() {}, compartir() {}, irA() {},
  descargarGpx() {}, datosSendero() { return ''; }, cifra: String
};
vm.createContext(contexto);
vm.runInContext(extraer('function filaChica(', '/* Lo más cercano'), contexto);
vm.runInContext(extraer('function cercanos(', '/* Botones de contacto.'), contexto);
vm.runInContext(extraer('function botonesContacto(', 'function datosSendero('), contexto);
vm.runInContext(extraer('function escaparHtml(', 'function pintarLista('), contexto);
for (const idioma of ['es', 'en', 'pt']) {
  estado.idioma = idioma;
  for (const l of nuevos) {
    contexto.pintarFicha(l);
    assert(!lista.innerHTML.includes('undefined'), `${idioma}: ${l.nombre}`);
    assert(lista.innerHTML.includes(TEXTOS[idioma].pendienteVerificacion));
    assert(lista.innerHTML.includes(TEXTOS[idioma].ubicacionOrientativa));
    assert(lista.innerHTML.includes(encodeURIComponent(l.mapas_busqueda)));
    assert(lista.innerHTML.includes(TEXTOS[idioma].buscarMaps));
    assert.equal(contexto.cercanos(l, []).length, 0);
    for (const f of l.relevamiento.fuentes) {
      assert(lista.innerHTML.includes(contexto.escaparHtml(f.url)));
    }
  }
}
// No ofrecer distancias engañosas desde ni hacia ubicaciones orientativas.
const antiguo = LUGARES.find(l => !l.relevamiento);
assert(contexto.cercanos(antiguo, []).every(x => !x.o.relevamiento));
assert.equal(contexto.escaparHtml('<script>'), '&lt;script&gt;');

// Todos los lugares que coinciden deben poder elegirse en el grupo, también
// después de cambiar de región, categoría o idioma.
let capas = [];
const marcador = () => ({ setIcon() {}, setZIndexOffset() {},
  bindPopup(texto) { this.popup = texto; }, on() {} });
Object.assign(contexto, {
  capaPins: { clearLayers() { capas = []; }, addLayer(m) { capas.push(m); } },
  capaSenderos: { clearLayers() {} }, capaZonas: { clearLayers() {} },
  marcadores: Object.fromEntries(LUGARES.map(l => [l.id, marcador()])),
  L: { marker: marcador, divIcon: x => x }, pin() {}, pintarLista() {},
  elPrecios: { querySelectorAll: () => [] }, elReg: { querySelectorAll: () => [] }, elTipos: { querySelectorAll: () => [] },
  elHilos: { querySelector: () => ({ style: {} }) },
  ORDEN: datos.window.ORDEN_REGIONES,
  poligonos: Object.fromEntries(datos.window.ORDEN_REGIONES.map(r => [r, { addTo() {} }])),
  rotulo: () => ({ addTo() {} })
});
vm.runInContext(extraer('function pasa(', 'const porId ='), contexto);
vm.runInContext(extraer('function pintar() {', '/* ── Búsqueda'), contexto);
for (const idioma of ['es', 'en', 'pt']) {
  estado.idioma = idioma;
  for (const zona of ['todas', ...datos.window.ORDEN_REGIONES]) {
    for (const tipo of ['todos', 'artesania', 'oferta', 'hostal']) {
      Object.assign(estado, { zona, tipo, busqueda: '', elegido: null });
      contexto.pintar();
      for (const l of LUGARES.filter(contexto.pasa)) {
        assert(capas.includes(contexto.marcadores[l.id]) || capas.some(m => m.popup?.includes(`data-propuesta="${l.id}"`)), `${zona}/${tipo}: ${l.id} no es accesible`);
      }
    }
  }
}
console.log('OK: 24 propuestas, cuatro regiones, 72 fichas y 60 combinaciones de filtros; fuentes, contactos, agrupación y distancias.');

// Nuevas actividades, fotografías y filtros de costo.
contexto.TRAZADOS = datos.window.TRAZADOS;
vm.runInContext(extraer('function distanciaKm(', 'const cifra ='), contexto);
vm.runInContext(extraer('function datosSendero(', 'async function compartir('), contexto);
for (const idioma of ['es', 'en', 'pt']) {
  estado.idioma = idioma;
  for (const l of LUGARES) {
    contexto.pintarFicha(l);
    assert(!lista.innerHTML.includes('undefined'), `${idioma}: ${l.id}`);
    if (l.foto) {
      assert(lista.innerHTML.includes(l.foto.autor));
      assert(lista.innerHTML.includes(l.foto.licencia_url));
      assert(lista.innerHTML.includes(contexto.escaparHtml(l.foto.fuente)));
    }
    if (['sendero', 'bici'].includes(l.categoria)) {
      assert.equal(lista.innerHTML.includes('id="gpx"'), Boolean(contexto.TRAZADOS[l.id]));
      if (!contexto.TRAZADOS[l.id]) assert(!lista.innerHTML.includes(TEXTOS[idioma].avisoSendero));
    }
  }
}
assert.equal(LUGARES.filter(l => l.region === 'valles' && /^va-[ab]-/.test(l.id)).length, 19);
assert.equal(LUGARES.filter(l => l.categoria === 'bici').length, 6);
assert.equal(LUGARES.filter(l => l.foto).length, 8);
for (const l of LUGARES) {
  if (l.precio?.estado === 'gratis') assert(l.precio.fuentes.length);
  if (l.foto) {
    assert(l.foto.autor && l.foto.fuente && l.foto.licencia_url);
    assert(l.foto.licencia.startsWith('CC BY-SA'));
    assert.equal(new URL(l.foto.url).hostname, 'upload.wikimedia.org');
  }
}
Object.assign(estado, { zona: 'todas', tipo: 'todos', precio: 'gratis', busqueda: '' });
const gratis = LUGARES.filter(contexto.pasa);
assert(gratis.length >= 15);
assert(gratis.every(l => l.precio.estado === 'gratis'));
assert(!gratis.some(l => l.id.startsWith('yu-'))); // tarifa de Calilegua por confirmar
Object.assign(estado, { zona: 'valles', tipo: 'bici', precio: 'todos' });
assert.equal(LUGARES.filter(contexto.pasa).length, 4);
console.log(`OK: ${LUGARES.length} fichas en tres idiomas; 19 nuevas en Valles, 6 rutas de bici, ${gratis.length} gratuitas y 8 fichas con foto acreditada.`);

// Segundo rastreo (rastreo-octubre.js): mismas reglas que el primero.
const octubre = LUGARES.filter(l => /^(pu|qu|va|yu)-o-/.test(l.id));
assert.equal(octubre.length, 26);
for (const l of octubre) {
  assert(CATEGORIAS[l.categoria], l.id);
  assert(l.id.startsWith({ puna: 'pu', quebrada: 'qu', valles: 'va', yungas: 'yu' }[l.region]), l.id);
  assert(l.lat >= -24.75 && l.lat <= -21.7 && l.lng >= -67.35 && l.lng <= -63.85, l.id);
  assert.equal(l.relevamiento.ubicacion, 'referencia');
  for (const f of l.relevamiento.fuentes) assert.equal(new URL(f.url).protocol, 'https:');
  for (const idioma of ['es', 'en', 'pt']) assert(l.descripcion[idioma], l.id);
  if (l.contacto.whatsapp) assert(/^\+?\d{10,15}$/.test(l.contacto.whatsapp), l.id);
  if (l.precio.estado === 'gratis') assert(l.precio.fuentes.length, l.id);
}
console.log(`OK: ${octubre.length} fichas del segundo rastreo, con fuente y en tres idiomas.`);
