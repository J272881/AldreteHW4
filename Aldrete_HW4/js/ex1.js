let input1 = window.prompt("Enter an interger: ");
let num1 = Number(input1);
let input2 = window.prompt("Enter an interger: ");
let num2 = Number(input2);
let answer;

function operator(){
    let operator = prompt('Enter an Mathmatical operater (+,-,*,/,%)');

    if ((operator) === '+') {
        answer = num1 + num2;
    } else if ((operator) === '-') {
        answer = num1 - num2;
    } else if ((operator) === '*') {
        answer = num1 * num2;
    } else if ((operator) === '/') {
        answer = num1 / num2;
    } else if ((operator) === '%') {
        answer = num1 % num2;
    }else{
        console.log('answer not defined')
    };
console.log(num1 + operator + num2 + '=' + answer )

}
operator()