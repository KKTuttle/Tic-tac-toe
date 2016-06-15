var displayX ="<img src='img/exes.png'>";
var displayO ="<img src='img/ohs.png'>";
var turn = 1;
var xArray = [];
var oArray = [];
var combLength = 0;
var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]];

function checkWinnerX() {
  debugger;
  for (var i = 0; i < winningCombinations.length; i++) {
    for (var j = 0; j < xArray.length; i++) {
      if ( xArray.sort() == winningCombinations[i].toString()) {
        alert("Good job, 'X'. You won!!")
        $("img").remove();
        xArray = [];
        oArray = [];
        xWin++;
      } else {
        console.log("nice try loser.");
        break;
      }
    }
  }
};

function checkWinnerO() {
  debugger;
  for (var i = 0; i < winningCombinations.length; i++) {
    for (var j = 0; j < oArray.length; i++) {
      if (oArray.sort() == winningCombinations[i].toString()) {
        alert("Good job, 'O'. You won!!")
        $("img").remove();
        xArray = [];
        oArray = [];
        oWin++;
      } else {
        console.log("nice try loser.");
        break;
      }
    }
  }
};


$(document).ready(function() {
  $(".boxes").click(function(event) {  // X
    // debugger;
    var boxNum = $(this).attr("id");
    if (turn % 2 !== 0 ) {
      $("#" + boxNum).prepend(displayX)
      xArray.push(boxNum);
      console.log(xArray);
    } else if(turn % 2 == 0 ) {
      $("#" + boxNum).prepend(displayO)
      oArray.push(boxNum);
      console.log(oArray)
    } else {
      alert("OHNOOO");
    }
    checkWinnerX();
    checkWinnerO();
    checkMe();
    turn++;
    event.preventDefault();
  });
});
