import { S as pop, P as push, T as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<h1 class="svelte-7p6shd">Animation</h1> <div class="container svelte-7p6shd"><div class="gif svelte-7p6shd"><img${attr("src", `${stringify(base)}/animation/walkcycle.gif`)} alt="walkcycle animation" class="svelte-7p6shd"> <p class="date svelte-7p6shd">Year created: 2024</p></div> <div class="wrapper svelte-7p6shd"><h2 class="svelte-7p6shd">Character Walkcycle</h2> <p class="project-year svelte-7p6shd">Year 2 College Project</p> <div class="textbox svelte-7p6shd"><p class="svelte-7p6shd">This is a basic <b>walk cycle</b> I animated in Adobe Animate, using the same character from the turnaround. 
                It was all about getting the movement smooth and making sure the character stayed consistent from frame to frame. 
                A good bit of trial and error, but a really useful exercise in the animation basics.</p></div></div></div> <div class="container svelte-7p6shd"><div class="gif svelte-7p6shd"><img${attr("src", `${stringify(base)}/animation/runcycle.gif`)} alt="runcycle animation" class="svelte-7p6shd"> <p class="date svelte-7p6shd">Year created: 2024</p></div> <div class="wrapper svelte-7p6shd"><h2 class="svelte-7p6shd">Character Runcycle</h2> <p class="project-year svelte-7p6shd">Year 2 College Project</p> <div class="textbox svelte-7p6shd"><p class="svelte-7p6shd">This is a basic <b>run cycle</b> I animated in Adobe Animate, using the same character from the turnaround. 
                It was a good challenge to push the timing and energy compared to the walk cycle, 
                while still keeping everything consistent across the frames. 
                Definitely a faster pace, but fun to bring a bit more momentum into the movement.</p></div></div></div>`;
  pop();
}
export {
  _page as default
};
