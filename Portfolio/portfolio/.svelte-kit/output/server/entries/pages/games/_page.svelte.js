import { a as attr } from "../../../chunks/attributes.js";
import { S as pop, P as push } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
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
  $$payload.out += `<h1 class="svelte-s3noao">Games</h1> <div class="project-box svelte-s3noao"><div class="container svelte-s3noao"><div class="video svelte-s3noao"><video controls class="svelte-s3noao"><source${attr("src", `${base}/game/armyEscape.mp4`)} type="video/mp4"> Your browser does not support the video tag.</video> <p class="date svelte-s3noao">Year created: 2024</p></div> <div class="wrapper svelte-s3noao"><h2 class="svelte-s3noao">Army Escape</h2> <p class="project-year svelte-s3noao">Year 2 College Project</p> <div class="textbox svelte-s3noao"><p class="svelte-s3noao">This is a fast-paced pixel game where you have to find and rescue all seven hidden squad members as quickly as possible. 
                    I was inspired by BTS <b>— my favourite group —</b> since they're all currently serving in the military, and that sparked the idea for the game. 
                    I designed and coded everything myself using JavaScript and HTML5 Canvas, including all the art, UI, and animations.</p> <p class="svelte-s3noao">The goal is simple: <b>beat your best time and save the whole team.</b></p></div></div></div> <div class="container2 svelte-s3noao"><div class="images svelte-s3noao"><img${attr("src", armyEscapeImages[index])} alt="Army Escape key images" class="svelte-s3noao"> <div class="arrows svelte-s3noao"><span class="prev svelte-s3noao">❮</span> <span class="next svelte-s3noao">❯</span></div></div> <div class="wrapper2 svelte-s3noao"><p class="svelte-s3noao"><b>Key Features</b></p> <ul class="svelte-s3noao"><li class="svelte-s3noao">Fast-paced “find them all” gameplay</li> <li class="svelte-s3noao">Seven unique squad members to rescue</li> <li class="svelte-s3noao">A built-in timer that tracks your best time</li> <li class="svelte-s3noao">All visuals hand-drawn and designed by me</li> <li class="svelte-s3noao">Simple controls and clean pixel art style</li></ul> <div class="links svelte-s3noao"><a href="https://ui-programming-24-25.codeberg.page/Natalia-Ryl-C00294480-UI-Programming-Module-Project/" target="_blank" class="svelte-s3noao">Link to Game</a> <a href="https://codeberg.org/UI-Programming-24-25/Natalia-Ryl-C00294480-UI-Programming-Module-Project.git" target="_blank" class="svelte-s3noao">Link to Codeberg repo</a></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
