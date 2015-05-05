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
    var self = obj;
    var sc1 = $('body').scrollTop();
    var sc2 = self.offset().top;
    var h = $('.modal-wrapper').height();
    var h1 = self.height();
    var finalX = sc1 + 80;
    var posX = sc2-h+50;
    if(posX < finalX) {
      posX = finalX;
    }

    // Move
    $('.modal-triangle').css({
      'margin-top': -((posX+h)-(sc2+h1/2))
    })

    $('.modal-wrapper').removeClass('hide').css({
      'top': posX
    })
  };

  if(!detectmob) {
    $('.technical-ex article').on('mouseenter', function() {
      modalShow($(this));
    });
    // if mobile
    // .on('click',function(e) {

      // var sc1 = $('body').scrollTop();
      // var sc2 = $(this).offset().top;
      // var h = $('.modal-wrapper').height();
      // var h1 = $(this).height();
      // var finalX = sc1 + 80;
      // var posX = sc2-h+50;
      // if(posX < finalX) {
      //   posX = finalX;
      // }

      // // Move
      // $('.modal-triangle').css({
      //   'margin-top': -((posX+h)-(sc2+h1/2))
      // })

      // $('.modal-wrapper').removeClass('hide').css({
      //   'top': posX
      // })
      // );
    } else {
      $('.technical-ex article').unbind().on('click', function() {
        modalShow($(this));
      });
    }

    $('.technical-ex article').on('mouseleave',function(){
      $('.modal-wrapper').addClass('hide');
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