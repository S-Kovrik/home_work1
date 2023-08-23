function myFunctionHeader() {
  document.getElementById("mydropdown__sublist").classList.toggle("show");
  document.getElementById("mydropdown__svg").classList.toggle("svg_absolute");

}

$(document).ready(function () {
  $(".open").on("click", function () {
    $("#menu_nav").css("top", "0");
  });

  $(".close").on("click", function () {
    $("#menu_nav").css("top", "-1000px");
  });
});
