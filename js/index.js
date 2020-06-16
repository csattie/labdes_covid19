$(function() {
//    $("#navigation").load("../navigation.html");
   $("#footer").load("../footer.html");
   $("#header").load("../header.html");
      $("#dialogos").load("../dialogos.html");
   $("#quemsomos").load("../quemsomos.html");
   $("#contato").load("../contato.html");
   $("#iniciativas").load("../iniciativas.html");
   $("#comoajudar").load("../comoajudar.html");
});

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

$("#my-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
});
