/* ============================================================
   RUTA CULTURAL DE JUJUY — datos
   ------------------------------------------------------------
   Se carga con <script src>, así que el mapa funciona abriendo
   index.html directamente, sin servidor.

   Para agregar un lugar, copiá un bloque y editalo.

   categoria: "hostal" | "restaurante" | "oferta" | "punto"
   region:    "puna" | "quebrada" | "valles" | "yungas"
   muestra:   true  = dato de muestra, todavía sin confirmar
              (se omite el campo cuando el dato ya está confirmado)
   ruta_orden: posición en la ruta de la región (opcional)
   ============================================================ */

window.REGIONES = {
  puna: {
    nombre: 'Puna',
    color: '#ff5a4a',   // coral, el rojo de Puna
    hilo: 'Coral',
    altura: '3.400 – 4.500 m',
    cota: 4500,
    pueblos: 'Kolla · Atacama',
    resumen: 'Altiplano, salares y cielo abierto. Rebaños de llamas, telares de piso y pueblos que viven a más de cuatro mil metros.',
    poligono: [
      [-21.78, -66.35], [-22.00, -67.20], [-23.20, -67.15], [-24.05, -66.55],
      [-24.28, -65.98], [-23.88, -65.74], [-23.42, -65.68], [-22.88, -65.52],
      [-22.80, -65.22], [-22.30, -65.12], [-21.80, -65.35]
    ]
  },
  quebrada: {
    nombre: 'Quebrada',
    color: '#ff914d',   // naranja
    hilo: 'Naranja',
    altura: '2.000 – 3.000 m',
    cota: 2000,
    pueblos: 'Omaguaca · Tilcara · Kolla',
    resumen: 'La Quebrada de Humahuaca, Patrimonio de la Humanidad. Cerros de colores, carnaval, coplas y caja.',
    poligono: [
      [-22.85, -65.50], [-23.40, -65.66], [-23.90, -65.72], [-24.05, -65.52],
      [-23.60, -65.18], [-23.15, -65.10], [-22.80, -65.22]
    ]
  },
  valles: {
    nombre: 'Valles',
    color: '#7ba551',   // verde
    hilo: 'Verde',
    altura: '1.200 – 1.800 m',
    cota: 1200,
    pueblos: 'Kolla · Ocloya',
    resumen: 'Valles templados, termas y la ciudad capital. Historia colonial, tabacales y cerros de nubes bajas.',
    poligono: [
      [-24.05, -65.52], [-23.90, -65.72], [-24.28, -65.98], [-24.62, -65.55],
      [-24.62, -65.00], [-24.30, -64.90], [-24.00, -65.00], [-23.85, -65.20]
    ]
  },
  yungas: {
    nombre: 'Yungas',
    color: '#6492d8',   // azul
    hilo: 'Azul',
    altura: '400 – 1.500 m',
    cota: 400,
    pueblos: 'Ocloya · Guaraní · Kolla',
    resumen: 'Selva de montaña, ingenios azucareros y ríos anchos. La provincia más húmeda y más verde.',
    poligono: [
      [-23.85, -65.20], [-23.60, -65.18], [-23.45, -65.05], [-23.20, -64.55],
      [-23.55, -64.10], [-24.10, -64.05], [-24.55, -64.35], [-24.60, -64.95],
      [-24.30, -64.90], [-24.00, -65.00]
    ]
  }
};

/* Orden de las bandas del awayo: de mayor a menor altura. */
window.ORDEN_REGIONES = ['puna', 'quebrada', 'valles', 'yungas'];

/* `boton` es la pregunta que se hace el visitante; `nombre` es el
   sustantivo que va en la ficha. */
window.CATEGORIAS = {
  punto:       { boton: 'Qué ver',       nombre: 'Lugar para visitar', icono: 'cerro' },
  hostal:      { boton: 'Dónde dormir',  nombre: 'Hospedaje',          icono: 'cama' },
  restaurante: { boton: 'Dónde comer',   nombre: 'Comida',             icono: 'cubiertos' },
  oferta:      { boton: 'Qué hacer',     nombre: 'Paseo o taller',     icono: 'brujula' }
};

window.LUGARES = [

  /* ─────────────── PUNA ─────────────── */
  { id: 'pu-01', nombre: 'Salinas Grandes', categoria: 'punto', region: 'puna',
    localidad: 'Salinas Grandes', lat: -23.6500, lng: -66.0500, ruta_orden: 1,
    descripcion: 'Salar de doce mil hectáreas a 3.450 metros. Territorio de las 33 comunidades de Salinas Grandes y Laguna de Guayatayoc, que sostienen la extracción artesanal de sal en costras y pozos.' },

  { id: 'pu-02', nombre: 'Iglesia de Nuestra Señora de Belén', categoria: 'punto', region: 'puna',
    localidad: 'Susques', lat: -23.4000, lng: -66.3700, ruta_orden: 2,
    descripcion: 'Capilla de adobe con techo de cardón y paja, de fines del siglo XVI. Una de las más antiguas de la Puna y todavía en uso.' },

  { id: 'pu-03', nombre: 'Casabindo y el Toreo de la Vincha', categoria: 'punto', region: 'puna',
    localidad: 'Casabindo', lat: -23.0200, lng: -66.0300, ruta_orden: 3,
    descripcion: 'Cada 15 de agosto, en la fiesta de la Asunción, se corre el único toreo del país: los mozos buscan la vincha atada a la cornamenta. La iglesia se conoce como la Catedral de la Puna.' },

  { id: 'pu-04', nombre: 'Laguna de los Pozuelos', categoria: 'punto', region: 'puna',
    localidad: 'Rinconada', lat: -22.3500, lng: -66.0000, ruta_orden: 4,
    descripcion: 'Monumento natural y sitio Ramsar. Tres especies de flamencos altoandinos nidifican en la laguna somera.' },

  { id: 'pu-05', nombre: 'La Quiaca', categoria: 'punto', region: 'puna',
    localidad: 'La Quiaca', lat: -22.1000, lng: -65.6000, ruta_orden: 5,
    descripcion: 'El extremo norte de la ruta, sobre el límite con Bolivia. En octubre se arma la Manka Fiesta, la feria de la olla, donde se trueca cerámica, lana y grano.' },

  { id: 'pu-06', nombre: 'Yavi y la Casa del Marqués', categoria: 'punto', region: 'puna',
    localidad: 'Yavi', lat: -22.1300, lng: -65.4600, ruta_orden: 6,
    descripcion: 'Solar del único marquesado del actual territorio argentino. La iglesia de San Francisco tiene placas de ónix en lugar de vidrio en las ventanas: la luz entra ámbar.' },

  { id: 'pu-07', nombre: 'Cusi Cusi', categoria: 'punto', region: 'puna',
    localidad: 'Cusi Cusi', lat: -22.5300, lng: -66.4800, ruta_orden: 7,
    descripcion: 'Formaciones de arcilla roja erosionada en la cuenca del río Grande de San Juan, a más de 3.800 metros. Se lo conoce como el Valle de la Luna jujeño.' },

  { id: 'pu-08', nombre: 'Abra Pampa', categoria: 'punto', region: 'puna',
    localidad: 'Abra Pampa', lat: -22.7200, lng: -65.7000,
    descripcion: 'Cabecera de Cochinoca y centro de servicios de la Puna. Feria regional de tejidos y lana los fines de semana.' },

  { id: 'pu-09', nombre: 'Hospedaje Killa', categoria: 'hostal', region: 'puna', muestra: true,
    localidad: 'Susques', lat: -23.4110, lng: -66.3610,
    descripcion: 'Cuatro habitaciones de adobe con estufa a leña, gestionadas por familias de la comunidad. Desayuno con pan de horno de barro.' },

  { id: 'pu-10', nombre: 'Albergue del Salar', categoria: 'hostal', region: 'puna', muestra: true,
    localidad: 'Salinas Grandes', lat: -23.6280, lng: -66.0210,
    descripcion: 'Alojamiento a la orilla del salar, con paredes de bloque de sal. Se duerme con el silencio más completo de la provincia.' },

  { id: 'pu-11', nombre: 'Cocina de Altura', categoria: 'restaurante', region: 'puna', muestra: true,
    localidad: 'Abra Pampa', lat: -22.7180, lng: -65.6960,
    descripcion: 'Carne de llama, quinoa, papas andinas y guiso de maíz. Menú fijo del día, a la mesa larga.' },

  { id: 'pu-12', nombre: 'Travesía al salar con guías de la comunidad', categoria: 'oferta', region: 'puna', muestra: true,
    localidad: 'Salinas Grandes', lat: -23.6650, lng: -66.0750,
    descripcion: 'Recorrido por los pozos de sal acompañado por salineros de las comunidades, que explican la extracción en costra y el reparto del agua.' },

  { id: 'pu-13', nombre: 'Taller de telar de piso', categoria: 'oferta', region: 'puna', muestra: true,
    localidad: 'Cochinoca', lat: -22.7500, lng: -65.9000,
    descripcion: 'Hilado con huso, teñido con cochinilla y tola, y las primeras pasadas en telar de piso, con teleras de la zona.' },

  { id: 'pu-14', nombre: 'Parador Cuesta de Lipán', categoria: 'punto', region: 'puna', muestra: true,
    localidad: 'Abra de Potrerillos', lat: -23.6100, lng: -65.7200,
    descripcion: 'Alto del camino a 4.170 metros, entre Purmamarca y Salinas Grandes. Mate cocido, artesanías y el mirador sobre la cuesta.' },


  /* ─────────────── QUEBRADA ─────────────── */
  { id: 'qu-01', nombre: 'Cerro de los Siete Colores', categoria: 'punto', region: 'quebrada',
    localidad: 'Purmamarca', lat: -23.7450, lng: -65.5000, ruta_orden: 2,
    descripcion: 'Los estratos del cerro cambian de color con la hora. Al pie, el pueblo de adobe, la feria de artesanos en la plaza y el algarrobo histórico junto al cabildo.' },

  { id: 'qu-02', nombre: 'Pucará de Tilcara', categoria: 'punto', region: 'quebrada',
    localidad: 'Tilcara', lat: -23.5850, lng: -65.3950, ruta_orden: 5,
    descripcion: 'Fortaleza omaguaca sobre un cerro, con dominio visual de toda la quebrada. Al lado, el jardín botánico de altura con cardones y cactáceas.' },

  { id: 'qu-03', nombre: 'Paleta del Pintor', categoria: 'punto', region: 'quebrada',
    localidad: 'Maimará', lat: -23.6200, lng: -65.4100, ruta_orden: 4,
    descripcion: 'Ladera de estratos multicolores sobre el pueblo. El cementerio trepa la colina del Santa Bárbara y se ve desde la ruta.' },

  { id: 'qu-04', nombre: 'Humahuaca', categoria: 'punto', region: 'quebrada',
    localidad: 'Humahuaca', lat: -23.2050, lng: -65.3500, ruta_orden: 8,
    descripcion: 'Cabecera histórica de la quebrada, de calles empedradas y angostas. Al mediodía sale el San Francisco Solano mecánico del cabildo a dar la bendición.' },

  { id: 'qu-05', nombre: 'Serranía del Hornocal', categoria: 'punto', region: 'quebrada',
    localidad: 'Hornocal', lat: -23.2000, lng: -65.2000, ruta_orden: 9,
    descripcion: 'Formación calcárea de catorce colores a 4.350 metros, veinticinco kilómetros al este de Humahuaca. Se ve mejor con el sol de la tarde.' },

  { id: 'qu-06', nombre: 'Iglesia de Uquía', categoria: 'punto', region: 'quebrada',
    localidad: 'Uquía', lat: -23.2900, lng: -65.3500, ruta_orden: 7,
    descripcion: 'El retablo guarda los ángeles arcabuceros de la escuela cuzqueña, siglo XVII: arcángeles vestidos de soldado, con arcabuz al hombro.' },

  { id: 'qu-07', nombre: 'Trópico de Capricornio', categoria: 'punto', region: 'quebrada',
    localidad: 'Huacalera', lat: -23.4400, lng: -65.3500, ruta_orden: 6,
    descripcion: 'Un monolito marca el paso del trópico. En la iglesia del pueblo reposaron los restos del general Lavalle.' },

  { id: 'qu-08', nombre: 'Posta de Hornillos', categoria: 'punto', region: 'quebrada',
    localidad: 'Hornillos', lat: -23.6750, lng: -65.4400, ruta_orden: 3,
    descripcion: 'Posta del camino real al Alto Perú, hoy museo. Belgrano tuvo aquí su sede de campaña durante el Éxodo.' },

  { id: 'qu-09', nombre: 'Iglesia de Tumbaya', categoria: 'punto', region: 'quebrada',
    localidad: 'Tumbaya', lat: -23.8700, lng: -65.4700, ruta_orden: 1,
    descripcion: 'Puerta sur de la quebrada. Templo del siglo XVIII dedicado a Nuestra Señora de Candelaria, monumento histórico nacional.' },

  { id: 'qu-10', nombre: 'Casa de Adobe Purmamarca', categoria: 'hostal', region: 'quebrada', muestra: true,
    localidad: 'Purmamarca', lat: -23.7420, lng: -65.4980,
    descripcion: 'Seis habitaciones alrededor de un patio con horno de barro, a dos cuadras de la plaza. Techos de caña y torta de barro.' },

  { id: 'qu-11', nombre: 'Hostel La Copla', categoria: 'hostal', region: 'quebrada', muestra: true,
    localidad: 'Tilcara', lat: -23.5760, lng: -65.3930,
    descripcion: 'Habitaciones compartidas y privadas, cocina de uso común y terraza mirando al Pucará. Ronda de coplas los sábados.' },

  { id: 'qu-12', nombre: 'Los Cardones', categoria: 'restaurante', region: 'quebrada', muestra: true,
    localidad: 'Tilcara', lat: -23.5820, lng: -65.3960,
    descripcion: 'Llama a la cacerola, humita en chala, tamales y vinos de altura de la quebrada. Mesas en el patio cuando el viento lo permite.' },

  { id: 'qu-13', nombre: 'Peña de la Caja', categoria: 'restaurante', region: 'quebrada', muestra: true,
    localidad: 'Humahuaca', lat: -23.2040, lng: -65.3480,
    descripcion: 'Comida regional y peña desde las diez de la noche: caja, copla y erke, con los músicos del pueblo.' },

  { id: 'qu-14', nombre: 'Caminata a la Garganta del Diablo', categoria: 'oferta', region: 'quebrada', muestra: true,
    localidad: 'Tilcara', lat: -23.5990, lng: -65.3650,
    descripcion: 'Tres horas de subida por el cauce del río Huasamayo hasta el cañón y la cascada, con guía de Tilcara.' },

  { id: 'qu-15', nombre: 'Ruta del Carnaval', categoria: 'oferta', region: 'quebrada', muestra: true,
    localidad: 'Varias localidades', lat: -23.4700, lng: -65.4200,
    descripcion: 'Circuito por las comparsas de la quebrada en febrero, del desentierro al entierro del diablo. Se arma con cada comparsa, no se vende suelto.' },


  /* ─────────────── VALLES ─────────────── */
  { id: 'va-01', nombre: 'Catedral y Cabildo de Jujuy', categoria: 'punto', region: 'valles',
    localidad: 'San Salvador de Jujuy', lat: -24.1850, lng: -65.3000, ruta_orden: 1,
    descripcion: 'El púlpito barroco tallado y dorado del siglo XVIII es el más notable del norte. A media cuadra, la Casa de Gobierno conserva la bandera que donó Belgrano.' },

  { id: 'va-02', nombre: 'Termas de Reyes', categoria: 'punto', region: 'valles',
    localidad: 'Termas de Reyes', lat: -24.1900, lng: -65.4500, ruta_orden: 2,
    descripcion: 'Aguas termales en la quebrada del río Reyes, diecinueve kilómetros al oeste de la capital, encajonadas entre cerros de nubes bajas.' },

  { id: 'va-03', nombre: 'Lagunas de Yala', categoria: 'punto', region: 'valles',
    localidad: 'Yala', lat: -24.1100, lng: -65.4000, ruta_orden: 3,
    descripcion: 'Cadena de lagunas de altura en la transición entre yungas y valles. Parque provincial y sitio Ramsar, con senderos entre alisos.' },

  { id: 'va-04', nombre: 'Altos Hornos Zapla', categoria: 'punto', region: 'valles',
    localidad: 'Palpalá', lat: -24.2500, lng: -65.2100, ruta_orden: 4,
    descripcion: 'El primer alto horno integrado del país, encendido en 1945. Patrimonio industrial y memoria obrera, con museo del hierro.' },

  { id: 'va-05', nombre: 'Dique La Ciénaga', categoria: 'punto', region: 'valles',
    localidad: 'El Carmen', lat: -24.4000, lng: -65.2700, ruta_orden: 5,
    descripcion: 'Embalse entre El Carmen y Los Alisos, con pesca y deportes náuticos. Los fines de semana se llena de familias de la capital.' },

  { id: 'va-06', nombre: 'Perico y los tabacales', categoria: 'punto', region: 'valles',
    localidad: 'Perico', lat: -24.3800, lng: -65.1100, ruta_orden: 6,
    descripcion: 'Corazón de la cuenca tabacalera, con los secaderos alineados sobre la ruta. Aquí está el aeropuerto de la provincia.' },

  { id: 'va-07', nombre: 'Tilquiza', categoria: 'punto', region: 'valles',
    localidad: 'Tilquiza', lat: -24.0500, lng: -65.3500,
    descripcion: 'Pueblo de montaña sobre el río Grande, en el camino que sube de los valles a la selva.' },

  { id: 'va-08', nombre: 'Hostería del Alisal', categoria: 'hostal', region: 'valles', muestra: true,
    localidad: 'Yala', lat: -24.1150, lng: -65.3880,
    descripcion: 'Casa de campo con ocho habitaciones y galería sobre el valle. Se llega en veinte minutos desde la capital.' },

  { id: 'va-09', nombre: 'Casona del Centro', categoria: 'hostal', region: 'valles', muestra: true,
    localidad: 'San Salvador de Jujuy', lat: -24.1880, lng: -65.3040,
    descripcion: 'Casa colonial reciclada a dos cuadras de la plaza Belgrano, con patio de naranjos y once habitaciones.' },

  { id: 'va-10', nombre: 'Mercado del Sur', categoria: 'restaurante', region: 'valles', muestra: true,
    localidad: 'San Salvador de Jujuy', lat: -24.1910, lng: -65.2980,
    descripcion: 'Puestos de comida regional y productores de los valles bajo un mismo techo. Empanadas de carne cortada a cuchillo y api caliente.' },

  { id: 'va-11', nombre: 'Bodega de vinos de altura', categoria: 'oferta', region: 'valles', muestra: true,
    localidad: 'San Antonio', lat: -24.4200, lng: -65.3500,
    descripcion: 'Visita a la sala de vasijas y degustación de malbec y criolla de viñedos por encima de los dos mil metros.' },

  { id: 'va-12', nombre: 'Circuito de museos a pie', categoria: 'oferta', region: 'valles', muestra: true,
    localidad: 'San Salvador de Jujuy', lat: -24.1840, lng: -65.3020,
    descripcion: 'Dos horas y media por el casco histórico: catedral, cabildo, casa de gobierno y el museo arqueológico, con guía local.' },


  /* ─────────────── YUNGAS ─────────────── */
  { id: 'yu-01', nombre: 'Parque Nacional Calilegua', categoria: 'punto', region: 'yungas',
    localidad: 'Calilegua', lat: -23.7500, lng: -64.8500, ruta_orden: 2,
    descripcion: 'La mayor área protegida de selva de montaña del país: setenta y seis mil hectáreas y más de quinientas especies de aves en tres pisos de vegetación.' },

  { id: 'yu-02', nombre: 'Valle Grande', categoria: 'punto', region: 'yungas',
    localidad: 'San Francisco', lat: -23.6200, lng: -64.9800, ruta_orden: 3,
    descripcion: 'Pueblos entre nubes sobre el río Grande, con huertas en terrazas y caminos de cornisa. Se llega por ruta de tierra desde Humahuaca o desde el llano.' },

  { id: 'yu-03', nombre: 'Alto Calilegua', categoria: 'punto', region: 'yungas',
    localidad: 'Alto Calilegua', lat: -23.5500, lng: -65.0500, ruta_orden: 4,
    descripcion: 'Asentamientos prehispánicos y tramos del Qhapaq Ñan por encima de los tres mil metros, donde la selva se corta y empieza el pastizal.' },

  { id: 'yu-04', nombre: 'Ingenio Ledesma', categoria: 'punto', region: 'yungas',
    localidad: 'Libertador Gral. San Martín', lat: -23.8100, lng: -64.7900, ruta_orden: 1,
    descripcion: 'Ciudad azucarera y puerta del Parque Calilegua. Patrimonio industrial y memoria del Apagón de julio de 1976.' },

  { id: 'yu-05', nombre: 'Termas de Caimancito', categoria: 'punto', region: 'yungas',
    localidad: 'Caimancito', lat: -23.7500, lng: -64.6000, ruta_orden: 5,
    descripcion: 'Aguas calientes en el pedemonte, cerca del río San Francisco, entre la selva y los pozos petroleros.' },

  { id: 'yu-06', nombre: 'Reserva Las Lancitas', categoria: 'punto', region: 'yungas',
    localidad: 'Santa Bárbara', lat: -24.0500, lng: -64.4500, ruta_orden: 7,
    descripcion: 'Serranía de transición entre las yungas y el chaco, con selva pedemontana y quebrachales. Reserva provincial poco visitada.' },

  { id: 'yu-07', nombre: 'San Pedro de Jujuy', categoria: 'punto', region: 'yungas',
    localidad: 'San Pedro de Jujuy', lat: -24.2300, lng: -64.8700, ruta_orden: 8,
    descripcion: 'Segunda ciudad de la provincia, con arquitectura del ciclo azucarero y uno de los carnavales más grandes del norte.' },

  { id: 'yu-08', nombre: 'Yuto', categoria: 'punto', region: 'yungas',
    localidad: 'Yuto', lat: -23.6300, lng: -64.4700, ruta_orden: 6,
    descripcion: 'Acceso a la Reserva de Biosfera de las Yungas y a las comunidades guaraníes del este de la provincia.' },

  { id: 'yu-09', nombre: 'Cabañas de la Selva', categoria: 'hostal', region: 'yungas', muestra: true,
    localidad: 'Calilegua', lat: -23.7720, lng: -64.7800,
    descripcion: 'Cinco cabañas de madera junto al acceso del parque nacional, con galería y mosquitero. Los tucanes despiertan antes que el sol.' },

  { id: 'yu-10', nombre: 'Casas de Familia de Valle Grande', categoria: 'hostal', region: 'yungas', muestra: true,
    localidad: 'Valle Grande', lat: -23.6150, lng: -64.9700,
    descripcion: 'Alojamiento en casas de familia de los pueblos del valle, con comida casera y el fogón de la cocina como living.' },

  { id: 'yu-11', nombre: 'Comedor Monte Adentro', categoria: 'restaurante', region: 'yungas', muestra: true,
    localidad: 'San Pedro de Jujuy', lat: -24.2280, lng: -64.8680,
    descripcion: 'Cocina criolla con productos de la selva: palta, cítricos, mandioca y locro los viernes.' },

  { id: 'yu-12', nombre: 'Avistaje de aves al amanecer', categoria: 'oferta', region: 'yungas', muestra: true,
    localidad: 'Parque Nacional Calilegua', lat: -23.7300, lng: -64.8700,
    descripcion: 'Salida de cuatro horas desde antes del amanecer por la senda de la Junta, con guía habilitado y telescopio. Grupos de seis personas.' },

  { id: 'yu-13', nombre: 'Visita a finca de caña', categoria: 'oferta', region: 'yungas', muestra: true,
    localidad: 'Libertador Gral. San Martín', lat: -23.8200, lng: -64.7700,
    descripcion: 'Recorrido por el cañaveral y el trapiche, con degustación de azúcar rubio y miel de caña.' }

];
