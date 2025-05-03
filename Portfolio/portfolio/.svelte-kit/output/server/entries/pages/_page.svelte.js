import { S as pop, P as push, T as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="container svelte-1xczdmi"><div class="intro svelte-1xczdmi"><h1 class="svelte-1xczdmi">Natalia Ryl</h1> <div class="intro-textbox svelte-1xczdmi"><p class="svelte-1xczdmi"><b>Hey, I'm Natalia!</b></p> <p class="svelte-1xczdmi">I love bringing ideas to life through animation and concept art.
				I enjoy making games for fun and I like to design logos on the side.
				I'm also exploring UI/UX design and how art shapes experiences.</p></div></div> <div class="logo svelte-1xczdmi"><img${attr("src", `${stringify(base)}/logo.png`)} alt="Designs by Natie Logo" class="svelte-1xczdmi"></div></div>`;
  pop();
}
export {
  _page as default
};
