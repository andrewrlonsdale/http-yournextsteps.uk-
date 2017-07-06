$(document).ready(function() {

    //Smooth Scroll
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    // Main Menu
    $('#main-nav').affix({
        offset: {
            top: $('header').height()
        }
    });

    //Slider
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
        pauseOnAction: false,
    });

    var containerPosition = $('.container').offset();
    var positionPad = containerPosition.left + 15;

    $('#slider').find('.caption').css({
        left: positionPad + 'px',
        marginTop: '-' + $('.caption').height() / 2 + 'px'
    });
});
