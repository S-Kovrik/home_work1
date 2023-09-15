function myFunctionHeader() {
  document.getElementById("mydropdown__sublist").classList.toggle("show");
  document.getElementById("mydropdown__svg").classList.toggle("svg_absolute");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

$(document).ready(function () {
  $(".open").on("click", function () {
    $("#menu_nav").css("top", "0");
  });

  $(".close").on("click", function () {
    $("#menu_nav").css("top", "-1000px");
  });
});


