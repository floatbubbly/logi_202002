/**** Counter ****/
jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });



/***** ScrollTrigger *****/


window.counter = function () {
  // this refers to the html element with the data-scroll-showCallback tag
  var span = this.querySelector('span');
  var current = parseInt(span.textContent);

  span.textContent = current + 1;
};

  document.addEventListener('DOMContentLoaded', function () {
    var trigger = new ScrollTrigger ({
        addHeight: true
    });
});


/*******slider******************/
$(document).ready(function(){
  $('.page-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true
    });
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick ({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    
    
    responsive: [
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]

});