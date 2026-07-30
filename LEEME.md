# Ruta Cultural de Jujuy — prototipo

Mapa interactivo de la provincia en **cuatro regiones** — Puna, Quebrada, Valles, Yungas —
con emprendimientos culturales en cuatro categorías: hospedajes, cocinas, ofertas y talleres,
y puntos turísticos o paradores.

## Cómo abrirlo

Doble clic en `index.html`. No necesita servidor ni instalación.
(Requiere internet para el mapa base y las tipografías.)

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El mapa. No hace falta tocarlo para cargar lugares. |
| `datos.js` | **Todos los datos.** Regiones, colores y lista de lugares. |
| `LEEME.md` | Este archivo. |

## El diseño, en criollo

La idea que ordena todo es el **awayo**: la tela se teje en bandas horizontales, campos lisos
(*pampa*) alternados con franjas de motivo. Las cuatro regiones son las cuatro bandas de la
franja de abajo, y están ordenadas por altura, que es el dato que realmente las separa:
Puna 4.500 m, Quebrada 2.000 m, Valles 1.200 m, Yungas 400 m. La franja no es decoración:
es a la vez tejido y corte transversal de la provincia.

- **Fondo**: lana sin teñir, marrón oscuro (`#1B1510`).
- **Colores de región**: tintes andinos reales, no la wiphala — ocre q'olle, rojo cochinilla,
  verde nogal, verde índigo. Cada uno figura en `datos.js` como `hilo`.
- **Marcadores**: rombos, el motivo central del tejido andino. Lleno = punto turístico;
  con ojo = hospedaje; con barra de hilo crudo = cocina; hueco = oferta o taller.
- **Tipografías**: Alegreya y Alegreya Sans, de Juan Pablo del Peral (Huerta Tipográfica,
  Buenos Aires).

## Cómo se usa

- **Bandas de abajo**: un clic sobre una banda la aísla y el mapa vuela a esa región.
  Otro clic la vuelve a soltar. El orillo de arriba se re-enhebra con los colores activos.
- **Filtros de categoría** (arriba): muestran u ocultan cada tipo de emprendimiento.
- **Panel izquierdo**: índice por región. Un clic en un lugar abre su ficha; `Esc` la cierra.
- **Mostrar las rutas**: dibuja la ruta sugerida de cada región con las paradas numeradas.
- **Buscar**: filtra por nombre, localidad o descripción.
- **Toda la provincia**: vuelve al estado inicial.

## Cómo cargar un lugar

Abrí `datos.js` con cualquier editor de texto, copiá un bloque de `window.LUGARES` y editalo:

```js
{ id: 'qu-16', nombre: 'Hostal La Copla', categoria: 'hostal', region: 'quebrada',
  localidad: 'Tilcara', lat: -23.5801, lng: -65.3944,
  descripcion: 'Ocho habitaciones en casa de adobe, a dos cuadras de la plaza.' },
```

- `categoria`: `hostal` · `restaurante` · `oferta` · `punto`
- `region`: `puna` · `quebrada` · `valles` · `yungas`
- `muestra: true` marca un dato provisorio; la ficha lo aclara al pie.
  Cuando el dato está confirmado, se borra el campo.
- `ruta_orden`: número opcional. Si lo ponés, el lugar entra en la ruta de su región.
- Las coordenadas salen de Google Maps: clic derecho sobre el punto y copiar las dos cifras.
  En Jujuy la latitud va de −22 a −24 y la longitud de −64 a −67, las dos negativas.

Cada región también tiene, en `window.REGIONES`, sus `pueblos` y su `hilo`, que se muestran
bajo el nombre en el panel.

## Qué falta antes de publicar

1. **Los datos de los emprendimientos son de muestra.** Los puntos turísticos son reales;
   hospedajes, cocinas y ofertas están inventados para mostrar la estructura. Hay que
   reemplazarlos por emprendimientos reales, cargados junto con las comunidades.
2. **Faltan las fotos.** Cada ficha muestra un recuadro tejido que dice «Foto por sumar».
   Falta decidir dónde se alojan las imágenes y agregar un campo `foto` a cada lugar.
3. **Faltan los datos de contacto**: teléfono, WhatsApp, Instagram, web. Se agregan como
   campos nuevos y se muestran en la ficha, junto a «Cómo llegar».
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
7. Sin versión en inglés todavía.

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
