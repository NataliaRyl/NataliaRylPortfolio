<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

// Portfolio categories
    const portfolioCategories = [
        {
            title: "Designs",
            description: "Web development, UI/UX design, and logos",
            image: `${base}/web/sage-academy/homePage.png`,
            link: `${base}/designs`
        },
        {
            title: "Animation",
            description: "Character walkcycles and runcycles",
            image: `${base}/animation/walkcycle.gif`,
            link: `${base}/animation`
        },
        {
            title: "Art",
            description: "Character design, pixel art, and concept art",
            image: `${base}/art/CTA.png`,
            link: `${base}/art`
        },
        {
            title: "Games",
            description: "Interactive game projects",
            image: `${base}/game/mainMenu.png`,
            link: `${base}/games`
        }
    ];

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<div class="container">
	<div class="intro">
		<h1>Natalia Ryl</h1>
		<div class="intro-textbox">
			<p><b>Hey, I'm Natalia!</b></p>
			<p>
                I love creating designs that feel natural and easy to use.
                UI/UX has become my main focus, but I still enjoy exploring animation and concept art on the side - they inspire the way I approach design and bring ideas to life.
                I also enjoy making games for fun and designing logos on the side.
			</p>
		</div>
	</div>

	<div class="logo">
		<img src="{ base }/logo.png" alt="Designs by Natie Logo">
	</div>
</div>

<!-- Portfolio Showcase -->
<div class="portfolio-showcase">
	<h2>What's Included in My Portfolio</h2>
	<div class="portfolio-grid">
		{#each portfolioCategories as category}
			<a href={category.link} class="portfolio-card">
				<div class="card-image">
					<img src={category.image} alt={category.title} />
					<div class="overlay">
						<span class="view-more">View Projects →</span>
					</div>
				</div>
				<div class="card-content">
					<h3>{category.title}</h3>
					<p>{category.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
    .container {
        display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 10px 80px;
		gap: 40px;
    }
    
    .intro {
        flex: 1;
    }
    
    .logo {
        flex: 0 1 auto;
		display: flex;
		justify-content: center;
		align-items: center;
        padding-top: 40px;
    }
    
    h1 {
        text-align: left;
        margin-bottom: 30px;
        font-size: 48px;
        font-weight: 450;
    }

    .intro-textbox {
		background-color: #a8bba9;
		box-shadow: 10px 10px 0px #526253;
		border-radius: 10px;
		padding: 15px 20px;
		max-width: 480px;
		color: #f1f1f1;
	}

    .intro-textbox p {
		font-size: 20px;
		margin: 0 0 10px 0;
        text-align: left;
	}
    
    img {
        height: 450px;
        transform: translateX(0);
    }

	 /* Responsive styles */
	 @media (max-width: 1200px) {
        .container {
            padding: 10px 50px;
            gap: 40px;
        }
        
        h1 {
            font-size: 42px;
        }
        
        .intro-textbox p {
            font-size: 22px;
        }
        
        img {
            height: 350px;
            transform: translateX(30px);
        }
    }
    
    @media (max-width: 900px) {
        .container {
            flex-direction: column;
            align-items: center;
            padding: 10px 30px;
            gap: 30px;
        }
        
        .intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        
        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .intro-textbox {
            max-width: 100%;
        }
        
        .logo {
            padding-top: 0;
        }
        
        img {
            height: 300px;
            transform: translateX(0);
        }
    }
    
    @media (max-width: 600px) {
        .container {
            padding: 10px 20px;
            gap: 30px;
        }
        
        h1 {
            font-size: 32px;
        }
        
        .intro-textbox {
            padding: 15px 20px;
            box-shadow: 10px 10px 0px #526253;
        }
        
        .intro-textbox p {
            font-size: 18px;
        }
        
        img {
            height: 250px;
        }
    }

    /* Portfolio Showcase Styles */
    .portfolio-showcase {
        padding: 50px 80px 60px;
    }

    .portfolio-showcase h2 {
        font-size: 36px;
        font-weight: 450;
        text-align: center;
        margin-bottom: 50px;
        color: #2e4e2e;
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        max-width: 900px;
        margin: 0 auto;
    }

    .portfolio-card {
        text-decoration: none;
        color: inherit;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 8px 8px 0px #a8bba9;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .portfolio-card:hover {
        transform: translateY(-5px);
        box-shadow: 12px 12px 0px #526253;
    }

    .card-image {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .portfolio-card:hover .card-image img {
        transform: scale(1.05);
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(82, 98, 83, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .portfolio-card:hover .overlay {
        opacity: 1;
    }

    .view-more {
        color: #f1f1f1;
        font-size: 18px;
        font-weight: 500;
    }

    .card-content {
        padding: 18px;
    }

    .card-content h3 {
        font-size: 24px;
        font-weight: 450;
        margin: 0 0 8px 0;
        color: #2e4e2e;
    }

    .card-content p {
        font-size: 14px;
        margin: 0;
        color: #666;
        line-height: 1.4;
    }

    /* Responsive styles for portfolio showcase */
    @media (max-width: 1200px) {
        .portfolio-showcase {
            padding: 60px 50px 50px;
        }

        .portfolio-showcase h2 {
            font-size: 36px;
        }

        .portfolio-grid {
            gap: 30px;
        }

        .card-image {
            height: 180px;
        }
    }

    @media (max-width: 900px) {
        .portfolio-showcase {
            padding: 50px 30px 40px;
        }

        .portfolio-showcase h2 {
            font-size: 32px;
            margin-bottom: 40px;
        }

        .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .portfolio-card {
            box-shadow: 8px 8px 0px #a8bba9;
        }

        .portfolio-card:hover {
            box-shadow: 12px 12px 0px #526253;
        }

        .card-image {
            height: 220px;
        }

        .card-content h3 {
            font-size: 22px;
        }

        .card-content p {
            font-size: 15px;
        }
    }

    @media (max-width: 600px) {
        .portfolio-showcase {
            padding: 40px 20px 30px;
        }

        .portfolio-showcase h2 {
            font-size: 28px;
            margin-bottom: 30px;
        }

        .portfolio-grid {
            gap: 25px;
        }

        .portfolio-card {
            box-shadow: 6px 6px 0px #a8bba9;
        }

        .portfolio-card:hover {
            transform: translateY(-3px);
            box-shadow: 10px 10px 0px #526253;
        }

        .card-image {
            height: 180px;
        }

        .card-content {
            padding: 16px;
        }

        .card-content h3 {
            font-size: 20px;
        }

        .card-content p {
            font-size: 13px;
        }

        .view-more {
            font-size: 16px;
        }
    }
</style>