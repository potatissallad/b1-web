$(document).ready(function() {
  // hide the p tags
  $("p").hide();
  $("#favPic").hide();
   $("h1").click(function() {
     $(this).next().fadeToggle(1350);
   });
   
   $("h2").click(function() {
     $(this).next().fadeToggle(1350);
   });
   
 });