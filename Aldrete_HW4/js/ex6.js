function Num(){

   return Math.round(Math.random() * 101); 

}
var randomnumber = Num();
console.log(randomnumber);
let guess = prompt('Guess the number between 1 and 100 inclusive: ');
guess = parseInt(guess)
let tries = 1;
while (randomnumber !== guess) {
    if (randomnumber > guess) {
        guess= prompt('Too Low, guess again:');
        guess = parseInt(guess)
    } else if (randomnumber < guess) {
        guess = prompt('Too High, guess again:');
        guess = parseInt(guess)}
        tries ++;
}
 alert(`Correct! It took you ${tries} attempts to guess the correct number`)



