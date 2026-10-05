/* Fotografías con licencia comprobada en la página individual de Commons.
   Se muestran completas, sin recortar ni modificar. Requieren conexión. */
'use strict';
(() => {
  const poner = (ids, archivo, autor, version, url) => {
    const foto = { url: url || `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(archivo)}`,
      autor, licencia: `CC BY-SA ${version}`, licencia_url: `https://creativecommons.org/licenses/by-sa/${version}/`,
      fuente: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(archivo)}`,
      fecha_consulta: '2026-10-05', modificaciones: 'ninguna' };
    ids.forEach(id => { const l = window.LUGARES.find(x => x.id === id); if (l) l.foto = { ...foto, alt: l.nombre }; });
  };
  poner(['va-03', 'va-s1'], 'Lagunas de Yala, 1.jpg', 'Luis Fernando Flores LAB', '4.0', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lagunas_de_Yala%2C_1.jpg/960px-Lagunas_de_Yala%2C_1.jpg');
  poner(['pu-01'], 'Salinas grandes - Jujuy.jpg', 'TitiNicola', '4.0', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Salinas_grandes_-_Jujuy.jpg');
  poner(['qu-01'], 'Cerro de los siete colores - Purmamarca.jpg', 'Littletroll', '4.0', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cerro_de_los_siete_colores_-_Purmamarca.jpg');
  poner(['yu-s2'], 'Sendero El Pedemontano.jpg', 'Tencho', '3.0', 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Sendero_El_Pedemontano.jpg');
  poner(['va-05'], 'Dique La Ciénaga 077.JPG', 'Claudio Elias', '3.0', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Dique_La_Ci%C3%A9naga_077.JPG');
  poner(['pu-04', 'pu-a-pozuelos'], 'Laguna de Pozuelos.jpg', 'Manfred Fuks', '4.0', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Laguna_de_Pozuelos.jpg');
})();
