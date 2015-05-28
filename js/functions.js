// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if ( navigator.appVersion.indexOf("Mac")!=-1 ) 
	jQuery('html').addClass('osx');

// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";

$('.animated').appear(function() {
  $(this).each(function(){   
    $(this).css('visibility','visible');
    $(this).addClass($(this).data('type'));
  });
},{accY: -150});

$('.skill-shortcode').appear(function() {
  $('.progress').each(function(){ 
    $('.progress .bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
  });
},{accY: 0});
  $('.zoom-img').zoom();

  // $('.popup-link').magnificPopup({
  // 		type: 'image'
  // 	});

// Show popup image gallery for each portfolio preview
// Click on "SHOW" link to show popup
var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  if(!groups[id]) {
    groups[id] = [];
  } 
  groups[id].push( this );
});

$.each(groups, function() {
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })
});
// !End of popup image gallery

/* Nice Scroll */
$("html").niceScroll({zindex:99999,cursorborder:"1px solid #464646"});
    
$(function() {
$(".inc").click(function() { var $button = $(this); var old = $button.parent().find("input").val(); var newVal = parseFloat(old) + 1; $button.parent().find("input").val(newVal); }); 

$(".dec").click(function() { var $button = $(this); var old = $button.parent().find("input").val(); var newVal = parseFloat(old) - 1; $button.parent().find("input").val(newVal); }); 
}); 
jQuery('header nav').meanmenu({
            meanMenuClose: "X", // single character you want to represent the close menu button
            meanMenuCloseSize: "22px", // set font size of close button
            meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
            meanRevealPosition: "right", // left right or center positions
            meanRevealPositionDistance: "0", // Tweak the position of the menu
            meanRevealColour: "", // override CSS colours for the reveal background
            meanRevealHoverColour: "", // override CSS colours for the reveal hover
            meanScreenWidth: "979", // set the screen width you want meanmenu to kick in at
            meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
            meanShowChildren: true, // true to show children in the menu, false to hide them
            meanExpandableChildren: true, // true to allow expand/collapse children
            meanExpand: "+", // single character you want to represent the expand for ULs
            meanContract: "-", // single character you want to represent the contract for ULs
            meanRemoveAttrs: false // true to remove classes and IDs, false to keep them
});
//Move Nav
$(window).scroll(function(){ 
 if ($(this).scrollTop() > 50){ 
	$('.navbar').addClass("navbar-move");
  $('.navbar .nav > li > a').addClass("menu-scroll-a");
  $('.logo').addClass("navbar-move");
 } 
 else{
	$('.navbar').removeClass("navbar-move");
  $('.navbar .nav > li > a').removeClass("menu-scroll-a");
  $('.logo').removeClass("navbar-move");
 }
}); 
// External links   
	(function() {
	    $(window).load(function() {
			$('a[rel=external]').attr('target','_blank');	
		});                                            
	})(); 
// Tooltips		
	(function() {
    $('body').tooltip({
        delay: { show: 300, hide: 0 },
        selector: '[data-toggle=tooltip]:not([disabled])'
    });
  })(); 
// Accordion 
$(function() {
    $('.accordion').on('show', function (e) {
         $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('ac-active');
    });
    $('.accordion').on('hide', function (e) {
        $(this).find('.accordion-toggle').not($(e.target)).removeClass('ac-active');
    });
        
});

   var detectmob = false;	
   if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {							
      detectmob = true;
	}
	if (detectmob === true) {
    $( '.parallax' ).each(function(){
				$(this).addClass('parallax-mobile');
		});
  }
  else {
  	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
      $( '#parallax-one' ).parallax("100%", 0.5,true);
      $( '#parallax-two' ).parallax("300%", 0.1),true; // Add more
      $( '#parallax-three' ).parallax("50%", 0.5,true); // Add more
      $( '#parallax-four' ).parallax("50%", 0.1,true); // Add more
      $( '#parallax-five' ).parallax("50%", 0.5),true; // Add more 
    }

// Fitvids 
$(window).load(function() {
  $("body").fitVids();
}); 

/* --------------------------------------------------------	
	 Portfolio 
   --------------------------------------------------------	*/	
  (function() {
    $(window).load(function(){
    		// filter tags if location.has is available. e.g. http://example.com/work.html#design will filter projects within this category
    		if (window.location.hash!='' && window.location.hash != '#portfolio' && window.location.hash != '#contacts') {
    			filter_projects( '.' + window.location.hash.replace('#','') );
    		}
    	}
    })
	})();

// FlexSlider 
$(window).load(function() {
  //slider top navigation
  $('.top-nav-content-slider-right').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS : false,
    prevText: "",
    nextText: "",
    animationLoop: true 	
  });

  $('.top-nav-content-slider-right-no-text').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS : false,
    prevText: "",
    nextText: "",
    animationLoop: true 	
  }); 
 
  $('.top-nav-content-slider-left').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS : false,
    prevText: "",
    nextText: "",    
    animationLoop: true 	
  });
 
 // center navig slider
  $('.center-nav-content-slider').flexslider({
    animation: "slide",
    slideshow: true,
    useCSS : false,
    prevText: "",
    nextText: "",    
    animationLoop: true 	
  });
 
 });

  /* Contact Form */		
	$('#send').click(function(){ // when the button is clicked the code executes
		$('.error').fadeOut('slow'); // reset the error messages (hides them)
		var error = false; // we will set this true if the form isn't valid
		var name = $('input#name').val(); // get the value of the input field
		if(name == "" || name == " " || name == "Name") {
    $('#err-name').show(500);
    $('#err-name').delay(4000);
    $('#err-name').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    }); 
      error = true; // change the error state to true
		}

		var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
		var email = $('input#email').val().toLowerCase(); // get the value of the input field
		if (email == "" || email == " " || email == "E-mail") { // check if the field is empty
			$('#err-email').fadeIn('slow'); // error - empty
			error = true;
		}else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable

    $('#err-emailvld').show(500);
    $('#err-emailvld').delay(4000);
    $('#err-emailvld').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    });         
			error = true;
		}
		var message = $('textarea#message').val(); // get the value of the input field
		if(message == "" || message == " " || message == "Message") { 
    $('#err-message').show(500);
    $('#err-message').delay(4000);
    $('#err-message').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    });            
			error = true; // change the error state to true
		} 
		if(error == true) {
    $('#err-form').show(500);
    $('#err-form').delay(4000);
    $('#err-form').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    });         
			return false;
		}
		var data_string = $('#ajax-form').serialize(); // Collect data from form
		//alert(data_string);

		$.ajax({
			type: "POST",
			url: $('#ajax-form').attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					$('#err-timedout').slideDown('slow');
				}
				else {
					$('#err-state').slideDown('slow');
					$("#err-state").html('An error occurred: ' + error + '');
				}
			},
			success: function() {

    $('#ajaxsuccess').show(500);
    $('#ajaxsuccess').delay(4000);
    $('#ajaxsuccess').animate({
      height: 'toggle'  
    }, 500, function() {});           
        $("#name").val('');
        $("#email").val('');
        $("#message").val('');
			}
		});
		return false; // stops user browser being directed to the php file
	}); // end click function
  
// back to top 
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
});