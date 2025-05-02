<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="/logo.png" alt="Designs by Natie Logo">
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
     header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        box-sizing: border-box;
        min-width: 100%;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        height: 100px;
        max-width: 100%;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        header {
            padding: 5px 15px;
        }
        
        .logo img {
            height: 70px;
        }
    }
    
    @media (max-width: 480px) {
        header {
            flex-direction: column;
            align-items: center;
            padding: 10px;
        }
        
        .logo {
            margin-bottom: 10px;
        }
        
        .logo img {
            height: 60px;
        }
    }
    
</style>