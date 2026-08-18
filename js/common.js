function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    var navLinks = document.querySelectorAll('.nav_item a');

    hamburger.addEventListener('click', function () {
        body.classList.toggle('nav-open');
    });

    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            body.classList.remove('nav-open');
        });
    });
}

toggleNav();