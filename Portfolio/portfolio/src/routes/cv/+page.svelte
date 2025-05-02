<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("CV Page Loaded");
    });
</script>

<div class="container">
    <h1>My CV</h1>

    <div class="wrapper">
        <div class="cv-content">
            <img src="/CV1.png" alt="CV Page 1" class="cv-page">
            <img src="/CV2.png" alt="CV Page 2" class="cv-page">
        </div>

        <a href="/Natalia_Ryl_CV.pdf" download="Natalia_Ryl_CV.pdf" class="download-link">Download CV</a>
    </div>
</div>

<style>
    h1 {
        font-size: 48px;
        font-weight: 450;
        margin-bottom: 30px;
        text-align: left;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 80px;
        gap: 20px;
    }
    
    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        box-sizing: border-box;
    }

    .cv-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        max-height: 800px;
        overflow-y: auto;
        text-align: left;
        width: 70%;
        max-width: 800px;
    }

    .cv-page {
        width: 100%; 
        margin-bottom: 20px; 
        max-width: 800px;
        border-radius: 10px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    }

    .download-link {
        display: inline-block;
        margin-top: 300px;
        font-size: 18px;
        color: #000000;
        text-decoration: none;
        padding: 10px 20px;
        background-color: #dddddd;
        border-radius: 8px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .download-link:hover {
        background-color: #a8bba9;
        color: white;
    }

      /* Responsive styles */
      @media (max-width: 1200px) {
        .container {
            padding: 10px 50px;
        }
        
        h1 {
            font-size: 42px;
        }
        
        .wrapper {
            width: 95%;
        }
    }
    
    @media (max-width: 900px) {
        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        
        .wrapper {
            flex-direction: column;
            align-items: center;
        }
        
        .cv-content {
            width: 100%;
            padding: 10px;
        }
        
        .download-link {
            margin: 20px 0;
            position: static;
        }

        .container {
            padding: 10px 30px;
        }
        
    }
    
    @media (max-width: 600px) {
        h1 {
            font-size: 32px;
            text-align: center;
            width: 100%;
        }
        
        .wrapper {
            width: 100%;
            padding: 0 10px;
        }
        
        .cv-content {
            padding: 5px;
            max-height: 600px;
        }
        
        .download-link {
            font-size: 16px;
            padding: 8px 16px;
        }

        .container {
            padding: 10px 20px;
            gap: 30px;
        }
    }

</style>