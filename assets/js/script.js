AOS.init({
    duration: 1500,
    once:true
})
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", function () {
    menuList.classList.toggle("-right-full");
    menuList.classList.toggle("right-0");
    menubarFirst.classList.toggle("rotate-[40deg]");
    menubarSecond.classList.toggle("hidden");
    menubarThird.classList.toggle("-rotate-[40deg]");
    body.classList.toggle("overflow-lg-hidden")
})

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}