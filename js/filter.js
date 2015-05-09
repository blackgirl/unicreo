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
      slidesToScroll: 2,
      responsive: true,
      centerMode: false
    });
  }

  // Class binding according to data-tags
  // $('#expertise .modal-wrapper li, article.project').each( function() {
  $('#expertise .modal-wrapper li, article.project').each( function() {
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

      if(self.html().indexOf(iconClass[i]) > 0) {
        modalClass = iconClass[i];
        $('.modal-wrapper li').addClass('hide');
        $('.modal-wrapper li[data-tags~='+iconClass[i]+']').removeClass('hide');
        $('.modal-wrapper li.'+iconClass[i]).removeClass('hide');
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

  // Filter projects by choosen techical expertise
  $('.modal-wrapper li').on('click', function() {
    var filter = $(this).attr('data-value');
    setExpertise('#select1', filter);
  });

  // Filter projects by choosen business expertise
  $('.bussiness-ex li').on('click', function() {
    var filter = $(this).attr('data-value');
    setExpertise('#select2', filter);
  });

});

// Set selector for filter-select by expertise type
function setExpertise(selector,filter) {
    // if we need "paired" filtering
    // $(selector).find('option:selected').prop('selected',false);
    $('.show-and-hide-content select').find('option:selected').prop('selected',false);
    $(selector+' option[data-value='+filter+']').prop('selected',true).attr('data-value', filter);
    setTimeout(function(){document.location="#portfolio"},100);
    filterProjects($(selector));
};
// Portfolio filter
function filterProjects(obj) {
    var select = obj;
    var filter = '';
    var x = select.find('option:selected').attr('data-value');

    var self = select.attr('id');
    var that = $('.show-and-hide-content select:not(#'+self+')').attr('id');

    var y = $('#'+that+'').find('option:selected').attr('data-value');

    if(!(x)) {
      $('.content').show();
      $('.portfolio').slick('slickUnfilter');
      filtered = false;
    } else {
      filter = '.'+x;
      if(y) filter = '.'+x+'.'+y;
      $('.portfolio').slick('slickFilter',filter);
      filtered = true;
    }
};

// Portfolio slider & filter
$(function () {
  $(".portfolio").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  var filtered = false;

  $('.show-and-hide-content select').on('change', function() {
      filterProjects($(this));
  });
});