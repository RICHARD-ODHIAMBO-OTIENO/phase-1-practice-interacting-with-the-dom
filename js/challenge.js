// Create a variable that make the number go up
let counter = 0;
const counterElement = document.getElementById('counter');

// Create a fuction that whenever it is ChannelSplitterNode, it adds 1 to the score and then updates to show the new score;
function incrementCounter() {
    counter++;
    counterElement.textContent = counter;  // Updates to display the new score

}

// creates a variable that waits for 1 second to add 1 by itself over and over , by using setInterval
let timer = setInterval(incrementCounter, 1000);

//Create buttons to change the scores
document.getElementById('plus').addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    counterElement.textContent = counter;
});


// Creating the heart button to like a number
const like = {};
document.getElementById('heart').addEventListener('click',() => {
    likes[counter] = (likes[counter] || 0) + 1; //To return the first operand if it is truthy; otherwise, it returns the second operand.
    console.log(`Number ${counter} has ${likes[counter]} likes.`)
});

// Creating variable and operation that stops/pause and start the count
const stopBtn = document.getElementById('pause');
stopBtn.addEventListener('click', () => {
    if (stopBtn.textContent === 'pause') {
        clearInterval(timer);
        stopBtn.textContent = 'resume';

    } else {
        timer = setInterval(incrementCounter,1000);
        stopBtn.textContent = 'pause';
    }
});

