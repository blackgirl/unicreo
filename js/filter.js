var detectmob = false;  
$(document).ready( function() {

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

  // Class binding according to data-tags
  // $('#expertise .modal-wrapper li, article.project').each( function() {
  $('article.project').each( function() {
    var $this = $(this);
    var tags = $this.data('tags');

    if (tags) {
      var classes = tags.split(',');
      for (var i = classes.length - 1; i >= 0; i--) {
        $this.closest( "li" ).addClass(classes[i]);
      };
    }
  });

  // Modal for technical expertise
  var modalShow = function(obj) {
    var modalClass;
    var self = obj;
    var iconClass = ['icon-apps', 'icon-ruby', 'icon-net', 'icon-ux'];

    for(var i = 0; i < iconClass.length; i++ ) {
      if(self.find('.services-icon>i').hasClass(iconClass[i])) {
        modalClass = iconClass[i];
        $('.modal-wrapper li[data-tags!='+iconClass[i]+']').addClass('hide');
        $('.modal-wrapper li[data-tags~='+iconClass[i]+']').removeClass('hide');
        break;
      }
    }

    var bodyTop = $('body').scrollTop();
    var bodyWidth = $('body').width();

    var marginLeft = $('#expertise').css('margin-left');
    var eTop = self.offset().top;

    var h = $('.modal-wrapper').height();
    var w = $('.modal-wrapper').width();
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

  // Event binding for technical expertise's modal
  $('.technical-ex article').on('mouseenter click', function() {
    modalShow($(this));
  });

  $('#expertise, .modal-wrapper').on('mouseleave blur focusout', function() {
    $('.modal-wrapper').addClass('hide');
  });

  $('.bussiness-ex li, .modal-wrapper li').on('click', function(){
    var filter = $(this).attr('data-value');
    // $("select.filter.tech").val(filter);
    console.log(filter);
  });

});

// Portfolio slider & filter
$(function () {
  $(".portfolio").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  var filtered = false;

  $('.show-and-hide-content select').on('change', function() {
      var filter = '';

      var x = $(this).find('option:selected').attr('data-value');

      var self = $(this).attr('id');
      var that = $('.show-and-hide-content select:not(#'+self+')').attr('id');

      var y = $('#'+that+'').find('option:selected').attr('data-value');

      if(!(x)) {
        $('.content').show();
        $('.portfolio').slick('slickUnfilter');
        filtered = false;
      } else {
        filter = '.'+x;
        if(y) filter = '.'+x+'.'+y;
        console.log(filter)
        // $('.portfolio').slick('slickFilter','.content-' + x);
        $('.portfolio').slick('slickFilter',filter);
        filtered = true;
      }
  });
});