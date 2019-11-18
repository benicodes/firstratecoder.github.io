$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    const up = document.querySelector(".up");
    up.addEventListener('click', function() {
        //window.scrollTo(0, 0);

        //window.scrollTo({
        //    top: 50,
        //    left: 0,
        //    behavior: "smooth"
        //});
        $('html, body').animate({ scrollTop: 500 }, 3000);
    });
    /*
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate(keyframes: {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options: 2000);
    });
    
    $('#up').on('click', function() {
        $('html, body').animate(keyframes: {
            scrollTop: 0
        }, options: 2000);
    });
*/
    AOS.init({
        easing: 'ease',
        duration: 1800
    })
});