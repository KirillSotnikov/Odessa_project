$(function() {
    AOS.init();
    $('.food-slider').slick({
        dots: true,
        arrows: false
    });
    $('.food-slider2').slick({
        arrows: false
    });
    $('.food-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.food-slider2').slick('slickGoTo', nextSlide);
    });
    $('.food-slider2').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.food-slider').slick('slickGoTo', nextSlide);
    });
    $('.gallery-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // slider...

    $('.box-gallary').each(function(i) {
        $(this).attr('data-nav-index', i + 1);
    });
    $('.img-gallary').click(function() {
        var id = $(this).parent().parent().attr('data-nav-index');
        $('.box-gallary[data-nav-index="' + id + '"] .box-img-active img').attr('src', $(this).attr('src'));
    });



    $('.feedback-slidere').slick({
        slidesToShow: 2,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $(".form-date").datepicker({
        changeMonth: true,
        changeYear: true
    });

    // mobile-menu

    var x1 = 0;
    var x2 = 0;
    var windowWidth = $(window).width();

    function menuController(action) {
        if (action == 'open') {
            $('.box-mobile').addClass('active');
            $('.menu-mobile').css('transform', 'translateX(' + 0 + '%)');
        } else if (action == 'close') {
            $('.box-mobile').removeClass('active');
        } else {
            console('Incorrect value');
        }
    }

    $('[data-mm]').click(function() {
        var target = $(this).attr('data-mm');
        menuController(target);
    });

    $(window).mouseup(function(e) {
        $(window).off("mousemove");
    });

    if (windowWidth <= 768) {
        window.addEventListener('touchstart', function(e) {
            x1 = e.touches[0].pageX;
        });
        window.addEventListener('touchmove', function(e) {
            x2 = e.touches[0].pageX;
            var distance = x2 - x1;
            if (Math.abs(distance) >= 0) {
                if (distance > 0) {
                    menuController('open');
                    distance = 0;
                } else if (distance <= -150) {
                    menuController('close');
                    distance = -150;
                }
            }
            $('.menu-mobile').css('transform', 'translateX(' + distance + 'px)');
        });
    }

    // parallax...

    function parallaxScroll() {
        if ($(document).find(".boat").length != 0) {
            var scrolled = $(window).scrollTop();
            var topS = $('.bg-footer').offset().top;
            var topS2 = $('.boat').offset().top;
            var top = topS - scrolled;
            var top2 = topS2 - scrolled;
            if (top <= 0) {
                top = 0;
            }
            $('#parallax').css('background-position-y', (top * .20) + 'px');
            $('#parallax2').css('top', (top2 * .40) + 'px');
        } else if ($(document).find(".bg-footer-in").length != 0) {
            var scrolled = $(window).scrollTop();
            var topS = $('.bg-footer-in').offset().top;
            var top = topS - scrolled;
            if (top <= 0) {
                top = 0;
            }
            $('#parallax').css('background-position-y', (top * .2) + 'px');
        }
    }
    $(window).bind('scroll', function(e) {
        parallaxScroll();
        // animateScroll();
    });

    //slider gallery-------------------------------------------------

    $('.gallery-slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        // asNavFor: '.gallery-slider__nav'
    });
    $('.gallery-slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // asNavFor: '.gallery-slider__for',
        focusOnSelect: true
    });
    $('.gallery-slider__nav-second').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // asNavFor: '.gallery-slider__for',
        focusOnSelect: true
    });
    $('.gallery-slider__nav').on("afterChange", function(event, slick, currentSlide, nextSlide) {
        $('.gallery-slider__for').slick('slickGoTo', currentSlide);
    });
    $('.gallery-slider__nav-second').on("afterChange", function(event, slick, currentSlide, nextSlide) {
        $('.gallery-slider__for').slick('slickGoTo', currentSlide + 5);
    });
    //-----------------------------------------------------------------
    // $('.main-slider').hide();
    // $('.main-slider').addClass('main-slider--active');

    $('.gallery-container__item-button').on('click', function() {
        $('.main-slider').removeClass('main-slider--active');
        var num = $(this).data('gallery-open');
        $('[data-gallery =' + num + ']').addClass('main-slider--active');

        $('.gallery-slider__for').slick('refresh');
        $('.gallery-slider__nav').slick('refresh');
        $('.gallery-slider__nav-second').slick('refresh');
        AOS.refresh();

        var topScroll = $('.gallery-container').offset().top + $('.gallery-container').height();
        $('html, body').animate({
            scrollTop: topScroll
        }, 800);
    });
});

// $(".logo").hide();
// $(document).ready(function(){$(".logo").fadeIn(3000); });
// function animateScroll(){

// if($(window).scrollTop()<100){
// 	$(".logo").fadeIn(3000);
// }else{$(".logo").hide();}
// }