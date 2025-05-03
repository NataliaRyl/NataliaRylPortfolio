<script>
    import { Header, Footer } from "$lib";    
</script>

<!-- Link to global styles -->
<link rel="stylesheet" href="/styles/global.css" />

<Header />

<!-- Page Content -->
<main>
    <slot />
</main>

<Footer />

<style>
    main {
        padding: 2rem;
        text-align: center;
        min-height: 80vh;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    /* Ensure the page doesn't have horizontal overflow */
    :global(body) {
        overflow-x: hidden;
        width: 100%;
        min-width: 320px;  /* Set a minimum width */
    }
</style>
