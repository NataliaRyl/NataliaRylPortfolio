<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Other Projects Page Loaded");
    });

    let activeCategory = '';
    const categories = ['Web Development', 'Web Design', 'Logo Design']

    // sage academy 
    const sageAcademyDesktop = [
        {type: 'video', src: '/web/sage-academy/sageAcademy.mp4'},
        {type: 'image', src: '/web/sage-academy/homePage.png'},
        {type: 'image', src: '/web/sage-academy/signIn.png'},
        {type: 'image', src: '/web/sage-academy/staffHome.png'},
        {type: 'image', src: '/web/sage-academy/quizPage.png'},
        {type: 'image', src: '/web/sage-academy/addTopic.png'},
        {type: 'image', src: '/web/sage-academy/searchBar.png'}
    ];

    const sageAcademyMobile = [
        '/web/sage-academy/mobileHome.jpg',
        '/web/sage-academy/mobileSignIn.jpg',
        '/web/sage-academy/mobileStaffHome.jpg',
        '/web/sage-academy/mobileNav.jpg',
        '/web/sage-academy/mobileLR.jpg',
        '/web/sage-academy/mobileAddModule.jpg'
    ];

    let index = 0;
    let indexMobile = 0;

    const next = () => {
        index = (index + 1) % sageAcademyDesktop.length
    };

    const prev = () => {
        index = (index - 1 + sageAcademyDesktop.length) % sageAcademyDesktop.length;
    };

    const nextMobile = () => {
        indexMobile = (indexMobile + 1) % sageAcademyMobile.length
    };

    const prevMobile = () => {
        indexMobile = (indexMobile - 1 + sageAcademyMobile.length) % sageAcademyMobile.length;
    };

    // to do app

    const toDoMobile = [
        '/web/to-do/mobile1.png',
        '/web/to-do/mobile2.png',
        '/web/to-do/mobile3.png',
        '/web/to-do/mobile4.png',
        '/web/to-do/mobile5.png',
        '/web/to-do/mobile6.png'
    ];

    const toDoDesktop = [
        '/web/to-do/desktop1.png',
        '/web/to-do/desktop2.png',
        '/web/to-do/desktop3.png',
        '/web/to-do/desktop4.png',
        '/web/to-do/desktop5.png',
        '/web/to-do/desktop6.png'
    ];

    let indexToDoM = 0;
    let indexToDoD = 0;

    const nextToDoM = () => {
        indexToDoM = (indexToDoM + 1) % toDoMobile.length
    };

    const prevToDoM = () => {
        indexToDoM = (indexToDoM - 1 + toDoMobile.length) % toDoMobile.length;
    };

    const nextToDoD = () => {
        indexToDoD = (indexToDoD + 1) % toDoDesktop.length
    };

    const prevToDoD = () => {
        indexToDoD = (indexToDoD - 1 + toDoDesktop.length) % toDoDesktop.length;
    };

    // logo design
    const coc = [ //Colours of Craft
        '/logo/coc.png',
        '/logo/cocBW.png'
    ];

    const aguzo = [
        '/logo/aguzo.png',
        '/logo/aguzoC.png',
        '/logo/aguzoBW.png'
    ];

    const dbn = [ //DesignsByNatie
        '/logo.png',
        '/logo/dbnC.png',
        '/logo/dbnBW.png'
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

<h1>Other Projects</h1>

<div class="category-buttons">
    {#each categories as cat}
    <button 
        class:selected={activeCategory === cat} 
        on:click={() => activeCategory = cat}>
        {cat}
    </button>
    {/each}
</div>

{#if activeCategory === 'Web Development'} 
<div class="container">
    <div class="slideshow-desktop">
        {#if sageAcademyDesktop[index].type === 'video'}
            <video controls>
                <source src={sageAcademyDesktop[index].src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        {:else if sageAcademyDesktop[index].type === 'image'}
            <img src={sageAcademyDesktop[index].src} alt="Sage Academy preview slideshow" />
        {/if}
        <p class="date">Year created: 2025</p>

        <div class="arrows">
            <span class="prev" on:click={prev}>&#10094;</span>
            <span class="next" on:click={next}>&#10095;</span>
        </div>
    </div>
    <div class="wrapper">
        <h2>Sage Academy</h2>
        <p class="project-year">Year 2 College Project</p>
        <div class="textbox">
            <p>This was a <b>group project</b> where I worked with two teammates to build an educational website using Svelte, HTML, CSS, and JavaScript. 
                The site is designed to support both students and staff, offering helpful learning tools and interactive features.</p>
        </div>
    </div>
</div>

<div class="container2">
    <div class="slideshow-mobile">
        <img src={sageAcademyMobile[indexMobile]} alt="Sage Academy mobile preview" />
        <div class="arrows">
            <span class="prev" on:click={prevMobile}>&#10094;</span>
            <span class="next" on:click={nextMobile}>&#10095;</span>
        </div>
    </div>

    <div class="wrapper2">
        <p><b>My Contribution</b></p>
        <ul>
            <li>Coded all responsiveness</li>
            <li>Built header, footer, and navigation from base layout</li>
            <li>Created module system and pop-ups</li>
            <li>Added "Add" buttons and navigation features</li>
            <li>Structured pages like <em>About, Staff, and Student Dashboards</em></li>
        </ul>

        <div class="links">
            <a href="https://caoimheobrien.github.io/WebUIDesign_2025GroupProject/" target="_blank">Link to Website</a>
            <a href="https://github.com/CaoimheOBrien/WebUIDesign_2025GroupProject.git" target="_blank">Link to GitHub repo</a>
        </div>
    </div>
</div>


{:else if activeCategory === 'Web Design'}
    <div class="container">
        <div class="images-to-do-m">
            <img src={toDoMobile[indexToDoM]} alt="To Do App mobile preview" />
            <p class="date">Year created: 2025</p>
            <div class="arrows">
                <span class="prev" on:click={prevToDoM}>&#10094;</span>
                <span class="next" on:click={nextToDoM}>&#10095;</span>
            </div>
        </div>

        <div class="wrapper">
            <h2>To-Do App</h2>
            <p class="project-year">Year 2 College Project</p>
            <div class="textbox">
                <p>I designed this <b>to-do app</b> to look and feel like a <b>real notebook</b>. 
                    It includes both mobile and desktop versions, with a cozy, hand-drawn style that makes organizing tasks feel more personal and intuitive. 
                    The goal was to blend the charm of analog planning with the ease of digital tools.</p>
            </div>

            <div class="links">
                <a href="/images/web/to-do/to-do-mobile.zip" download>Download Mobile Files (.zip)</a>
                <a href="/images/web/to-do/to-do-desktop.zip" download>Download Desktop Files (.zip)</a>
            </div>

            <div class="images-to-do-d">
                <img src={toDoDesktop[indexToDoD]} alt="To Do App desktop preview" />
                <div class="arrows">
                    <span class="prev" on:click={prevToDoD}>&#10094;</span>
                    <span class="next" on:click={nextToDoD}>&#10095;</span>
                </div>
            </div>
        </div>
    </div>

{:else if activeCategory === 'Logo Design'}
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

{/if}

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

    .category-buttons {
        display: flex;
        gap: 20px;
        margin-bottom: 40px;
        margin-left: 200px;
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

    .textbox {
        background-color: #a8bba9;
        box-shadow: 15px 15px 0px #526253;
        border-radius: 10px;
        color: #f1f1f1;
        padding: 30px;
    }

    .container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start; 
        padding: 10px 80px 20px;
        gap: 60px;
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
    }

    /* desktop slideshow */
    .slideshow-desktop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        margin-left: 120px;
        gap: 10px;
    }

    .slideshow-desktop img, .slideshow-desktop video {
        height: 300px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
        object-fit: contain;
    }

    /* mobile slideshow */
    .slideshow-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        width: 100%;
        max-width: 350px;
        margin-left: 150px;
    }

    .slideshow-mobile img {
        height: 400px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
    }

    .container2 {
        display: flex;
        justify-content: space-between;
        align-items: stretch; 
        padding: 10px 80px 80px;
        flex-wrap: wrap;
        gap: 40px;
    }

    .wrapper2 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        text-align: left;
        max-width: 600px;
        margin: 0 auto;
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
    .links {
        display: flex;
        gap: 20px;
        margin-top: 25px;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }

    .links a {
        font-size: 16px;
        padding: 8px 12px;
        background-color: #f1f1f1;
        color: #2e4e2e;
        border: 1px solid #526253;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.2s ease, transform 0.2s ease;
        white-space: nowrap;
    }

    .links a:hover {
        background-color: #d8e3d9;
        transform: scale(1.05);
    }

    /* to do app */
    .images-to-do-d {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        margin-left: 20px;
        gap: 10px;
    }

    .images-to-do-d img {
        height: 300px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
        object-fit: contain;
    }

    .images-to-do-m img {
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
        object-fit: contain;
    }

    .images-to-do-m {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        margin-left: 20px;
        gap: 10px;
    }

    /* logos */
    .logos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 500px;
        margin-left: 45px;
        gap: 10px;
    }

    .logos img {
        height: 350px;
        width: auto;
        border: #526253 solid 1px;
        border-radius: 10px;
    }
</style>