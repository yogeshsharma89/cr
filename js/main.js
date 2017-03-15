jQuery(document).ready(function($) {
  'use strict';

  var $partnersOwlContainer = $('.partners-slider');
  var $partnersOwlSlides = $partnersOwlContainer.children('div');

  if ($partnersOwlSlides.length > 1) {
    $partnersOwlContainer.owlCarousel({
      dots: true,
      nav: false,
      autoplay: true,
      loop: true,
      autoplayTimeout: 1500,
      slideSpeed: 1500,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 2
        },
        420: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 5
        },
        1400: {
          items: 6
        },
        1600: {
          items: 7
        }
      }
    });
  } else {
    $partnersOwlContainer.css('display', 'block');
  }


  /* ==============================================
    WAYPOINTS
  =============================================== */
  // Only load parallax when not on mobile devices
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.animated').waypoint(function() {
      var animation = $(this.element).attr('data-animation');
      $(this.element).addClass(animation);
      $(this.element).addClass('visible');
    }, {
      offset: '80%',
      triggerOnce: true
    });
    $('.button.animated').waypoint(function() {
      $(this).each(function() {
        var animation = $(this).attr('data-animation');
        $(this).addClass(animation);
        $(this).addClass('visible');
      });
    }, {
      offset: '100%',
      triggerOnce: true
    });
  } else {
    $('.animated').addClass('visible');
  }

  /* ==============================================
    Count Factors
   =============================================== */

  (function($) {
    $.fn.countTo = function(options) {
      // merge the default plugin settings with the custom options
      options = $.extend({}, $.fn.countTo.defaults, options || {});

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

      return $(this).each(function() {
        var _this = this,
          loopCount = 0,
          value = options.from,
          interval = setInterval(updateTimer, options.refreshInterval);

        function updateTimer() {
          value += increment;
          loopCount++;
          $(_this).html(value.toFixed(options.decimals));

          if (typeof(options.onUpdate) == 'function') {
            options.onUpdate.call(_this, value);
          }

          if (loopCount >= loops) {
            clearInterval(interval);
            value = options.to;

            if (typeof(options.onComplete) == 'function') {
              options.onComplete.call(_this, value);
            }
          }
        }
      });
    };

    $.fn.countTo.defaults = {
      from: 0, // the number the element should start at
      to: 100, // the number the element should end at
      speed: 10000, // how long it should take to count between the target numbers
      refreshInterval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      onUpdate: null, // callback method for every time the element is updated,
      onComplete: null, // callback method for when the element finishes updating
    };
  })(jQuery);

  function countUp() {
    var dataperc;
    $('.fact-number').each(function() {
      dataperc = $(this).attr('data-perc'),
        $(this).find('.factor').delay(6000).countTo({
          from: 50,
          to: dataperc,
          speed: 2000,
          refreshInterval: 50,
        });
    });
  }

  $('.fact-number').waypoint(function() {
    countUp();
  }, {
    offset: '70%',
    triggerOnce: true
  });


  /* ==============================================
    SCROLL TO TARGET
  =============================================== */

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.navbar-nav li a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

});
//End document ready

//# sourceMappingURL=maps/main.js.map
