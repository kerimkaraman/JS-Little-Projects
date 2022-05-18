let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");
let getImg1 = document.querySelector(".img1");
let getImg2 = document.querySelector(".img2");
let result = document.querySelector(".result");
let getScorePlayer = document.querySelector(".player1-score");
let getScoreCPU = document.querySelector(".cpu-score");
let scorePlayer = 0;
let scoreCPU = 0;


startBtn.addEventListener('click',function (){
    result.textContent = "PLAY !";
    let rndm1 = Math.floor(Math.random() * 3 + 1);
    let rndm2 = Math.floor(Math.random() * 3 + 1);
    if(rndm1 == 1) {
        getImg1.src = "./images/rock.png";
    }
    else if (rndm1 == 2) {
        getImg1.src = "./images/paper.png";
    }
    else {
        getImg1.src = "./images/scissors.png";
    }

    if(rndm2 == 1) {
        getImg2.src = "./images/rock.png";
    }
    else if (rndm2 == 2) {
        getImg2.src = "./images/paper.png";
    }
    else {
        getImg2.src = "./images/scissors.png";
    }

    if (rndm1 == 1 && rndm2 == 2){
        scoreCPU +=1;
        getScoreCPU.textContent = scoreCPU;
    }
    else if (rndm1 == 1 && rndm2 == 3) {
        scorePlayer +=1;
        getScorePlayer.textContent = scorePlayer;
    }
    else if (rndm1 == 2 && rndm2 == 1) {
        scorePlayer +=1;
        getScorePlayer.textContent = scorePlayer;
    }
    else if (rndm1 == 2 && rndm2 == 3) {
        scoreCPU+=1;
        getScoreCPU.textContent = scoreCPU;
    }
    else if (rndm1 == 3 && rndm2 == 1) {
        scoreCPU+=1;
        getScoreCPU.textContent = scoreCPU;
    }
    else if (rndm1 == 3 && rndm2 == 2) {
        scorePlayer+=1;
        getScorePlayer.textContent = scorePlayer;
    }    

    if(scorePlayer == 2 && scorePlayer > scoreCPU) {
        result.textContent = "Player 1 Win";
        startBtn.disabled = true;
        /* let winAudio = new Audio('./sounds/victory.mp3');
        winAudio.play(); */
    }

    else if(scoreCPU == 2 && scorePlayer < scoreCPU) {
        result.textContent = "CPU Win";
        startBtn.disabled = true;
        /* let loseAudio = new Audio('./sounds/lose.mp3');
        loseAudio.play(); */
    }

}); 

restartBtn.addEventListener('click', function(){
    getImg1.src = "./images/white.png";
    getImg2.src = "./images/white.png";
    result.textContent = "CLICK START";
    getScorePlayer.textContent = "0";
    getScoreCPU.textContent = "0";
    scorePlayer = 0;
    scoreCPU = 0;
    startBtn.disabled = false;
  /*   loseAudio.pause();
    winAudio.pause(); */
});