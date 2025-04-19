<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<div class="container">
    <div class="intro">
        <h1>Natalia Ryl</h1>
        <p>Hey, I'm Natalia!<br>
            I love bringing ideas to life through animation and concept art. 
            I enjoy making games for fun and I like to design logos on the side.
            I'm also exploring UI/UX design and how art shapes experiences.
        </p>
    </div>
    
    <div class="logo">
        <img src="/logo.png" alt="Designs by Natie Logo">
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 0px;
    }
    
    .intro {
        flex: 1;
    }
    
    .logo {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    
    h1 {
        text-align: left;
        padding-bottom: 20px;
        font-size: 48px;
        font-weight: 500;
    }
    
    p {
        text-align: left;
        color: white;
        background-color: #a8bba9;
        box-shadow: 15px 15px #526253;
        max-width: 500px;
        padding: 20px;
        border-radius: 10px;
        font-size: 26px;
    }
    
    img {
        height: 450px;
    }
</style>