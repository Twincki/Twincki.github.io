$(function(){
  var mixer = mixitup('.portfolio_content');
  $('.slider_blog-inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider_blog/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_blog/arrow-right.svg" alt="arrow-right"></button>'
  });

});