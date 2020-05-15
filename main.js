//Declaration of all variables needed
let systemGuess = Math.floor((Math.random() * 100) + 1);
let myGuess;
let guesses = document.getElementById("guesses");
let lowOrHi = document.getElementById("lowOrHi");
let lastResult = document.getElementById("lastResult");
let guessSubmit = document.getElementById("guessSubmit");
let guessInput = document.getElementById("guessInput");
let gameRestart = document.getElementById("gameRestart");
gameRestart.style.display = "none"
let myCounter = "";

//Code function to execute when you click on reload Game
function resetGame(){
  gameRestart.style.display = "";a
  guessInput.setAttribute("disabled", "disable");
  guessSubmit.setAttribute("disabled", "disable");

}
//Code function to execute when your guess is right
function goodGuess(){
  guesses.innerHTML = "You guessed " + myGuess;
  lowOrHi.innerHTML = "The System guess was: " + systemGuess;
  lastResult.innerHTML = "Congratulations!!! You are correct. please start another game " + "Click on reloadGame!";
  lastResult.style.color = "Green";
  resetGame();
}
//Code function to execute when your guess is higher than computer
function highGuess(){
  guesses.innerHTML = "You guessed " + myGuess;
  lowOrHi.innerHTML = "Hint: the system have a number between " + (systemGuess -Number(10)) + " and " + (systemGuess + Number(10));
  lastResult.innerHTML = "Wrong guess. You got a higher value. Try Again!";
  lastResult.style.color = "red";
}
//Code function to execute when your guess is lower than computer
function lowGuess(){
  guesses.innerHTML = "You guessed " + myGuess;
  lowOrHi.innerHTML = "Hint: the system have a number between " + (systemGuess -Number(10)) + " and " + (systemGuess + Number(10));
  lastResult.innerHTML = "Wrong guess. You got a lower value. Try Again!";
  lastResult.style.color = "red";
}
//Code function to execute when you guess more than 10 Times without getting it
function wrongGuesses(){
  guesses.innerHTML = "You guessed " + myGuess;
  lowOrHi.innerHTML = "The System guess was: " + systemGuess;
  lastResult.innerHTML = "Opps! All guesses were wrong guess. Restart new game! " + "Click on reloadGame!";
  lastResult.style.color = "red";
  resetGame();
}
/*Code function that makes sure your guess is not more than 10, and gives you an appropraite message depending on you guess */
function getResult() {
  myGuess = Number(document.getElementById("guessInput").value);
  myCounter++;
  if((myGuess == systemGuess) && (myCounter != 10)){
    goodGuess();
    myCounter = 0;
  } else if((myGuess > systemGuess) && (myCounter != 10)){
    highGuess();
  } else if((myGuess < systemGuess) && (myCounter != 10)){
    lowGuess();
  } else{
    wrongGuesses();
    myCounter = 0;
  }
}