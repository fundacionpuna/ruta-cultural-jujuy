/* Primera selección pública, consultada el 5 de octubre de 2026.
   Relevado NO significa verificado por Fundación Puna ni asociado al proyecto.
   Los puntos son referencias de localidad, no direcciones de los prestadores.
   No se importan reseñas, puntuaciones ni fotografías de Google Maps.
   Los ejemplos originales quedan en datos.js para conservar el prototipo. */
'use strict';

(() => {
  const fuentes = {
    produccion: { titulo: 'Ministerio de Desarrollo Económico y Producción de Jujuy', url: 'https://www.produccion.jujuy.gob.ar/?page_id=717' },
    purmamarca: { titulo: 'Municipalidad de Purmamarca · Qué hacer', url: 'https://purmamarca.gob.ar/que-hacer-en-purmamarca/' },
    comunitario: { titulo: 'Turismo Jujuy · Catálogo de turismo rural comunitario', url: 'https://www.turismo.jujuy.gob.ar/wp-content/uploads/catalogo-turismo-rural-comunitario-11-de-diciembre.pdf' },
    alfarcito: { titulo: 'Visit Argentina · Turismo comunitario en Alfarcito', url: 'https://www.argentina.travel/novedades/todo-lo-que-tenes-que-saber-sobre-turismo-comunitario-en-argentina' },
    barrancas: { titulo: 'Argentina.gob.ar · Patrimonio de Barrancas', url: 'https://www.argentina.gob.ar/node/470640' },
    pastos: { titulo: 'Hotel Pastos Chicos · Sitio del establecimiento', url: 'https://www.pastoschicos.com/index-en.html' },
    unquillar: { titulo: 'Comisión de Filmaciones de Jujuy · El Unquillar', url: 'https://comisiondefilmaciones.jujuy.gob.ar/empresa-servicios/el-unquillar/' },
    carola: { titulo: 'Comisión de Filmaciones de Jujuy · Hospedaje Tía Carola', url: 'https://comisiondefilmaciones.jujuy.gob.ar/empresa-servicios/hospedaje-tia-carola/' },
    sol: { titulo: 'Posada del Sol · Sitio del establecimiento', url: 'https://posadadelsoljujuy.com.ar/en/home-english/' },
    calilegua: { titulo: 'Parques Nacionales · Servicios en Calilegua', url: 'https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-calilegua/servicios' },
    panorama: { titulo: 'Parques Nacionales · Cultura y actividades en Calilegua', url: 'https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-calilegua/panoramica' },
    feria: { titulo: 'El Tribuno de Jujuy · Feria del Pan Casero (6/10/2025)', url: 'https://eltribunodejujuy.com/informacion-general/2025-10-6-0-0-0-feria-que-une-generaciones-folclore-y-pan-casero-en-yala' }
  };
  // Referencias ya usadas por el mapa; dos localidades adicionales se documentan aquí.
  const localidades = {
    susques: ['Susques', -23.4000, -66.3700],
    barrancas: ['Barrancas · Abdón Castro Tolay', -23.34201, -66.0914, 'https://mapcarta.com/es/20079762'],
    trescruces: ['Tres Cruces', -22.91918, -65.58869, 'https://mapcarta.com/20013334'],
    purmamarca: ['Purmamarca', -23.7450, -65.5000],
    tilcara: ['Tilcara', -23.5850, -65.3950],
    capital: ['San Salvador de Jujuy', -24.1850, -65.3000],
    perico: ['Perico', -24.3800, -65.1100],
    carmen: ['El Carmen', -24.4000, -65.2700],
    palpala: ['Palpalá', -24.2500, -65.2100],
    yala: ['Yala', -24.1100, -65.4000],
    sanfrancisco: ['San Francisco', -23.6200, -64.9800],
    libertador: ['Libertador General San Martín', -23.8100, -64.7900],
    calilegua: ['Calilegua', -23.7500, -64.8500],
    parque: ['Parque Nacional Calilegua · Aguas Negras', -23.75425, -64.85425],
    santaana: ['Santa Ana', -23.36392, -64.97712]
  };
  const propuestas = [];
  function sumar(id, nombre, region, categoria, localidad, descripciones, fuente, contacto = {}, direccion = '', consulta = '') {
    const [pueblo, lat, lng, fuenteCoordenadas] = localidades[localidad];
    propuestas.push({
      id, nombre, region, categoria, localidad: pueblo, lat, lng,
      descripcion: { es: descripciones[0], en: descripciones[1], pt: descripciones[2] },
      contacto, direccion,
      mapas_busqueda: consulta || `${nombre}, ${direccion}, ${pueblo}, Jujuy, Argentina`,
      relevamiento: {
        estado: 'relevado', fecha: '2026-10-05', ubicacion: 'referencia',
        fuentes: (Array.isArray(fuente) ? fuente : [fuente]).map(k => fuentes[k]),
        referencia_coordenadas: fuenteCoordenadas || 'Referencia preexistente en datos.js / senderos.js; pendiente de geolocalización del prestador'
      }
    });
  }

  // Puna: alojamientos, redes comunitarias y patrimonio.
  sumar('pu-r01', 'Hotel Pastos Chicos', 'puna', 'hostal', 'susques',
    ['Hospedaje y restaurante sobre la Ruta Nacional 52.', 'Lodging and restaurant on National Route 52.', 'Hospedagem e restaurante na Ruta Nacional 52.'], 'pastos',
    { telefono: '+5493874874709', email: 'info@pastoschicos.com.ar', web: 'https://www.pastoschicos.com/index-en.html' }, 'Ruta Nacional 52');
  sumar('pu-r02', 'Hostería El Unquillar', 'puna', 'hostal', 'susques',
    ['Alojamiento en Susques. Consultá disponibilidad antes de viajar.', 'Lodging in Susques. Ask about availability before travelling.', 'Hospedagem em Susques. Consulte disponibilidade antes de viajar.'], 'unquillar',
    { telefono: '+5493884085671', email: 'hotel.elunquillar@gmail.com' }, 'Ruta 52 km 219');
  sumar('pu-r03', 'Cooperativa Espejo de Sal', 'puna', 'oferta', 'susques',
    ['Red de turismo comunitario: artesanías, comidas, alojamiento y guiados. La propuesta abarca varias comunidades; coordiná el lugar de encuentro.', 'Community tourism network: crafts, food, lodging and guided visits. The network spans several communities; arrange a meeting place.', 'Rede de turismo comunitário: artesanato, alimentação, hospedagem e visitas guiadas. Abrange várias comunidades; combine o ponto de encontro.'], ['alfarcito', 'comunitario'],
    { email: 'espejodesal@gmail.com' }, '', 'Cooperativa Espejo de Sal, Jujuy, Argentina');
  sumar('pu-r04', 'Centro de Interpretación Arqueológica de Barrancas', 'puna', 'punto', 'barrancas',
    ['Patrimonio prehispánico y arte rupestre. Consultá por recorridos con guías locales en la reserva.', 'Pre-Hispanic heritage and rock art. Ask about visits with local guides in the reserve.', 'Patrimônio pré-hispânico e arte rupestre. Consulte passeios com guias locais na reserva.'], 'barrancas');
  sumar('pu-r05', 'Turismo comunitario de Tres Cruces', 'puna', 'oferta', 'trescruces',
    ['Consultas locales para conocer Inca Cueva y el Puente del Diablo.', 'Local enquiries for visiting Inca Cueva and Puente del Diablo.', 'Informações locais para conhecer Inca Cueva e Puente del Diablo.'], 'comunitario',
    { email: 'turismotrescrucesjujuy@gmail.com' }, '', 'Tres Cruces, Jujuy, Argentina');
  sumar('pu-r06', 'Turismo rural comunitario de Susques', 'puna', 'oferta', 'susques',
    ['Consultas municipales sobre propuestas en Susques, Huancar, Pastos Chicos y Puesto Sey.', 'Municipal enquiries about activities in Susques, Huancar, Pastos Chicos and Puesto Sey.', 'Informações municipais sobre propostas em Susques, Huancar, Pastos Chicos e Puesto Sey.'], 'comunitario',
    { telefono: '+543887490221' }, '', 'Comisión Municipal de Susques, Jujuy, Argentina');

  // Quebrada: talleres, cocina y experiencias publicadas por el municipio.
  sumar('qu-r01', 'Cultura viva con Maby', 'quebrada', 'oferta', 'purmamarca',
    ['Clases de cerámica con técnicas ancestrales.', 'Ceramics classes using ancestral techniques.', 'Aulas de cerâmica com técnicas ancestrais.'], 'purmamarca',
    { telefono: '+5493884970366', instagram: 'cultura_viva_con_maby' });
  sumar('qu-r02', 'La Pushka', 'quebrada', 'oferta', 'purmamarca',
    ['Taller en telar. Consultá fechas y cupos.', 'Loom weaving workshop. Ask about dates and spaces.', 'Oficina de tear. Consulte datas e vagas.'], 'purmamarca',
    { telefono: '+5493886857888' });
  sumar('qu-r03', 'Lo de Tere', 'quebrada', 'restaurante', 'purmamarca',
    ['Cocina criolla andina. Consultá atención y reservas.', 'Andean Creole cooking. Ask about opening and reservations.', 'Cozinha crioula andina. Consulte atendimento e reservas.'], 'purmamarca',
    { telefono: '+5493884131090' });
  sumar('qu-r04', 'Wasi Experiencias', 'quebrada', 'oferta', 'purmamarca',
    ['Experiencias locales. Consultá los recorridos disponibles.', 'Local experiences. Ask about available outings.', 'Experiências locais. Consulte os passeios disponíveis.'], 'purmamarca',
    { telefono: '+5493884555397' });
  sumar('qu-r05', 'Aniacho · Turismo alternativo', 'quebrada', 'oferta', 'purmamarca',
    ['Turismo alternativo. Coordiná actividades y encuentro.', 'Alternative tourism. Arrange activities and a meeting place.', 'Turismo alternativo. Combine atividades e ponto de encontro.'], 'purmamarca',
    { telefono: '+5493884092323' });
  sumar('qu-r06', 'Alfajores El Molle', 'quebrada', 'artesania', 'tilcara',
    ['Alfajores y galletas artesanales.', 'Artisan alfajores and biscuits.', 'Alfajores e biscoitos artesanais.'], 'produccion',
    { telefono: '+5493884955614', email: 'alfajoreselmolle@hotmail.com' }, 'Belgrano 417');

  // Valles: producción local. No se presuponen visitas a fábricas o talleres.
  sumar('va-r01', 'Dulces Artesanales Jusuy', 'valles', 'artesania', 'capital',
    ['Mermeladas, escabeches y chutneys.', 'Jams, pickled preserves and chutneys.', 'Geleias, conservas e chutneys.'], 'produccion',
    { telefono: '+5493885314161', email: 'jusuyalimentos@gmail.com' }, 'Av. Balbín 318, Bajo La Viña');
  sumar('va-r02', 'Cooperativa Pampa Dulce', 'valles', 'artesania', 'perico',
    ['Pulpas, jugos y mermeladas.', 'Fruit pulp, juices and jams.', 'Polpas, sucos e geleias.'], 'produccion',
    { telefono: '+5493884071165', email: 'cooperativapampadulce@gmail.com' }, 'Mariano Moreno 165');
  sumar('va-r03', 'El Chucupal', 'valles', 'artesania', 'carmen',
    ['Frutas en almíbar, mermeladas y dulces.', 'Fruit in syrup, jams and preserves.', 'Frutas em calda, geleias e doces.'], 'produccion',
    { telefono: '+5493884244510', email: 'jcarrizo@chucupal.com' }, 'Ruta 42 s/n');
  sumar('va-r04', 'Kunza Arte Pop Andino', 'valles', 'artesania', 'capital',
    ['Cerámica decorativa y utilitaria.', 'Decorative and functional ceramics.', 'Cerâmica decorativa e utilitária.'], 'produccion',
    { telefono: '+5491131198708', email: 'infokunza@gmail.com' }, 'Salta 851');
  sumar('va-r05', 'Hilandería Warmi', 'valles', 'artesania', 'palpala',
    ['Textiles de llama, oveja y algodón.', 'Llama, sheep wool and cotton textiles.', 'Têxteis de lhama, ovelha e algodão.'], 'produccion',
    { telefono: '+5493885878910', email: 'gaston.arostegui@warmi.org' }, 'Parque Industrial Ing. Snopek 118, Fracción D');
  sumar('va-r06', 'Feria del Pan Casero, Artesanías y Plantas', 'valles', 'oferta', 'yala',
    ['Feria de productores locales junto al camping El Refugio. Confirmá la próxima jornada antes de ir.', 'Local producers fair beside El Refugio campsite. Confirm the next event before visiting.', 'Feira de produtores locais junto ao camping El Refugio. Confirme o próximo encontro antes de ir.'], 'feria',
    {}, 'Predio sobre Ruta Nacional 9, junto al camping El Refugio');

  // Yungas: hospedajes, cultura comunitaria y actividades del parque.
  sumar('yu-r01', 'Hospedaje Tía Carola', 'yungas', 'hostal', 'sanfrancisco',
    ['Hospedaje en San Francisco. Consultá disponibilidad y acceso.', 'Lodging in San Francisco. Ask about availability and access.', 'Hospedagem em San Francisco. Consulte disponibilidade e acesso.'], 'carola',
    { telefono: '+5493886659634', email: 'info@tiacarola.com.ar' });
  sumar('yu-r02', 'Posada del Sol', 'yungas', 'hostal', 'libertador',
    ['Hospedaje en Libertador General San Martín.', 'Lodging in Libertador General San Martín.', 'Hospedagem em Libertador General San Martín.'], 'sol',
    { telefono: '+5493886450279', email: 'reservas@posadadelsoljujuy.com.ar', web: 'https://posadadelsoljujuy.com.ar/' }, 'Los Ceibos esquina Pucará');
  sumar('yu-r03', 'Museo Ava Guaraní · Ñande Reko', 'yungas', 'oferta', 'calilegua',
    ['Artesanías y cultura de la comunidad Cuape Yayembutate. Coordiná la visita directamente con la comunidad.', 'Crafts and culture of the Cuape Yayembutate community. Arrange your visit directly with the community.', 'Artesanato e cultura da comunidade Cuape Yayembutate. Combine a visita diretamente com a comunidade.'], 'panorama',
    { whatsapp: '5493886503087', instagram: 'museo_nandereko.calilegua' });
  sumar('yu-r04', 'Guiados y observación de aves · Calilegua', 'yungas', 'oferta', 'parque',
    ['Consultá al parque por guías habilitados y observación de aves. El contacto corresponde a Parques Nacionales.', 'Ask the park about authorised guides and birdwatching. This contact belongs to the National Parks administration.', 'Consulte o parque sobre guias habilitados e observação de aves. O contato é da administração de Parques Nacionais.'], 'calilegua',
    { whatsapp: '5493886578465', email: 'calilegua@apn.gob.ar' }, '', 'Centro de Visitantes Aguas Negras, Parque Nacional Calilegua, Jujuy');
  sumar('yu-r05', 'Seres Fantásticos · Calilegua', 'yungas', 'punto', 'parque',
    ['Recorrido con esculturas inspiradas en leyendas locales. Consultá al parque por el acceso y el estado del recorrido.', 'Walk with sculptures inspired by local legends. Ask the park about access and current trail conditions.', 'Passeio com esculturas inspiradas em lendas locais. Consulte o parque sobre acesso e condições do percurso.'], 'panorama',
    { email: 'calilegua@apn.gob.ar' }, '', 'Sendero Seres Fantásticos, Parque Nacional Calilegua, Jujuy');
  sumar('yu-r06', 'Red de Turismo del Alto Valle', 'yungas', 'oferta', 'santaana',
    ['Propuestas comunitarias en Santa Ana, Caspalá y Valle Colorado. Consultá a Turismo Jujuy para coordinar.', 'Community activities in Santa Ana, Caspalá and Valle Colorado. Contact Jujuy Tourism to arrange a visit.', 'Propostas comunitárias em Santa Ana, Caspalá e Valle Colorado. Consulte Turismo Jujuy para combinar.'], 'comunitario',
    { email: 'jujuy.turismorural@gmail.com' }, '', 'Santa Ana, Valle Grande, Jujuy, Argentina');

  window.CATEGORIAS.artesania = {
    boton: { es: 'Dónde comprar', en: 'Where to shop', pt: 'Onde comprar' },
    nombre: { es: 'Artesanías y productos locales', en: 'Crafts and local products', pt: 'Artesanato e produtos locais' },
    icono: 'bolsa'
  };
  const textos = {
    es: {
      avisoFuerte: 'Relevamiento en curso:',
      avisoResto: 'las fichas nuevas citan fuentes públicas; todavía no están verificadas por Fundación Puna. Los pines orientativos indican la localidad, no la dirección exacta.',
      relevado: 'Relevado en fuentes públicas',
      pendienteVerificacion: 'Pendiente de verificación por Fundación Puna. Confirmá disponibilidad, atención y lugar de encuentro antes de ir.',
      ubicacionOrientativa: 'Ubicación orientativa: el pin es una referencia de la localidad o zona. No indica la dirección exacta ni el inicio de un recorrido.',
      fuente: 'Fuentes consultadas', fechaConsulta: 'Consulta', direccionPublicada: 'Dirección publicada',
      buscarMaps: 'Buscar en Google Maps →', orientativo: 'Ubicación orientativa',
      consultaCompra: 'Consultá cómo comprar y si reciben visitas antes de ir.',
      propuestasLocalidad: 'Propuestas en esta localidad',
      mensajeWhatsapp: n => `Hola, encontré ${n} en Vamo Pue, de Fundación Puna, y quería consultar disponibilidad y ubicación.`,
      asuntoCorreo: n => `Consulta desde Vamo Pue: ${n}`
    },
    en: {
      avisoFuerte: 'Research in progress:',
      avisoResto: 'new entries cite public sources and have not yet been verified by Fundación Puna. Approximate pins show the locality, not the exact address.',
      relevado: 'Researched using public sources',
      pendienteVerificacion: 'Pending verification by Fundación Puna. Confirm availability, opening and meeting place before visiting.',
      ubicacionOrientativa: 'Approximate location: the pin is a locality or area reference. It is not the exact address or the start of a trail.',
      fuente: 'Sources consulted', fechaConsulta: 'Consulted', direccionPublicada: 'Published address',
      buscarMaps: 'Search Google Maps →', orientativo: 'Approximate location',
      consultaCompra: 'Ask how to buy and whether visitors are welcome before going.',
      propuestasLocalidad: 'Activities in this locality',
      mensajeWhatsapp: n => `Hello, I found ${n} on Vamo Pue, by Fundación Puna, and would like to ask about availability and location.`,
      asuntoCorreo: n => `Enquiry from Vamo Pue: ${n}`
    },
    pt: {
      avisoFuerte: 'Levantamento em andamento:',
      avisoResto: 'as novas fichas citam fontes públicas e ainda não foram verificadas pela Fundación Puna. Os pontos aproximados indicam a localidade, não o endereço exato.',
      relevado: 'Identificado em fontes públicas',
      pendienteVerificacion: 'Pendente de verificação pela Fundación Puna. Confirme disponibilidade, atendimento e ponto de encontro antes de ir.',
      ubicacionOrientativa: 'Localização aproximada: o ponto é uma referência da localidade ou zona. Não indica o endereço exato nem o início de uma trilha.',
      fuente: 'Fontes consultadas', fechaConsulta: 'Consulta', direccionPublicada: 'Endereço publicado',
      buscarMaps: 'Buscar no Google Maps →', orientativo: 'Localização aproximada',
      consultaCompra: 'Consulte como comprar e se recebem visitantes antes de ir.',
      propuestasLocalidad: 'Propostas nesta localidade',
      mensajeWhatsapp: n => `Olá, encontrei ${n} no Vamo Pue, da Fundación Puna, e gostaria de consultar disponibilidade e localização.`,
      asuntoCorreo: n => `Consulta pelo Vamo Pue: ${n}`
    }
  };
  Object.entries(textos).forEach(([idioma, contenido]) => Object.assign(window.TEXTOS[idioma], contenido));
  window.LUGARES_MUESTRA = window.LUGARES.filter(l => l.muestra);
  window.LUGARES = window.LUGARES.filter(l => !l.muestra).concat(propuestas);
})();
