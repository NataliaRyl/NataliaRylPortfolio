import { _ as ensure_array_like, S as pop, P as push, T as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr, t as to_class } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let activeCategory = "Show All";
  const categories = [
    "Show All",
    "Character Design",
    "Pixel Art",
    "Storyboards"
  ];
  const designImages = [
    `${base}/art/design.png`,
    `${base}/art/sketch.jpg`
  ];
  const pixelAssets = [
    `${base}/art/bow-arrow.png`,
    `${base}/art/med-kit.png`,
    `${base}/art/shield.png`
  ];
  const bolgin = [
    `${base}/art/bolgin.png`,
    `${base}/art/bolgin-front.png`,
    `${base}/art/bolgin-side.png`,
    `${base}/art/bolgin-sad.png`,
    `${base}/art/bolgin-sleeping.png`,
    `${base}/art/bolgin-forest.png`,
    `${base}/art/bolgin-pickaxe.png`,
    `${base}/art/bolgin-short.png`,
    `${base}/art/bolgin-sword.png`,
    `${base}/art/bolgin-petting.png`
  ];
  const totto = [
    `${base}/art/totto.png`,
    `${base}/art/totto-front.png`,
    `${base}/art/totto-side.png`,
    `${base}/art/totto-happy.png`,
    `${base}/art/totto-sleeping.png`,
    `${base}/art/totto-flowers.png`,
    `${base}/art/totto-scared.png`,
    `${base}/art/totto-licking.png`
  ];
  let index = 0;
  let index2 = 0;
  let index3 = 0;
  let index4 = 0;
  const each_array = ensure_array_like(categories);
  $$payload.out += `<h1 class="svelte-1c9uepa">Art</h1> <div class="category-buttons svelte-1c9uepa"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cat = each_array[$$index];
    $$payload.out += `<button${attr("class", to_class("", "svelte-1c9uepa", { "selected": activeCategory === cat }))}>${escape_html(cat)}</button>`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="container svelte-1c9uepa"><div class="art svelte-1c9uepa"><img${attr("src", `${stringify(base)}/art/CTA.png`)} alt="character turn around" class="svelte-1c9uepa"> <p class="date svelte-1c9uepa">Year created: 2024</p></div> <div class="wrapper svelte-1c9uepa"><h2 class="svelte-1c9uepa">Character Turn Around</h2> <p class="project-year svelte-1c9uepa">Year 2 College Project</p> <div class="textbox svelte-1c9uepa"><p class="svelte-1c9uepa">This <b>original character</b>, created in Clip Studio Paint, features a turnaround with five views: 
                front, ¾ front, side, ¾ back, and back.</p> <p class="svelte-1c9uepa">This design showcases the character's details and proportions from all sides, giving a complete look at their appearance 
                and personality.</p></div></div></div> <div class="container svelte-1c9uepa"><div class="art svelte-1c9uepa"><img${attr("src", designImages[index])} alt="Character Design" class="svelte-1c9uepa"> <p class="date svelte-1c9uepa">Year created: 2024</p> <div class="arrows svelte-1c9uepa"><span class="prev svelte-1c9uepa">❮</span> <span class="next svelte-1c9uepa">❯</span></div></div> <div class="wrapper svelte-1c9uepa"><h2 class="svelte-1c9uepa">Character Design</h2> <p class="project-year svelte-1c9uepa">Year 2 College Project</p> <div class="textbox svelte-1c9uepa"><p class="svelte-1c9uepa">For this project, I explored how the character would look <b>in motion from three different angles</b> by sketching it.</p> <p class="svelte-1c9uepa">I then picked one of those poses to turn into a final illustration, created in Clip Studio Paint. 
                It was a fun way to bring the character to life and show a bit of their personality through movement.</p></div></div></div> <div class="container svelte-1c9uepa"><div class="art svelte-1c9uepa"><img${attr("src", pixelAssets[index2])} alt="Pixel Art Assets" class="svelte-1c9uepa"> <p class="date svelte-1c9uepa">Year created: 2023</p> <div class="arrows svelte-1c9uepa"><span class="prev svelte-1c9uepa">❮</span> <span class="next svelte-1c9uepa">❯</span></div></div> <div class="wrapper svelte-1c9uepa"><h2 class="svelte-1c9uepa">Pixel Art Assets</h2> <p class="project-year svelte-1c9uepa">Year 1 College Project</p> <div class="textbox svelte-1c9uepa"><p class="svelte-1c9uepa">I made this little <b>fantasy-themed pixel art set</b> in Aseprite, featuring a shield, med kit, and bow and arrow. 
                I kept the style and colours consistent so they'd feel like they belong in the same game world.</p></div></div></div> <div class="container svelte-1c9uepa"><div class="art-special svelte-1c9uepa"><img${attr("src", bolgin[index3])} alt="Bolgin the Dwarf" class="svelte-1c9uepa"> <p class="date svelte-1c9uepa">Year created: 2023</p> <div class="arrows svelte-1c9uepa"><span class="prev svelte-1c9uepa">❮</span> <span class="next svelte-1c9uepa">❯</span></div></div> <div class="wrapper svelte-1c9uepa"><h2 class="svelte-1c9uepa">Bolgin the Dwarf</h2> <p class="project-year svelte-1c9uepa">Year 1 College Project</p> <div class="textbox svelte-1c9uepa"><p class="svelte-1c9uepa">This character design was part of a worldbuilding brief where I had to create a <b>unique hero</b>. 
                I wanted to challenge the typical idea of what a hero looks like—so I designed <b>Bolgin</b>, an unlikely dwarf protagonist who's soft, scruffy, and deeply connected to nature.</p></div></div></div> <div class="container svelte-1c9uepa"><div class="art-special svelte-1c9uepa"><img${attr("src", totto[index4])} alt="Totto the Pug" class="svelte-1c9uepa"> <p class="date svelte-1c9uepa">Year created: 2023</p> <div class="arrows svelte-1c9uepa"><span class="prev svelte-1c9uepa">❮</span> <span class="next svelte-1c9uepa">❯</span></div></div> <div class="wrapper svelte-1c9uepa"><h2 class="svelte-1c9uepa">Totto the Pug</h2> <p class="project-year svelte-1c9uepa">Year 1 College Project</p> <div class="textbox svelte-1c9uepa"><p class="svelte-1c9uepa"><b>Totto</b> was designed as the perfect <b>companion character</b>. 
                I wanted to create a pet sidekick that felt more than just cute, so I leaned into <b>contrast</b>: she's small and sad-looking but secretly clever and magical.</p></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
