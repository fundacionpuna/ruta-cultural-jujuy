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

La regla es una sola: **tiene que poder usarlo alguien de ochenta años, al sol, en el
teléfono, sin que nadie le explique nada.** De ahí sale todo lo demás.

- **Letra grande y fondo claro.** Texto base de 18 px, nombres de 21 px, descripciones
  de 19 px. Nada de mayúsculas chicas ni letra espaciada.
- **Dos pasos numerados**: primero la zona, después qué se busca. Los botones dicen lo
  que uno se pregunta — «Dónde dormir», «Dónde comer», «Qué hacer», «Qué ver» — y no
  categorías de sistema.
- **Prendido o apagado se ve de lejos**: el botón elegido va pintado, el no elegido va
  en blanco con borde gris. No hay estados intermedios que haya que interpretar.
- **Un dibujo por tipo de lugar** (cama, cubiertos, cerro, brújula), el mismo en el
  botón, en la lista y en el mapa. No hay leyenda que aprender.
- **Todos los botones miden 48 px de alto como mínimo**, para el dedo.
- **Colores**: los cuatro tintes andinos del prototipo anterior, oscurecidos para que el
  texto blanco encima llegue a 4.5:1 de contraste (Puna 4.9, Quebrada 6.0, Valles 5.4,
  Yungas 6.1 — medidos, no estimados).
- Del diseño «awayo» quedó sólo la franja tejida de arriba, como firma.


## Cómo se usa

1. **Elegí una zona** — Puna, Quebrada, Valles o Yungas. El mapa vuela a esa zona.
   Se pueden elegir varias, o volver a tocar para sacarla.
2. **Elegí qué buscás** — dónde dormir, dónde comer, qué hacer, qué ver.
3. **Tocá un lugar** en la lista o en el mapa y se abre su ficha, con el botón
   **Cómo llegar** que lo abre en Google Maps.
4. **Ver todo de nuevo** vuelve al principio. `Esc` cierra la ficha.


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
