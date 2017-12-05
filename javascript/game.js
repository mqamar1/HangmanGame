//Word bank
var disneyMovies = ["Beauty and the Beast", "The Lion King", "Aladdin", "Snow White", "Toy Story", "Cinderella"];
//Guessed letters
var rightGuessLetters = [];
//Used Letters
var usedLetter = [];
//Number of guesses left
var guessesLeft = [];
//computer's pick
//var computerGuess = random_word();
var random_word = ""
var startOver = [];
var wrongGuessLetters = [];
//win and losses
var win = 0;
var loss = 0;
var totalGuess = 19;
var guess = ("");

//select random word from disney disneyMovies
// window.onload = function(){

window.onload = function random_word() {
  var randomMovie = disneyMovies[Math.floor(Math.random() * disneyMovies.length)];

  var spaceMovie = randomMovie.split("");
  //console.log(randomMovie);

  var numberLetters = spaceMovie.length;

  startOver = [];

  wrongGuessLetters = [];

  for (var i = 0; i < numberLetters; i++) {
    startOver.push("_");
    //console.log(startOver);

  }
  totalGuess = 19;
  // console.log(totalGuess);


  document.getElementById("guesses").innerHTML = totalGuess;

  document.getElementById("word").innerHTML = startOver.join(" ");




  function updateUsedLettersArr(letter) {
      usedLetter.push(letter);
      document.getElementById("usedLetters").innerHTML = usedLetter.join(' ');
  }




  function replaceBlanks(letter) {
    for (var i = 0; i < randomMovie.length; i++) {
      //console.log(randomMovie.charAt());
      if (letter === randomMovie.charAt(i)) {
        startOver[i] = letter;
        if (startOver[i] === randomMovie) {

          alert("You won!")
        } else {
          alert("You lost!")
        }
      }

    }
  }

  //console.log(replaceBlanks());



  function nodupletters(letter) {
    if (usedLetter.indexOf(letter) != -1) {
      return true;

    } else {
      return false;
    }

  }


  document.onkeyup = function(event) {
    //console.log(event);

    if (totalGuess > 0) {
      if (disneyMovies.indexOf(event.key) === -1) {
        if (nodupletters(event.key)) {
          alert("Duplicate letter, please try again.")
        } else {
          //sconsole.log("correct letter" + event.key);
          replaceBlanks(event.key);
        }
      }
    }
  }



}
