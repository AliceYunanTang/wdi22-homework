// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// // Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.a÷

var answerWord = ["F","O","X"];
var runningResult = ["_","_","_"]
// var guessNumber = 0

var guessLetter = function(guess){
  for (var i = 0; i < answerWord.length; i++) {
    if (guess === answerWord[i]){
      runningResult[i] = guess;
      // runningResult.splice(i,i, guess);
      //attempted to use 'splice' but it adds an extrax "_ " after "O" in the console.log
    }
    console.log(runningResult.join(''));
    alert ("You got a letter!");
  } // for
  if (answerWord.toString('') !== runningResult.toString('')){
    console.log('keep going');
    alert ('have another go');
  } else {
    console.log('You did it!');
    alert ('Great work!');
  }
};

guessLetter('X');
guessLetter('F');
guessLetter('J');
guessLetter('O');
