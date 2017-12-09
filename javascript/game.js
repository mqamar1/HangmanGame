//Word bank
var disneyMovies = ["Beauty and the Beast", "The Lion King", "Aladdin", "Snow White", "Toy Story", "Cinderella"];
var rightGuessLetters = [];
var usedLetter = [];
var numGuessesLeft = [];
var selectedWord = ""
var startOver = [];
var wrongGuessLetters = [];
var win = 0;
var loss = 0;
var totalGuess = 20;
var guess = ("");
var blank_letters = [];

randomWord();

function randomWord() {
  var randomMovie = disneyMovies[Math.floor(Math.random() * disneyMovies.length)];
  console.log(randomMovie)
  var lowerCase = randomMovie.toLowerCase();

  var spaceMovie = randomMovie.toLowerCase().split("");

  selectedWord = spaceMovie;
  var numberLetters = spaceMovie.length;
  startOver = [];

  for (var i = 0; i < numberLetters; i++) {
    startOver.push("_");

  }
  totalGuess = 20;

  document.getElementById("guesses").innerHTML = totalGuess;
  document.getElementById("word").innerHTML = startOver.join(" ");

  function replaceBlanks(letter) {
    console.log("replaceBlanks")
    for (var i = 0; i < randomMovie.length; i++) {

      if (letter === lowerCase.charAt(i)) {
        startOver[i] = letter;
        document.getElementById("word").innerHTML = startOver.join(' ');

      }
    }
  }

  function dupLetters(keyPress) {
    for (var i = 0; i < startOver.length; i++) {
      if (keyPress === startOver[i]) {
        alert("Duplicate lettter");
        usedLetter.push(keyPress);
        document.getElementById("usedLetters").innerHTML = usedLetter.join(' ');

      }

    }
  }



  function rightWord() {
    for (var i = 0; i < startOver.length; i++) {
      if (selectedWord === lowerCase && startOver > 0) {
        alert("You Win!")

      }
    }
  }


  document.onkeyup = function(event) {

    var keyPress = event.key.toLowerCase();
    console.log(" keyPress " + keyPress);
    var letterIndex = selectedWord.indexOf(keyPress);
    console.log(" letterIndex  " + letterIndex);

    dupLetters(keyPress);
    rightWord();
    if (totalGuess > 0) {
      if (letterIndex >= 0) {
        console.log("Exists")
        replaceBlanks(keyPress, letterIndex)

      }
    }
  }
}
