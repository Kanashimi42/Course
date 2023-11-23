document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.slider');
    let instances = M.Slider.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems,);
});
