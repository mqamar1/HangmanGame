//Word bank
var disneyMovies = ["Beauty and the Beast", "The Lion King", "Aladdin", "Snow White", "Toy Story", "Cinderella"];
//Guessed letters
var rightGuessLetters = [];
//Used Letters
var usedLetter = [];
//Number of guesses left
var numGuessesLeft = [];
//computer's pick
//var computerGuess = random_word();
var selectedWord = ""
var startOver = [];
var wrongGuessLetters = [];
//win and losses
var win = 0;
var loss = 0;
var totalGuess = 20;
var guess = ("");
var blank_letters = [];
//select random word from disney disneyMovies
// window.onload = function(){
randomWord();
//
// function randomword(){
//   console.log("Hi")
// }
//
// document.addEventListener("keyup", function(event){
//   console.log("pressed")
// })
function randomWord() {
  var randomMovie = disneyMovies[Math.floor(Math.random() * disneyMovies.length)];
  console.log(randomMovie)
  var lowerCase = randomMovie.toLowerCase();
  //console.log( "lowercase " + lowerCase);
  var spaceMovie = randomMovie.toLowerCase().split("");
  //console.log(spaceMovie);
  selectedWord = spaceMovie;
  var numberLetters = spaceMovie.length;
  startOver = [];

  for (var i = 0; i < numberLetters; i++) {
    startOver.push("_");
    //console.log(startOver);
  }
  totalGuess = 20;
  // console.log(totalGuess);
  document.getElementById("guesses").innerHTML = totalGuess;
  document.getElementById("word").innerHTML = startOver.join(" ");

  function replaceBlanks(letter) {
    console.log("replaceBlanks")
    for (var i = 0; i < randomMovie.length; i++) {
      //console.log(startOver[i])
      //console.log(startOver.charAt());
      if (letter === lowerCase.charAt(i)) {
        //console.log(randomMovie.charAt(i));
        startOver[i] = letter;
        //console.log(startOver);//
        document.getElementById("word").innerHTML = startOver.join(' ');

      }
    }
  }
  // todo: duplicate
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
    //console.log(event);
    var keyPress = event.key.toLowerCase();
    console.log(" keyPress " + keyPress);
    var letterIndex = selectedWord.indexOf(keyPress);
    console.log(" letterIndex  " + letterIndex);

    dupLetters(keyPress);

    if (totalGuess > 0) {
      if (letterIndex >= 0) {
        console.log("Exists")
        //  var total = totalGuess - letterIndex;
        // console.log(total);
        replaceBlanks(keyPress, letterIndex)
        rightWord();
      }
    }
  }
}
