//Global Variables
//====================================================================
//Arrays and Variables for holding Data
var wordOption = ["mickey", "cinderella", "simba", "belle", "goofy", "aladdin", "jasmine"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game COunters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



//Functions
//====================================================================

function startGame() {
  selectedWord = wordOption[Math.floor(Math.random() * wordOption.length)];
  //break the words apart
  lettersinWord = selectedWord.split("");
  //how many (number) blanks are required for the word
  numBlanks = lettersinWord.length;

  //Reset
  guessesLeft = 9;
  wrongLetters = 0;
  blanksAndSuccesses = []; //blanks are cleared

  //populate blanks and successes with right number of blanks.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");

  }

  //Change HTML to reflect Game
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("numOfGuessesLeft").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;



  //Testing Debugging
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses)
}

function checkLetters(letter) {
  //check if letter exist in word at all
  //console.log("function letter")
  var isLetterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      isLetterInWord = true;
      console.log("letter is in word");
      //console.log(isLetterInWord);
    }
  }
  //check where in word the letter exist, then populate blanksAndSuccesses array
  if (isLetterInWord) {

    for (var i = 0; i < numBlanks; i++) {
      if (selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  }
  //letter wasn't found
  // else {
  //   wrongLetters.push(letter);
  //   guessesLeft--
  // }

  //console.log(blanksAndSuccesses);

}

function roundComplete() {
  console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

//update html with recent info

document.getElementById("numOfGuessesLeft").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
// document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");



  //check if user won or lost
  if(lettersinWord.toString()===blanksAndSuccesses.toString()){
    winCount ++;
    alert("You Won!")
    //update the winCounterin HTML
    startGame();
    document.getElementById("winCounter").innerHTML = winCount;
  }
  else if(guessesLeft==0){
    lossCount++
    alert("You Lost!")
    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame();
  }
}



startGame();
//Main Process
//====================================================================
//Register Clicks

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  //console.log(letterGuessed);

  checkLetters(letterGuessed);
  roundComplete();
}
