# Ruta Cultural de Jujuy — prototipo

**Un proyecto de Fundación Puna.**

Mapa interactivo de la provincia en **cuatro regiones** — Puna, Quebrada, Valles, Yungas —
con emprendimientos culturales en cuatro categorías: hospedajes, cocinas, ofertas y talleres,
y puntos turísticos o paradores. Además, **senderos** para caminar, con su recorrido dibujado.

## Cómo abrirlo

Doble clic en `index.html`. No necesita servidor ni instalación.
(Requiere internet para el mapa base y las tipografías.)

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El mapa. No hace falta tocarlo para cargar lugares. |
| `datos.js` | **Todos los datos.** Regiones, colores y lista de lugares. |
| `senderos.js` | El dibujo de cada sendero. Se arma solo con `herramientas/trazados.py`: no se toca a mano. |
| `herramientas/senderos.json` | De dónde sale el dibujo de cada sendero: OpenStreetMap o un GPX grabado con el teléfono. |
| `herramientas/trazados.py` | Arma `senderos.js`. Sólo necesita Python 3. |
| `logo-puna.png` | Logo de la fundación, para el encabezado (284×198). |
| `favicon.png` | Icono de la pestaña. Va cuadrado y aparte: el navegador estira cualquier imagen que no lo sea. |
| `apple-touch-icon.png` | Icono para iOS, con fondo crema (Apple no respeta la transparencia). |
| `LEEME.md` | Este archivo. |

## El diseño, en criollo

Marca Puna: tipografía **Outfit** para los títulos y **Open Sans** para el cuerpo,
la paleta de Amor, y todo redondeado — botones tipo píldora, sin esquinas.
El logo de la fundación va arriba, con la línea «Un proyecto de Fundación Puna».

La regla de uso es una sola: **tiene que poder usarlo alguien de ochenta años, al sol,
en el teléfono, sin que nadie le explique nada.**

- **Tres idiomas.** Botones ES / EN / PT arriba a la derecha. El mapa arranca en el
  idioma del navegador si es uno de los tres, y recuerda el que se elige. Los nombres
  propios (Salinas Grandes, Purmamarca) no se traducen.
- **Fondo blanco**, que es lo que se lee más fácil. La crema de la marca quedó como
  acento: el resaltado de la lista y el recuadro de la foto que falta.
- **Un solo botón pintado por fila, siempre.** El pintado es el que se está viendo, en
  el coral de Puna. No es un sistema de tildes: se elige uno, como en un formulario
  de papel.
- **El mapa ocupa toda la pantalla.** Arriba queda una sola barra con el logo, los
  idiomas y un botón grande que abre el **cajón** con los filtros. En pantalla ancha
  el mapa se lleva el 92% del alto.
- **Las dos filas van en una sola línea horizontal**, nunca se parten en dos. Si no
  entran, se arrastran de costado y el borde se degrada para avisar que hay más.
- **Se puede ocultar la lista** con el botón de abajo a la izquierda, y ahí el mapa
  ocupa también todo el ancho.
- Sin alturas en los botones: la altura de la región aparece arriba de la lista
  cuando se elige una. La fila de qué se busca va más chica.
- **Un dibujo por tipo de lugar** (cama, cubiertos, cerro, brújula), el mismo en el
  botón, en la lista y en el mapa. No hay leyenda que aprender.
- **La chakana**, la cruz escalonada andina, va en el botón de «Todas las regiones»
  —sus cuatro brazos son las cuatro partes del mundo andino, igual que las cuatro
  regiones— y en el recuadro de la foto que falta.
- **Un color de marca por región**, en el punto del botón y en el pin del mapa:
  Puna coral, Quebrada naranja, **Valles azul** (por los diques y lagos) y
  **Yungas verde** (es la región más verde).
- **Todos los botones miden 44 px de alto como mínimo**, para el dedo.
- **Contrastes medidos, no estimados.** El texto de las píldoras elegidas va en tinta
  y no en blanco, porque blanco sobre coral da 3.1:1 y no llega al mínimo; en tinta da
  5.1:1. El dibujo de los pines también va en tinta por lo mismo (sobre el naranja da
  7.0:1, sobre el verde 5.5, sobre el azul 5.0). El gris malva de la marca se oscureció
  un punto porque sobre la crema quedaba en 4.44:1.


## Cómo se usa

1. **Elegí una zona** — Puna, Quebrada, Valles o Yungas, o **Toda la provincia**.
   Se elige una sola, como en un formulario de papel: siempre hay exactamente un botón
   pintado, y es el que se está viendo. El mapa se acomoda para que esa zona llene la
   pantalla y aparece su contorno punteado (punteado porque el límite es aproximado).
   Con **Toda la provincia** no se dibuja ningún contorno: el mapa va limpio.
2. **Elegí qué buscás** — dónde dormir, dónde comer, qué hacer, qué ver, o **Todo**.
   Igual que las zonas: uno solo a la vez.
3. **Tocá un lugar** en la lista o en el mapa y se abre su ficha, con el botón
   **Cómo llegar** que lo abre en Google Maps.
4. Para volver al principio: **Toda la provincia** y **Todo**. `Esc` cierra la ficha.

### Lo que tiene cada ficha

- **Contacto del emprendimiento**: WhatsApp (pintado, porque es lo primero que se busca),
  llamar, Instagram, sitio web, correo. Sólo aparecen los que el lugar tiene cargados.
  El WhatsApp abre la conversación con un mensaje ya escrito en el idioma del visitante:
  «Hola, vi *Hostel La Copla* en el mapa de la Ruta Cultural de Jujuy…». Así el
  emprendimiento sabe de dónde le llega la consulta.
  **En los datos de muestra los botones no llevan a ningún lado**: avisan que es un ejemplo,
  para no mandar a nadie a un número inventado.
- **Compartir**: en el teléfono abre el menú de compartir; en la computadora copia el enlace.
  Cada ficha tiene su propia dirección (`…/ruta-cultural-jujuy/#qu-11`), así un emprendimiento
  puede poner el enlace a su ficha en su Instagram o mandarlo por WhatsApp.
  El botón de volver del teléfono cierra la ficha en lugar de irse de la página.
- **Cerca de acá**: los cuatro lugares más cercanos, de cualquier tipo, a menos de 30 km.
  Desde un sendero se llega a dónde comer y dormir; desde un hospedaje, a los senderos.
- **Sendero y guía se nombran uno al otro.** Si un paseo con guía recorre un sendero, la ficha
  del sendero dice «Hacelo con alguien de la zona» y lleva al paseo, y la del paseo lleva al
  sendero y lo dibuja en el mapa.

### Los senderos

Se eligen con **Dónde caminar**. El camino se dibuja lleno, en el color de la región y con
borde blanco (el contorno de la región va punteado, así no se confunden). Al tocarlo, el mapa
se acerca hasta que el sendero llena la pantalla. La ficha dice:

- el **largo**, medido sobre el dibujo;
- la **dificultad**, en uno, dos o tres puntos, como en los carteles de montaña: fácil, media,
  exigente;
- el **tiempo** aproximado, siempre aclarando si es ida y vuelta;
- **Descargar el recorrido**: un archivo GPX para seguir el camino sin señal con una aplicación
  de mapas (OsmAnd, Organic Maps, Wikiloc…);
- al pie, que los tiempos son aproximados y que conviene preguntar en el pueblo antes de salir.

El mapa base es el topográfico de Esri, que muestra el relieve: se leen los cerros y las
quebradas por donde van los senderos. Si Esri deja de responder, el mapa se pasa solo a
OpenStreetMap. (Hasta septiembre de 2026 era CARTO, que empezó a pedir clave y dejó el mapa
gris con un cartel de «API KEY REQUIRED».)


## Cómo cargar un lugar

Abrí `datos.js` con cualquier editor de texto, copiá un bloque de `window.LUGARES` y editalo:

```js
{ id: 'qu-16', nombre: 'Hostal La Copla', categoria: 'hostal', region: 'quebrada',
  localidad: 'Tilcara', lat: -23.5801, lng: -65.3944,
  descripcion: {
    es: 'Ocho habitaciones en casa de adobe, a dos cuadras de la plaza.',
    en: 'Eight rooms in an adobe house, two blocks from the square.',
    pt: 'Oito quartos em casa de adobe, a duas quadras da praça.' } },
```

La descripción va en los tres idiomas. Si falta alguno, el mapa muestra el castellano,
así que se puede cargar primero en castellano y traducir después. El **nombre** y la
**localidad** son nombres propios: van una sola vez, sin traducir.

Los textos de los botones y carteles están todos juntos en `window.TEXTOS`, al principio
de `datos.js`, uno por idioma.

- `categoria`: `hostal` · `restaurante` · `oferta` · `punto` · `sendero`
- `region`: `puna` · `quebrada` · `valles` · `yungas`
- `muestra: true` marca un dato provisorio; la ficha lo aclara al pie.
  Cuando el dato está confirmado, se borra el campo.
- `ruta_orden`: número opcional. Si lo ponés, el lugar entra en la ruta de su región.
- Las coordenadas salen de Google Maps: clic derecho sobre el punto y copiar las dos cifras.
  En Jujuy la latitud va de −22 a −24 y la longitud de −64 a −67, las dos negativas.
- `contacto`: opcional. Se carga sólo lo que el emprendimiento tenga:

  ```js
  contacto: { whatsapp: '5493884123456', telefono: '+54 388 412 3456',
              instagram: 'lacopla.tilcara', web: 'https://…', email: 'hola@…' },
  ```

  El WhatsApp va con el 549 adelante y el código de área, sin el 0 ni el 15:
  `549` + `388` + el número. Los espacios y guiones no molestan.
- `sendero`: en un paseo con guía, el `id` del sendero que recorre (por ejemplo `'qu-s1'`).

A dónde llega el botón **Sumalo al mapa** del pie de la lista está en `window.FUNDACION`,
en `datos.js`. Hoy abre un correo a `info@punafoundation.org` con los datos que hay que pedir
ya escritos (nombre, localidad, qué ofrece, WhatsApp, Instagram).

## Cómo cargar un sendero

Un sendero es un lugar más en `datos.js`, con `categoria: 'sendero'` y tres campos propios:

```js
{ id: 'qu-s2', nombre: 'Quebrada de las Señoritas', categoria: 'sendero', region: 'quebrada',
  localidad: 'Uquía', lat: -23.30900, lng: -65.36485, dificultad: 'facil',
  duracion: { es: 'Unas 2 horas ida y vuelta', en: '…', pt: '…' },
  descripcion: { es: '…', en: '…', pt: '…' } },
```

- `lat`/`lng` es **dónde empieza** el sendero: ahí va el pin y ahí lleva «Cómo llegar».
- `dificultad`: `facil` · `media` · `exigente`.
- `duracion`: con «ida y vuelta» o «solo ida» dicho, porque es lo que más se malinterpreta.
- El largo no se carga: el mapa lo mide sobre el dibujo.

El **dibujo** del camino va aparte. En `herramientas/senderos.json` se anota de dónde sale,
con el mismo `id`:

```json
"qu-s2": { "osm": [244863267] },
"va-s1": { "gpx": "lagunas-de-yala.gpx" }
```

- **De OpenStreetMap**: en [openstreetmap.org](https://www.openstreetmap.org) se busca el
  sendero, se toca el camino y el número de la vía aparece a la izquierda («Vía 244863267»).
  Si el sendero está cortado en varias vías, se ponen todas.
- **De un GPX**: se graba caminándolo con el teléfono (Wikiloc, OsmAnd, Organic Maps o
  cualquier aplicación que exporte GPX), y el archivo se deja en `herramientas/gpx/`.

Después se corre, desde la carpeta del mapa:

```
python3 herramientas/trazados.py
```

y queda armado `senderos.js`. El programa dice el largo de cada sendero y sus dos puntas,
para copiar la del comienzo en `lat`/`lng`.

### Los senderos de ahora

Nueve, todos **reales**, con el trazado tomado de OpenStreetMap:

| Región | Sendero | Largo | Dificultad |
|---|---|---|---|
| Puna | Mirador de Yavi | 1,2 km | media |
| Quebrada | Garganta del Diablo (Tilcara) | 2,1 km | media |
| Quebrada | Quebrada de las Señoritas (Uquía) | 1,8 km | fácil |
| Quebrada | Inca Cueva (Azul Pampa) | 3,3 km | media |
| Yungas | La Lagunita (P. N. Calilegua) | 0,7 km | fácil |
| Yungas | Pedemontano (P. N. Calilegua) | 1,8 km | fácil |
| Yungas | Tapir (P. N. Calilegua) | 2,3 km | media |
| Yungas | Sendero a la Cascada (San Francisco) | 3 km | media |
| Yungas | Qhapaq Ñan — Las Escaleras (Santa Ana) | 2,6 km | exigente |

Las **dificultades y los tiempos son estimados**, sacados de cómo está marcado el camino en
OpenStreetMap: hay que confirmarlos con quien los conoce. Los **Valles no tienen senderos
todavía**: en Yala hay muchos caminos cargados en OpenStreetMap, pero sin nombre, y no se
quiso adivinar cuál es cuál. Es el mejor lugar para grabar el primer GPX.

En `window.REGIONES` cada región guarda además sus `pueblos`, su `hilo` (el tinte del que
sale el color) y su `resumen`. Hoy no se muestran en pantalla — se sacaron para simplificar —
pero quedan disponibles si más adelante se quiere una página por región.

## Qué falta antes de publicar

1. **Los datos de los emprendimientos son de muestra.** Los puntos turísticos son reales;
   hospedajes, cocinas y ofertas están inventados para mostrar la estructura. Hay que
   reemplazarlos por emprendimientos reales, cargados junto con las comunidades.
2. **Faltan las fotos.** Cada ficha muestra un recuadro que dice «Todavía sin foto».
   Falta decidir dónde se alojan las imágenes y agregar un campo `foto` a cada lugar.
   Es lo que más le falta al mapa: un visitante elige por la foto.
3. ~~Faltan los datos de contacto.~~ La ficha ya los muestra (ver `contacto` más arriba):
   falta cargar los reales, con permiso de cada emprendimiento.
4. **Los límites de las regiones son esquemáticos**, dibujados a mano. Si se quiere
   precisión, hay que reemplazar los `poligono` de `datos.js` por un GeoJSON de límites
   departamentales.
5. **Audio.** Los mapas culturales indígenas que funcionan bien (Terrastories, Mapeo) apoyan
   el relato en la voz: una copla, un topónimo dicho en su lengua, la explicación del
   anfitrión. Está previsto en el diseño de la ficha pero todavía no implementado, porque
   hacen falta las grabaciones y el permiso de quien habla.
6. **Nombres en lengua.** Si las comunidades quieren, cada lugar puede llevar su nombre en
   quechua o guaraní además del castellano, y la categoría puede renombrarse con las
   palabras que ellas usen en lugar de las cuatro genéricas de ahora.
7. ~~Sin versión en inglés todavía.~~ Hecho: castellano, inglés y portugués.
8. **Confirmar los senderos** con guías y comunidades: tiempos, dificultad, si se cobra
   entrada, en qué época conviene ir, y si alguno debería hacerse sólo con guía. Varios
   (Inca Cueva, el Qhapaq Ñan) pasan por sitios arqueológicos frágiles.
9. **Opiniones de los visitantes.** Si se quieren reseñas o que un emprendimiento cargue sus
   propios datos, hace falta un servidor: este mapa es de archivos sueltos, sin base de datos.

## Referencias que se miraron

- [Terrastories](https://terrastories.app/) — mapa más relato, taxonomía definida por la
  comunidad en su propia lengua, control sobre qué se hace público. Es el estándar del rubro.
- [Mapeo / Awana Digital](https://awana.digital/) — mapeo de territorio y patrimonio con
  comunidades indígenas, funciona sin internet.
- La [Red de Turismo Campesino «Espejo de Sal»](https://www.jujuyaldia.com.ar/2013/04/23/turismo-rural-reconocimiento-para-el-emprendimiento-espejo-de-sal/),
  formada en diciembre de 2009 por Susques, Cerro Negro, Barrancas, Rinconadillas,
  San Francisco de Alfarcito, Sausalito, Santa Ana y Pozo Colorado: 32 emprendimientos
  familiares indígenas, primer premio nacional de turismo rural comunitario. Es el
  candidato obvio para la primera carga de datos reales.
- El sitio oficial provincial, `turismocomunitariojujuy.travel`, **está caído**: el dominio
  ya no resuelve. Vale como argumento de por qué este mapa tiene sentido.
