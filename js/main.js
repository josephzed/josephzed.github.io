(function($) {
"use strict";
	$(document).ready(function(){


  $(window).on("load", function() {

    /*--------------------------------------------------------------
      MOUNTAINGOAT - HEIGHT INIT
    --------------------------------------------------------------*/
    $.fn.center = function () {
      this.css("position","absolute");
      this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
      this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
      return this;
    }

    $('#mg-hero').css({'height' : $(window).height()+"px"});
    $('.default-hide').css({'height' : $(window).height()+"px"});

    $(window).resize(function(){ 
      $('#mg-hero').css({'height' : $(window).height()+"px"});
      $('.default-hide').css({'height' : $(window).height()+"px"});
    });

    // /*--------------------------------------------------------------
    //   MOUNTAINGOAT - ISOTOPE FILTERING INIT
    // --------------------------------------------------------------*/
    // var $container = $('.mg-portfolio-area'),
    //   colWidth = function () {
    //     var w = $container.width(), 
    //       columnNum = 1,
    //       columnWidth = 0;
    //     if (w > 1200) {
    //       columnNum  = 3;
    //     } else if (w > 1024) {
    //       columnNum  = 3;
    //     } else if (w > 667) {
    //       columnNum  = 3;
    //     } else if (w > 450) {
    //       columnNum  = 1;
    //     } else if (w > 385) {
    //       columnNum  = 1;
    //     }
    //     columnWidth = Math.floor(w/columnNum);
    //     $container.find('.item').each(function() {
    //       var $item = $(this),
    //         multiplier_w = $item.attr('class').match(/item-w(\d)/),
    //         multiplier_h = $item.attr('class').match(/item-h(\d)/),
    //         width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
    //         height = multiplier_h ? columnWidth*multiplier_h[1] : columnWidth*0.69;
    //       $item.css({
    //         width: width,
    //         height: height
    //       });
    //     });
    //     return columnWidth;
    //   },
    //   isotope = function () {
    //     $container.isotope({
    //       resizable: false,
    //       itemSelector: '.item',
    //       masonry: {
    //         columnWidth: colWidth(),
    //         gutterWidth: 3
    //       }
    //     });
    //   };
    // isotope();

    

  });

  /*--------------------------------------------------------------
    MOUNTAINGOAT - COUNDOWN INIT
  --------------------------------------------------------------*/
  $('#mg_countdown').countDown({
    targetDate: {
      'day':    13,
      'month':  7,
      'year':   2017,
      'hour':   18,
      'min':    0,
      'sec':    0,
      'utc':    true
    },
    omitWeeks: true
  });


  /*--------------------------------------------------------------
    MOUNTAINGOAT - PARTICLEGROUND INIT
  --------------------------------------------------------------*/
  $('#mg_scroll_particles').particleground({
    dotColor: '#1f69b2',
    lineColor: '#42a3da'
  });



  /*--------------------------------------------------------------
  	MOUNTAINGOAT - TEXTAREA AUTOSIZE
  --------------------------------------------------------------*/
  $('textarea#mgc_message').textareaAutoSize();


  /*--------------------------------------------------------------
    MOUNTAINGOAT - COUNTER ANIMATION INIT
  --------------------------------------------------------------*/
  $(document).scroll(function () {
      var y = $(document).scrollTop(),
          counter = $(".mg-main-counter");

      if (y >= 200) {
          counter.removeClass('mg-hide-counter');
      } else {
          counter.addClass('mg-hide-counter');
      }
  });



  /*--------------------------------------------------------------
    MOUNTAINGOAT - CLICK AND ANIMATE SCROLL
  --------------------------------------------------------------*/
  $( ".start_browsing" ).on( "click", function(e) {
    if ($(".mg-main-counter").hasClass("mg-hide-counter")) {
      var minus = 240;
    } else {
      var minus = 0;
    }
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-minus;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, 'easeInExpo');
    e.preventDefault();
  });

	});
})(jQuery);

