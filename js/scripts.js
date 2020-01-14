$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("original");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });


});