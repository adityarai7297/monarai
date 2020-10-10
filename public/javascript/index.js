AOS.init();

$(window).on('resize load', function() {
  $('body').css({
    "padding-top": $(".navbar").height()+45 + "px"
  });
});
