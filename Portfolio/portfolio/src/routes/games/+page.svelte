<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Games Page Loaded");
    });

    const armyEscapeImages = [
        '/images/game/mainMenu.png',
        '/images/game/instructions.png',
        '/images/game/gameEnd.png',
        '/images/game/members1.png',
        '/images/game/members2.png',
        '/images/game/bg.png',
        'images/game/playerSpritesheet.png'
    ];

    let index = 0;

    const next = () => {
        index = (index + 1) % armyEscapeImages.length
    };

    const prev = () => {
        index = (index - 1 + armyEscapeImages.length) % armyEscapeImages.length;
    };
    
</script>

<h1>Games</h1>

<div class="container">
    <div class="video">
        <video controls>
            <source src="/images/game/armyEscape.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p class="date">Year created: 2024</p>
    </div>

    <div class="wrapper">
        <h2>Army Escape</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>This is a fast-paced pixel game where you have to find and rescue all seven hidden squad members as quickly as possible. 
                I was inspired by BTS <b>— my favourite group —</b> since they're all currently serving in the military, and that sparked the idea for the game. 
                I designed and coded everything myself using JavaScript and HTML5 Canvas, including all the art, UI, and animations. </p>
            <p>The goal is simple: <b>beat your best time and save the whole team.</b></p>
        </div>
    </div>
</div>

<div class="container2">
    <div class="images">
        <img src={armyEscapeImages[index]} alt="Army Escape key images" />
        <div class="arrows">
            <span class="prev" on:click={prev}>&#10094;</span>
            <span class="next" on:click={next}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper2">
        <p><b>Key Features</b></p>
        <ul>
            <li>Fast-paced “find them all” gameplay</li>
            <li>Seven unique squad members to rescue</li>
            <li>A built-in timer that tracks your best time</li>
            <li>All visuals hand-drawn and designed by me</li>
            <li>Simple controls and clean pixel art style</li>
        </ul>

        <div class="links">
            <a href="https://ui-programming-24-25.codeberg.page/Natalia-Ryl-C00294480-UI-Programming-Module-Project/" target="_blank">Link to Game</a>
            <a href="https://codeberg.org/UI-Programming-24-25/Natalia-Ryl-C00294480-UI-Programming-Module-Project.git" target="_blank">Link to Codeberg repo</a>
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 48px;
        font-weight: 450;
        margin-bottom: 30px;
        text-align: left;
        padding-left: 208px;
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

    video {
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border-radius: 10px;
    }

    .textbox {
        background-color: #a8bba9;
        box-shadow: 15px 15px 0px #526253;
        border-radius: 10px;
        color: #f1f1f1;
        padding: 30px;
    }

    .container {
        display: flex;
        padding-bottom: 80px;
    }

    .wrapper {
        padding-left: 20px;
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

    /* other section */
    .images img {
        height: 300px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
    }

    .images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 350px;
        margin-left: 220px;
        gap: 10px;
    }
    
    .container2 {
        display: flex;
        justify-content: space-between;
        align-items: stretch; 
        padding: 10px 80px 80px;
        gap: 20px;
    }

    .wrapper2 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin-left: 200px;
        text-align: left;
    }

    .wrapper2 p {
        font-size: 22px;
        color: #2e4e2e;
        margin-bottom: 10px;
    }

    .wrapper2 ul {
        background-color: #d8e3d9;
        border-left: 5px solid #526253;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 5px 5px 0px #a8bba9;
        list-style: circle inside;
    }

    .wrapper2 li {
        margin-bottom: 10px;
        font-size: 18px;
        color: #2e4e2e;
    }

    .links a {
        display: inline-block;
        font-size: 16px;
        margin-right: 20px;
        margin-top: 15px;
        padding: 8px 12px;
        background-color: #f1f1f1;
        color: #2e4e2e;
        border: 1px solid #526253;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .links a:hover {
        background-color: #d8e3d9;
        transform: scale(1.05);
    }
</style>