<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<div class="container">
    <div class="content">
        <h1>About Me</h1>

        <div class="text-box">
            <img src="/profile.jpg" alt="Profile of Natalia" id="floated">
            
            <p><b>I'm a student currently studying Interactive Digital Art and Design.</b></p>
            <p>I'm passionate about animation and concept art—I love creating characters, worlds, and stories that feel alive. 
                Art has always been my way of exploring ideas and expressing emotions.</p>
            <p>I enjoy making games for fun, experimenting with visuals and mechanics to bring ideas to life.</p>
            <p>I also design logos on the side, finding joy in creating simple yet impactful designs.</p>
            <p>Recently, I've been diving into UI/UX design, where creativity meets functionality. Outside of digital art, I run a small Etsy shop where I create custom bead patterns.</p>
            <p>I'm always learning, experimenting, and pushing myself to improve. This portfolio is a glimpse into my journey—thanks for stopping by!</p>
        </div>
    </div>
</div>

<div class="social">
    <a href="mailto:nataliaryl492@gmail.com" target="_blank"><img src="/socials/gmail.png" alt="gmail logo" id="gmail"></a>
    <a href="https://www.linkedin.com/in/natalia-ryl-4902n/" target="_blank"><img src="/socials/linkedin.png" alt="linkedin logo" id="linkedin"></a>
    <a href="https://github.com/NataliaRyl" target="_blank"><img src="/socials/github.png" alt="github logo" id="github"></a>
    <a href="https://codeberg.org/NataliaRyl" target="_blank"><img src="/socials/codeberg.png" alt="codeberg logo" id="codeberg"></a>
    <a href="https://designsbynatie.etsy.com" target="_blank"><img src="/socials/etsy.png" alt="etsy logo" id="etsy"></a>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px 80px;
        gap: 60px;
    }

    .content {
        width: 100%;
    }

    h1 {
        font-size: 48px;
        font-weight: 450;
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
        width: 100%;
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

    #gmail, #linkedin {
        height: 50px;
        padding-right: 20px;
        margin-top: 7px;
    }

    #codeberg, #etsy {
        height: 60px;
    }

    #github {
        height: 60px;
        padding-right: 20px;
    }

    .social {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        margin-top: 30px;
        width: 100%;
        max-width: 1400px;
        padding: 0 80px;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
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
        
        .text-box {
            padding: 25px;
        }
        
        .text-box img {
            height: 350px;
            margin-right: 30px;
        }
        
        .text-box p {
            font-size: 22px;
        }
        
        .social {
            padding: 0 50px;
        }
    }
    
    @media (max-width: 900px) {
        .container {
            padding: 10px 30px;
        }
        
        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .text-box {
            padding: 20px;
            box-shadow: 12px 12px 0px #526253;
        }
        
        .text-box img {
            height: 300px;
            margin-right: 25px;
        }
        
        .text-box p {
            font-size: 20px;
        }
        
        .social {
            margin-right: 50px;
            gap: 15px;
        }
        
        #gmail, #linkedin {
            height: 45px;
        }
        
        #codeberg, #etsy, #github {
            height: 50px;
        }
    }
    
    @media (max-width: 700px) {
        .text-box img {
            float: none;
            display: block;
            height: auto;
            max-width: 100%;
            margin: 0 auto 20px;
        }
    }
    
    @media (max-width: 600px) {
        .container {
            padding: 10px 20px;
            gap: 30px;
        }
        
        h1 {
            font-size: 32px;
            text-align: center;
            margin-bottom: 15px;
        }
        
        .text-box {
            padding: 15px;
            box-shadow: 8px 8px 0px #526253;
        }
        
        .text-box p {
            font-size: 18px;
        }
        
        .social {
            justify-content: center;
            margin-right: 0;
            width: 100%;
        }
        
        #gmail, #linkedin {
            height: 40px;
            padding-right: 10px;
        }
        
        #codeberg, #etsy, #github {
            height: 45px;
        }
        
        #github {
            padding-right: 10px;
        }
    }

</style>