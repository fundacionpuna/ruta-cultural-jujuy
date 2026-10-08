/* Fuentes públicas consultadas el 05/10/2026. Coordenadas orientativas.
   No se inventan tracks: las rutas nuevas enlazan la fuente y Google Maps. */
'use strict';
(() => {
  const fecha = '2026-10-05';
  const fuente = (titulo, url) => ({ titulo, url });
  const f = {
    museos: fuente('Turismo municipal · Museos', 'https://turismo.sansalvadordejujuy.gob.ar/arte-y-cultura-museos-en-la-ciudad/'),
    centros: fuente('Turismo municipal · Centros culturales', 'https://turismo.sansalvadordejujuy.gob.ar/arte-y-cultura-espacios-y-centros-culturales/'),
    bici: fuente('Turismo municipal · Jujuy en bicicleta', 'https://turismo.sansalvadordejujuy.gob.ar/recorridos-jujuy-en-bicicleta/'),
    yala: fuente('La Ruta Natural · Potrero de Yala', 'https://larutanatural.gob.ar/es/imperdible/102/parque-provincial-potrero-de-yala'),
    maderas: fuente('Comisión de Filmaciones · Las Maderas', 'https://comisiondefilmaciones.jujuy.gob.ar/locaciones/las-maderas/'),
    diques: fuente('Gobierno de Jujuy · Circuito de los diques', 'https://prensa.jujuy.gob.ar/diques/los-diques-los-lugares-mas-elegidos-los-jujenos-y-turistas-n68089'),
    provincia: fuente('Turismo Jujuy · Valles', 'https://www.turismo.jujuy.gob.ar/'),
    calilegua: fuente('Parques Nacionales · Actividades en Calilegua', 'https://www.argentina.gob.ar/node/149076'),
    tarifaCal: fuente('Parques Nacionales · Tarifas de Calilegua', 'https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-calilegua/tarifas'),
    normaCal: fuente('APN · Resolución 132/2026, aplicación condicionada', 'https://www.argentina.gob.ar/normativa/nacional/norma-425804/actualizacion'),
    pozuelos: fuente('Argentina.gob.ar · Caminar en Pozuelos', 'https://www.argentina.gob.ar/viaja-por-argentina/que-hacer/explorar-la-laguna-de-los-pozuelos'),
    tarifaPoz: fuente('Parques Nacionales · Tarifas de Pozuelos', 'https://www.argentina.gob.ar/parquesnacionales/region-noroeste/monumento-natural-laguna-de-los-pozuelos/tarifas'),
    cultura: fuente('Secretaría de Cultura · Museos provinciales', 'https://cultura.jujuy.gob.ar/museos/'),
    huacalera: fuente('Tilcara Trekking · MTB Huacalera', 'https://tilcara-trekking.com/producto/mountain-biker-huacalera/')
  };
  const multi = (es, en, pt) => ({ es, en, pt });
  const referencia = {
    capital: ['San Salvador de Jujuy', -24.185, -65.3, 'valles'],
    carmen: ['El Carmen', -24.4, -65.27, 'valles'],
    yala: ['Yala', -24.11, -65.4, 'valles'],
    palpala: ['Palpalá', -24.25, -65.21, 'valles'],
    tilcara: ['Tilcara', -23.585, -65.395, 'quebrada'],
    parque: ['Parque Nacional Calilegua', -23.75425, -64.85425, 'yungas'],
    pozuelos: ['Rinconada · Laguna de los Pozuelos', -22.35, -66, 'puna']
  };
  function precio(estado, fuentes, nota = multi('Confirmar horarios y condiciones antes de ir.', 'Confirm hours and conditions before visiting.', 'Confirme horários e condições antes de visitar.')) {
    return { estado, fecha, fuentes, nota };
  }
  function sumar(id, nombre, categoria, lugar, descripcion, fuentes, extra = {}) {
    const [localidad, lat, lng, region] = referencia[lugar];
    const direccion = extra.direccion || '';
    const l = { id, nombre, categoria, localidad, lat, lng, region, descripcion,
      contacto: { web: fuentes[0].url }, mapas_busqueda: `${nombre}, ${direccion}, ${localidad}, Jujuy, Argentina`,
      relevamiento: { estado: 'relevado', fecha, ubicacion: 'referencia', fuentes,
        referencia_coordenadas: 'Referencia de localidad preexistente; pendiente de geolocalizar el acceso.' },
      precio: precio('consultar', fuentes), ...extra };
    window.LUGARES.push(l);
    return l;
  }
  // Arte, ciencia y lectura: planes breves para días de lluvia o salidas en familia.
  [
    ['mendoza', 'Museo de Bellas Artes Jorge Augusto Mendoza', 'Av. Urquiza 410', multi('Una salida de arte.', 'An art outing.', 'Um passeio de arte.')],
    ['macedonio', 'Casa Macedonio Graz', 'Lamadrid y Güemes', multi('Visitar una casa museo.', 'Visit a house museum.', 'Visite uma casa museu.')],
    ['recrear', 'Museo Fundación Recrear', 'Otero 220', multi('Museo taller. Reservar: 388 4230405.', 'Workshop museum. Book: 388 4230405.', 'Museu oficina. Reserve: 388 4230405.')],
    ['darwin', 'Museo Carlos Darwin', 'Canónigo Gorriti 343', multi('Ciencias naturales. Reservar: 388 4233599.', 'Natural sciences. Book: 388 4233599.', 'Ciências naturais. Reserve: 388 4233599.')],
    ['unju', 'Museo de Mineralogía y Paleontología UNJu', 'Av. Bolivia 1661', multi('Descubrir minerales y fósiles.', 'Discover minerals and fossils.', 'Descubra minerais e fósseis.')]
  ].forEach(([id, nombre, direccion, descripcion]) => sumar(`va-a-${id}`, nombre, 'punto', 'capital', descripcion, [f.museos], { direccion, precio: precio('gratis', [f.museos]) }));
  [
    ['culturarte', 'Culturarte', 'Sarmiento y San Martín', multi('Ver exposiciones.', 'See exhibitions.', 'Veja exposições.')],
    ['caja', 'Centro de Arte Joven Andino · CAJA', 'Alvear 534', multi('Conocer arte joven.', 'Discover young artists.', 'Conheça arte jovem.')],
    ['letras', 'Casa de las Letras', 'Belgrano 1327', multi('Un paseo literario.', 'A literary outing.', 'Um passeio literário.')],
    ['infinito', 'Infinito por Descubrir', 'Ciudad Cultural, Alto Padilla', multi('Consultar propuestas y edades.', 'Ask about activities and ages.', 'Consulte atividades e idades.')],
    ['tizon', 'Centro Cultural Héctor Tizón', 'Hipólito Yrigoyen y Junín', multi('Consultar la programación.', 'Check the programme.', 'Consulte a programação.')],
    ['biblioteca', 'Biblioteca Popular de Jujuy', 'Belgrano 652', multi('Leer en la ciudad.', 'Read in the city.', 'Leia na cidade.')],
    ['ciudad', 'Ciudad Cultural', 'Alto Padilla', multi('Pasear al aire libre.', 'Walk outdoors.', 'Passeie ao ar livre.')]
  ].forEach(([id, nombre, direccion, descripcion]) => sumar(`va-a-${id}`, nombre, 'punto', 'capital', descripcion, [f.centros], { direccion, precio: precio('gratis', [f.centros], multi('Ingreso al espacio. Confirmar costo de eventos y talleres.', 'Venue admission. Check event and workshop fees.', 'Entrada no espaço. Consulte valores de eventos e oficinas.')) }));
  const dist = (km, alcance) => ({ km, alcance, fuente: f.bici });
  sumar('va-b-xibi', 'Parque Xibi Xibi · paseo en bici', 'bici', 'capital', multi('Pedalear y observar aves junto al río. Alquiler aparte.', 'Cycle and watch birds by the river. Rental extra.', 'Pedale e observe aves junto ao rio. Aluguel à parte.'), [f.bici], { distancia_publicada: dist(2, 'tramo') });
  sumar('va-b-rio', 'Parque de la Memoria hacia Río Blanco', 'bici', 'capital', multi('Circuito urbano hacia el santuario. Comparte tramos con tránsito.', 'Urban route towards the sanctuary. Some sections have traffic.', 'Circuito urbano até o santuário. Há trechos com trânsito.'), [f.bici]);
  sumar('va-b-yala', 'Ciudad Cultural a Yala · en bici', 'bici', 'capital', multi('Salida hacia Yala por RN 9. Ruta con tránsito.', 'Ride towards Yala along RN 9. Road traffic.', 'Pedale até Yala pela RN 9. Via com trânsito.'), [f.bici], { distancia_publicada: dist(11, 'tramo') });
  sumar('va-b-almona', 'Cuyaya a La Almona · en bici', 'bici', 'capital', multi('Tramo por RP 2 con tránsito.', 'Section along RP 2 with traffic.', 'Trecho pela RP 2 com trânsito.'), [f.bici], { distancia_publicada: dist(1.8, 'tramo') });
  sumar('va-a-maderas', 'Dique Las Maderas · paisaje y deportes náuticos', 'punto', 'carmen', multi('Salida al dique. Consultar prestadores de canotaje y paseos náuticos.', 'Reservoir outing. Ask canoeing and boat operators.', 'Passeio ao reservatório. Consulte operadores de canoagem e barcos.'), [f.maderas], { direccion: 'Dique Las Maderas' });
  sumar('va-a-alisos', 'Dique Los Alisos · paseo de paisaje', 'punto', 'palpala', multi('Conocer el paisaje del circuito de los diques. Consultar accesos habilitados.', 'Explore the reservoir landscape. Check open access points.', 'Conheça a paisagem dos reservatórios. Consulte acessos abertos.'), [f.diques]);
  sumar('va-a-mirador', 'Mirador del Cristo de la Hermandad', 'punto', 'capital', multi('Ver la ciudad desde el cerro Las Rosas.', 'View the city from Las Rosas hill.', 'Veja a cidade do cerro Las Rosas.'), [f.provincia], { direccion: 'Cerro Las Rosas' });
  // Mejorar fichas existentes sin duplicarlas.
  for (const id of ['va-03', 'va-s1']) {
    const l = window.LUGARES.find(x => x.id === id);
    l.relevamiento = { estado: 'relevado', fecha, ubicacion: 'referencia', fuentes: [f.yala], referencia_coordenadas: 'Referencia del parque; confirmar inicio del recorrido.' };
    l.mapas_busqueda = 'Parque Provincial Potrero de Yala, Jujuy, Argentina';
    l.precio = precio('consultar', [f.yala]);
    l.descripcion = multi('Caminatas, aves y lagunas cerca de la ciudad. Consultar senderos habilitados y estado de la RP 4, especialmente con lluvia.', 'Walks, birds and lagoons near the city. Check open trails and RP 4 conditions, especially after rain.', 'Caminhadas, aves e lagoas perto da cidade. Consulte trilhas abertas e condições da RP 4, sobretudo com chuva.');
  }
  const calPrecio = precio('consultar', [f.tarifaCal, f.normaCal], multi('APN publica acceso gratuito, pero la resolución de 2026 prevé cobro cuando se implemente. Confirmar con el parque.', 'APN lists free access, but the 2026 resolution provides for charging upon implementation. Check with the park.', 'APN informa acesso gratuito, mas a resolução de 2026 prevê cobrança após implementação. Confirme com o parque.'));
  const calContacto = { email: 'calilegua@apn.gob.ar', whatsapp: '+5493886578465', web: f.calilegua.url };
  const calNota = multi('Registro previo obligatorio para caminar. Consultar apertura.', 'Prior registration required for walking. Check opening.', 'Cadastro prévio obrigatório para caminhar. Consulte abertura.');
  [
    ['nuestra', 'Nuestra Selva', .623, 'total', 'media', '1 h', multi('Interpretación guaraní.', 'Guarani interpretation.', 'Interpretação guarani.')],
    ['somos', 'Somos Selva', .229, 'total', 'facil', '20 min', multi('Recorrido accesible.', 'Accessible walk.', 'Percurso acessível.')],
    ['cielo', 'Bosque del Cielo', .592, 'ida', 'facil', '25 min', multi('Bosque montano y mirador.', 'Mountain forest and lookout.', 'Bosque montano e mirante.')]
  ].forEach(([id, nombre, km, alcance, dificultad, tiempo, descripcion]) => sumar(`yu-a-${id}`, nombre, 'sendero', 'parque', descripcion, [f.calilegua], { dificultad, duracion: multi(tiempo, tiempo, tiempo), distancia_publicada: { km, alcance, fuente: f.calilegua }, precio: calPrecio, contacto: calContacto, condiciones: calNota }));
  sumar('yu-b-rp83', 'Calilegua · RP 83 en bicicleta', 'bici', 'parque', multi('Ripio y cornisa con tránsito: requiere atención.', 'Gravel cliffside road with traffic: take care.', 'Estrada de cascalho e cornija com trânsito: atenção.'), [f.calilegua], { distancia_publicada: { km: 23, alcance: 'tramo', fuente: f.calilegua }, precio: calPrecio, contacto: calContacto });
  const seres = window.LUGARES.find(l => l.id === 'yu-r05');
  Object.assign(seres, { categoria: 'sendero', dificultad: 'facil', duracion: multi('30 min', '30 min', '30 min'), distancia_publicada: { km: .304, alcance: 'ida', fuente: f.calilegua }, precio: calPrecio, condiciones: calNota, contacto: calContacto });
  seres.relevamiento.fuentes.push(f.calilegua);
  for (const [id, dificultad, tiempo, km, alcance] of [['yu-s1', 'media', '2 h', 3.32, 'total'], ['yu-s2', 'facil', '1 h 30 min', 1.8, 'ida'], ['yu-s3', 'media', '3 h', 2.17, 'ida']]) {
    const l = window.LUGARES.find(x => x.id === id);
    Object.assign(l, { dificultad, duracion: multi(tiempo, tiempo, tiempo), distancia_publicada: { km, alcance, fuente: f.calilegua }, precio: calPrecio, contacto: calContacto, condiciones: id === 'yu-s3' ? multi('Cerrado en verano. Registro previo obligatorio.', 'Closed in summer. Prior registration required.', 'Fechado no verão. Cadastro prévio obrigatório.') : calNota });
  }
  sumar('pu-a-pozuelos', 'Pozuelos · caminata y observación de aves', 'sendero', 'pozuelos', multi('Caminar por el sector sur, cerca del río Cincel. La distancia al agua cambia con las lluvias.', 'Walk in the southern sector near Cincel river. Water distance varies with rain.', 'Caminhe no setor sul, junto ao rio Cincel. A distância até a água varia com as chuvas.'), [f.pozuelos, f.tarifaPoz], { precio: precio('gratis', [f.tarifaPoz], multi('Acceso al monumento natural. Transporte y excursiones aparte.', 'Natural monument admission. Transport and tours extra.', 'Entrada no monumento natural. Transporte e excursões à parte.')) });
  const poz = window.LUGARES.find(l => l.id === 'pu-04');
  poz.precio = precio('gratis', [f.tarifaPoz]);
  sumar('qu-b-huacalera', 'Huacalera · mountain bike con guía', 'bici', 'tilcara', multi('Excursión de Tilcara Trekking: traslado 4×4 y descenso en bicicleta. Reservar y confirmar condiciones.', 'Tilcara Trekking tour: 4×4 transfer and cycling descent. Book and confirm conditions.', 'Excursão Tilcara Trekking: traslado 4×4 e descida de bicicleta. Reserve e confirme condições.'), [f.huacalera], { dificultad: 'media', duracion: multi('6 h · programa completo', '6 h · full programme', '6 h · programa completo'), distancia_publicada: { km: 18, alcance: 'tramo', fuente: f.huacalera }, precio: precio('costo', [f.huacalera]), contacto: { web: f.huacalera.url, whatsapp: '+5493885054755' } });
  sumar('qu-a-soto', 'Museo Soto Avendaño', 'punto', 'tilcara', multi('Escultura e historia en Tilcara. Cierra los lunes.', 'Sculpture and history in Tilcara. Closed Mondays.', 'Escultura e história em Tilcara. Fecha às segundas.'), [f.cultura], { direccion: 'Belgrano s/n', precio: precio('gratis', [f.cultura]) });
  window.LUGARES.find(l => l.id === 'qu-08').precio = precio('gratis', [f.cultura]);
  window.CATEGORIAS.bici = { nombre: multi('Bicicleta', 'Cycling', 'Bicicleta'), boton: multi('En bici', 'Cycling', 'De bicicleta'), icono: 'bici' };
  window.CATEGORIAS.sendero.boton = multi('Trekking y caminatas', 'Hikes and walks', 'Trilhas e caminhadas');
  const textos = {
    es: { gratis: 'Gratis', costo: 'Con costo', consultar: 'Consultar costo', precio: 'Costo', ida: 'ida', total: 'total', tramo: 'tramo publicado', sinTrack: 'Recorrido sin trazado GPS comprobado. Consultá el acceso en la fuente.', datoConsultar: 'Consultar', fotoOriginal: 'Foto original', sinCambios: 'Sin modificaciones' },
    en: { gratis: 'Free', costo: 'Paid', consultar: 'Check cost', precio: 'Cost', ida: 'one way', total: 'total', tramo: 'published section', sinTrack: 'Route without a checked GPS track. Consult the source for access.', datoConsultar: 'Check', fotoOriginal: 'Original photo', sinCambios: 'Unmodified' },
    pt: { gratis: 'Grátis', costo: 'Pago', consultar: 'Consultar custo', precio: 'Custo', ida: 'ida', total: 'total', tramo: 'trecho publicado', sinTrack: 'Percurso sem traçado GPS conferido. Consulte o acesso na fonte.', datoConsultar: 'Consultar', fotoOriginal: 'Foto original', sinCambios: 'Sem modificações' }
  };
  for (const idioma of ['es', 'en', 'pt']) Object.assign(window.TEXTOS[idioma], textos[idioma]);
})();
