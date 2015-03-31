$(document).ready( function() {  
  var filters = {};

  //when a link in the filters div is clicked...  
  $('.container-filter select').on('change', function(e) {  
    e.preventDefault();
    console.log($(this).val());
    filters[0] = $(this).val();
    var show = $('#portfolio-items  ul li').filter( function() {
    for( k in filters )
      if(filters.hasOwnProperty(k) && !$(this).hasClass(filters[k]))
        return false;
      return true;
    });
    show.show();
    $('#portfolio-items ul li').not(show).hide();
    $('pre:first').html(JSON.stringify(filters));
  });  
}); 