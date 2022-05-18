const playButton = document.querySelector('.btn-play');
const img1 = document.querySelector('.player-1-area img');
const img2 = document.querySelector('.player-2-area img');
const result = document.querySelector('.result-text');
const getFirstPoint = document.querySelector('.player-1-point');
const getSecondPoint = document.querySelector('.player-2-point');

let firstPoint = 0;
let secondPoint = 0;

playButton.addEventListener('click', () => {
    const randomFirst = Math.floor(Math.random() * 6 + 1);
    const randomSecond = Math.floor(Math.random() * 6 + 1);
    playButton.textContent = 'Next Round';

    if (randomFirst == randomSecond) {
        result.innerHTML = 'Draw';
    }

    else if (randomFirst > randomSecond) {
        result.innerHTML = 'Player 1 Won';
        firstPoint++;
    }

    else if (randomFirst < randomSecond) {
        result.innerHTML = 'Player 2 Won';
        secondPoint++;
    }

    if (randomFirst == 1) { img1.src = './images/dice-one.png'; }
    if (randomFirst == 2) { img1.src = './images/dice-two.png'; }
    if (randomFirst == 3) { img1.src = './images/dice-three.png'; }
    if (randomFirst == 4) { img1.src = './images/dice-four.png'; }
    if (randomFirst == 5) { img1.src = './images/dice-five.png'; }
    if (randomFirst == 6) { img1.src = './images/dice-six.png'; }

    if (randomSecond == 1) { img2.src = './images/dice-one.png'; }
    if (randomSecond == 2) { img2.src = './images/dice-two.png'; }
    if (randomSecond == 3) { img2.src = './images/dice-four.png'; }
    if (randomSecond == 4) { img2.src = './images/dice-four.png'; }
    if (randomSecond == 5) { img2.src = './images/dice-five.png'; }
    if (randomSecond == 6) { img2.src = './images/dice-six.png'; }

    getFirstPoint.innerHTML = `${firstPoint} points`;
    getSecondPoint.innerHTML = `${secondPoint} points`;

    if (firstPoint == 10 || secondPoint == 10) {
        playButton.disabled = true;
        playButton.classList.add('disabled');
        playButton.classList.remove('active');
        playButton.textContent = 'Please Restart';
    }
});