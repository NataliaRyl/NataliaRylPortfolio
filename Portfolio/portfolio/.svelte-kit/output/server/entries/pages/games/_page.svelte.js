import { S as pop, P as push, T as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  const armyEscapeImages = [
    `${base}/game/mainMenu.png`,
    `${base}/game/instructions.png`,
    `${base}/game/gameEnd.png`,
    `${base}/game/members1.png`,
    `${base}/game/members2.png`,
    `${base}/game/bg.png`,
    `${base}/game/playerSpritesheet.png`
  ];
  let index = 0;
  $$payload.out += `<h1 class="svelte-virlyz">Games</h1> <div class="container svelte-virlyz"><div class="video svelte-virlyz"><video controls class="svelte-virlyz"><source${attr("src", `${stringify(base)}/game/armyEscape.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video> <p class="date svelte-virlyz">Year created: 2024</p></div> <div class="wrapper svelte-virlyz"><h2 class="svelte-virlyz">Army Escape</h2> <p class="project-year svelte-virlyz">Year 2 College Project</p> <div class="textbox svelte-virlyz"><p class="svelte-virlyz">This is a fast-paced pixel game where you have to find and rescue all seven hidden squad members as quickly as possible. 
                I was inspired by BTS <b>— my favourite group —</b> since they're all currently serving in the military, and that sparked the idea for the game. 
                I designed and coded everything myself using JavaScript and HTML5 Canvas, including all the art, UI, and animations.</p> <p class="svelte-virlyz">The goal is simple: <b>beat your best time and save the whole team.</b></p></div></div></div> <div class="container2 svelte-virlyz"><div class="images svelte-virlyz"><img${attr("src", armyEscapeImages[index])} alt="Army Escape key images" class="svelte-virlyz"> <div class="arrows svelte-virlyz"><span class="prev svelte-virlyz">❮</span> <span class="next svelte-virlyz">❯</span></div></div> <div class="wrapper2 svelte-virlyz"><p class="svelte-virlyz"><b>Key Features</b></p> <ul class="svelte-virlyz"><li class="svelte-virlyz">Fast-paced “find them all” gameplay</li> <li class="svelte-virlyz">Seven unique squad members to rescue</li> <li class="svelte-virlyz">A built-in timer that tracks your best time</li> <li class="svelte-virlyz">All visuals hand-drawn and designed by me</li> <li class="svelte-virlyz">Simple controls and clean pixel art style</li></ul> <div class="links svelte-virlyz"><a href="https://ui-programming-24-25.codeberg.page/Natalia-Ryl-C00294480-UI-Programming-Module-Project/" target="_blank" class="svelte-virlyz">Link to Game</a> <a href="https://codeberg.org/UI-Programming-24-25/Natalia-Ryl-C00294480-UI-Programming-Module-Project.git" target="_blank" class="svelte-virlyz">Link to Codeberg repo</a></div></div></div>`;
  pop();
}
export {
  _page as default
};
