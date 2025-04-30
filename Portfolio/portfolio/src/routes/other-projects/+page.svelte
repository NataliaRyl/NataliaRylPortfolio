<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Other Projects Page Loaded");
    });

    let activeCategory = '';
    const categories = ['Web Development', 'Web Design', 'Logo Deisgn']

    const sageAcademyDesktop = [
        {type: 'video', src: '/images/web/sage-academy/sageAcademy.mp4'},
        {type: 'image', src: '/images/web/sage-academy/homePage.png'},
        {type: 'image', src: '/images/web/sage-academy/signIn.png'},
        {type: 'image', src: '/images/web/sage-academy/staffHome.png'},
        {type: 'image', src: '/images/web/sage-academy/quizPage.png'},
        {type: 'image', src: '/images/web/sage-academy/addTopic.png'},
        {type: 'image', src: '/images/web/sage-academy/searchBar.png'}
    ];

    let index = 0;

    const next = () => {
        index = (index + 1) % sageAcademyDesktop.length
    };

    const prev = () => {
        index = (index - 1 + sageAcademyDesktop.length) % sageAcademyDesktop.length;
    };

    const sageAcademyMobile = [
        '/images/web/sage-academy/mobileHome.jpg',
        '/images/web/sage-academy/mobileSignIn.jpg',
        '/images/web/sage-academy/mobileStaffHome.jpg',
        '/images/web/sage-academy/mobileNav.jpg',
        '/images/web/sage-academy/mobileLR.jpg',
        '/images/web/sage-academy/mobileAddModule.jpg'
    ];

    let indexMobile = 0;

    const nextMobile = () => {
        indexMobile = (indexMobile + 1) % sageAcademyMobile.length
    };

    const prevMobile = () => {
        indexMobile = (indexMobile - 1 + sageAcademyMobile.length) % sageAcademyMobile.length;
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
        <p class="date">Year created: 2024</p>

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
    <h2>To-Do App</h2>


{:else if activeCategory === 'Logo Design'}
    <h2>Colours of Craft</h2>


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
        padding: 10px 80px 10px;
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