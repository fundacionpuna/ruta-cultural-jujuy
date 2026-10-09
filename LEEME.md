# Vamo pue · ruta cultural jujeña — prototipo

**Un proyecto de Fundación Puna.** (Hasta octubre de 2026 se llamaba «Ruta Cultural de Jujuy».)

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
| `datos.js` | Regiones, traducciones, categorías, lugares y ejemplos originales. |
| `relevados.js` | Selección de propuestas reales, fuentes, contactos y fecha de consulta. Retira los ejemplos inventados de la vista pública. |
| `senderos.js` | El dibujo de cada sendero. Se arma solo con `herramientas/trazados.py`: no se toca a mano. |
| `herramientas/senderos.json` | De dónde sale el dibujo de cada sendero: OpenStreetMap o un GPX grabado con el teléfono. |
| `herramientas/trazados.py` | Arma `senderos.js`. Sólo necesita Python 3. |
| `marca/logo-vamo-pue.svg` | El logo completo, con la bajada «ruta cultural jujeña». Vectorial. |
| `marca/logo-vamo-pue-corto.svg` | El logo sin la bajada, para el encabezado (a ese tamaño la bajada no se lee). |
| `marca/region-*.jpg` | La ilustración de cada región. Va en la ficha mientras no haya foto. |
| `marca/forma-*.svg` | Las formas orgánicas de la página de recursos de la marca: adorno del cajón y del pie de la lista. |
| `logo-puna.png` | Logo de la fundación, al pie de la lista con «Un proyecto de Fundación Puna» (284×198). |
| `favicon.png` | Icono de la pestaña: el pin del logo. Va cuadrado y aparte: el navegador estira cualquier imagen que no lo sea. |
| `apple-touch-icon.png` | Icono para iOS, con fondo rosado (Apple no respeta la transparencia). |
| `LEEME.md` | Este archivo. |

## El diseño, en criollo

Identidad **«vamo pue»** (octubre de 2026): coral, rosa, celeste y amarillo, formas
orgánicas y colores planos. El logo —«vamo» con el pin en la «o», «pue» con el camino—
va arriba; el de la fundación, al pie de la lista. Los archivos salen de la presentación
de la marca (Canva) y están en `marca/`.

Tipografía: **Open Sans** para el cuerpo, igual que en la presentación. El logo usa
RTL Nova, que no está disponible para la web, así que los títulos siguen en **Outfit**,
la geométrica libre más parecida. Todo redondeado: botones tipo píldora, sin esquinas.

La regla de uso es una sola: **tiene que poder usarlo alguien de ochenta años, al sol,
en el teléfono, sin que nadie le explique nada.**

- **Tres idiomas.** Botones ES / EN / PT arriba a la derecha. El mapa arranca en el
  idioma del navegador si es uno de los tres, y recuerda el que se elige. Los nombres
  propios (Salinas Grandes, Purmamarca) no se traducen.
- **Fondo blanco**, que es lo que se lee más fácil. Un rosado muy claro queda como
  acento: el resaltado de la lista, las notas y el pie.
- **Un solo botón pintado en la fila de qué se busca, siempre.** El pintado es el que se
  está viendo, en el coral de la marca. No es un sistema de tildes: se elige uno, como en
  un formulario de papel. **Gratis** va aparte: se prende y se apaga.
- **El mapa ocupa toda la pantalla.** Arriba queda una sola barra con el logo, los
  idiomas y un botón grande que abre el **cajón** con los filtros. En pantalla ancha
  el mapa se lleva el 92% del alto.
- **La fila de qué se busca va en una sola línea horizontal**, nunca se parte en dos. Si
  no entra, se arrastra de costado y el borde se degrada para avisar que hay más.
- **Se puede ocultar la lista** con el botón de abajo a la izquierda, y ahí el mapa
  ocupa también todo el ancho.
- **Un dibujo por tipo de lugar** (cama, cubiertos, cerro, brújula), el mismo en el
  botón, en la lista y en el mapa. No hay leyenda que aprender.
- **El pin del logo** (la «o» de «vamo») va en el botón de «Cerca mío» y en el icono
  de la pestaña.
- **Un color de marca por región**, como en la paleta de la presentación: **Puna
  celeste**, **Quebrada amarilla**, **Valles rosa** y **Yungas lima**. Va de relleno
  en el pin y en la lista. Para las líneas de los senderos se usa el mismo color oscurecido (`trazo` en
  `datos.js`), porque los pasteles sobre el mapa claro no se ven. Por lo mismo, cada
  pin lleva un aro fino en ese tono oscuro.
- **Cada región tiene su ilustración**, que va en la ficha mientras falta la foto.
- **Todos los botones miden 44 px de alto como mínimo**, para el dedo.
- **Contrastes medidos, no estimados.** El texto de las píldoras elegidas va en tinta
  y no en blanco, porque blanco sobre coral da 3.1:1 y no llega al mínimo; en tinta da
  5.4:1. El dibujo de los pines también va en tinta (sobre el celeste da 12.9:1, sobre
  el rosa 10.5, sobre el amarillo 10.0, sobre el lima 9.7). Los colores oscurecidos de
  cada región dan entre 4.8 y 5.4:1 sobre blanco, y el gris de los textos secundarios 5.2:1.
- **Los colores salen de los códigos de la paleta**, no de los cuadros pintados de la
  presentación, que no coinciden: Puna `#cae7f2`, Quebrada `#ffbe00`, Valles `#ffbbcc`,
  Yungas `#bcd047` y el coral `#ff5b4d` sólo para la marca (botones, lo elegido).
  El recuadro del calendario usa el amarillo aclarado, `#ffefbf`: el `#ffbe00` lleno
  pesaba demasiado para un fondo.


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
borde blanco. Al tocarlo, el mapa
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
- `muestra: true` marca un ejemplo inventado; `relevados.js` lo oculta de la vista pública.
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
  Si el sendero es sólo un pedazo de una red de caminos más grande, se agregan `desde` y
  `hasta` ([latitud, longitud]) y queda sólo el camino más corto entre esos dos puntos:
  `"yu-s6": { "osm": [215810075, …], "desde": [-23.565, -65.159], "hasta": [-23.554, -65.010] }`.
  `"invertir": true` da vuelta el sentido, para que el recorrido empiece donde empieza el sendero.
- **De un GPX**: se graba caminándolo con el teléfono (Wikiloc, OsmAnd, Organic Maps o
  cualquier aplicación que exporte GPX), y el archivo se deja en `herramientas/gpx/`.

Después se corre, desde la carpeta del mapa:

```
python3 herramientas/trazados.py
```

y queda armado `senderos.js`. El programa dice el largo de cada sendero y sus dos puntas,
para copiar la del comienzo en `lat`/`lng`.

### Los senderos de ahora

Veintiuno, todos **reales**, con el trazado tomado de OpenStreetMap. Se eligieron a mano:
OpenStreetMap tiene muchísimos caminos más en la provincia, pero la idea es que el mapa sea
una guía, no un catálogo. Quedaron los que llevan a algo que vale la pena y los que cuentan
algo del lugar.

| Región | Sendero | Largo | Dificultad |
|---|---|---|---|
| Puna | Mirador de Yavi | 1,2 km | media |
| Puna | Petroglifos de Laguna Colorada | 0,8 km | fácil |
| Quebrada | Garganta del Diablo (Tilcara) | 2,1 km | media |
| Quebrada | Cuevas de Wayra (Tilcara) | 1,7 km | media |
| Quebrada | Castillos de Huichaira | 1,4 km | media |
| Quebrada | Miradores del Cerro de los Siete Colores (Purmamarca) | 2,3 km | fácil |
| Quebrada | Sendero Los Colorados (Purmamarca) | 0,9 km | fácil |
| Quebrada | Quebrada de las Señoritas (Uquía) | 1,8 km | fácil |
| Quebrada | Peña Blanca (Humahuaca) | 3,1 km | media |
| Quebrada | Miradores del Hornocal | 2,3 km | media |
| Quebrada | Inca Cueva (Azul Pampa) | 3,3 km | media |
| Valles | Lagunas de Yala | 2,4 km | fácil |
| Valles | Cascada de la Horqueta (Yala) | 1,9 km | media |
| Valles | Circuito de la Mina 9 de Octubre (Zapla) | 4,7 km | media |
| Yungas | La Lagunita (P. N. Calilegua) | 0,7 km | fácil |
| Yungas | Pedemontano (P. N. Calilegua) | 1,8 km | fácil |
| Yungas | Tapir (P. N. Calilegua) | 2,3 km | media |
| Yungas | Sendero a la Cascada (San Francisco) | 3 km | media |
| Yungas | Anfiteatro y Termas del Jordán (San Francisco) | 7,3 km | media |
| Yungas | Qhapaq Ñan — Las Escaleras (Santa Ana) | 2,6 km | exigente |
| Yungas | Travesía Molulo – Pampichuela | 30,9 km | exigente |

Las **dificultades y los tiempos son estimados**, sacados de cómo está marcado el camino en
OpenStreetMap: hay que confirmarlos con quien los conoce.

Quedaron afuera, a propósito: senderitos de menos de un kilómetro pegados a otros (en
Calilegua hay cuatro más: Guaraní, Tataupá, El Alejo y La Junta), caminatas de plaza en la
capital, y rutas de montaña técnicas o muy aisladas (el Cerro Sixilera, la Laguna de Molulo).
Se pueden sumar cuando alguien que los conoce diga que valen la pena.

## Estadísticas

La página cuenta visitas y clics y los manda a `vamopue-stats.onrender.com`, que
muestra un panel privado con clave en `/panel` (el código está en
`fundacionpuna/vamopue-stats`). No usa cookies ni guarda IPs. Se cuentan las visitas
(con de dónde vienen), las fichas abiertas, los botones de la ficha (WhatsApp, llamar,
Instagram, web, correo, Cómo llegar, compartir, GPX), las búsquedas, los filtros, «Cerca
mío», el cambio de idioma y el calendario.

- **QR y posteos**: un enlace como `vamopue.com/?qr=purmamarca` aparece en el panel
  como `qr-purmamarca`, y `?utm_source=instagram-bio` como `instagram-bio`.
- **En la compu** no se cuenta nada. Para probar, se pone en la consola
  `localStorage.setItem('vp-estadisticas', 'http://localhost:8765/e')`.
- Si se agrega un botón nuevo a la ficha, con `data-accion="…"` ya se cuenta (y hay que
  sumar esa acción en el servidor).

## Qué falta antes de publicar

1. **Verificar las propuestas relevadas.** Se incorporaron 24 propuestas públicas,
   seis por región, con fuentes consultadas el 5/10/2026. No equivalen a 24 emprendimientos
   verificados: incluyen prestadores, redes, servicios de información y actividades.
   Los 22 ejemplos inventados se conservan en `datos.js`, pero `relevados.js` los retira
   de la lista y del mapa. Para la selección inicial se priorizaron artesanías, producción
   local, turismo comunitario y actividades culturales, sin un ranking por reseñas.
   Hay que confirmar continuidad, contactos, dirección y condiciones de visita con cada prestador.
2. **Faltan las fotos.** Cada ficha muestra un recuadro que dice «Todavía sin foto».
   Falta decidir dónde se alojan las imágenes y agregar un campo `foto` a cada lugar.
   Es lo que más le falta al mapa: un visitante elige por la foto.
3. **Contactos.** Las nuevas fichas usan datos de contacto comerciales publicados por
   los organismos o prestadores citados. Hay que confirmar que sigan vigentes.
4. **Los límites de las regiones son esquemáticos**, dibujados a mano. Desde que se sacó
   la fila de regiones (8/10/2026) la página no los usa; quedan en `datos.js`, junto con
   los lemas, por si la fila vuelve. Si vuelve y se quiere precisión, hay que reemplazar
   los `poligono` por un GeoJSON de límites departamentales.
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

Actualización del 5 de octubre de 2026: actividades y fotos
---------------------------------------------------------

`actividades.js` agrega 26 propuestas, 19 de ellas en Valles: museos, centros
culturales, bici, mirador y diques. También suma caminatas en Pozuelos y Calilegua,
y una excursión de mountain bike en Huacalera. Mejora fichas existentes sin
crear duplicados. Cada ficha dice si es Gratis, Con costo o Consultar.
Las entradas de Calilegua quedan en Consultar porque la aplicación del cobro
previsto por la resolución de 2026 depende de su implementación en el parque.

Las distancias publicadas especifican ida, total o tramo. Los nuevos recorridos
sin geometría comprobada no ofrecen GPX ni líneas inventadas sobre el mapa.
Los circuitos de bici por rutas no se presentan como senderos exclusivos.

`fotos.js` enlaza fotografías de Wikimedia Commons cuya licencia individual
fue comprobada. Cada ficha muestra autor, licencia y enlace original. Las fotos
se muestran completas, sin recorte; requieren conexión y no se incluyen en un
paquete sin conexión. Si fallan, aparece la ilustración regional. No se copian
fotos de prestadores o de Google Maps sin permiso.

`base-de-datos.json` es la exportación de todas las fichas visibles, con fuentes,
costos y créditos de fotos. Regenerar después de editar los datos:

```
node herramientas/exportar-base.cjs
node tests/relevamiento.test.cjs
```

La exportación local no implica que se haya escrito un Google Doc ni publicado
el sitio de GitHub Pages.

Segundo rastreo, 5 de octubre de 2026
-------------------------------------

`rastreo-octubre.js` suma 26 fichas más, con las mismas reglas (relevado no es verificado;
el pin es la referencia de la localidad). Fuentes: el catálogo provincial de turismo rural
comunitario, la página de emprendimientos del Ministerio de Producción, Visit Argentina,
el Ministerio de Cultura de la Nación y notas de prensa con fecha.

- **Comida casera en casas de familia:** Hornaditas, Puesto del Marqués (queso artesanal),
  Caspalá; y el Buñuelódromo de El Carmen, camino a los diques.
- **Monumentos:** Monumento a los Héroes de la Independencia (Humahuaca), iglesia y cabildo
  de Purmamarca, Salón de la Bandera de la Libertad Civil, San Francisco, Santa Catalina.
- **Altura:** Nevado de Chañi (el cerro más alto de Jujuy), volcán Tuzgle, Cuesta de Lipán
  (4.170 m), Puente del Diablo, el huancar de Abra Pampa.
- **Tren Solar de la Quebrada**, bodegas de altura, tejedoras y tejedores, Red Puna.
- **Fiestas:** Manka Fiesta (tercer fin de semana de octubre) y Carnaval.

A propósito **no** se cargaron comedores comunitarios de asistencia social: son espacios
de ayuda alimentaria para vecinos, no de visita turística.

Más fácil de usar, 5 de octubre de 2026
---------------------------------------

- **En el teléfono, la ficha sube desde abajo** sobre el mapa (antes se abría debajo del
  mapa, fuera de la pantalla, y al tocar un pin parecía que no pasaba nada). El mapa se
  corre para que el lugar quede en la franja visible.
- **Pines en forma de gota** con el dibujo del tipo de lugar, borde blanco y trazo oscuro
  de la región. La gota es «un lugar»; el **círculo oscuro con número**, «varios lugares»:
  se abre al acercarse (Leaflet.markercluster, desde unpkg). El nombre y la región van en
  el título de cada pin, así el color no es la única pista.
- **Aa · Letra grande**: agranda un cuarto la lista, la ficha, el cajón y los pines. Se recuerda.
- **Cerca mío**: con permiso de ubicación, ordena la lista por distancia, muestra
  «a X km» y avisa una vez por lugar al pasar a menos de 2 km, mientras la página está
  abierta (con el teléfono bloqueado no puede: eso pediría una aplicación instalada).
  La ubicación no sale del teléfono.
- **Calendario de fiestas** (`calendario.js`): tarjeta «Este mes en Jujuy» arriba de la
  lista y calendario completo desde el mes actual, cada fiesta con su fuente y, si tiene,
  el enlace a su ficha.

Más mapa, 8 de octubre de 2026
------------------------------

Pedido de Luis: en la computadora las filas de región y de costo le quitaban alto al
mapa, y no hacían falta.

- **Se sacaron la fila de regiones y la de costo.** La cabecera de la computadora queda
  en dos líneas: logo, búsqueda e idiomas; abajo, qué se busca. A 1366 × 768 pasa de
  225 px a unos 152 px, y más en pantallas angostas, donde el costo bajaba a su propia línea.
- **Gratis** es lo único que quedó del costo: un botón que se prende y se apaga, al final
  de la fila de qué se busca (en el teléfono, debajo, dentro del cajón). Cada ficha sigue
  diciendo si es Gratis, Con costo o Consultar.
- Con la región se fueron el contorno punteado en el mapa, la portada de la región arriba
  de la lista y el acercamiento a la región. «Quitar filtros» apaga también Gratis.
