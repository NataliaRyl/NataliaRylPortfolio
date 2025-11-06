<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Logos Page Loaded");
    });

    const coc = [ //Colours of Craft
        `${ base }/logo/coc.png`,
        `${ base }/logo/cocBW.png`
    ];

    const aguzo = [
        `${ base }/logo/aguzo.png`,
        `${ base }/logo/aguzoC.png`,
        `${ base }/logo/aguzoBW.png`
    ];

    const dbn = [ //DesignsByNatie
        `${ base }/logo.png`,
        `${ base }/logo/dbnC.png`,
        `${ base }/logo/dbnBW.png`
    ];

    let indexCOC = 0;
    let indexAguzo = 0;
    let indexDBN = 0;

    const nextCOC = () => {
        indexCOC = (indexCOC + 1) % coc.length
    };

    const prevCOC = () => {
        indexCOC = (indexCOC - 1 + coc.length) % coc.length;
    };

    const nextAguzo = () => {
        indexAguzo = (indexAguzo + 1) % aguzo.length
    };

    const prevAguzo = () => {
        indexAguzo= (indexAguzo - 1 + aguzo.length) % aguzo.length;
    };

    const nextDBN = () => {
        indexDBN = (indexDBN + 1) % dbn.length
    };

    const prevDBN = () => {
        indexDBN = (indexDBN - 1 + dbn.length) % dbn.length;
    };

</script>

<h1>Logos</h1>

<div class="container">
    <div class="logos">
        <img src={coc[indexCOC]} alt="Colours of Craft Logo" />
        <p class="date">Year created: 2023</p>
        <div class="arrows">
            <span class="prev" on:click={prevCOC}>&#10094;</span>
            <span class="next" on:click={nextCOC}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Colours of Craft</h2>
        <p class="project-year">Personal Project</p>
        <div class="textbox">
            <p>I created this logo for my mam's crochet business, <b>Colours of Craft</b>, using Clip Studio Paint. 
                It's designed to look like a yarn ball, capturing the essence of her handmade work. 
                I chose soft shades of pink, purple, blue, and yellow to give it a warm and friendly feel that reflects her style and brand.</p>
        </div>
    </div>
</div>

<div class="container">
    <div class="logos">
        <img src={dbn[indexDBN]} alt="DesignsByNatie Logo" />
        <p class="date">Year created: 2024</p>
        <div class="arrows">
            <span class="prev" on:click={prevDBN}>&#10094;</span>
            <span class="next" on:click={nextDBN}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>DesignsByNatie</h2>
        <p class="project-year">Personal Project</p>
        <div class="textbox">
            <p>A personal logo created for my Etsy shop, <b>DesignsByNatie</b>. 
                The design captures the flowing, nature-inspired aesthetic that's present in all my work, with leaves and organic shapes being a recurring theme throughout my designs <b>and even wear!</b></p>
        </div>
    </div>
</div>

<div class="container">
    <div class="logos">
        <img src={aguzo[indexAguzo]} alt="Aguzo Logo" />
        <p class="date">Year created: 2021</p>
        <div class="arrows">
            <span class="prev" on:click={prevAguzo}>&#10094;</span>
            <span class="next" on:click={nextAguzo}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper">
        <h2>Aguzo</h2>
        <p class="project-year">Freelance Project</p>
        <div class="textbox">
            <p>I designed this logo for someone starting their <b>own handmade clothing brand</b>. 
                The letter "A" is formed using flowers and leaves to reflect the natural, creative feel behind their work. 
                It's meant to feel soft, personal, and connected to their love for making things by hand.</p>
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

    .logos img {
        height: 300px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
        object-fit: contain;
    }

    .logos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        margin-left: 120px;
        gap: 10px;
    }

    .container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 60px;
        padding: 40px;
        margin: 40px auto;
        width: 80%;
        max-width: 1400px;
        background-color: #f0f0f0;
        border-radius: 15px;
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


    /* Responsive styles */
    @media (max-width: 1400px) {
        .wrapper {
            margin-top: 0;
            margin-left: 0;
            align-items: center;
            text-align: center;
            width: 90%;
        }

        .logos {
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

        .wrapper {
            margin-top: 0;
            margin-left: 0;
            align-items: center;
            text-align: center;
            width: 90%;
        }
        
        .logos {
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
        
        .logos {
            margin-left: 0;
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
        
        .logos img {
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
