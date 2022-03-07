// Button on Click start the fucntion
document.querySelector(".btn").onclick = function() {
  rollDice();
};

// RANDOM NO. GENERATOR
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;



// Function to Start the Game
function rollDice() {
  showDice();
  showWinner();
  restart()
}


function showDice() {

  // FOR 1ST DICE IMAGE

  var randomImage1 = "dice" + randomNumber1 + ".png";
  var randomImage1src = "images/" + randomImage1;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImage1src);


  // FOR 2ND DICE IMAGE

  
  var randomImage2 = "dice" + randomNumber2 + ".png";
  var randomImage2src = "images/" + randomImage2;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImage2src);

}




function showWinner() {
  // If player 1 wins

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else if(randomNumber1==randomNumber2)
  {
    document.querySelector("h1").innerHTML = "Its a Draw!";
  }

}

function restart() {
  setTimeout(() => location.reload(), 2000);
}
