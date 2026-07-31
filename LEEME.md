# Ruta Cultural de Jujuy — prototipo

**Un proyecto de Fundación Puna.**

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

- **Un solo botón pintado por fila, siempre.** El pintado es el que se está viendo, en
  el coral de Puna. No es un sistema de tildes: se elige uno, como en un formulario
  de papel.
- **Las cinco regiones en una línea**, sin alturas encima (la altura de la región
  aparece arriba de la lista cuando se elige una). La fila de abajo, la de qué se
  busca, va más chica.
- **Un dibujo por tipo de lugar** (cama, cubiertos, cerro, brújula), el mismo en el
  botón, en la lista y en el mapa. No hay leyenda que aprender.
- **La chakana**, la cruz escalonada andina, va en el botón de «Todas las regiones»
  —sus cuatro brazos son las cuatro partes del mundo andino, igual que las cuatro
  regiones— y en el recuadro de la foto que falta.
- **Un color de marca por región**, en el punto del botón y en el pin del mapa:
  Puna coral, Quebrada naranja, Valles verde, Yungas azul.
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
