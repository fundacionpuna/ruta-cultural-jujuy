/* Ejecutar: node herramientas/exportar-base.cjs
   Exporta las mismas fichas que usa el mapa, sin los ejemplos del prototipo. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const raiz = path.join(__dirname, '..');
const contexto = { window: {} };
vm.createContext(contexto);
for (const nombre of ['datos.js', 'relevados.js', 'actividades.js', 'fotos.js', 'rastreo-octubre.js']) {
  vm.runInContext(fs.readFileSync(path.join(raiz, nombre), 'utf8'), contexto);
}
const base = { proyecto: 'Vamo Pue · Fundación Puna', version: 1,
  fecha_relevamiento: '2026-10-05',
  criterios: { relevado: 'Información pública; pendiente de verificación por Fundación Puna.',
    coordenadas: 'Las fichas con ubicacion=referencia no indican el acceso exacto.',
    costo: 'Sin dato explícito se muestra Consultar. Gratis corresponde al alcance de la nota.',
    fotos: 'La licencia corresponde a cada fotografía. Créditos y enlaces deben conservarse.' },
  categorias: contexto.window.CATEGORIAS, lugares: contexto.window.LUGARES };
fs.writeFileSync(path.join(raiz, 'base-de-datos.json'), JSON.stringify(base, null, 2) + '\n');
console.log(`Base exportada: ${base.lugares.length} fichas.`);
