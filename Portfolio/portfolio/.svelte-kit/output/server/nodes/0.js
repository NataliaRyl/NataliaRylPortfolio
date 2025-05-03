import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.SOlvs94P.js","_app/immutable/chunks/DybVm_Xj.js","_app/immutable/chunks/Cfg5BBly.js","_app/immutable/chunks/DHn-NA_N.js","_app/immutable/chunks/BHAydpne.js","_app/immutable/chunks/73IHKmBR.js","_app/immutable/chunks/Dkgh9aVg.js","_app/immutable/chunks/C5KtmSfG.js","_app/immutable/chunks/Bgdrc0Uj.js","_app/immutable/chunks/xd9qCxPa.js","_app/immutable/chunks/CBBTUA3E.js"];
export const stylesheets = ["_app/immutable/assets/0.DfB2r9j0.css"];
export const fonts = [];
