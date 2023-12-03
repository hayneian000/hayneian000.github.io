$(document).ready(function () {
  // Code for animation
  $(window).scroll(function () {
    $(".card").each(function () {
      var cardPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (cardPos < topOfWindow + 600) {
        $(this).addClass("fadeIn");
      }
    });
  });
});
