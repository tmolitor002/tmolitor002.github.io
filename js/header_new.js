document.write(`
   
<div class="progress-bar"></div>

<nav id="main-nav" class="section-home">
    <div class="logo">TOM MOLITOR</div>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="career.html">Career</a></li>
        <li><a href="career.html#work-experience">Work Experience</a></li>
        <li><a href="#matrix">Interests</a><li>
    </ul>
</nav>
    
`);

document.addEventListener('scroll', function(){
            const scrolled = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (scrolled / docHeight) * 100;
            document.querySelector('.progress-bar').style.width = scrollProgress + '%';
});