import { _ as ensure_array_like, S as pop, P as push } from "../../../chunks/index.js";
import { a as attr, t as to_class } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let activeCategory = "";
  const categories = ["Web Development", "Web Design"];
  const each_array = ensure_array_like(categories);
  $$payload.out += `<h1 class="svelte-vxm294">UI/UX</h1> <div class="category-buttons svelte-vxm294"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cat = each_array[$$index];
    $$payload.out += `<button${attr("class", to_class("", "svelte-vxm294", { "selected": activeCategory === cat }))}>${escape_html(cat)}</button>`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
