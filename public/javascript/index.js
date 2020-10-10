AOS.init();
$('body').css({
 "padding-top": $(".navbar").height()+45 + "px"
});
window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  navbar.classList.add("sticky")


};
