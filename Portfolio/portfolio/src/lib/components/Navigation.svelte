<script>
    
</script>

<nav class="nav">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/cv">CV</a></li>
    </ul>
</nav>

<style>
    .nav {
        display: flex;
    }

    .nav ul {
        list-style: none;
        display: flex;
        gap: 100px;
        padding: 10px;
        margin: 0;
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

    .nav a:hover, .nav a.active {
        background-color: #d3e0d1;
    }
</style>