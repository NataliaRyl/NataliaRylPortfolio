import { S as pop, P as push, T as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container svelte-baug93"><h1 class="svelte-baug93">My CV</h1> <div class="wrapper svelte-baug93"><div class="cv-content svelte-baug93"><img${attr("src", `${stringify(base)}/CV1.png`)} alt="CV Page 1" class="cv-page svelte-baug93"> <img${attr("src", `${stringify(base)}/CV2.png`)} alt="CV Page 2" class="cv-page svelte-baug93"></div> <a${attr("href", `${stringify(base)}/Natalia_Ryl_CV.pdf`)} download="Natalia_Ryl_CV.pdf" class="download-link svelte-baug93">Download CV</a></div></div>`;
  pop();
}
export {
  _page as default
};
