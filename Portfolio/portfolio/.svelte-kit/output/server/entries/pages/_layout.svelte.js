import { T as stringify, V as getContext, W as store_get, X as unsubscribe_stores, S as pop, P as push, Y as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import "../../chunks/client.js";
import { a as attr, t as to_class, c as clsx } from "../../chunks/attributes.js";
import "clsx";
function Header($$payload) {
  $$payload.out += `<header class="svelte-l1c6o1"><div class="logo svelte-l1c6o1"><img${attr("src", `${stringify(base)}/logo.png`)} alt="Designs by Natie Logo" class="svelte-l1c6o1"></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let mobileMenuOpen = false;
  $$payload.out += `<nav class="nav svelte-122j0mb"><button class="burger svelte-122j0mb" aria-label="Toggle navigation">☰</button> <ul${attr("class", to_class("", "svelte-122j0mb", { "open": mobileMenuOpen }))}><li class="svelte-122j0mb"><a${attr("href", `${stringify(base)}/`)}${attr("class", to_class(clsx(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "selected" : ""), "svelte-122j0mb"))}>Home</a></li> <li class="svelte-122j0mb"><a${attr("href", `${stringify(base)}/about`)}${attr("class", to_class(clsx(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" ? "selected" : ""), "svelte-122j0mb"))}>About Me</a></li> <li class="dropdown svelte-122j0mb"><a href="javascript:void(0)"${attr("class", to_class(clsx(store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("/projects") ? "selected" : ""), "svelte-122j0mb"))}>Projects <span class="dropdown-arrow svelte-122j0mb">▼</span></a> <div class="dropdown-content svelte-122j0mb"><a${attr("href", `${stringify(base)}/art`)} class="svelte-122j0mb">Art</a> <a${attr("href", `${stringify(base)}/animation`)} class="svelte-122j0mb">Animation</a> <a${attr("href", `${stringify(base)}/games`)} class="svelte-122j0mb">Games</a> <a${attr("href", `${stringify(base)}/other-projects`)} class="svelte-122j0mb">Other Projects</a></div></li> <li class="svelte-122j0mb"><a${attr("href", `${stringify(base)}/cv`)}${attr("class", to_class(clsx(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cv" ? "selected" : ""), "svelte-122j0mb"))}>CV</a></li></ul></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1pjtutl"><p>© 2025 Natalia Ryl. All rights reserved.</p></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<link rel="stylesheet"${attr("href", `${stringify(base)}/styles/global.css`)}> `;
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-b4dfkv"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
