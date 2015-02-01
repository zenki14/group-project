

$(function(){

  var width = 1110;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider() {
    interval = setInterval(function() {
      var slideAnimation = $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        if (++currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  };

// function startSlider() {
//     if (currentSlide === $slides.length) {
//         setInterval( function () {
//           currentSlide = 1; 
//           $slideContainer.css('margin-left', 0)
//         }, pause);
//       } else {
//           $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {

//         currentSlide++;
//       }
//     });
// };



  function pauseSlider() {
    clearInterval(interval);
  };

  $slideContainer
  .on('mouseenter', pauseSlider)
  .on('mouseleave', startSlider);

  startSlider();


});
