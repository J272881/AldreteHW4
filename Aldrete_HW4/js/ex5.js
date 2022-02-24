
function countVowel(str) { 
    var vowel_list = 'aeiouAEIOU';
    var count = 0;

    for(var i=0; i <str.length; i++) {
        if (vowel_list.indexOf(str[i]) !== -1)
        {
            count += 1;
        }
    }
    return count;
}

function palindrome (str){
    const len = str.length;
    for (let i = 0; i < len / 2; i ++){
        if (string[i] !== string [len - 1 - i]){
            return ' is not a palindrome';
        }
    } return ' is a palindrome';

}

const string = prompt('Enter a Word: ');

const VowelNumber = countVowel(string);
const value = palindrome(string);

alert(`${string} contains ${VowelNumber} vowels, and ${value} `);