var values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var suits = ["spades", "clubs", "hearts", "diamonds"];

$(document).ready(function(){
  suits.forEach(function(suit){
    values.forEach(function(value){
      $(".output").append("<li>" + value + "  of " + suit + "</li>");
    })
  })



});
