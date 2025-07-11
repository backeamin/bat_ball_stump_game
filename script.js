function showResult(playerChoice) {
    let resultBox = document.querySelector('#resultBox')
    let playerChoiceResult = document.querySelector('#playerChoiceResult')
    let computerChoiceResult = document.querySelector('#computerChoiceResult')
    let winnerResult = document.querySelector('#winnerResult')

    let choices = ['Bat', 'Ball', 'Stump'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = '';
    if (computerChoice === playerChoice) {
        resultText = 'It\'s a tie!';
        updateScore('tie');
    } else if (
        (computerChoice === 'Bat' && playerChoice === 'Ball') ||
        (computerChoice === 'Ball' && playerChoice === 'Stump') ||
        (computerChoice === 'Stump' && playerChoice === 'Bat')
    ) {
        resultText = '❌ Computer Win!';
        updateScore('computer');
    } else {
        resultText = '🎉 You Win!';
        updateScore('player');
    }
    resultBox.style.display = 'block';
    requestAnimationFrame(() => {
        resultBox.classList.add('show');
    });
    playerChoiceResult.innerText = playerChoice;
    computerChoiceResult.innerText = computerChoice;
    winnerResult.innerText = resultText;
    showScore();
}

let scoreBoard = {
    player: 0,
    computer: 0,
    tie: 0,
}

function updateScore(winner) {
    if (winner === 'player' && scoreBoard.player !== 100) {
        scoreBoard.player++;
    } else if (winner === 'computer' && scoreBoard.computer !== 100) {
        scoreBoard.computer++;
    } else if (winner === 'tie' && scoreBoard.tie !== 100){
        scoreBoard.tie++;
    }
}

function showScore() {
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    let tieScore = document.querySelector('#tieScore');

    let playerScoreBar = document.querySelector('.you');
    let computerScoreBar = document.querySelector('.computer');
    let tieScoreBar = document.querySelector('.tie');

    if (scoreBoard.player !== 100) {
    playerScoreBar.style.width = scoreBoard.player + '%';
    playerScore.innerText = scoreBoard.player;
    } else{
        playerScoreBar.style.width = '100%';
        playerScore.innerText = '100+';
    }
    if (scoreBoard.computer !== 100) {
    computerScoreBar.style.width = scoreBoard.computer + '%';
    computerScore.innerText = scoreBoard.computer;
    }else{
        computerScoreBar.style.width = '100%';
        computerScore.innerText = '100+';
    }
    if (scoreBoard.tie !== 100){
    tieScoreBar.style.width = scoreBoard.tie + '%';
    tieScore.innerText = scoreBoard.tie;
    }else{
        tieScoreBar.style.width = '100%';
        tieScore.innerText = '100+';
    }


}

function hideResult() {
    let resultBox = document.querySelector('#resultBox');
    resultBox.classList.remove('show');
    setTimeout(() => {
        resultBox.style.display = 'none';
    }, 500)
}


function resetGame(){
    let confirmed = confirm('Are you sure you want to reset the game?');
    if (confirmed){
        scoreBoard.player = 0;
        scoreBoard.computer = 0;
        scoreBoard.tie = 0;
        showScore();
        hideResult();
    }
}
