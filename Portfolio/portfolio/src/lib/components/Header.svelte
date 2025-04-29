<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="/images/logo.png" alt="Designs by Natie Logo">
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
     header {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo img {
        height: 100px;
    }
</style>