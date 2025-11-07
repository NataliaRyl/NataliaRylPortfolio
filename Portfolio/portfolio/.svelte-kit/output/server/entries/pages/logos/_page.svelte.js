import { a as attr } from "../../../chunks/attributes.js";
import { S as pop, P as push } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const coc = [
    //Colours of Craft
    `${base}/logo/coc.png`,
    `${base}/logo/cocBW.png`
  ];
  const aguzo = [
    `${base}/logo/aguzo.png`,
    `${base}/logo/aguzoC.png`,
    `${base}/logo/aguzoBW.png`
  ];
  const dbn = [
    //DesignsByNatie
    `${base}/logo.png`,
    `${base}/logo/dbnC.png`,
    `${base}/logo/dbnBW.png`
  ];
  let indexCOC = 0;
  let indexAguzo = 0;
  let indexDBN = 0;
  $$payload.out += `<h1 class="svelte-ut7raw">Logos</h1> <div class="container svelte-ut7raw"><div class="logos svelte-ut7raw"><img${attr("src", coc[indexCOC])} alt="Colours of Craft Logo" class="svelte-ut7raw"> <p class="date svelte-ut7raw">Year created: 2023</p> <div class="arrows svelte-ut7raw"><span class="prev svelte-ut7raw">❮</span> <span class="next svelte-ut7raw">❯</span></div></div> <div class="wrapper svelte-ut7raw"><h2 class="svelte-ut7raw">Colours of Craft</h2> <p class="project-year svelte-ut7raw">Personal Project</p> <div class="textbox svelte-ut7raw"><p class="svelte-ut7raw">I created this logo for my mam's crochet business, <b>Colours of Craft</b>, using Clip Studio Paint. 
                It's designed to look like a yarn ball, capturing the essence of her handmade work. 
                I chose soft shades of pink, purple, blue, and yellow to give it a warm and friendly feel that reflects her style and brand.</p></div></div></div> <div class="container svelte-ut7raw"><div class="logos svelte-ut7raw"><img${attr("src", dbn[indexDBN])} alt="DesignsByNatie Logo" class="svelte-ut7raw"> <p class="date svelte-ut7raw">Year created: 2024</p> <div class="arrows svelte-ut7raw"><span class="prev svelte-ut7raw">❮</span> <span class="next svelte-ut7raw">❯</span></div></div> <div class="wrapper svelte-ut7raw"><h2 class="svelte-ut7raw">DesignsByNatie</h2> <p class="project-year svelte-ut7raw">Personal Project</p> <div class="textbox svelte-ut7raw"><p class="svelte-ut7raw">A personal logo created for my Etsy shop, <b>DesignsByNatie</b>. 
                The design captures the flowing, nature-inspired aesthetic that's present in all my work, with leaves and organic shapes being a recurring theme throughout my designs <b>and even wear!</b></p></div></div></div> <div class="container svelte-ut7raw"><div class="logos svelte-ut7raw"><img${attr("src", aguzo[indexAguzo])} alt="Aguzo Logo" class="svelte-ut7raw"> <p class="date svelte-ut7raw">Year created: 2021</p> <div class="arrows svelte-ut7raw"><span class="prev svelte-ut7raw">❮</span> <span class="next svelte-ut7raw">❯</span></div></div> <div class="wrapper svelte-ut7raw"><h2 class="svelte-ut7raw">Aguzo</h2> <p class="project-year svelte-ut7raw">Freelance Project</p> <div class="textbox svelte-ut7raw"><p class="svelte-ut7raw">I designed this logo for someone starting their <b>own handmade clothing brand</b>. 
                The letter "A" is formed using flowers and leaves to reflect the natural, creative feel behind their work. 
                It's meant to feel soft, personal, and connected to their love for making things by hand.</p></div></div></div>`;
  pop();
}
export {
  _page as default
};
