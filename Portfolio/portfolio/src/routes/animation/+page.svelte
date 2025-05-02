<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Animation Page Loaded");
    });
    
</script>

<h1>Animation</h1>

<!-- animation 1 -->
<div class="container">
    <div class="gif">
        <img src="/animation/walkcycle.gif" alt="walkcycle animation">
        <p class="date">Year created: 2024</p>
    </div>

    <div class="wrapper">
        <h2>Character Walkcycle</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>This is a basic <b>walk cycle</b> I animated in Adobe Animate, using the same character from the turnaround. 
                It was all about getting the movement smooth and making sure the character stayed consistent from frame to frame. 
                A good bit of trial and error, but a really useful exercise in the animation basics.</p>
        </div>
    </div>
</div>

<!-- animation 2 -->
<div class="container">
    <div class="gif">
        <img src="/animation/runcycle.gif" alt="runcycle animation">
        <p class="date">Year created: 2024</p>
    </div>

    <div class="wrapper">
        <h2>Character Runcycle</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>This is a basic <b>run cycle</b> I animated in Adobe Animate, using the same character from the turnaround. 
                It was a good challenge to push the timing and energy compared to the walk cycle, 
                while still keeping everything consistent across the frames. 
                Definitely a faster pace, but fun to bring a bit more momentum into the movement.</p>
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

    .gif img {
        border-radius: 10px;
        width: 700px;
        height: auto;
    }

    .gif {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    /* Responsive design */
    @media (max-width: 1490px) {
        .wrapper {
            margin-top: 0;
            margin-left: 0;
            align-items: center;
            text-align: center;
            width: 90%;
        }

        .gif img {
            margin-left: 0;
            width: 800px;
            width: 80%;
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

        .container {
            flex-direction: column;
            padding-bottom: 60px;
            padding-left: 20px;
            padding-right: 20px;
        }

        .wrapper {
            padding-left: 0;
            padding-top: 20px;
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
            padding-bottom: 60px;
            padding-left: 20px;
            padding-right: 20px;
        }

        .wrapper {
            padding-left: 0;
            padding-top: 20px;
        }

        .textbox {
            padding: 20px;
            box-shadow: 10px 10px 0px #526253;
        }

        .gif img {
            width: 80%;
            max-width: 600px;
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

        p {
            font-size: 16px;
        }

        .textbox {
            padding: 20px;
            width: 100%;
        }
    }
</style>