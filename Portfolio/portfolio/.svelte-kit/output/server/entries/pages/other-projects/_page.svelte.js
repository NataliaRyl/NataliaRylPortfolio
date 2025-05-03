import { _ as ensure_array_like, S as pop, P as push } from "../../../chunks/index.js";
import { a as attr, t as to_class } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let activeCategory = "";
  const categories = [
    "Web Development",
    "Web Design",
    "Logo Design"
  ];
  const each_array = ensure_array_like(categories);
  $$payload.out += `<h1 class="svelte-1rcasl5">Other Projects</h1> <div class="category-buttons svelte-1rcasl5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cat = each_array[$$index];
    $$payload.out += `<button${attr("class", to_class("", "svelte-1rcasl5", { "selected": activeCategory === cat }))}>${escape_html(cat)}</button>`;
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
