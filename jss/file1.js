
window.onscroll = function() {myFunction()};

var navv = document.getElementById("navv");
var sticky = navv.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navv.classList.add("sticky")
  } else {
    navv.classList.remove("sticky");
  }
}
