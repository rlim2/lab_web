$(document).ready(function() {

  var slideCount = $('.slider .container li').length,
      slideWidth = $('.slider .container li').width(),
      slideHeight = $('.slider').height(),
      sliderUlWidth = slideCount * slideWidth,
      pos = 1,
      sliderTimer = 3000; // set timer in milliseconds

  // creates indicator for number of images
  $('.slider .container li').each(function(i) {
    if (i > 0)
      $('<li><div class="dots"></div></li>').appendTo('.slider .indicator ul');
    else
      $('<li><div class="dots active"></div></li>').appendTo('.slider .indicator ul');
  });

  // slider auto timer
  function startSlider() {
    timer = setInterval(function() {
      moveRight();
    }, sliderTimer);
  };

  // previous slide
  function moveLeft() {
    $('.indicator ul li:nth-child(' + pos-- + ') .dots').removeClass('active');
    if (pos <= 0 || pos > slideCount)
      pos = slideCount;
    $('.indicator ul li:nth-child(' + pos + ') .dots').addClass('active');
    $('.slider .container').animate({
        left: '+' + slideWidth
    }, 500, function () {
        $('.slider .container li:last-child').prependTo('.slider .container');
        $('.slider .container').css('left', '');
    });
  };

  // next slide
  function moveRight() {
    $('.indicator ul li:nth-child(' + pos++ + ') .dots').removeClass('active');
    if (pos <= 0 || pos > slideCount)
      pos = 1;
    $('.indicator ul li:nth-child(' + pos + ') .dots').addClass('active');

    $('.slider .container').animate({
        left: '-' + slideWidth
    }, 500, function () {
        $('.slider .container li:first-child').appendTo('.slider .container');
        $('.slider .container').css('left', '');
    });
  };

  startSlider(); // initialize slider with auto timer
  $('.slider').hover(function(e) {
    clearInterval(timer); // pause timer on hover
  }, function(e) {
    startSlider(); // resume timer
  });

  $('.slider').hover(showDots, hideDots);
	// $('.slider').css({ width: slideWidth, height: slideHeight });
	$('.slider .container').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.slider .container li:last-child').prependTo('.slider .container');

  $('.previous').click(function () {
      moveLeft();
  });

  $('.next').click(function () {
      moveRight();
  });

});

// animate indicators on hover
function showDots() {
  $('.indicator ul li').each(function(i) {
      setTimeout(function() {
        $('.indicator ul li').eq(i).addClass('show-dots');
      }, 50 * (i+1));
  });
}

// animate indicators on exit
function hideDots() {
  $('.indicator ul li').each(function(i) {
      setTimeout(function() {
        $('.indicator ul li').eq(i).removeClass('show-dots');
      }, 50 * (i+1));
  });
}

/*****         ****      *******    *******     *********  ***     **/
/********     ******     *********  *********   *********  ** *    **/
/**     **   **    **    **    **   **    **    **         **  *   **/
/**     **  **********   *******    *******     *********  **   *  **/
/********  **        **  **    **   **    **    **         **    * **/
/*****    **          ** **      ** **      **  *********  **     ***/
// Made by Darren Lim (zhanhuil@buffalo.edu)
