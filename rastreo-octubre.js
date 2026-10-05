/* Segundo rastreo de fuentes públicas, 5 de octubre de 2026: comida casera
   en casas de familia, buñuelos, monumentos, cerros altos, fiestas,
   bodegas y tejidos. Mismas reglas que relevados.js y actividades.js:
   relevado NO es verificado, el pin es la referencia de la localidad y no
   la puerta del lugar, y el costo queda en Consultar si la fuente no lo dice.
   No se suman comedores comunitarios de asistencia social: son espacios de
   ayuda alimentaria, no de visita turística. */
'use strict';
(() => {
  const fecha = '2026-10-05';
  const fuente = (titulo, url) => ({ titulo, url });
  const multi = (es, en, pt) => ({ es, en, pt });
  const f = {
    catalogo: fuente('Turismo Jujuy · Catálogo de turismo rural comunitario', 'https://www.turismo.jujuy.gob.ar/wp-content/uploads/catalogo-turismo-rural-comunitario-11-de-diciembre.pdf'),
    produccion: fuente('Ministerio de Desarrollo Económico y Producción de Jujuy · Emprendimientos', 'https://www.produccion.jujuy.gob.ar/?page_id=717'),
    bunuelodromo: fuente('Todo Jujuy · Buñuelódromo, camino a los diques (25/1/2026)', 'https://www.todojujuy.com/jujuy/bunuelodromo-el-clasico-jujeno-que-endulza-el-camino-los-diques-n285307'),
    paseoBunuelos: fuente('Todo Jujuy · Paseo de los Buñuelos en El Carmen', 'https://www.todojujuy.com/jujuy/este-fin-semana-se-podra-disfrutar-del-paseo-los-bunuelos-n145542'),
    monumento: fuente('Todo Jujuy · El Monumento a los Héroes de la Independencia es Monumento Histórico Nacional', 'https://www.todojujuy.com/jujuy/el-monumento-los-heroes-la-independencia-ya-es-monumento-historico-nacional-n128883'),
    purmamarca: fuente('Ministerio de Cultura de la Nación · Poblado de Purmamarca', 'https://www.argentina.gob.ar/capital-humano/cultura/monumentos/poblado-de-purmamarca'),
    chani: fuente('Visit Argentina · Nevado de Chañi', 'https://www.argentina.travel/actividades/nevado-de-chani'),
    montanismo: fuente('Visit Argentina · Montañismo en Jujuy', 'https://www.argentina.travel/es/actividades/montanismo-en-jujuy'),
    lipan: fuente('Billiken · Cuesta de Lipán', 'https://billiken.lat/interesante/cuesta-de-lipan-un-sorprendente-camino-de-montana-que-atraviesa-jujuy/'),
    tren: fuente('Tren Solar de la Quebrada · Sitio oficial', 'https://trensolar.com.ar/'),
    trenNota: fuente('La Capital · Un tren solar para descubrir la Quebrada', 'https://www.lacapital.com.ar/turismo/un-tren-solar-descubrir-la-quebrada-humahuaca-apuro-n10256982.html'),
    bandera: fuente('Todo Jujuy · Centro de Interpretación de la Bandera de la Libertad Civil', 'https://www.todojujuy.com/jujuy/habilitaron-el-centro-la-bandera-la-libertad-civil-n204462'),
    sanFrancisco: fuente('Todo Jujuy · La iglesia San Francisco en la Semana de los Museos', 'https://www.todojujuy.com/jujuy/la-iglesia-san-francisco-se-suma-la-semana-los-museos-n271757'),
    manka: fuente('Todo Jujuy · Manka Fiesta en La Quiaca', 'https://www.todojujuy.com/jujuy/la-quiaca-comenzo-la-manka-fiesta-n241033'),
    carnaval: fuente('Visit Argentina · Carnaval de Humahuaca', 'https://www.argentina.travel/en/activities/carnaval-de-humahuaca'),
    caspala: fuente('Minuto Uno · Caspalá y el Camino del Inca', 'https://www.minutouno.com/lifestyle/descubri-jujuy-2026-el-destino-calles-empedradas-antiguas-tradiciones-y-el-camino-del-inca-n6282304'),
    pedroPan: fuente('Welcome Argentina · Pedro Pan Restaurante', 'https://www.welcomeargentina.com/purmamarca/pedro-pan-restaurante.html')
  };
  /* Referencias de localidad: el centro del pueblo, no el acceso al lugar. */
  const referencia = {
    capital:     ['San Salvador de Jujuy', -24.1856, -65.2995, 'valles'],
    carmen:      ['El Carmen', -24.4, -65.27, 'valles'],
    chani:       ['Nevado de Chañi', -24.06, -65.74, 'valles'],
    purmamarca:  ['Purmamarca', -23.7455, -65.4995, 'quebrada'],
    maimara:     ['Maimará', -23.6245, -65.4095, 'quebrada'],
    tilcara:     ['Tilcara', -23.585, -65.395, 'quebrada'],
    huacalera:   ['Huacalera', -23.437, -65.351, 'quebrada'],
    humahuaca:   ['Humahuaca', -23.205, -65.35, 'quebrada'],
    volcan:      ['Volcán', -23.917, -65.466, 'quebrada'],
    laquiaca:    ['La Quiaca', -22.105, -65.597, 'puna'],
    abrapampa:   ['Abra Pampa', -22.722, -65.697, 'puna'],
    marques:     ['Puesto del Marqués', -22.535, -65.695, 'puna'],
    catalina:    ['Santa Catalina', -21.945, -66.052, 'puna'],
    trescruces:  ['Tres Cruces', -22.918, -65.587, 'puna'],
    cochinoca:   ['Cochinoca', -22.74, -65.89, 'puna'],
    tuzgle:      ['Volcán Tuzgle', -24.05, -66.48, 'puna'],
    caspala:     ['Caspalá', -23.367, -65.092, 'yungas'],
    fuerte:      ['El Fuerte', -24.26, -64.42, 'yungas']
  };
  const consultar = (fuentes, nota = multi('Confirmar horarios, reservas y costos antes de ir.', 'Confirm hours, bookings and prices before going.', 'Confirme horários, reservas e preços antes de ir.')) =>
    ({ estado: 'consultar', fecha, fuentes, nota });

  function sumar(id, nombre, categoria, lugar, descripcion, fuentes, extra = {}) {
    const [localidad, lat, lng, region] = referencia[lugar];
    window.LUGARES.push({
      id, nombre, categoria, localidad, lat, lng, region, descripcion,
      contacto: { web: fuentes[0].url },
      mapas_busqueda: `${extra.buscar || nombre}, ${localidad}, Jujuy, Argentina`,
      relevamiento: { estado: 'relevado', fecha, ubicacion: 'referencia', fuentes,
        referencia_coordenadas: 'Referencia de localidad; pendiente de geolocalizar el acceso.' },
      precio: consultar(fuentes),
      ...extra
    });
  }

  /* ── Comida casera y comida típica ─────────────────────── */
  sumar('va-o-bunuelos', 'Buñuelódromo · Paseo de los Buñuelos', 'restaurante', 'carmen',
    multi('Más de diez puestos en el camino a los diques: buñuelos, tortillas con api, quesillo y mate cocido, con artesanías y plantas. Lunes a viernes de 14 a 22; fines de semana y feriados de 8 a 23 (horario publicado en enero de 2026).',
          'More than ten stalls on the road to the reservoirs: buñuelos (fried dough), tortillas with api (purple-corn drink), quesillo cheese and mate cocido, plus crafts and plants. Mon–Fri 2–10 pm; weekends and holidays 8 am–11 pm (hours published January 2026).',
          'Mais de dez barracas no caminho dos diques: buñuelos, tortillas com api (bebida de milho roxo), quesillo e mate cocido, além de artesanato e plantas. Seg–sex 14–22 h; fins de semana e feriados 8–23 h (horário publicado em janeiro de 2026).'),
    [f.bunuelodromo, f.paseoBunuelos], { buscar: 'Buñuelódromo El Carmen' });
  sumar('qu-o-hornaditas', 'Hornaditas · comida casera y turismo rural', 'restaurante', 'humahuaca',
    multi('Comunidad al norte de Humahuaca. Las familias reciben con gastronomía local y alojamiento, y llevan a pie o a caballo a molinos hidráulicos, petroglifos y la serranía del Hornocal. Escribir antes: hornaditas@gmail.com.',
          'Community north of Humahuaca. Families offer local food and lodging, and guide walks or horse rides to water mills, petroglyphs and the Hornocal range. Write ahead: hornaditas@gmail.com.',
          'Comunidade ao norte de Humahuaca. As famílias oferecem comida local e hospedagem, e guiam a pé ou a cavalo até moinhos d\'água, petróglifos e a serra do Hornocal. Escreva antes: hornaditas@gmail.com.'),
    [f.catalogo], { contacto: { email: 'hornaditas@gmail.com', web: f.catalogo.url }, buscar: 'Hornaditas' });
  sumar('qu-o-ocumazo', 'Ocumazo · el valle escondido', 'oferta', 'humahuaca',
    multi('Turismo comunitario a 18 km al este de Humahuaca: un valle tranquilo, con cultura milenaria y vida de campo. Escribir antes: ocumazo@yahoo.com.',
          'Community tourism 18 km east of Humahuaca: a quiet valley with ancient culture and rural life. Write ahead: ocumazo@yahoo.com.',
          'Turismo comunitário a 18 km a leste de Humahuaca: um vale tranquilo, de cultura milenar e vida rural. Escreva antes: ocumazo@yahoo.com.'),
    [f.catalogo], { contacto: { email: 'ocumazo@yahoo.com', web: f.catalogo.url }, buscar: 'Ocumazo' });
  sumar('pu-o-marques', 'Puesto del Marqués · queso artesanal y cocina local', 'restaurante', 'marques',
    multi('Veinte kilómetros al norte de Abra Pampa por la RN 9. Las familias muestran cómo hacen el queso a mano y comparten platos de la cocina puneña. Avisar antes a la cabina pública: 03887-491088.',
          'Twenty kilometres north of Abra Pampa on RN 9. Families show how they make cheese by hand and share Puna home cooking. Call the public phone ahead: 03887-491088.',
          'Vinte quilômetros ao norte de Abra Pampa pela RN 9. As famílias mostram como fazem queijo artesanal e compartilham a cozinha da Puna. Avise antes pelo telefone público: 03887-491088.'),
    [f.catalogo], { contacto: { telefono: '+54 3887 491088', web: f.catalogo.url } });
  sumar('yu-o-caspala', 'Caspalá · casas de familia en la montaña', 'hostal', 'caspala',
    multi('Pueblo a 3.100 metros en Valle Grande, distinguido por la Organización Mundial del Turismo. Las familias alojan y cocinan locro, guiso de papa verde y charqui; desde acá salen senderos a Santa Ana y Valle Colorado. Se llega desde Humahuaca por la RP 73, de ripio y por el Abra de Zenta (4.500 m): consultar el estado del camino.',
          'Village at 3,100 metres in Valle Grande, recognised by UN Tourism. Families host visitors and cook locro, green-potato stew and charqui; trails lead to Santa Ana and Valle Colorado. Reached from Humahuaca on gravel road RP 73 over the Zenta pass (4,500 m): check road conditions.',
          'Povoado a 3.100 metros em Valle Grande, reconhecido pela ONU Turismo. As famílias hospedam e cozinham locro, ensopado de batata e charqui; daqui saem trilhas para Santa Ana e Valle Colorado. Acesso por Humahuaca pela RP 73, de cascalho, pelo Abra de Zenta (4.500 m): consulte o estado da estrada.'),
    [f.catalogo, f.caspala], { contacto: { telefono: '+54 3886 461001', web: f.catalogo.url } });
  sumar('qu-o-pedropan', 'Pedro Pan Restaurante', 'restaurante', 'purmamarca',
    multi('A pasos de la plaza. Cocina del norte: empanadas, locro, tamales y cazuelas.',
          'Steps from the square. Northern cooking: empanadas, locro, tamales and stews.',
          'A poucos passos da praça. Cozinha do norte: empanadas, locro, tamales e ensopados.'),
    [f.pedroPan]);

  /* ── Monumentos y patrimonio ───────────────────────────── */
  sumar('qu-o-monumento', 'Monumento a los Héroes de la Independencia', 'punto', 'humahuaca',
    multi('Bronce de Ernesto Soto Avendaño en lo alto del cerro Santa Bárbara, frente a la plaza. Se sube por una escalinata larga: a esta altura, despacio. Monumento Histórico Nacional desde 2019.',
          'Bronze by Ernesto Soto Avendaño atop Santa Bárbara hill, facing the square. Reached by a long stairway: go slowly at this altitude. National Historic Monument since 2019.',
          'Bronze de Ernesto Soto Avendaño no alto do morro Santa Bárbara, diante da praça. Sobe-se por uma longa escadaria: devagar, nesta altitude. Monumento Histórico Nacional desde 2019.'),
    [f.monumento]);
  sumar('qu-o-santarosa', 'Iglesia de Santa Rosa de Lima y Cabildo', 'punto', 'purmamarca',
    multi('Iglesia de 1648, de adobe y techo de cardón, con pinturas cusqueñas del siglo XVIII. Enfrente, el cabildo más chico del país. Monumento Histórico Nacional.',
          'Church from 1648, adobe with a cardón-wood roof and 18th-century Cusco School paintings. Across the square, the smallest cabildo in the country. National Historic Monument.',
          'Igreja de 1648, de adobe e teto de cardón, com pinturas cusquenhas do século XVIII. Em frente, o menor cabildo do país. Monumento Histórico Nacional.'),
    [f.purmamarca], { buscar: 'Iglesia Santa Rosa de Lima' });
  sumar('va-o-bandera', 'Salón de la Bandera de la Libertad Civil', 'punto', 'capital',
    multi('En la Casa de Gobierno, frente a la plaza Belgrano: la bandera que Belgrano le dejó a Jujuy en 1813, con su centro de interpretación. Visitas guiadas de lunes a viernes.',
          'In Government House, facing Plaza Belgrano: the flag Belgrano gave Jujuy in 1813, with its interpretation centre. Guided tours Monday to Friday.',
          'Na Casa de Governo, diante da praça Belgrano: a bandeira que Belgrano deixou a Jujuy em 1813, com seu centro de interpretação. Visitas guiadas de segunda a sexta.'),
    [f.bandera], { buscar: 'Casa de Gobierno de Jujuy' });
  sumar('va-o-sanfrancisco', 'Iglesia y Convento de San Francisco', 'punto', 'capital',
    multi('Una de las iglesias más visitadas del centro. El templo actual es de 1927; adentro, el museo de arte religioso.',
          'One of the most visited churches downtown. The current building dates from 1927; inside, a religious art museum.',
          'Uma das igrejas mais visitadas do centro. O templo atual é de 1927; dentro, o museu de arte sacra.'),
    [f.sanFrancisco], { buscar: 'Iglesia San Francisco San Salvador de Jujuy' });
  sumar('pu-o-catalina', 'Iglesia de Santa Catalina', 'punto', 'catalina',
    multi('Pueblo sobre la Ruta 40, buen punto de partida para las seis comunidades de la zona, a 3.800 metros. La iglesia guarda obras de arte cusqueño. Comisión municipal: 03887-491140.',
          'Village on Route 40, a good base for the area\'s six communities at 3,800 metres. The church holds Cusco School artworks. Local council: 03887-491140.',
          'Povoado na Rota 40, bom ponto de partida para as seis comunidades da região, a 3.800 metros. A igreja guarda arte cusquenha. Comissão municipal: 03887-491140.'),
    [f.catalogo], { contacto: { telefono: '+54 3887 491140', web: f.catalogo.url } });
  sumar('pu-o-cochinoca', 'Cochinoca y las Peñas de Ascalte', 'punto', 'cochinoca',
    multi('Al este de Abra Pampa: el pueblo histórico de Cochinoca y el paisaje lunar de las peñas de Ascalte, cerca de Casabindo.',
          'East of Abra Pampa: the historic village of Cochinoca and the moon-like Ascalte rocks, near Casabindo.',
          'A leste de Abra Pampa: o povoado histórico de Cochinoca e a paisagem lunar das penhas de Ascalte, perto de Casabindo.'),
    [f.catalogo], { contacto: { telefono: '+54 3887 491435', web: f.catalogo.url } });

  /* ── Altura: cerros y caminos ──────────────────────────── */
  sumar('va-o-chani', 'Nevado de Chañi · el cerro más alto de Jujuy', 'punto', 'chani',
    multi('Casi seis mil metros (las fuentes dan entre 5.896 y 5.949). Para mirarlo de lejos o subirlo sólo con guía de montaña y aclimatación: es una expedición de varios días.',
          'Almost six thousand metres (sources give 5,896 to 5,949). Admire it from afar, or climb only with a mountain guide and acclimatisation: it is a multi-day expedition.',
          'Quase seis mil metros (as fontes dão entre 5.896 e 5.949). Para admirar de longe ou subir só com guia de montanha e aclimatação: é uma expedição de vários dias.'),
    [f.chani, f.catalogo], { buscar: 'Nevado de Chañi' });
  sumar('pu-o-tuzgle', 'Volcán Tuzgle', 'punto', 'tuzgle',
    multi('Volcán de más de cinco mil metros en la Puna de Susques, uno de los destinos de montañismo de la provincia. Con guía y aclimatación.',
          'Volcano over five thousand metres in the Susques Puna, one of the province\'s mountaineering destinations. With a guide and acclimatisation.',
          'Vulcão de mais de cinco mil metros na Puna de Susques, um dos destinos de montanhismo da província. Com guia e aclimatação.'),
    [f.montanismo], { buscar: 'Volcán Tuzgle' });
  sumar('qu-o-lipan', 'Cuesta de Lipán y Abra de Potrerillos', 'punto', 'purmamarca',
    multi('Diecisiete kilómetros de curvas asfaltadas por la RN 52, de Purmamarca hasta el abra a 4.170 metros, camino a Salinas Grandes. Parar en el mirador sin apuro: la altura se siente.',
          'Seventeen kilometres of paved hairpins on RN 52, from Purmamarca up to the pass at 4,170 metres, on the way to Salinas Grandes. Stop at the lookout and take it easy: you will feel the altitude.',
          'Dezessete quilômetros de curvas asfaltadas pela RN 52, de Purmamarca até o passo a 4.170 metros, a caminho das Salinas Grandes. Pare no mirante sem pressa: a altitude se faz sentir.'),
    [f.lipan], { buscar: 'Abra de Potrerillos' });
  sumar('pu-o-diablo', 'Puente del Diablo', 'punto', 'trescruces',
    multi('Formaciones de roca talladas por el viento, entre queñuas, cerca de Tres Cruces. Lo muestran guías de la comunidad: Sergio (388 517-0055) o Claudia (388 469-0944).',
          'Wind-carved rock formations among queñua trees near Tres Cruces. Shown by community guides: Sergio (+54 388 517-0055) or Claudia (+54 388 469-0944).',
          'Formações rochosas esculpidas pelo vento, entre queñuas, perto de Tres Cruces. Guias da comunidade: Sergio (+54 388 517-0055) ou Claudia (+54 388 469-0944).'),
    [f.catalogo], { contacto: { whatsapp: '+5493885170055', email: 'turismotrescrucesjujuy@gmail.com', web: f.catalogo.url } });
  sumar('pu-o-huancar', 'Huancar de Potrero de la Puna · sandboard', 'oferta', 'abrapampa',
    multi('Médano a veinte minutos al este de Abra Pampa por la RP 72, de tierra. Ideal para sandboard; en el circuito también hay ojos de agua y pesca de truchas con las comunidades de Tabladitas y Rumi Laco.',
          'Sand dune twenty minutes east of Abra Pampa on dirt road RP 72. Great for sandboarding; the circuit also has springs and trout fishing with the Tabladitas and Rumi Laco communities.',
          'Duna a vinte minutos a leste de Abra Pampa pela RP 72, de terra. Ideal para sandboard; no circuito há olhos-d\'água e pesca de trutas com as comunidades de Tabladitas e Rumi Laco.'),
    [f.catalogo], { contacto: { telefono: '+54 3887 491435', web: f.catalogo.url }, buscar: 'Huancar Abra Pampa' });

  /* ── Moverse por la Quebrada ───────────────────────────── */
  sumar('qu-o-tren', 'Tren Solar de la Quebrada', 'oferta', 'volcan',
    multi('Tren a energía solar de Volcán a Tilcara, con paradas en Tumbaya, Purmamarca, Posta de Hornillos y Maimará: 42 km. Con un mismo boleto se baja y se vuelve a subir. Tarifas distintas para jujeños, resto del país y extranjeros: consultar en el sitio oficial.',
          'Solar-powered train from Volcán to Tilcara, stopping at Tumbaya, Purmamarca, Posta de Hornillos and Maimará: 42 km. One ticket lets you hop off and on. Different fares for locals, Argentines and foreigners: check the official site.',
          'Trem a energia solar de Volcán a Tilcara, com paradas em Tumbaya, Purmamarca, Posta de Hornillos e Maimará: 42 km. Com o mesmo bilhete se desce e se volta a subir. Tarifas diferentes para moradores, argentinos e estrangeiros: consulte o site oficial.'),
    [f.tren, f.trenNota], { precio: consultar([f.tren], multi('Con costo; la tarifa depende de la residencia. Consultar en el sitio oficial.', 'Paid; fare depends on residence. Check the official site.', 'Pago; a tarifa depende da residência. Consulte o site oficial.')), buscar: 'Estación Tren Solar Volcán' });

  /* ── Bodegas y tejidos (Ministerio de Producción) ──────── */
  sumar('qu-o-bodegas', 'Bodegas de altura de la Quebrada', 'artesania', 'maimara',
    multi('Diez bodegas registradas entre Maimará (Amanecer Andino, Dupont, La Selestina, El Bayeh), Tilcara (Viñas del Perchel, Toroyoc), Uquía (Viñas de Uquía) y Purmamarca (Don Milagro, Incahuasi). Preguntar a cada una si recibe visitas y degustaciones.',
          'Ten registered wineries in Maimará (Amanecer Andino, Dupont, La Selestina, El Bayeh), Tilcara (Viñas del Perchel, Toroyoc), Uquía (Viñas de Uquía) and Purmamarca (Don Milagro, Incahuasi). Ask each one about visits and tastings.',
          'Dez vinícolas registradas em Maimará (Amanecer Andino, Dupont, La Selestina, El Bayeh), Tilcara (Viñas del Perchel, Toroyoc), Uquía (Viñas de Uquía) e Purmamarca (Don Milagro, Incahuasi). Pergunte a cada uma sobre visitas e degustações.'),
    [f.produccion], { buscar: 'Bodega Maimará' });
  sumar('qu-o-telares', 'Telares Bella Esperanza', 'artesania', 'humahuaca',
    multi('Tejidos en telar, en Humahuaca.', 'Loom weaving in Humahuaca.', 'Tecidos em tear, em Humahuaca.'),
    [f.produccion], { contacto: { whatsapp: '+5493884178020', web: f.produccion.url } });
  sumar('qu-o-tejedores', 'Tejedores Andinos', 'artesania', 'huacalera',
    multi('Tejidos andinos en Huacalera, sobre el Trópico de Capricornio.', 'Andean weaving in Huacalera, on the Tropic of Capricorn.', 'Tecidos andinos em Huacalera, sobre o Trópico de Capricórnio.'),
    [f.produccion], { contacto: { whatsapp: '+5493884405122', web: f.produccion.url } });
  sumar('qu-o-llamanegra', 'Tejidos Llama Negra', 'artesania', 'purmamarca',
    multi('Tejidos de fibra de llama, en Purmamarca.', 'Llama-fibre textiles in Purmamarca.', 'Tecidos de fibra de lhama, em Purmamarca.'),
    [f.produccion], { contacto: { whatsapp: '+5493885047088', web: f.produccion.url } });
  sumar('pu-o-redpuna', 'Red Puna · productos de llama', 'artesania', 'laquiaca',
    multi('Asociación de Pequeños Productores Aborígenes de la Puna: tejidos y productos de llama hechos por las comunidades.',
          'Association of Small Indigenous Producers of the Puna: llama textiles and products made by the communities.',
          'Associação de Pequenos Produtores Indígenas da Puna: tecidos e produtos de lhama feitos pelas comunidades.'),
    [f.produccion], { contacto: { whatsapp: '+5493884037658', web: f.produccion.url } });

  /* ── Fiestas ───────────────────────────────────────────── */
  sumar('pu-o-manka', 'Manka Fiesta · la fiesta de las ollas', 'oferta', 'laquiaca',
    multi('El tercer fin de semana de octubre. Feria de raíz precolombina donde comunidades de la Puna y del sur de Bolivia intercambian ollas de barro, sal, lana y alimentos por trueque. Confirmar las fechas de cada año con el municipio.',
          'Third weekend of October. A fair of pre-Columbian roots where communities from the Puna and southern Bolivia barter clay pots, salt, wool and food. Confirm each year\'s dates with the town.',
          'Terceiro fim de semana de outubro. Feira de raiz pré-colombiana em que comunidades da Puna e do sul da Bolívia trocam panelas de barro, sal, lã e alimentos. Confirme as datas de cada ano com o município.'),
    [f.manka], { precio: { estado: 'gratis', fecha, fuentes: [f.manka], nota: multi('Feria abierta. Lo que se compra o intercambia, aparte.', 'Open fair. Purchases and barter are separate.', 'Feira aberta. Compras e trocas à parte.') } });
  sumar('qu-o-carnaval', 'Carnaval de la Quebrada', 'oferta', 'humahuaca',
    multi('De enero a marzo, con el desentierro del diablo el sábado de carnaval: música, comparsas, harina y albahaca en Humahuaca, Tilcara, Maimará, Uquía y Purmamarca. Antes se le pide permiso a la Pachamama. Reservar alojamiento con mucha anticipación.',
          'January to March, with the devil\'s unearthing on carnival Saturday: music, troupes, flour and basil in Humahuaca, Tilcara, Maimará, Uquía and Purmamarca. Pachamama is asked for permission first. Book lodging well ahead.',
          'De janeiro a março, com o desenterro do diabo no sábado de carnaval: música, comparsas, farinha e manjericão em Humahuaca, Tilcara, Maimará, Uquía e Purmamarca. Antes se pede licença à Pachamama. Reserve hospedagem com muita antecedência.'),
    [f.carnaval]);

  /* ── Yungas: turismo rural comunitario ─────────────────── */
  sumar('yu-o-fuerte', 'Turismo rural comunitario Palma Sola – El Fuerte', 'oferta', 'fuerte',
    multi('Red de familias de los municipios de Palma Sola y El Fuerte, en las sierras de Santa Bárbara. Consultar alojamiento, comidas y recorridos: 03888-470001 (cabina).',
          'Network of families in Palma Sola and El Fuerte, in the Santa Bárbara hills. Ask about lodging, meals and outings: +54 3888 470001 (public phone).',
          'Rede de famílias de Palma Sola e El Fuerte, nas serras de Santa Bárbara. Consulte hospedagem, refeições e passeios: +54 3888 470001 (telefone público).'),
    [f.catalogo], { contacto: { telefono: '+54 3888 470001', web: f.catalogo.url } });
})();
