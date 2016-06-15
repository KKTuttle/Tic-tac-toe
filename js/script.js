var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]];
var test = [1,4,5,6];
var winCount = 0;
var definitelyWinner = 0;

var winner = function(){
  debugger;
  for(var j=0; j<winningCombinations.length; j++){
    for(var i=0; i<test.length; i++){
      for(var k=0; k<3; k++){
        if(test[i]===winningCombinations[j][k]){
          winCount += 1;
        }
      }
      if(winCount >=3){
        definitelyWinner += 1;
        winCount = 0;
      }
      else{
        winCount = 0;
      }
    }
  }
  if(definitelyWinner>0){
    return true;
  }
  else{
    return false;
  }
}

//array.includes(1);


// var people = [
//   { "name": "bob", "dinner": "pizza" },
//   { "name": "john", "dinner": "sushi" },
//   { "name": "larry", "dinner": "hummus" }
// ];
// Ignore what's below. Use the filter method!
//
// people.filter(function (person) { return person.dinner == "sushi" });
