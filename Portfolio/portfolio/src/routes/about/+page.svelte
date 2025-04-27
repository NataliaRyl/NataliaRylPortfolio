<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<div class="container">
    <h1>About Me</h1>

    <div class="text-box">
        <img src="/profile.jpg" alt="Profile of Natalia" id="floated">
        
        <p>I'm a student currently studying Interactive Digital Art and Design.</p>
        <p>I'm passionate about animation and concept art—I love creating characters, worlds, and stories that feel alive. 
            Art has always been my way of exploring ideas and expressing emotions.</p>
        <p>I enjoy making games for fun, experimenting with visuals and mechanics to bring ideas to life.</p>
        <p>I also design logos on the side, finding joy in creating simple yet impactful designs.</p>
        <p>Recently, I've been diving into UI/UX design, where creativity meets functionality. Outside of digital art, I run a small Etsy shop where I create custom bead patterns.</p>
        <p>I'm always learning, experimenting, and pushing myself to improve. This portfolio is a glimpse into my journey—thanks for stopping by!</p>
    </div>
</div>

<style>
    .container {
        padding: 60px 80px;
    }

    h1 {
        font-size: 48px;
        font-weight: 450;
        margin-top: 0;
        margin-bottom: 30px;
        text-align: left;
    }

    .text-box {
        background-color: #a8bba9;
        box-shadow: 15px 15px 0px #526253;
        border-radius: 10px;
        color: #f1f1f1;
        padding: 30px;
        overflow: hidden;
    }

    .text-box img {
        float: left;
        height: 400px;
        margin-right: 40px;
        margin-bottom: 20px;
        border-radius: 10px;
    }

    .text-box p {
        font-size: 26px;
        margin: 0 0 10px 0;
        text-align: left;
    }
</style>