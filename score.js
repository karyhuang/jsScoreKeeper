var p1Btn = document.querySelector('#p1');
var p2Btn = document.querySelector('#p2');
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winScore = 5;
var resetBtn = document.querySelector("#reset");

var numInput = document.querySelector("input");
// when you have diff types of inputs, use ...querySelector("input[type='number']")
var winScoreDisplay = document.querySelector("p span"); // selects the span inside the p


// everytime the user clicks p1Btn, the p1 score will increment then display at the h1
p1Btn.addEventListener("click", function(){
  // when the game is not over, add 1 to p1Score
  if (!gameOver) {
    p1Score++;
    // after adding 1, if score now equals to winScore which is 5, game is over, can't increment anymore
    // when setting gameOver to true, player 2 can't increment anymore either
    if (p1Score === winScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
});

// same for player 2
p2Btn.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (p2Score === winScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});


// define a reset function because it will be used more than once
function reset() {
  // first reset the score variables, then update the display to reflect the change
  p1Score = 0;
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.textContent = p2Score;
  // since don't know who's the winner, just remove the winner class from both
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  // set gameOver back to false - reset the whole game
  gameOver = false;
}

resetBtn.addEventListener("click", function(){
  // call the reset function when the resetBtn is clicked
  reset();
});

// use a change event listener instead of click here, so it will call the function everytime the value is changed, either through mouse or keyboard
numInput.addEventListener("change", function(){
  // set the PLaying to score to whatever value is in the input
  winScoreDisplay.textContent = this.value;
  // input values are strings by nature, must convert to number to compare to player score variables
  winScore = Number(this.value); 
  // call the reset function whenever the input value is changed
  reset();
});