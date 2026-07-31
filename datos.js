/* ============================================================
   RUTA CULTURAL DE JUJUY — datos
   ------------------------------------------------------------
   Se carga con <script src>, así que el mapa funciona abriendo
   index.html directamente, sin servidor.

   TRES IDIOMAS: es (castellano), en (inglés), pt (portugués).
   Los textos que ve el visitante van en objetos {es, en, pt}.
   Los nombres propios (Salinas Grandes, Purmamarca) NO se
   traducen: son los mismos en los tres idiomas.

   Para agregar un lugar, copiá un bloque y editalo.

   categoria: "hostal" | "restaurante" | "oferta" | "punto"
   region:    "puna" | "quebrada" | "valles" | "yungas"
   muestra:   true = dato de muestra, todavía sin confirmar
   ruta_orden: posición en la ruta de la región (opcional)
   ============================================================ */

window.IDIOMAS = {
  es: { etiqueta: 'ES', nombre: 'Castellano' },
  en: { etiqueta: 'EN', nombre: 'English' },
  pt: { etiqueta: 'PT', nombre: 'Português' }
};

/* ── Textos de la interfaz ───────────────────────────────── */
window.TEXTOS = {
  es: {
    titulo: 'Ruta Cultural de Jujuy',
    proyecto: 'Un proyecto de Fundación Puna',
    aviso: 'Lugares para visitar, dormir, comer y pasear en las cuatro regiones de la provincia.',
    avisoFuerte: 'Es una muestra:',
    avisoResto: 'los hospedajes, comidas y paseos son ejemplos inventados.',
    paso1: '1 · Elegí una región',
    paso2: '2 · Elegí qué estás buscando',
    todasRegiones: 'Todas las regiones',
    todo: 'Todo',
    buscar: 'O buscá un lugar por nombre',
    buscarAria: 'Buscar un lugar por nombre',
    volver: '← Volver a la lista',
    sinFoto: 'Todavía sin foto',
    comoLlegar: 'Cómo llegar →',
    ejemplo: 'Este lugar es un ejemplo inventado.',
    unLugar: '1 lugar',
    nLugares: n => n + ' lugares',
    vacio: `No encontramos nada así. Probá con otro nombre, o tocá
                 <b>Todas las regiones</b> y <b>Todo</b>.`,
    cambiarIdioma: 'Cambiar idioma'
  },
  en: {
    titulo: 'Jujuy Cultural Route',
    proyecto: 'A project by Fundación Puna',
    aviso: "Places to visit, sleep, eat and explore across the province's four regions.",
    avisoFuerte: 'This is a sample:',
    avisoResto: 'the lodgings, food and tours are invented examples.',
    paso1: '1 · Choose a region',
    paso2: "2 · Choose what you're looking for",
    todasRegiones: 'All regions',
    todo: 'Everything',
    buscar: 'Or search for a place by name',
    buscarAria: 'Search for a place by name',
    volver: '← Back to the list',
    sinFoto: 'No photo yet',
    comoLlegar: 'How to get there →',
    ejemplo: 'This place is an invented example.',
    unLugar: '1 place',
    nLugares: n => n + ' places',
    vacio: `We didn't find anything like that. Try another name, or tap
                 <b>All regions</b> and <b>Everything</b>.`,
    cambiarIdioma: 'Change language'
  },
  pt: {
    titulo: 'Rota Cultural de Jujuy',
    proyecto: 'Um projeto da Fundación Puna',
    aviso: 'Lugares para visitar, dormir, comer e passear nas quatro regiões da província.',
    avisoFuerte: 'É uma amostra:',
    avisoResto: 'as hospedagens, comidas e passeios são exemplos inventados.',
    paso1: '1 · Escolha uma região',
    paso2: '2 · Escolha o que você procura',
    todasRegiones: 'Todas as regiões',
    todo: 'Tudo',
    buscar: 'Ou busque um lugar pelo nome',
    buscarAria: 'Buscar um lugar pelo nome',
    volver: '← Voltar para a lista',
    sinFoto: 'Ainda sem foto',
    comoLlegar: 'Como chegar →',
    ejemplo: 'Este lugar é um exemplo inventado.',
    unLugar: '1 lugar',
    nLugares: n => n + ' lugares',
    vacio: `Não encontramos nada assim. Tente outro nome, ou toque em
                 <b>Todas as regiões</b> e <b>Tudo</b>.`,
    cambiarIdioma: 'Mudar idioma'
  }
};

window.REGIONES = {
  puna: {
    nombre: 'Puna',
    color: '#ff5a4a',   // coral, el rojo de Puna
    altura: { es: '3.400 – 4.500 m', en: '3,400 – 4,500 m', pt: '3.400 – 4.500 m' },
    pueblos: 'Kolla · Atacama',
    poligono: [
      [-21.78, -66.35], [-22.00, -67.20], [-23.20, -67.15], [-24.05, -66.55],
      [-24.28, -65.98], [-23.88, -65.74], [-23.42, -65.68], [-22.88, -65.52],
      [-22.80, -65.22], [-22.30, -65.12], [-21.80, -65.35]
    ]
  },
  quebrada: {
    nombre: 'Quebrada',
    color: '#ff914d',   // naranja
    altura: { es: '2.000 – 3.000 m', en: '2,000 – 3,000 m', pt: '2.000 – 3.000 m' },
    pueblos: 'Omaguaca · Tilcara · Kolla',
    poligono: [
      [-22.85, -65.50], [-23.40, -65.66], [-23.90, -65.72], [-24.05, -65.52],
      [-23.60, -65.18], [-23.15, -65.10], [-22.80, -65.22]
    ]
  },
  valles: {
    nombre: 'Valles',
    color: '#7ba551',   // verde
    altura: { es: '1.200 – 1.800 m', en: '1,200 – 1,800 m', pt: '1.200 – 1.800 m' },
    pueblos: 'Kolla · Ocloya',
    poligono: [
      [-24.05, -65.52], [-23.90, -65.72], [-24.28, -65.98], [-24.62, -65.55],
      [-24.62, -65.00], [-24.30, -64.90], [-24.00, -65.00], [-23.85, -65.20]
    ]
  },
  yungas: {
    nombre: 'Yungas',
    color: '#6492d8',   // azul
    altura: { es: '400 – 1.500 m', en: '400 – 1,500 m', pt: '400 – 1.500 m' },
    pueblos: 'Ocloya · Guaraní · Kolla',
    poligono: [
      [-23.85, -65.20], [-23.60, -65.18], [-23.45, -65.05], [-23.20, -64.55],
      [-23.55, -64.10], [-24.10, -64.05], [-24.55, -64.35], [-24.60, -64.95],
      [-24.30, -64.90], [-24.00, -65.00]
    ]
  }
};

window.ORDEN_REGIONES = ['puna', 'quebrada', 'valles', 'yungas'];

/* `boton` es la pregunta que se hace el visitante; `nombre` es el
   sustantivo que va en la ficha. */
window.CATEGORIAS = {
  punto: {
    boton:  { es: 'Qué ver', en: 'What to see', pt: 'O que ver' },
    nombre: { es: 'Lugar para visitar', en: 'Place to visit', pt: 'Lugar para visitar' },
    icono: 'cerro'
  },
  hostal: {
    boton:  { es: 'Dónde dormir', en: 'Where to sleep', pt: 'Onde dormir' },
    nombre: { es: 'Hospedaje', en: 'Lodging', pt: 'Hospedagem' },
    icono: 'cama'
  },
  restaurante: {
    boton:  { es: 'Dónde comer', en: 'Where to eat', pt: 'Onde comer' },
    nombre: { es: 'Comida', en: 'Food', pt: 'Comida' },
    icono: 'cubiertos'
  },
  oferta: {
    boton:  { es: 'Qué hacer', en: 'What to do', pt: 'O que fazer' },
    nombre: { es: 'Paseo o taller', en: 'Tour or workshop', pt: 'Passeio ou oficina' },
    icono: 'brujula'
  }
};

window.LUGARES = [

  /* ─────────────── PUNA ─────────────── */
  { id: 'pu-01', nombre: 'Salinas Grandes', categoria: 'punto', region: 'puna',
    localidad: 'Salinas Grandes', lat: -23.6500, lng: -66.0500, ruta_orden: 1,
    descripcion: {
      es: 'Salar de doce mil hectáreas a 3.450 metros. Territorio de las 33 comunidades de Salinas Grandes y Laguna de Guayatayoc, que sostienen la extracción artesanal de sal en costras y pozos.',
      en: 'A salt flat of twelve thousand hectares at 3,450 metres. This is the territory of the 33 communities of Salinas Grandes and Laguna de Guayatayoc, who still harvest salt by hand from crusts and pools.',
      pt: 'Salina de doze mil hectares a 3.450 metros. Território das 33 comunidades de Salinas Grandes e Laguna de Guayatayoc, que mantêm a extração artesanal de sal em crostas e poços.' } },

  { id: 'pu-02', nombre: 'Iglesia de Nuestra Señora de Belén', categoria: 'punto', region: 'puna',
    localidad: 'Susques', lat: -23.4000, lng: -66.3700, ruta_orden: 2,
    descripcion: {
      es: 'Capilla de adobe con techo de cardón y paja, de fines del siglo XVI. Una de las más antiguas de la Puna y todavía en uso.',
      en: 'An adobe chapel roofed with cactus wood and straw, from the late sixteenth century. One of the oldest in the Puna, and still in use.',
      pt: 'Capela de adobe com telhado de cardo e palha, do fim do século XVI. Uma das mais antigas da Puna e ainda em uso.' } },

  { id: 'pu-03', nombre: 'Casabindo y el Toreo de la Vincha', categoria: 'punto', region: 'puna',
    localidad: 'Casabindo', lat: -23.0200, lng: -66.0300, ruta_orden: 3,
    descripcion: {
      es: 'Cada 15 de agosto, en la fiesta de la Asunción, se corre el único toreo del país: los mozos buscan la vincha atada a la cornamenta. La iglesia se conoce como la Catedral de la Puna.',
      en: "Every 15 August, for the feast of the Assumption, the country's only bull-running takes place: young men try to snatch a ribbon tied to the bull's horns. The church is known as the Cathedral of the Puna.",
      pt: 'Todo 15 de agosto, na festa da Assunção, acontece a única tourada do país: os rapazes tentam pegar a fita amarrada aos chifres. A igreja é conhecida como a Catedral da Puna.' } },

  { id: 'pu-04', nombre: 'Laguna de los Pozuelos', categoria: 'punto', region: 'puna',
    localidad: 'Rinconada', lat: -22.3500, lng: -66.0000, ruta_orden: 4,
    descripcion: {
      es: 'Monumento natural y sitio Ramsar. Tres especies de flamencos altoandinos nidifican en la laguna somera.',
      en: 'A natural monument and Ramsar site. Three species of high-Andean flamingo nest in this shallow lake.',
      pt: 'Monumento natural e sítio Ramsar. Três espécies de flamingos altoandinos nidificam na lagoa rasa.' } },

  { id: 'pu-05', nombre: 'La Quiaca', categoria: 'punto', region: 'puna',
    localidad: 'La Quiaca', lat: -22.1000, lng: -65.6000, ruta_orden: 5,
    descripcion: {
      es: 'El extremo norte de la ruta, sobre el límite con Bolivia. En octubre se arma la Manka Fiesta, la feria de la olla, donde se trueca cerámica, lana y grano.',
      en: 'The northern end of the route, right on the Bolivian border. In October it hosts the Manka Fiesta, the festival of the pot, where pottery, wool and grain are still bartered.',
      pt: 'O extremo norte da rota, na fronteira com a Bolívia. Em outubro acontece a Manka Fiesta, a feira da panela, onde se troca cerâmica, lã e grãos.' } },

  { id: 'pu-06', nombre: 'Yavi y la Casa del Marqués', categoria: 'punto', region: 'puna',
    localidad: 'Yavi', lat: -22.1300, lng: -65.4600, ruta_orden: 6,
    descripcion: {
      es: 'Solar del único marquesado del actual territorio argentino. La iglesia de San Francisco tiene placas de ónix en lugar de vidrio en las ventanas: la luz entra ámbar.',
      en: 'The seat of the only marquisate in what is now Argentina. In the church of San Francisco the windows are onyx rather than glass, so the light comes through amber.',
      pt: 'Sede do único marquesado do atual território argentino. Na igreja de São Francisco as janelas são de ônix em vez de vidro: a luz entra âmbar.' } },

  { id: 'pu-07', nombre: 'Cusi Cusi', categoria: 'punto', region: 'puna',
    localidad: 'Cusi Cusi', lat: -22.5300, lng: -66.4800, ruta_orden: 7,
    descripcion: {
      es: 'Formaciones de arcilla roja erosionada en la cuenca del río Grande de San Juan, a más de 3.800 metros. Se lo conoce como el Valle de la Luna jujeño.',
      en: 'Eroded red clay formations in the basin of the Río Grande de San Juan, above 3,800 metres. Known as the Valley of the Moon of Jujuy.',
      pt: 'Formações de argila vermelha erodida na bacia do rio Grande de San Juan, a mais de 3.800 metros. Conhecido como o Vale da Lua de Jujuy.' } },

  { id: 'pu-08', nombre: 'Abra Pampa', categoria: 'punto', region: 'puna',
    localidad: 'Abra Pampa', lat: -22.7200, lng: -65.7000,
    descripcion: {
      es: 'Cabecera de Cochinoca y centro de servicios de la Puna. Feria regional de tejidos y lana los fines de semana.',
      en: 'The seat of Cochinoca department and the service town of the Puna. A regional weaving and wool fair runs at weekends.',
      pt: 'Sede de Cochinoca e centro de serviços da Puna. Feira regional de tecidos e lã nos fins de semana.' } },

  { id: 'pu-09', nombre: 'Hospedaje Killa', categoria: 'hostal', region: 'puna', muestra: true,
    localidad: 'Susques', lat: -23.4110, lng: -66.3610,
    descripcion: {
      es: 'Cuatro habitaciones de adobe con estufa a leña, gestionadas por familias de la comunidad. Desayuno con pan de horno de barro.',
      en: 'Four adobe rooms with wood stoves, run by families from the community. Breakfast with bread from the clay oven.',
      pt: 'Quatro quartos de adobe com lareira a lenha, administrados por famílias da comunidade. Café da manhã com pão de forno de barro.' } },

  { id: 'pu-10', nombre: 'Albergue del Salar', categoria: 'hostal', region: 'puna', muestra: true,
    localidad: 'Salinas Grandes', lat: -23.6280, lng: -66.0210,
    descripcion: {
      es: 'Alojamiento a la orilla del salar, con paredes de bloque de sal. Se duerme con el silencio más completo de la provincia.',
      en: 'Lodging at the edge of the salt flat, with walls built from blocks of salt. You sleep in the deepest silence in the province.',
      pt: 'Hospedagem na beira da salina, com paredes de blocos de sal. Dorme-se no silêncio mais completo da província.' } },

  { id: 'pu-11', nombre: 'Cocina de Altura', categoria: 'restaurante', region: 'puna', muestra: true,
    localidad: 'Abra Pampa', lat: -22.7180, lng: -65.6960,
    descripcion: {
      es: 'Carne de llama, quinoa, papas andinas y guiso de maíz. Menú fijo del día, a la mesa larga.',
      en: 'Llama, quinoa, Andean potatoes and corn stew. A set menu of the day, served at one long table.',
      pt: 'Carne de lhama, quinoa, batatas andinas e ensopado de milho. Menu fixo do dia, na mesa comprida.' } },

  { id: 'pu-12', nombre: 'Travesía al salar con guías de la comunidad', categoria: 'oferta', region: 'puna', muestra: true,
    localidad: 'Salinas Grandes', lat: -23.6650, lng: -66.0750,
    descripcion: {
      es: 'Recorrido por los pozos de sal acompañado por salineros de las comunidades, que explican la extracción en costra y el reparto del agua.',
      en: 'A walk through the salt pools with salt workers from the communities, who explain how the crust is cut and how the water is shared.',
      pt: 'Percurso pelos poços de sal acompanhado por salineiros das comunidades, que explicam a extração na crosta e a divisão da água.' } },

  { id: 'pu-13', nombre: 'Taller de telar de piso', categoria: 'oferta', region: 'puna', muestra: true,
    localidad: 'Cochinoca', lat: -22.7500, lng: -65.9000,
    descripcion: {
      es: 'Hilado con huso, teñido con cochinilla y tola, y las primeras pasadas en telar de piso, con teleras de la zona.',
      en: 'Spinning with a drop spindle, dyeing with cochineal and tola, and your first rows on a ground loom, with local weavers.',
      pt: 'Fiar com fuso, tingir com cochonilha e tola, e as primeiras passadas no tear de chão, com tecelãs da região.' } },

  { id: 'pu-14', nombre: 'Parador Cuesta de Lipán', categoria: 'punto', region: 'puna', muestra: true,
    localidad: 'Abra de Potrerillos', lat: -23.6100, lng: -65.7200,
    descripcion: {
      es: 'Alto del camino a 4.170 metros, entre Purmamarca y Salinas Grandes. Mate cocido, artesanías y el mirador sobre la cuesta.',
      en: 'A rest stop at 4,170 metres, on the road between Purmamarca and Salinas Grandes. Hot mate, crafts, and the lookout over the pass.',
      pt: 'Parada a 4.170 metros, na estrada entre Purmamarca e Salinas Grandes. Mate cozido, artesanato e o mirante sobre a subida.' } },


  /* ─────────────── QUEBRADA ─────────────── */
  { id: 'qu-01', nombre: 'Cerro de los Siete Colores', categoria: 'punto', region: 'quebrada',
    localidad: 'Purmamarca', lat: -23.7450, lng: -65.5000, ruta_orden: 2,
    descripcion: {
      es: 'Los estratos del cerro cambian de color con la hora. Al pie, el pueblo de adobe, la feria de artesanos en la plaza y el algarrobo histórico junto al cabildo.',
      en: "The hill's mineral layers change colour with the hour. At its foot: the adobe village, the artisans' market on the square, and the ancient carob tree beside the town hall.",
      pt: 'As camadas do morro mudam de cor conforme a hora. Ao pé, o povoado de adobe, a feira de artesãos na praça e o algarobeiro histórico ao lado da prefeitura.' } },

  { id: 'qu-02', nombre: 'Pucará de Tilcara', categoria: 'punto', region: 'quebrada',
    localidad: 'Tilcara', lat: -23.5850, lng: -65.3950, ruta_orden: 5,
    descripcion: {
      es: 'Fortaleza omaguaca sobre un cerro, con dominio visual de toda la quebrada. Al lado, el jardín botánico de altura con cardones y cactáceas.',
      en: 'An Omaguaca hilltop fortress commanding a view of the whole gorge. Beside it, the high-altitude botanical garden of cardón cactus and succulents.',
      pt: 'Fortaleza omaguaca sobre um morro, com vista de todo o desfiladeiro. Ao lado, o jardim botânico de altitude com cardos e cactáceas.' } },

  { id: 'qu-03', nombre: 'Paleta del Pintor', categoria: 'punto', region: 'quebrada',
    localidad: 'Maimará', lat: -23.6200, lng: -65.4100, ruta_orden: 4,
    descripcion: {
      es: 'Ladera de estratos multicolores sobre el pueblo. El cementerio trepa la colina del Santa Bárbara y se ve desde la ruta.',
      en: "A hillside of multicoloured strata above the village — the painter's palette. The cemetery climbs the Santa Bárbara hill and is visible from the road.",
      pt: 'Encosta de camadas multicoloridas sobre o povoado. O cemitério sobe a colina de Santa Bárbara e se vê da estrada.' } },

  { id: 'qu-04', nombre: 'Humahuaca', categoria: 'punto', region: 'quebrada',
    localidad: 'Humahuaca', lat: -23.2050, lng: -65.3500, ruta_orden: 8,
    descripcion: {
      es: 'Cabecera histórica de la quebrada, de calles empedradas y angostas. Al mediodía sale el San Francisco Solano mecánico del cabildo a dar la bendición.',
      en: 'The historic head of the gorge, with narrow cobbled streets. At noon a mechanical figure of San Francisco Solano emerges from the town hall to give a blessing.',
      pt: 'Centro histórico do desfiladeiro, de ruas estreitas de pedra. Ao meio-dia, o São Francisco Solano mecânico sai da prefeitura para dar a bênção.' } },

  { id: 'qu-05', nombre: 'Serranía del Hornocal', categoria: 'punto', region: 'quebrada',
    localidad: 'Hornocal', lat: -23.2000, lng: -65.2000, ruta_orden: 9,
    descripcion: {
      es: 'Formación calcárea de catorce colores a 4.350 metros, veinticinco kilómetros al este de Humahuaca. Se ve mejor con el sol de la tarde.',
      en: 'A limestone formation of fourteen colours at 4,350 metres, twenty-five kilometres east of Humahuaca. Best seen in afternoon light.',
      pt: 'Formação calcária de catorze cores a 4.350 metros, vinte e cinco quilômetros a leste de Humahuaca. Vê-se melhor com o sol da tarde.' } },

  { id: 'qu-06', nombre: 'Iglesia de Uquía', categoria: 'punto', region: 'quebrada',
    localidad: 'Uquía', lat: -23.2900, lng: -65.3500, ruta_orden: 7,
    descripcion: {
      es: 'El retablo guarda los ángeles arcabuceros de la escuela cuzqueña, siglo XVII: arcángeles vestidos de soldado, con arcabuz al hombro.',
      en: 'The altarpiece holds the arquebusier angels of the Cusco school, seventeenth century: archangels dressed as soldiers, muskets on their shoulders.',
      pt: 'O retábulo guarda os anjos arcabuzeiros da escola cusquenha, século XVII: arcanjos vestidos de soldado, com arcabuz ao ombro.' } },

  { id: 'qu-07', nombre: 'Trópico de Capricornio', categoria: 'punto', region: 'quebrada',
    localidad: 'Huacalera', lat: -23.4400, lng: -65.3500, ruta_orden: 6,
    descripcion: {
      es: 'Un monolito marca el paso del trópico. En la iglesia del pueblo reposaron los restos del general Lavalle.',
      en: 'A monolith marks where the Tropic of Capricorn crosses. The remains of General Lavalle once rested in the village church.',
      pt: 'Um monólito marca a passagem do trópico. Na igreja do povoado repousaram os restos do general Lavalle.' } },

  { id: 'qu-08', nombre: 'Posta de Hornillos', categoria: 'punto', region: 'quebrada',
    localidad: 'Hornillos', lat: -23.6750, lng: -65.4400, ruta_orden: 3,
    descripcion: {
      es: 'Posta del camino real al Alto Perú, hoy museo. Belgrano tuvo aquí su sede de campaña durante el Éxodo.',
      en: 'A staging post on the royal road to Upper Peru, now a museum. Belgrano used it as his campaign headquarters during the Exodus.',
      pt: 'Posto do caminho real ao Alto Peru, hoje museu. Belgrano teve aqui sua sede de campanha durante o Êxodo.' } },

  { id: 'qu-09', nombre: 'Iglesia de Tumbaya', categoria: 'punto', region: 'quebrada',
    localidad: 'Tumbaya', lat: -23.8700, lng: -65.4700, ruta_orden: 1,
    descripcion: {
      es: 'Puerta sur de la quebrada. Templo del siglo XVIII dedicado a Nuestra Señora de Candelaria, monumento histórico nacional.',
      en: 'The southern gateway to the gorge. An eighteenth-century church dedicated to Our Lady of Candelaria, a national historic monument.',
      pt: 'Porta sul do desfiladeiro. Templo do século XVIII dedicado a Nossa Senhora da Candelária, monumento histórico nacional.' } },

  { id: 'qu-10', nombre: 'Casa de Adobe Purmamarca', categoria: 'hostal', region: 'quebrada', muestra: true,
    localidad: 'Purmamarca', lat: -23.7420, lng: -65.4980,
    descripcion: {
      es: 'Seis habitaciones alrededor de un patio con horno de barro, a dos cuadras de la plaza. Techos de caña y torta de barro.',
      en: 'Six rooms around a courtyard with a clay oven, two blocks from the square. Cane ceilings finished with packed earth.',
      pt: 'Seis quartos ao redor de um pátio com forno de barro, a duas quadras da praça. Tetos de cana e torta de barro.' } },

  { id: 'qu-11', nombre: 'Hostel La Copla', categoria: 'hostal', region: 'quebrada', muestra: true,
    localidad: 'Tilcara', lat: -23.5760, lng: -65.3930,
    descripcion: {
      es: 'Habitaciones compartidas y privadas, cocina de uso común y terraza mirando al Pucará. Ronda de coplas los sábados.',
      en: 'Shared and private rooms, a common kitchen and a terrace facing the Pucará. A round of coplas — sung verses — on Saturdays.',
      pt: 'Quartos compartilhados e privativos, cozinha comum e terraço de frente para o Pucará. Roda de coplas nos sábados.' } },

  { id: 'qu-12', nombre: 'Los Cardones', categoria: 'restaurante', region: 'quebrada', muestra: true,
    localidad: 'Tilcara', lat: -23.5820, lng: -65.3960,
    descripcion: {
      es: 'Llama a la cacerola, humita en chala, tamales y vinos de altura de la quebrada. Mesas en el patio cuando el viento lo permite.',
      en: 'Braised llama, humita steamed in corn husk, tamales, and high-altitude wines from the gorge. Tables in the courtyard when the wind allows.',
      pt: 'Lhama na panela, humita na palha, tamales e vinhos de altitude do desfiladeiro. Mesas no pátio quando o vento permite.' } },

  { id: 'qu-13', nombre: 'Peña de la Caja', categoria: 'restaurante', region: 'quebrada', muestra: true,
    localidad: 'Humahuaca', lat: -23.2040, lng: -65.3480,
    descripcion: {
      es: 'Comida regional y peña desde las diez de la noche: caja, copla y erke, con los músicos del pueblo.',
      en: 'Regional food and live music from ten at night: the caja drum, sung coplas and the erke horn, played by musicians from the village.',
      pt: 'Comida regional e música ao vivo a partir das dez da noite: caja, copla e erke, com os músicos do povoado.' } },

  { id: 'qu-14', nombre: 'Caminata a la Garganta del Diablo', categoria: 'oferta', region: 'quebrada', muestra: true,
    localidad: 'Tilcara', lat: -23.5990, lng: -65.3650,
    descripcion: {
      es: 'Tres horas de subida por el cauce del río Huasamayo hasta el cañón y la cascada, con guía de Tilcara.',
      en: 'A three-hour climb up the bed of the Huasamayo river to the canyon and waterfall, with a guide from Tilcara.',
      pt: 'Três horas de subida pelo leito do rio Huasamayo até o cânion e a cachoeira, com guia de Tilcara.' } },

  { id: 'qu-15', nombre: 'Ruta del Carnaval', categoria: 'oferta', region: 'quebrada', muestra: true,
    localidad: 'Varias localidades', lat: -23.4700, lng: -65.4200,
    descripcion: {
      es: 'Circuito por las comparsas de la quebrada en febrero, del desentierro al entierro del diablo. Se arma con cada comparsa, no se vende suelto.',
      en: "A February circuit through the gorge's carnival troupes, from the unearthing to the burial of the devil. Arranged with each troupe; not sold as a package.",
      pt: 'Circuito pelos blocos de carnaval do desfiladeiro em fevereiro, do desenterro ao enterro do diabo. Combina-se com cada bloco, não se vende solto.' } },


  /* ─────────────── VALLES ─────────────── */
  { id: 'va-01', nombre: 'Catedral y Cabildo de Jujuy', categoria: 'punto', region: 'valles',
    localidad: 'San Salvador de Jujuy', lat: -24.1850, lng: -65.3000, ruta_orden: 1,
    descripcion: {
      es: 'El púlpito barroco tallado y dorado del siglo XVIII es el más notable del norte. A media cuadra, la Casa de Gobierno conserva la bandera que donó Belgrano.',
      en: "The carved and gilded baroque pulpit, eighteenth century, is the finest in the north. Half a block away, the Government House keeps the flag Belgrano gave the city.",
      pt: 'O púlpito barroco entalhado e dourado do século XVIII é o mais notável do norte. A meia quadra, a Casa de Governo guarda a bandeira doada por Belgrano.' } },

  { id: 'va-02', nombre: 'Termas de Reyes', categoria: 'punto', region: 'valles',
    localidad: 'Termas de Reyes', lat: -24.1900, lng: -65.4500, ruta_orden: 2,
    descripcion: {
      es: 'Aguas termales en la quebrada del río Reyes, diecinueve kilómetros al oeste de la capital, encajonadas entre cerros de nubes bajas.',
      en: 'Hot springs in the gorge of the Reyes river, nineteen kilometres west of the capital, hemmed in by hills under low cloud.',
      pt: 'Águas termais no vale do rio Reyes, dezenove quilômetros a oeste da capital, encaixadas entre morros de nuvens baixas.' } },

  { id: 'va-03', nombre: 'Lagunas de Yala', categoria: 'punto', region: 'valles',
    localidad: 'Yala', lat: -24.1100, lng: -65.4000, ruta_orden: 3,
    descripcion: {
      es: 'Cadena de lagunas de altura en la transición entre yungas y valles. Parque provincial y sitio Ramsar, con senderos entre alisos.',
      en: 'A chain of high lakes where the cloud forest gives way to the valleys. A provincial park and Ramsar site, with trails through alder woods.',
      pt: 'Cadeia de lagoas de altitude na transição entre as yungas e os vales. Parque provincial e sítio Ramsar, com trilhas entre amieiros.' } },

  { id: 'va-04', nombre: 'Altos Hornos Zapla', categoria: 'punto', region: 'valles',
    localidad: 'Palpalá', lat: -24.2500, lng: -65.2100, ruta_orden: 4,
    descripcion: {
      es: 'El primer alto horno integrado del país, encendido en 1945. Patrimonio industrial y memoria obrera, con museo del hierro.',
      en: "The country's first integrated blast furnace, lit in 1945. Industrial heritage and working-class memory, with a museum of iron.",
      pt: 'O primeiro alto-forno integrado do país, aceso em 1945. Patrimônio industrial e memória operária, com museu do ferro.' } },

  { id: 'va-05', nombre: 'Dique La Ciénaga', categoria: 'punto', region: 'valles',
    localidad: 'El Carmen', lat: -24.4000, lng: -65.2700, ruta_orden: 5,
    descripcion: {
      es: 'Embalse entre El Carmen y Los Alisos, con pesca y deportes náuticos. Los fines de semana se llena de familias de la capital.',
      en: 'A reservoir between El Carmen and Los Alisos, with fishing and water sports. At weekends it fills with families from the capital.',
      pt: 'Represa entre El Carmen e Los Alisos, com pesca e esportes náuticos. Nos fins de semana enche de famílias da capital.' } },

  { id: 'va-06', nombre: 'Perico y los tabacales', categoria: 'punto', region: 'valles',
    localidad: 'Perico', lat: -24.3800, lng: -65.1100, ruta_orden: 6,
    descripcion: {
      es: 'Corazón de la cuenca tabacalera, con los secaderos alineados sobre la ruta. Aquí está el aeropuerto de la provincia.',
      en: 'The heart of the tobacco basin, with the drying sheds lined up along the road. The provincial airport is here.',
      pt: 'Coração da bacia do tabaco, com os secadores alinhados ao longo da estrada. Aqui está o aeroporto da província.' } },

  { id: 'va-07', nombre: 'Tilquiza', categoria: 'punto', region: 'valles',
    localidad: 'Tilquiza', lat: -24.0500, lng: -65.3500,
    descripcion: {
      es: 'Pueblo de montaña sobre el río Grande, en el camino que sube de los valles a la selva.',
      en: 'A mountain village above the Río Grande, on the road that climbs from the valleys into the cloud forest.',
      pt: 'Povoado de montanha sobre o rio Grande, no caminho que sobe dos vales para a mata.' } },

  { id: 'va-08', nombre: 'Hostería del Alisal', categoria: 'hostal', region: 'valles', muestra: true,
    localidad: 'Yala', lat: -24.1150, lng: -65.3880,
    descripcion: {
      es: 'Casa de campo con ocho habitaciones y galería sobre el valle. Se llega en veinte minutos desde la capital.',
      en: 'A country house with eight rooms and a veranda over the valley. Twenty minutes from the capital.',
      pt: 'Casa de campo com oito quartos e varanda sobre o vale. Chega-se em vinte minutos da capital.' } },

  { id: 'va-09', nombre: 'Casona del Centro', categoria: 'hostal', region: 'valles', muestra: true,
    localidad: 'San Salvador de Jujuy', lat: -24.1880, lng: -65.3040,
    descripcion: {
      es: 'Casa colonial reciclada a dos cuadras de la plaza Belgrano, con patio de naranjos y once habitaciones.',
      en: 'A restored colonial house two blocks from Plaza Belgrano, with an orange-tree courtyard and eleven rooms.',
      pt: 'Casa colonial restaurada a duas quadras da praça Belgrano, com pátio de laranjeiras e onze quartos.' } },

  { id: 'va-10', nombre: 'Mercado del Sur', categoria: 'restaurante', region: 'valles', muestra: true,
    localidad: 'San Salvador de Jujuy', lat: -24.1910, lng: -65.2980,
    descripcion: {
      es: 'Puestos de comida regional y productores de los valles bajo un mismo techo. Empanadas de carne cortada a cuchillo y api caliente.',
      en: 'Regional food stalls and valley producers under one roof. Empanadas of hand-cut beef, and hot api, a spiced purple-corn drink.',
      pt: 'Barracas de comida regional e produtores dos vales sob o mesmo teto. Empanadas de carne cortada à faca e api quente, bebida de milho roxo.' } },

  { id: 'va-11', nombre: 'Bodega de vinos de altura', categoria: 'oferta', region: 'valles', muestra: true,
    localidad: 'San Antonio', lat: -24.4200, lng: -65.3500,
    descripcion: {
      es: 'Visita a la sala de vasijas y degustación de malbec y criolla de viñedos por encima de los dos mil metros.',
      en: 'A visit to the amphora room and a tasting of malbec and criolla from vineyards above two thousand metres.',
      pt: 'Visita à sala de vasilhas e degustação de malbec e criolla de vinhedos acima dos dois mil metros.' } },

  { id: 'va-12', nombre: 'Circuito de museos a pie', categoria: 'oferta', region: 'valles', muestra: true,
    localidad: 'San Salvador de Jujuy', lat: -24.1840, lng: -65.3020,
    descripcion: {
      es: 'Dos horas y media por el casco histórico: catedral, cabildo, casa de gobierno y el museo arqueológico, con guía local.',
      en: 'Two and a half hours through the old town: cathedral, town hall, government house and the archaeological museum, with a local guide.',
      pt: 'Duas horas e meia pelo centro histórico: catedral, prefeitura, casa de governo e o museu arqueológico, com guia local.' } },


  /* ─────────────── YUNGAS ─────────────── */
  { id: 'yu-01', nombre: 'Parque Nacional Calilegua', categoria: 'punto', region: 'yungas',
    localidad: 'Calilegua', lat: -23.7500, lng: -64.8500, ruta_orden: 2,
    descripcion: {
      es: 'La mayor área protegida de selva de montaña del país: setenta y seis mil hectáreas y más de quinientas especies de aves en tres pisos de vegetación.',
      en: "The country's largest protected cloud forest: seventy-six thousand hectares and more than five hundred bird species across three vegetation belts.",
      pt: 'A maior área protegida de mata de montanha do país: setenta e seis mil hectares e mais de quinhentas espécies de aves em três andares de vegetação.' } },

  { id: 'yu-02', nombre: 'Valle Grande', categoria: 'punto', region: 'yungas',
    localidad: 'San Francisco', lat: -23.6200, lng: -64.9800, ruta_orden: 3,
    descripcion: {
      es: 'Pueblos entre nubes sobre el río Grande, con huertas en terrazas y caminos de cornisa. Se llega por ruta de tierra desde Humahuaca o desde el llano.',
      en: 'Villages in the clouds above the Río Grande, with terraced gardens and cliff-edge roads. Reached by dirt road from Humahuaca or from the lowlands.',
      pt: 'Povoados entre nuvens sobre o rio Grande, com hortas em terraços e estradas de encosta. Chega-se por estrada de terra desde Humahuaca ou da planície.' } },

  { id: 'yu-03', nombre: 'Alto Calilegua', categoria: 'punto', region: 'yungas',
    localidad: 'Alto Calilegua', lat: -23.5500, lng: -65.0500, ruta_orden: 4,
    descripcion: {
      es: 'Asentamientos prehispánicos y tramos del Qhapaq Ñan por encima de los tres mil metros, donde la selva se corta y empieza el pastizal.',
      en: 'Pre-Hispanic settlements and stretches of the Qhapaq Ñan, the Inca road, above three thousand metres, where the forest stops and the grassland begins.',
      pt: 'Assentamentos pré-hispânicos e trechos do Qhapaq Ñan, a estrada inca, acima dos três mil metros, onde a mata termina e começa o pastizal.' } },

  { id: 'yu-04', nombre: 'Ingenio Ledesma', categoria: 'punto', region: 'yungas',
    localidad: 'Libertador Gral. San Martín', lat: -23.8100, lng: -64.7900, ruta_orden: 1,
    descripcion: {
      es: 'Ciudad azucarera y puerta del Parque Calilegua. Patrimonio industrial y memoria del Apagón de julio de 1976.',
      en: 'A sugar town and the gateway to Calilegua park. Industrial heritage, and the memory of the Blackout of July 1976.',
      pt: 'Cidade açucareira e porta do Parque Calilegua. Patrimônio industrial e memória do Apagão de julho de 1976.' } },

  { id: 'yu-05', nombre: 'Termas de Caimancito', categoria: 'punto', region: 'yungas',
    localidad: 'Caimancito', lat: -23.7500, lng: -64.6000, ruta_orden: 5,
    descripcion: {
      es: 'Aguas calientes en el pedemonte, cerca del río San Francisco, entre la selva y los pozos petroleros.',
      en: 'Hot springs in the foothills, near the San Francisco river, between the forest and the oil wells.',
      pt: 'Águas quentes no sopé da serra, perto do rio San Francisco, entre a mata e os poços de petróleo.' } },

  { id: 'yu-06', nombre: 'Reserva Las Lancitas', categoria: 'punto', region: 'yungas',
    localidad: 'Santa Bárbara', lat: -24.0500, lng: -64.4500, ruta_orden: 7,
    descripcion: {
      es: 'Serranía de transición entre las yungas y el chaco, con selva pedemontana y quebrachales. Reserva provincial poco visitada.',
      en: 'A range where the cloud forest meets the Chaco, with foothill forest and quebracho woodland. A little-visited provincial reserve.',
      pt: 'Serra de transição entre as yungas e o chaco, com mata de sopé e quebrachais. Reserva provincial pouco visitada.' } },

  { id: 'yu-07', nombre: 'San Pedro de Jujuy', categoria: 'punto', region: 'yungas',
    localidad: 'San Pedro de Jujuy', lat: -24.2300, lng: -64.8700, ruta_orden: 8,
    descripcion: {
      es: 'Segunda ciudad de la provincia, con arquitectura del ciclo azucarero y uno de los carnavales más grandes del norte.',
      en: "The province's second city, with architecture from the sugar era and one of the largest carnivals in the north.",
      pt: 'Segunda cidade da província, com arquitetura do ciclo açucareiro e um dos maiores carnavais do norte.' } },

  { id: 'yu-08', nombre: 'Yuto', categoria: 'punto', region: 'yungas',
    localidad: 'Yuto', lat: -23.6300, lng: -64.4700, ruta_orden: 6,
    descripcion: {
      es: 'Acceso a la Reserva de Biosfera de las Yungas y a las comunidades guaraníes del este de la provincia.',
      en: 'The way in to the Yungas Biosphere Reserve and to the Guaraní communities of the eastern province.',
      pt: 'Acesso à Reserva da Biosfera das Yungas e às comunidades guaranis do leste da província.' } },

  { id: 'yu-09', nombre: 'Cabañas de la Selva', categoria: 'hostal', region: 'yungas', muestra: true,
    localidad: 'Calilegua', lat: -23.7720, lng: -64.7800,
    descripcion: {
      es: 'Cinco cabañas de madera junto al acceso del parque nacional, con galería y mosquitero. Los tucanes despiertan antes que el sol.',
      en: 'Five wooden cabins by the national park entrance, with verandas and mosquito nets. The toucans wake before the sun does.',
      pt: 'Cinco cabanas de madeira junto à entrada do parque nacional, com varanda e mosquiteiro. Os tucanos acordam antes do sol.' } },

  { id: 'yu-10', nombre: 'Casas de Familia de Valle Grande', categoria: 'hostal', region: 'yungas', muestra: true,
    localidad: 'Valle Grande', lat: -23.6150, lng: -64.9700,
    descripcion: {
      es: 'Alojamiento en casas de familia de los pueblos del valle, con comida casera y el fogón de la cocina como living.',
      en: 'Homestays in the villages of the valley, with home cooking and the kitchen hearth as the living room.',
      pt: 'Hospedagem em casas de família dos povoados do vale, com comida caseira e o fogão da cozinha como sala.' } },

  { id: 'yu-11', nombre: 'Comedor Monte Adentro', categoria: 'restaurante', region: 'yungas', muestra: true,
    localidad: 'San Pedro de Jujuy', lat: -24.2280, lng: -64.8680,
    descripcion: {
      es: 'Cocina criolla con productos de la selva: palta, cítricos, mandioca y locro los viernes.',
      en: 'Creole cooking with produce from the forest: avocado, citrus, cassava, and locro stew on Fridays.',
      pt: 'Cozinha criolla com produtos da mata: abacate, cítricos, mandioca e locro nas sextas.' } },

  { id: 'yu-12', nombre: 'Avistaje de aves al amanecer', categoria: 'oferta', region: 'yungas', muestra: true,
    localidad: 'Parque Nacional Calilegua', lat: -23.7300, lng: -64.8700,
    descripcion: {
      es: 'Salida de cuatro horas desde antes del amanecer por la senda de la Junta, con guía habilitado y telescopio. Grupos de seis personas.',
      en: 'A four-hour outing starting before dawn along the Junta trail, with a licensed guide and a spotting scope. Groups of six.',
      pt: 'Saída de quatro horas antes do amanhecer pela trilha da Junta, com guia habilitado e telescópio. Grupos de seis pessoas.' } },

  { id: 'yu-13', nombre: 'Visita a finca de caña', categoria: 'oferta', region: 'yungas', muestra: true,
    localidad: 'Libertador Gral. San Martín', lat: -23.8200, lng: -64.7700,
    descripcion: {
      es: 'Recorrido por el cañaveral y el trapiche, con degustación de azúcar rubio y miel de caña.',
      en: 'A walk through the cane field and the mill, with a tasting of raw sugar and cane syrup.',
      pt: 'Percurso pelo canavial e pelo engenho, com degustação de açúcar mascavo e melado de cana.' } }

];
