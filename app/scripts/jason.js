
var $slider;
var $slideContainer;
var $slides;

var width = 1110;
var animationSpeed = 1500;
var pause = 3000;
var currentSlide = 1;
var interval;
var timerLeft;
var timerRight;

function startSlider() {
  $slideContainer
  .on('mouseenter', pauseSlider)
  .on('mouseleave', startSlider);

  interval = setInterval(function() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
      if (++currentSlide === $slides.length-1) {
        currentSlide = 0;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, pause);
}
function pauseSlider() {
  clearInterval(interval);
  clearInterval(timerLeft);
  clearInterval(timerRight);
}
$(function(){

   $slider = $('#slider');
   $slideContainer = $slider.find('.slides');
   $slides = $slideContainer.find('.slide');

  $slideContainer
  .on('mouseenter', pauseSlider)
  .on('mouseleave', startSlider);

  startSlider();

});

function moveRight() {
  timerRight = setInterval(function() {
  $slideContainer.animate(
    {'margin-left': '+='+width}, animationSpeed, function() {
      if (++currentSlide === $slides.length-1) {
        currentSlide = 0;
        $slideContainer.css('margin-left', 0);
      }
    });},pause);
    pauseSlider();
    setTimeout(startSlider, 3000);

  }

  function moveLeft() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
      if (++currentSlide === $slides.length-1) {
        currentSlide = 0;
        $slideContainer.css('margin-left', 0);
      }
    });
    pauseSlider();
    setTimeout(startSlider, 3000);
  }
