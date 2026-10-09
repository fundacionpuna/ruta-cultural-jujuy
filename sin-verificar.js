/* Emprendimientos privados sin verificar.

   Salieron de fuentes públicas (sitios, notas, guías) y nadie los confirmó
   por el formulario de la Fundación. La ficha y la lista dicen «Sin
   verificar», no muestran el teléfono, el WhatsApp ni el correo (para no
   mandar a nadie a un número que quizás ya no es), y ofrecen el enlace
   «¿Es tu emprendimiento? Confirmá tus datos». Su web y su Instagram
   públicos sí quedan.

   Cuando un emprendimiento confirma sus datos, se borra su id de esta
   lista y vuelven sus botones de contacto. Va después de los otros
   archivos de datos, porque los lugares tienen que existir. */
(() => {
  const SIN_VERIFICAR = [
    // dónde dormir
    'pu-r01', 'pu-r02', 'yu-r01', 'yu-r02',
    // dónde comer
    'qu-r03', 'qu-o-pedropan', 'pu-o-marques',
    // paseos y excursiones
    'qu-r01', 'qu-r02', 'qu-r04', 'qu-r05', 'qu-b-huacalera', 'yu-r04', 'pu-o-huancar',
    // artesanías y productos
    'qu-r06', 'va-r01', 'va-r03', 'va-r04', 'qu-o-telares', 'qu-o-tejedores', 'qu-o-llamanegra'
  ];
  for (const l of window.LUGARES) {
    if (SIN_VERIFICAR.includes(l.id)) l.verificado = false;
  }
})();
