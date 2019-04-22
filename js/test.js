$(function(){
$('.gallery-slider__for').slick({
    slidesToShow: 1,
    
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-slider-nav'
  });
  $('.gallery-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.gallery-slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});