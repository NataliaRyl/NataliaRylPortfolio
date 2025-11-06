<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Games Page Loaded");
    });

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

    const next = () => {
        index = (index + 1) % armyEscapeImages.length
    };

    const prev = () => {
        index = (index - 1 + armyEscapeImages.length) % armyEscapeImages.length;
    };
    
</script>

<h1>Games</h1>

<div class="project-box">
    <div class="container">
        <div class="video">
            <video controls>
                <source src={`${base}/game/armyEscape.mp4`} type="video/mp4" />
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
</div>

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

    .video video {
        width: 100%;
        height: auto;
        border-radius: 12px;
        display: block;
    }

    .textbox {
        background-color: #a8bba9;
        box-shadow: 10px 10px 0px #526253;
        border-radius: 10px;
        color: #f1f1f1;
        padding: 30px;
    }

    .project-box {
        background-color: #f0f0f0;
        border-radius: 16px;
        margin: 24px auto 60px;
        padding: 48px;
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
    }

    .container,
    .container2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: start;
        justify-content: center;
        gap: 32px;
        margin-bottom: 32px;
    }

    .wrapper,
    .wrapper2 {
        padding: 0;
        margin: 0;
        text-align: left;
        min-width: 0;
    }

    /* Arrows */
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

    .images img {
        width: 100%;
        max-width: 560px;
        height: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
    }

    .images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: 12px;
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

    /* Responsive design */
    @media (max-width: 1400px) {
        h1 {
            padding-left: 48px;
        }

        .wrapper, .wrapper2 {
            margin-top: 0;
            margin-left: 0;
            align-items: flex-start;
            text-align: left;
            width: 100%;
        }

        .images {
            margin-left: 0;
            width: 100%;
        }

        .container, .container2 {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 20px;
        }

        .wrapper2 ul {
            width: 100%;
            box-sizing: border-box;
        }
        
        .video {
            width: 100%;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            padding-left: 40px;
            font-size: 42px;
        }

        h2 {
            font-size: 32px;
        }

        .project-box {
            padding: 30px 20px;
            margin: 20px 10px 60px;
        }

        .container, .container2 {
            grid-template-columns: 1fr;
            padding-bottom: 30px;
            padding-left: 0;
            padding-right: 0;
            gap: 25px;
        }

        .wrapper, .wrapper2 {
            padding-left: 0;
            padding-top: 0;
        }

        video {
            height: 350px;
            width: 100%;
        }

        .images img {
            height: 250px;
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        h1 {
            padding-left: 20px;
            font-size: 36px;
        }

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 16px;
        }

        .project-box {
            padding: 20px 15px;
            margin: 15px auto 40px;
        }

        .wrapper2 p {
            font-size: 18px;
        }

        .wrapper2 li {
            font-size: 15px;
        }

        .container, .container2 {
            grid-template-columns: 1fr;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            gap: 20px;
        }

        .wrapper, .wrapper2 {
            padding-left: 0;
            padding-top: 0;
            width: 100%;
        }

        .textbox {
            padding: 20px;
            box-shadow: 8px 8px 0px #526253;
        }

        .video {
            width: 100%;
        }

        video {
            height: 300px;
            width: 100%;
        }

        .images {
            width: 100%;
        }

        .images img {
            height: 200px;
            width: 100%;
        }
        
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .links a {
            margin-right: 10px;
            margin-bottom: 5px;
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
            text-align: center;
        }

        p {
            font-size: 15px;
        }

        .project-box {
            padding: 15px 12px;
            margin: 10px auto 40px;
        }

        .wrapper2 p {
            font-size: 16px;
        }

        .wrapper2 li {
            font-size: 13px;
        }
        
        .wrapper2 ul {
            padding: 15px;
            box-shadow: 3px 3px 0px #a8bba9;
        }

        .textbox {
            padding: 15px;
            box-shadow: 6px 6px 0px #526253;
        }

        video {
            height: 200px;
            width: 100%;
        }

        .video {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .images {
            width: 100%;
        }

        .images img {
            height: 160px;
            width: 100%;
        }

        .prev, .next {
            font-size: 20px;
        }

        .links {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            gap: 8px;
        }

        .links a {
            margin-right: 0;
            margin-top: 8px;
            width: 100%;
            text-align: center;
            padding: 10px 8px;
            font-size: 14px;
        }
    }
</style>