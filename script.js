'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
*/
let score = 20;

let scoreSubtract = function(){
    score--;
    document.querySelector('.score').textContent = score;
};

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '??';

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number';
    } else if(guess === number){

        //when the player wins
        document.querySelector('.message').textContent = 'Correct guess!';
        document.querySelector('.number').textContent = number;
        document.querySelector('.highscore').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

    } if(score > 1){
        if(guess > number){
            document.querySelector('.message').textContent = 'Too high';
            scoreSubtract();
        } else if(guess < number){
            document.querySelector('.message').textContent = 'Too low';
            scoreSubtract();
        }
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
    }


});

