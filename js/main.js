$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('header h1');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').addClass('navbarGradient');
       } else {
          $('#navbar').removeClass('navbarGradient');
       }
   });
});
