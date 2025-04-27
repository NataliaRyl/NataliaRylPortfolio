<script>
    import { page } from '$app/stores';
</script>

<nav class="nav">
    <ul>
        <li><a href="/" class={$page.url.pathname === '/' ? 'selected' : ''}>Home</a></li>
        <li><a href="/about" class={$page.url.pathname === '/about' ? 'selected' : ''}>About Me</a></li>

        <!-- projects drop down menu -->
        <li class="dropdown">
            <a href="javascript:void(0)" class={$page.url.pathname.includes('/projects') ? 'selected' : ''}>Projects</a>
            <div class="dropdown-content">
                <a href="/art">Art</a>
                <a href="/animation">Animation</a>
                <a href="/games">Games</a>
                <a href="/other-projects">Other Projects</a>
            </div>
        </li>

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
        position: relative; /* Ensure the dropdown is positioned correctly */
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

    /* Dropdown container */
    .dropdown {
        position: relative;
    }

    /* Dropdown content (hidden by default) */
    .dropdown-content {
        display: none;
        position: absolute;
        top: 100%; /* Position dropdown directly beneath the Projects link */
        left: 0;
        background-color: #fff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        width: 200px;
        padding: 0;
        list-style: none;
        border-radius: 5px;
        z-index: 10; /* Make sure it stays on top */
    }

    /* Show the dropdown on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Ensure the dropdown stays open when hovering over it */
    .dropdown-content:hover {
        display: block;
    }

    /* Ensure the dropdown remains open when Projects is selected */
    .dropdown.selected .dropdown-content {
        display: block;
    }

    .dropdown-content a {
        display: block;
        padding: 10px;
        color: #333;
        background-color: #fff;
        transition: background-color 0.3s;
        text-decoration: none;
    }

    .dropdown-content a:hover {
        background-color: #a8bba9;
        color: white;
    }
</style>