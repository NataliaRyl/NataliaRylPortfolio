<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("UI/UX Page Loaded");
    });

    let activeCategory = '';
    const categories = ['Web Development', 'Web Design']

    // sage academy 
    const sageAcademyDesktop = [
        {type: 'video', src: `${ base }/web/sage-academy/sageAcademy.mp4`},
        {type: 'image', src: `${ base }/web/sage-academy/homePage.png`},
        {type: 'image', src: `${ base }/web/sage-academy/signIn.png`},
        {type: 'image', src: `${ base }/web/sage-academy/staffHome.png`},
        {type: 'image', src: `${ base }/web/sage-academy/quizPage.png`},
        {type: 'image', src: `${ base }/web/sage-academy/addTopic.png`},
        {type: 'image', src: `${ base }/web/sage-academy/searchBar.png`}
    ];

    const sageAcademyMobile = [
        `${ base }/web/sage-academy/mobileHome.jpg`,
        `${ base }/web/sage-academy/mobileSignIn.jpg`,
        `${ base }/web/sage-academy/mobileStaffHome.jpg`,
        `${ base }/web/sage-academy/mobileNav.jpg`,
        `${ base }/web/sage-academy/mobileLR.jpg`,
        `${ base }/web/sage-academy/mobileAddModule.jpg`
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
        `${ base }/web/to-do/mobile1.png`,
        `${ base }/web/to-do/mobile2.png`,
        `${ base }/web/to-do/mobile3.png`,
        `${ base }/web/to-do/mobile4.png`,
        `${ base }/web/to-do/mobile5.png`,
        `${ base }/web/to-do/mobile6.png`
    ];

    const toDoDesktop = [
        `${ base }/web/to-do/desktop1.png`,
        `${ base }/web/to-do/desktop2.png`,
        `${ base }/web/to-do/desktop3.png`,
        `${ base }/web/to-do/desktop4.png`,
        `${ base }/web/to-do/desktop5.png`,
        `${ base }/web/to-do/desktop6.png`
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

    // jt motors 
    const motorsDesktop = [
        {type: 'video', src: `${ base }/web/jtmotors/wpMotors.mp4`},
        {type: 'image', src: `${ base }/web/jtmotors/about.png`},
        {type: 'image', src: `${ base }/web/jtmotors/account.png`},
        {type: 'image', src: `${ base }/web/jtmotors/basket.png`},
        {type: 'image', src: `${ base }/web/jtmotors/bookApp.png`},
        {type: 'image', src: `${ base }/web/jtmotors/bookService.png`},
        {type: 'image', src: `${ base }/web/jtmotors/contact.png`},
        {type: 'image', src: `${ base }/web/jtmotors/home.png`},
        {type: 'image', src: `${ base }/web/jtmotors/rating.png`},
        {type: 'image', src: `${ base }/web/jtmotors/review.png`},
        {type: 'image', src: `${ base }/web/jtmotors/service.png`}
    ];

    const motorsMobile = [
        `${ base }/web/jtmotors/mobileHome.jpg`,
        `${ base }/web/jtmotors/mobileAbout.jpg`,
        `${ base }/web/jtmotors/mobileAccount.jpg`,
        `${ base }/web/jtmotors/mobileBasket.jpg`,
        `${ base }/web/jtmotors/mobileBookApp.jpg`,
        `${ base }/web/jtmotors/mobileBookService.jpg`,
        `${ base }/web/jtmotors/mobileContact.jpg`,
        `${ base }/web/jtmotors/mobileMenu.jpg`,
        `${ base }/web/jtmotors/mobileRating.jpg`,
        `${ base }/web/jtmotors/mobileReview.jpg`,
        `${ base }/web/jtmotors/mobileServices.jpg`
    ];

    let indexMotors = 0;
    let indexMotorsM = 0;

    const nextMotors = () => {
        indexMotors = (indexMotors + 1) % motorsDesktop.length
    };

    const prevMotors = () => {
        indexMotors = (indexMotors - 1 + motorsDesktop.length) % motorsDesktop.length;
    };

    const nextMotorsM = () => {
        indexMotorsM = (indexMotorsM + 1) % motorsMobile.length
    };

    const prevMotorsM = () => {
        indexMotorsM = (indexMotorsM - 1 + motorsMobile.length) % motorsMobile.length;
    };

</script>

<h1>UI/UX</h1>

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
<div class="project-box">
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
</div>


{:else if activeCategory === 'Web Design'}
<!-- to do app  -->
<div class="project-box">
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
                <a href="{ base }/web/to-do/to-do-mobile.zip" download>Download Mobile Files (.zip)</a>
                <a href="{ base }/web/to-do/to-do-desktop.zip" download>Download Desktop Files (.zip)</a>
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
</div>

<!-- jt motors -->
<div class="project-box">
    <div class="container">
        <div class="slideshow-desktop">
            {#if motorsDesktop[indexMotors].type === 'video'}
                <video controls>
                    <source src={motorsDesktop[indexMotors].src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            {:else if motorsDesktop[indexMotors].type === 'image'}
                <img src={motorsDesktop[indexMotors].src} alt="JT Motors preview slideshow" />
            {/if}
            <p class="date">Year created: 2025</p>

            <div class="arrows">
                <span class="prev" on:click={prevMotors}>&#10094;</span>
                <span class="next" on:click={nextMotors}>&#10095;</span>
            </div>
        </div>
        <div class="wrapper">
            <h2>JT Motors</h2>
            <p class="project-year">Year 3 College Project</p>
            <div class="textbox">
            <p>I created this <b>car service booking website</b> using <b>WordPress</b> templates and plugins. 
                It was designed to feel clean and easy to navigate, allowing users to quickly book a service and find the information they need. 
                The goal was to make the experience simple, clear, and user-friendly.</p>
            </div>
        </div>
    </div>

    <div class="container2">
        <div class="slideshow-mobile">
            <img src={motorsMobile[indexMotorsM]} alt="JT Motors mobile preview" />
            <div class="arrows">
                <span class="prev" on:click={prevMotorsM}>&#10094;</span>
                <span class="next" on:click={nextMotorsM}>&#10095;</span>
            </div>
        </div>

        <div class="wrapper2">
            <p><b>Key Features</b></p>
            <ul>
                <li>Homepage with header links to every page</li>
                <li>Contact page with a working form</li>
                <li>Review page showing real reviews and a submission form</li>
                <li>Services page with a “Book” button for each service</li>
                <li>Booking page with calendar, time, and service selection</li>
                <li>Basket and checkout system for easy payments</li>
                <li>Customer dashboard to view and manage bookings</li>
            </ul>

            <div class="links">
                <a href="https://c00294480.candept.com/JTMotors/" target="_blank">Link to Wordpress Website</a>
            </div>
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

.textbox {
    background-color: #a8bba9;
    box-shadow: 10px 10px 0px #526253;
    border-radius: 10px;
    color: #f1f1f1;
    padding: 30px;
}

.slideshow-desktop,
.images-to-do-d {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.images-to-do-d {
    padding-top: 20px;
}

.slideshow-desktop img,
.slideshow-desktop video,
.images-to-do-d img {
    width: 100%;
    max-width: 560px;
    height: auto;
    border: #526253 solid 1px;
    border-radius: 10px;
    object-fit: contain;
}

.images-to-do-m {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    max-width: 350px;
}

.slideshow-mobile img,
.images-to-do-m img {
    width: 100%;
    height: auto;
    border: #526253 solid 1px;
    border-radius: 10px;
    object-fit: contain;
}

.slideshow-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    max-width: 250px;
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

/* Arrows Styling */
.arrows {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.prev,
.next {
    font-size: 24px;
    padding: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.prev:hover,
.next:hover {
    transform: scale(1.5);
}

/* Responsive design */
@media (max-width: 1400px) {
    h1 {
        padding-left: 48px;
    }

    .category-buttons {
        margin-left: 48px;
    }

    .wrapper,
    .wrapper2 {
        width: 100%;
    }

    .slideshow-desktop,
    .slideshow-mobile,
    .images-to-do-m,
    .images-to-do-d {
        margin-left: 0;
        width: 100%;
    }

    .slideshow-mobile {
        max-width: 300px;
    }

    .container,
    .container2 {
       grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding: 20px;
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

    .category-buttons {
        margin-left: 40px;
    }

    .project-box {
        padding: 30px 20px;
        margin: 20px 10px 60px;
    }

    .slideshow-desktop img,
    .slideshow-desktop video,
    .images-to-do-d img {
        height: 250px;
        width: 100%;
    }

    .images-to-do-m img {
        height: 350px;
        width: 100%;
    }

    .images-to-do-d,
    .images-to-do-m {
        width: auto;
        max-width: 100%;
    }

    .images-to-do-d img,
    .images-to-do-m img {
        width: auto;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

    .container, .container2 {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 30px;
        padding-left: 0;
        padding-right: 0;
        gap: 25px;
    }

    .slideshow-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        max-width: 200px;
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

    .container, .container2 {
        grid-template-columns: 1fr;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        gap: 20px;
    }

    .textbox {
        padding: 20px;
        box-shadow: 8px 8px 0px #526253;
    }

    .category-buttons {
        margin-left: 20px;
        gap: 15px;
    }

    button {
        padding: 8px 16px;
        font-size: 14px;
    }

    .slideshow-desktop,
    .slideshow-mobile,
    .images-to-do-m,
    .images-to-do-d {
        width: 100%;
        max-width: 260px; 
        margin: 0 auto;
    }

    .slideshow-desktop img,
    .slideshow-desktop video,
    .images-to-do-d img {
        height: 180px;
    }

.slideshow-mobile,
.images-to-do-m {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    gap: 12px;
}

.slideshow-mobile img,
.images-to-do-m img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: contain;
}

    .images-to-do-d,
    .images-to-do-m {
        align-items: center;
        justify-content: center;
    }

    .images-to-do-d img,
    .images-to-do-m img {
        width: 100%;
        height: auto;
        max-width: 400px;
    }

    .wrapper2 p {
        font-size: 18px;
    }

    .wrapper2 li {
        font-size: 15px;
    }

    .links {
        flex-wrap: wrap;
        gap: 10px;
    }

    .slideshow-mobile {
        margin: 0 auto;
        justify-content: center;
        align-items: center;
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
        padding-bottom: 10px;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px 10px;
    }

    button {
        padding: 8px 16px;
        font-size: 12px;
        flex-basis: calc(50% - 20px);
        min-width: 120px;
    }

    .project-box {
        padding: 15px 12px;
        margin: 10px auto 40px;
    }

    .slideshow-desktop img,
    .slideshow-desktop video,
    .images-to-do-d img {
        height: 160px;
    }

    .slideshow-mobile img,
    .images-to-do-m img {
        height: 300px; 
        width: 100%;
        border: none;
    }

    p {
        font-size: 16px;
    }

    .textbox {
        padding: 15px;
        width: 100%;
        box-shadow: 8px 8px 0px #526253;
    }

    .wrapper2 p {
        font-size: 18px;
    }

    .wrapper2 li {
        font-size: 14px;
    }

    .links {
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .links a {
        width: 80%;
        text-align: center;
    }
}

</style>