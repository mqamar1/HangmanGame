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
var totalGuess = 19;
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


  var spaceMovie = randomMovie.toLowerCase().split("");
  console.log(spaceMovie);

  selectedWord = spaceMovie;
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







  function replaceBlanks(letter, index) {
    console.log("replaceBlanks")

    for (var i = 0; i < randomMovie.length; i++) {
      //console.log(startOver[i])
      //console.log(startOver.charAt());
      if (letter === randomMovie.charAt(i)) {
        //console.log(randomMovie.charAt(i));
        startOver[i] = letter;
        //console.log(startOver);//
        document.getElementById("word").innerHTML = startOver.join(' ');
      }
    }
  }

  function dupLetters("duplicate"){
    if ()
  }




  document.onkeyup = function(event) {
    //console.log(event);
    var keyPress = event.key.toLowerCase();
    var letterIndex = selectedWord.indexOf(keyPress);
    console.log(event.key)

    if (totalGuess > 0) {
      if (letterIndex >= 0) {

        console.log("Exists")

        replaceBlanks(keyPress, letterIndex)
      }
    }
  }
}
