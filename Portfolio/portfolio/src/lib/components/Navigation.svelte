<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class="nav">
    <button class="burger" on:click={toggleMobileMenu} aria-label="Toggle navigation">
        ☰
    </button>

    <ul class:open={mobileMenuOpen}>
        <li><a href="{ base }/" on:click={closeMenu} class={$page.url.pathname === '/' ? 'selected' : ''}>Home</a></li>
        <li><a href="{ base }/about" on:click={closeMenu} class={$page.url.pathname === '/about' ? 'selected' : ''}>About Me</a></li>

        <!-- projects drop down menu -->
        <li class="dropdown">
            <a href="javascript:void(0)" class={$page.url.pathname.includes('/projects') ? 'selected' : ''}>
                Projects
            <span class="dropdown-arrow">▼</span></a>
            <div class="dropdown-content">
                <a href="{ base }/art" on:click={closeMenu}>Art</a>
                <a href="{ base }/animation" on:click={closeMenu}>Animation</a>
                <a href="{ base }/games" on:click={closeMenu}>Games</a>
                <a href="{ base }/other-projects" on:click={closeMenu}>Other Projects</a>
            </div>
        </li>

        <li><a href="{ base }/cv" on:click={closeMenu} class={$page.url.pathname === '/cv' ? 'selected' : ''}>CV</a></li>
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

    .dropdown-arrow {
        font-size: 0.7em;
        margin-left: 5px;
    }

    /* Mobile menu button */
    .burger {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 10px;
        z-index: 100;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        .burger {
            display: block;
        }
        
        .nav {
            position: relative;
            padding: 10px;
            justify-content: flex-end;
            width: 100%;
        }
        
        .nav ul {
            position: absolute;
            top: 100%;
            right: 0;
            flex-direction: column;
            background-color: white;
            width: 250px;
            gap: 20px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 99;
            border-radius: 5px;
            display: none;
        }
        
        .nav ul.open {
            display: flex;
        }
        
        .nav li {
            width: 100%;
        }
        
        .dropdown-content {
            position: static;
            width: 100%;
            box-shadow: none;
            margin-top: 10px;
            padding-left: 15px;
        }
    }

    @media (max-width: 480px) {
        .burger {
            position: relative;
            right: auto;
            top: auto;
            margin-bottom: 10px;
        }
        
        .nav {
            justify-content: center;
            padding: 5px 0;
        }
        
        .nav ul {
            top: calc(100% + 10px);
            right: 50%;
            transform: translateX(50%);
            width: 90%;
            max-width: 300px;
        }
    }
</style>