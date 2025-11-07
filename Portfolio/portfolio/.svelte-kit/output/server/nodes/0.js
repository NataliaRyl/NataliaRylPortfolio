import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BhhDZ-k1.js","_app/immutable/chunks/BGhDAUxW.js","_app/immutable/chunks/sN_Iz3tP.js","_app/immutable/chunks/hB40XPMv.js","_app/immutable/chunks/CDA3wJ4W.js","_app/immutable/chunks/XOoqFE-0.js","_app/immutable/chunks/CgJtEa6k.js","_app/immutable/chunks/BQ4C0auf.js","_app/immutable/chunks/Bm6io2gk.js","_app/immutable/chunks/BApdHuZ3.js","_app/immutable/chunks/BA6wRAYs.js"];
export const stylesheets = ["_app/immutable/assets/0.DfB2r9j0.css"];
export const fonts = [];
