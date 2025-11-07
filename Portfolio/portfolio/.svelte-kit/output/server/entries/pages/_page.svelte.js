import { _ as ensure_array_like, S as pop, P as push, T as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  const portfolioCategories = [
    {
      title: "UI/UX",
      description: "Web development, Web Design",
      image: `${base}/web/sage-academy/homePage.png`,
      link: `${base}/ui_ux`
    },
    {
      title: "Animation",
      description: "Character walkcycles and runcycles",
      image: `${base}/animation/walkcycle.gif`,
      link: `${base}/animation`
    },
    {
      title: "Art",
      description: "Character design, pixel art, and concept art",
      image: `${base}/art/CTA.png`,
      link: `${base}/art`
    },
    {
      title: "Games",
      description: "Interactive game projects",
      image: `${base}/game/mainMenu.png`,
      link: `${base}/games`
    },
    {
      title: "Logos",
      description: "Logo designs",
      image: `${base}/logo/coc.png`,
      link: `${base}/logos`
    }
  ];
  const each_array = ensure_array_like(portfolioCategories);
  $$payload.out += `<div class="container svelte-r52sw6"><div class="intro svelte-r52sw6"><h1 class="svelte-r52sw6">Natalia Ryl</h1> <div class="intro-textbox svelte-r52sw6"><p class="svelte-r52sw6"><b>Hey, I'm Natalia!</b></p> <p class="svelte-r52sw6">I love creating designs that feel natural and easy to use.
                UI/UX has become my main focus, but I still enjoy exploring animation and concept art on the side - they inspire the way I approach design and bring ideas to life.
                I also enjoy making games for fun and designing logos on the side.</p></div></div> <div class="logo svelte-r52sw6"><img${attr("src", `${stringify(base)}/logo.png`)} alt="Designs by Natie Logo" class="svelte-r52sw6"></div></div> <div class="portfolio-showcase svelte-r52sw6"><h2 class="svelte-r52sw6">What's Included in My Portfolio</h2> <div class="portfolio-grid svelte-r52sw6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<a${attr("href", category.link)} class="portfolio-card svelte-r52sw6"><div class="card-image svelte-r52sw6"><img${attr("src", category.image)}${attr("alt", category.title)} class="svelte-r52sw6"> <div class="overlay svelte-r52sw6"><span class="view-more svelte-r52sw6">View Projects →</span></div></div> <div class="card-content svelte-r52sw6"><h3 class="svelte-r52sw6">${escape_html(category.title)}</h3> <p class="svelte-r52sw6">${escape_html(category.description)}</p></div></a>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
