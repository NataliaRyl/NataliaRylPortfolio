<!-- https://svelte.dev/playground/78bee610166a486a9304b9bfbeb77887?version=5.28.2 -->
<!-- used above to help with image carasoul -->
<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Art Page Loaded");
    });

    let activeCategory = 'Show All';
    const categories = ['Show All', 'Character Design', 'Pixel Art', 'Storyboards'];

    const designImages = [
        `${ base }/art/design.png`,
        `${ base }/art/sketch.jpg`
    ];

    const pixelAssets = [
        `${ base }/art/bow-arrow.png`,
        `${ base }/art/med-kit.png`,
        `${ base }/art/shield.png`
    ];

    const bolgin = [
        `${ base }/art/bolgin.png`,
        `${ base }/art/bolgin-front.png`,
        `${ base }/art/bolgin-side.png`,
        `${ base }/art/bolgin-sad.png`,
        `${ base }/art/bolgin-sleeping.png`,
        `${ base }/art/bolgin-forest.png`,
        `${ base }/art/bolgin-pickaxe.png`,
        `${ base }/art/bolgin-short.png`,
        `${ base }/art/bolgin-sword.png`,
        `${ base }/art/bolgin-petting.png`
    ];

    const totto = [
        `${ base }/art/totto.png`,
        `${ base }/art/totto-front.png`,
        `${ base }/art/totto-side.png`,
        `${ base }/art/totto-happy.png`,
        `${ base }/art/totto-sleeping.png`,
        `${ base }/art/totto-flowers.png`,
        `${ base }/art/totto-scared.png`,
        `${ base }/art/totto-licking.png`
    ];

    let index = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;

    const next = () => {
        index = (index + 1) % designImages.length
    };

    const prev = () => {
        index = (index - 1 + designImages.length) % designImages.length;
    };

    const next2 = () => {
        index2 = (index2 + 1) % pixelAssets.length
    };

    const prev2 = () => {
        index2 = (index2 - 1 + pixelAssets.length) % pixelAssets.length;
    };

    const next3 = () => {
        index3 = (index3 + 1) % bolgin.length
    };

    const prev3 = () => {
        index3 = (index3 - 1 + bolgin.length) % bolgin.length;
    };

    const next4 = () => {
        index4 = (index4 + 1) % totto.length
    };

    const prev4 = () => {
        index4 = (index4 - 1 + totto.length) % totto.length;
    };
    
    
</script>

<h1>Art</h1>

<div class="category-buttons">
    {#each categories as cat}
    <button 
        class:selected={activeCategory === cat} 
        on:click={() => activeCategory = cat}>
        {cat}
    </button>
    {/each}
</div>

{#if activeCategory === 'Show All'} 
<!-- art 1 -->
<div class="container">
    <div class="art">
        <img src="{ base }/art/CTA.png" alt="character turn around">
        <p class="date">Year created: 2024</p>
    </div>

    <div class="wrapper">
        <h2>Character Turn Around</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>This <b>original character</b>, created in Clip Studio Paint, features a turnaround with five views: 
                front, ¾ front, side, ¾ back, and back.</p>
            <p>This design showcases the character's details and proportions from all sides, giving a complete look at their appearance 
                and personality.</p>
        </div>
    </div>
</div>

<!-- art 2 -->
<div class="container">
    <div class="art">
        <img src={designImages[index]} alt="Character Design" />
        <p class="date">Year created: 2024</p>
        <div class="arrows">
            <span class="prev" on:click={prev}>&#10094;</span>
            <span class="next" on:click={next}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Character Design</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>For this project, I explored how the character would look <b>in motion from three different angles</b> by sketching it.</p>
            <p>I then picked one of those poses to turn into a final illustration, created in Clip Studio Paint. 
                It was a fun way to bring the character to life and show a bit of their personality through movement.</p>
        </div>
    </div>
</div>

<!-- art 3 -->
<div class="container">
    <div class="art">
        <img src={pixelAssets[index2]} alt="Pixel Art Assets" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prev2}>&#10094;</span>
            <span class="next" on:click={next2}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Pixel Art Assets</h2>
        <p class="project-year">Year 1 College Project</p>
        <div class="textbox">
            <p>I made this little <b>fantasy-themed pixel art set</b> in Aseprite, featuring a shield, med kit, and bow and arrow. 
                I kept the style and colours consistent so they'd feel like they belong in the same game world.</p>
        </div>
    </div>
</div>

<!-- art 4 -->
<div class="container">
    <div class="art-special">
        <img src={bolgin[index3]} alt="Bolgin the Dwarf" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prev3}>&#10094;</span>
            <span class="next" on:click={next3}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Bolgin the Dwarf</h2>
        <p class="project-year">Year 1 College Project</p>
        <div class="textbox">
            <p>This character design was part of a worldbuilding brief where I had to create a <b>unique hero</b>. 
                I wanted to challenge the typical idea of what a hero looks like—so I designed <b>Bolgin</b>, an unlikely dwarf protagonist who's soft, scruffy, and deeply connected to nature. 
            </p>
        </div>
    </div>
</div>

<!-- art 5 -->
<div class="container">
    <div class="art-special">
        <img src={totto[index4]} alt="Totto the Pug" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prev4}>&#10094;</span>
            <span class="next" on:click={next4}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Totto the Pug</h2>
        <p class="project-year">Year 1 College Project</p>
        <div class="textbox">
            <p><b>Totto</b> was designed as the perfect <b>companion character</b>. 
                I wanted to create a pet sidekick that felt more than just cute, so I leaned into <b>contrast</b>: she's small and sad-looking but secretly clever and magical.
            </p>
        </div>
    </div>
</div>

{:else if activeCategory === 'Character Design'}

<!-- art 1 -->
<div class="container">
    <div class="art">
        <img src="{ base }/art/CTA.png" alt="character turn around">
        <p class="date">Year created: 2024</p>
    </div>

    <div class="wrapper">
        <h2>Character Turn Around</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>This <b>original character</b>, created in Clip Studio Paint, features a turnaround with five views: 
                front, ¾ front, side, ¾ back, and back.</p>
            <p>This design showcases the character's details and proportions from all sides, giving a complete look at their appearance 
                and personality.</p>
        </div>
    </div>
</div>

<!-- art 2 -->
<div class="container">
    <div class="art">
        <img src={designImages[index]} alt="Character Design" />
        <p class="date">Year created: 2024</p>
        <div class="arrows">
            <span class="prev" on:click={prev}>&#10094;</span>
            <span class="next" on:click={next}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Character Design</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>For this project, I explored how the character would look <b>in motion from three different angles</b> by sketching it.</p>
            <p>I then picked one of those poses to turn into a final illustration, created in Clip Studio Paint. 
                It was a fun way to bring the character to life and show a bit of their personality through movement.</p>
        </div>
    </div>
</div>

<!-- art 4 -->
<div class="container">
    <div class="art-special">
        <img src={bolgin[index3]} alt="Bolgin the Dwarf" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prev3}>&#10094;</span>
            <span class="next" on:click={next3}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Bolgin the Dwarf</h2>
        <p class="project-year">Year 1 College Project</p>
        <div class="textbox">
            <p>This character design was part of a worldbuilding brief where I had to create a <b>unique hero</b>. 
                I wanted to challenge the typical idea of what a hero looks like—so I designed <b>Bolgin</b>, an unlikely dwarf protagonist who's soft, scruffy, and deeply connected to nature. 
            </p>
        </div>
    </div>
</div>

<!-- art 5 -->
<div class="container">
    <div class="art-special">
        <img src={totto[index4]} alt="Totto the Pug" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prev4}>&#10094;</span>
            <span class="next" on:click={next4}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Totto the Pug</h2>
        <p class="project-year">Year 1 College Project</p>
        <div class="textbox">
            <p><b>Totto</b> was designed as the perfect <b>companion character</b>. 
                I wanted to create a pet sidekick that felt more than just cute, so I leaned into <b>contrast</b>: she's small and sad-looking but secretly clever and magical.
            </p>
        </div>
    </div>
</div>

{:else if activeCategory === 'Pixel Art'}

<!-- art 3 -->
<div class="container">
    <div class="art">
        <img src={pixelAssets[index2]} alt="Pixel Art Assets" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prev2}>&#10094;</span>
            <span class="next" on:click={next2}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Pixel Art Assets</h2>
        <p class="project-year">Year 1 College Project</p>
        <div class="textbox">
            <p>I made this little <b>fantasy-themed pixel art set</b> in Aseprite, featuring a shield, med kit, and bow and arrow. 
                I kept the style and colours consistent so they'd feel like they belong in the same game world.</p>
        </div>
    </div>
</div>

{:else if activeCategory === 'Storyboards'}

<h1>Work In Progress...</h1>

{/if}

<style>
    h1 {
        font-size: 48px;
        font-weight: 450;
        margin-bottom: 30px;
        text-align: left;
        padding-left: 197px;
        padding-top: 10px;
    }

    h2 {
        font-size: 36px;
        font-weight: 400;
        text-align: left;
        margin-bottom: 10px;
    }
    
    p {
        font-size: 20px;
        text-align: left;
    }

    .date {
        font-size: 15px;
        margin: 5px 0;
    }

    .project-year {
        font-size: 14px;
        color: #666;
        margin-top: -10px;
        margin-bottom: 10px;
    }

    .art img {
        height: 300px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
        object-fit: contain;
    }

    .art {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        margin-left: 120px;
        gap: 10px;
    }

    .art-special img {
        height: 300px;
        width: 100%;
        max-width: 300px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
        border: #526253 solid 1px;
        border-radius: 10px;
    }

    .art-special {
        width: 750px;
        min-height: 340px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-left: 120px;
        gap: 10px;
    }

    .container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start; 
        padding: 10px 80px 80px;
        gap: 60px;
    }

    .textbox {
        background-color: #a8bba9;
        box-shadow: 15px 15px 0px #526253;
        border-radius: 10px;
        color: #f1f1f1;
        padding: 30px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin-left: 150px;
        margin-top: -30px; 
        text-align: left;
        z-index: 1;
        position: relative;
        max-width: 1000px;
    }

    /* Arrows Styling */
    .arrows {
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }

    .prev, .next {
        font-size: 24px;  
        padding: 5px;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .prev:hover, .next:hover {
        transform: scale(1.5);
    }

    /* category buttons */
    .category-buttons {
        display: flex;
        gap: 20px;
        margin-bottom: 40px;
        margin-left: 200px;
        justify-content: flex-start;
    }

    button {
        padding: 12px 20px;
        font-size: 18px;
        border-radius: 8px;
        border: none;
        color: #2e4e2e;
        background-color: #f1f1f1;
        border: 1px solid #526253;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    button:hover {
        background-color: #d8e3d9;
        transform: scale(1.05);
    }

    button.selected {
        background-color: #d8e3d9;
        font-weight: bold;
        box-shadow: 3px 3px 0 #a8bba9;
    }

    /* Responsive styles */
    @media (max-width: 1490px) {
        .wrapper {
            margin-top: 0;
            margin-left: 0;
            align-items: center;
            text-align: center;
            width: 90%;
        }

        .art, .art-special {
            margin-left: 0;
        }

        .container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            padding: 10px 20px 60px;
        }
    }

    @media (max-width: 1200px) {
        h1 {
            font-size: 42px;
            padding-left: 107px;
        }
        
        h2 {
            font-size: 32px;
        }
        
        .container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            padding: 10px 20px 60px;
        }

        .category-buttons {
            margin-left: 200px;
        }

        .wrapper {
            margin-top: 0;
            margin-left: 0;
            align-items: center;
            text-align: center;
            width: 90%;
        }
        
        .art, .art-special {
            margin-left: 0;
        }
    }
    
    @media (max-width: 900px) {   
        h1 {
            padding-left: 70px;
            font-size: 36px;
        }
        
        h2 {
            font-size: 28px;
        }

        p {
            font-size: 18px;
        }
        
        .container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
            padding: 10px 20px 60px;
        }
        
        .wrapper {
            margin-top: 0;
            margin-left: 0;
            align-items: center;
            text-align: center;
            width: 90%;
        }
        
        .textbox {
            width: 100%;
            box-shadow: 10px 10px 0px #526253;
        }
        
        .art, .art-special {
            margin-left: 0;
        }

        .category-buttons {
            margin-left: 100px;
        }

        button {
            padding: 8px 16px;
            font-size: 14px;
        }
    }
    
    @media (max-width: 600px) {
        h1 {
            font-size: 32px;
            text-align: center;
            padding-left: 0;
        }

        h2 {
            font-size: 24px;
        }
        
        .category-buttons {
            margin-left: 0;
            padding-bottom: 20px;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px 10px;
            max-width: 320px;
            margin: 0 auto 20px;
        }
        
        button {
            padding: 8px 16px;
            font-size: 12px;
            flex-basis: calc(50% - 10px);
            min-width: 125px;
            margin: 0;
        }
        
        .art img, .art-special img {
            height: 250px;
        }
        
        .textbox {
            padding: 20px;
            width: 100%;
        }
        
        p {
            font-size: 16px;
        }
    }

</style>