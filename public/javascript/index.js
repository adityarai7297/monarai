
$('body').css({
 "padding-top": $(".navbar").height() + "px"
});
window.onload = function() {
  var navbar = document.getElementById("navbar");
  navbar.classList.add("sticky")


};
