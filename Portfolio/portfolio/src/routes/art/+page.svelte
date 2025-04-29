<!-- https://svelte.dev/playground/78bee610166a486a9304b9bfbeb77887?version=5.28.2 -->
<!-- used above to help with image carasoul -->
<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Art Page Loaded");
    });

    const art2Images = [
        '/images/art/design.png',
        '/images/art/sketch.jpg'
    ];

    let index = 0;

    const next = () => {
        index = (index + 1) % art2Images.length
    };

    const prev = () => {
        index = (index - 1 + art2Images.length) % art2Images.length;
    };
    
</script>

<h1>Art</h1>

<!-- art piece 1 -->
<div class="container">
    <div class="art">
        <img src="/images/art/CTA.png" alt="character turn around">
        <p class="date">Year created: 2025</p>
    </div>

    <div class="wrapper">
        <h2>Character Turn Around</h2>
        <div class="textbox">
            <p>This original character, created in Clip Studio Paint, features a turnaround with five views: 
                front, ¾ front, side, ¾ back, and back.</p>
            <p>This design showcases the character's details and proportions from all sides, giving a complete look at their appearance 
                and personality.</p>
        </div>
    </div>
</div>

<!-- art piece 2 -->
<div class="container">
    <div class="art">
        <img src={art2Images[index]} alt="Character Design" />
        <p class="date">Year created: 2025</p>
        <div class="arrows">
            <span class="prev" on:click={prev}>&#10094;</span>
            <span class="next" on:click={next}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Character Design</h2>
        <div class="textbox">
            <p>For this project, I explored how the character would look in motion from three different angles by sketching it.</p>
            <p>I then picked one of those poses to turn into a final illustration, created in Clip Studio Paint. 
                It was a fun way to bring the character to life and show a bit of their personality through movement.</p>
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

    .art img {
        height: 350px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
    }

    .art {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 350px;
        margin-left: 100px;
        gap: 10px;
    }

    .container {
        display: flex;
        align-items: stretch; 
        justify-content: space-between;
        gap: 20px;
        padding: 10px 80px 80px;
    }

    .textbox {
        background-color: #a8bba9;
        box-shadow: 15px 15px 0px #526253;
        border-radius: 10px;
        color: #f1f1f1;
        padding: 30px;
        width: 100%; 
        max-width: 500px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin-left: 150px;
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

</style>