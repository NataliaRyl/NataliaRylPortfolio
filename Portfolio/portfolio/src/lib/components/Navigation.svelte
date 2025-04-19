<script>
     import { page } from '$app/stores';
</script>

<nav class="nav">
    <ul>
        <li><a href="/" class={$page.url.pathname === '/' ? 'selected' : ''}>Home</a></li>
        <li><a href="/about" class={$page.url.pathname === '/about' ? 'selected' : ''}>About Me</a></li>
        <li><a href="/projects" class={$page.url.pathname === '/projects' ? 'selected' : ''}>Projects</a></li>
        <li><a href="/cv" class={$page.url.pathname === '/cv' ? 'selected' : ''}>CV</a></li>
    </ul>
</nav>

<style>
     .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .nav ul {
        list-style: none;
        display: flex;
        gap: 100px;
        padding: 10px;
        margin: 0;
        font-size: 20px;
    }

    .nav li {
        display: inline;
    }

    .nav a {
        text-decoration: none;
        color: black;
        padding: 5px 10px;
        border-radius: 5px;
        transition: background 0.3s;
    }

    .nav a:hover, .nav a.selected {
        background-color: #a8bba9;
        color: white;
    }

</style>