$(function () {
    'use strict';

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    var navoff = $('.main_menu').offset().top;
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });

    //    Smooth scroll

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus();
                        };
                    });
                }
            }
        });

    //    Smooth scroll end



    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });




    //veno box start
    $('.venobox').venobox({
        spinner: 'wave',
        spinColor: '#e23e38',
        share: false,
    });

    $('.venobox2').venobox({
        spinner: 'wave',
        spinColor: '#e23e38',
        share: false,
        arrowsColor: '#e23e38',
        infinigall: true,
        numeratio: true,
        numerationPosition: 'bottom',
    });


    //    testimonial slide
    $('.test_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //    counterup start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //    sister slide
    $('.sister_logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    // Pre Loader start
    $(window).load(function () {
        $('.pre_loader').delay(1000).fadeOut(500);
    });

    
     // Back to top button js
    $(window).scroll(function () {
        var btn_fade = $(this).scrollTop();

        if (btn_fade > 150) {
            $('.top_to').fadeIn();
        } else {
            $('.top_to').fadeOut();
        }
    });

    $('.top_to').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000)
    });


});
