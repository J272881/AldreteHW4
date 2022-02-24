let stop= [ ];

while (true){
    let input= prompt ('Enter a word until you type stop and see how long you list can be :) :')
    if (input.toLowerCase()=== 'stop' && stop.length === 0 ){
        alert("No words to display")
        break;
    } else if (input.toLowerCase() === 'stop'){
        alert('You entered the following words:' + stop);
        break;
    } else {
        stop.push(input);
    }
}

