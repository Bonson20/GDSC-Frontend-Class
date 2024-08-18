
let home = document.querySelector('.home');
let guest = document.querySelector('.guest');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

// Add EventListener for home

left.addEventListener('click', e =>{
    if(e.target.classList.contains('one')){
        updateScore(home, 1);
    }
    else if(e.target.classList.contains('two')){
        updateScore(home, 2);
    }
    else if(e.target.classList.contains('three')){
        updateScore(home, 3);
    }
})

// Add event Listeneing to the guest

right.addEventListener('click', e =>{
    if(e.target.classList.contains('tokko')){
        updateScore(guest, 1);
    }
    else if(e.target.classList.contains('lama')){
        updateScore(guest, 2);
    }
    else if(e.target.classList.contains('sadi')){
        updateScore(guest, 3);
    }
})

// function to update the score

function updateScore(scoreElement, points){
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += points;
    scoreElement.textContent = currentScore;
}