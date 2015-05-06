var detectmob = false;  
$(document).ready(function(){
   if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {             
      detectmob = true;
    $(".portfolio").slick({
      slidesToShow: 2,
      slidesToScroll: 2
    });
    }


  var modalShow = function(obj) {
    var modalClass;
    var self = obj;
    var iconClass = ['icon-android', 'icon-html5', 'icon-windows', 'icon-desktop'];

    for(var i = 0; i < iconClass.length; i++ ) {
      if(self.find('.services-icon>i').hasClass(iconClass[i])) {
        modalClass = iconClass[i];
        $('[data-tags!='+iconClass[i]+']').addClass('hide');
        // $('li.attr[data-tags!='+iconClass[i]+']').addClass('hide');
        break;
      }
    }

    var bodyTop = $('body').scrollTop();
    var bodyWidth = $('body').width();

    var marginLeft = $('#expertise').css('margin-left');
    var eTop = self.offset().top;

    var h = $('.modal-wrapper.'+modalClass).height();
    var w = $('.modal-wrapper.'+modalClass).width();
    var eH = self.height();

    var finalY = bodyTop + 80;
    var posY = eTop-h+50;
    if(posY < finalY) {
      posY = finalY;
    }
    
    var posX = (bodyWidth/2) - (marginLeft + w);
    // Move
    $('.modal-wrapper .modal-triangle').css({
      'margin-top': -((posY+h)-(eTop+eH/2))
    })
    $('.modal-wrapper').removeClass('hide').css({
      'top': posY, 'left': posX
    })
  };

  if(!detectmob) {
    $('.technical-ex article').on('mouseenter', function() {
      modalShow($(this));
    });
  } else {
    $('.technical-ex article').unbind().on('click', function() {
      modalShow($(this));
    });
  }

  $('#expertise .modal-wrapper:visible').on('mouseleave blur focusout',function(){
    // $('.modal-wrapper').addClass('hide');
  });

});

// Portfolio slider & filter
$(function () {
  // if(detectmob) {
    $(".portfolio").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4
    });
  // } else {
  //   $(".portfolio").slick({
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 2
  //   });
  // }
  var filtered = false;

  $('.show-and-hide-content select').on('change', function() {
      var filter = '';

      var x = $(this).find('option:selected').attr('data-type');

      var self = $(this).attr('id');
      var that = $('.show-and-hide-content select:not(#'+self+')').attr('id');

      var y = $('#'+that+'').find('option:selected').attr('data-type');

      if(!(x)) {
        $(".content").show();
        $('.portfolio').slick('slickUnfilter');
        filtered = false;
      } else {
        if(y) filter = '.content-'+x+'.content-'+y;
        else filter = '.content-'+x;
        // $('.portfolio').slick('slickFilter','.content-' + x);
        $('.portfolio').slick('slickFilter',filter);
        filtered = true;
      }
  });
});