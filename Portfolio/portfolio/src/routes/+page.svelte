<script>
    import { onMount } from 'svelte';

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
				I love bringing ideas to life through animation and concept art.
				I enjoy making games for fun and I like to design logos on the side.
				I'm also exploring UI/UX design and how art shapes experiences.
			</p>
		</div>
	</div>

	<div class="logo">
		<img src="/logo.png" alt="Designs by Natie Logo">
	</div>
</div>

<style>
    .container {
        display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 10px 80px;
		gap: 60px;
    }
    
    .intro {
        flex: 1;
    }
    
    .logo {
        flex: 1;
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
		box-shadow: 15px 15px 0px #526253;
		border-radius: 10px;
		padding: 20px 30px;
		max-width: 520px;
		color: #f1f1f1;
	}

    .intro-textbox p {
		font-size: 26px;
		margin: 0 0 10px 0;
        text-align: left;
	}
    
    img {
        height: 450px;
        transform: translateX(60px); /* pushes it right */
    }
</style>