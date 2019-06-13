function imageOver()
{
  $('img.over').hover(
    function() {
      src = $(this).attr('src');
      new_src = src.replace('dark', 'light');
      $(this).attr('src', new_src);
    },

    function() {
      src = $(this).attr('src');
      new_src = src.replace('light', 'dark');
      $(this).attr('src', new_src);
    }
  )
}

/* Scroll Page */
$(document).ready(function() {
 height = 0;
  
  $('#scrollTop').click(
    function (e) {
      $('html, body').animate({scrollTop: height}, 500);
    }
  );
  $(window).scroll(function(){ //áº¨n hiá»‡n button
    if($(window).scrollTop() <= height)
      $('#scrollTop').fadeOut("slow");
    else
      $('#scrollTop').fadeIn("slow")
  });
 /* end of Scroll Page */
});