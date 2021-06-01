let myScore = 0;
let compScore = 0;
let totalGames = 0;

var rockPaperScissors = ['rock', 'paper', 'scissors']

function computerPlay(){
  return rockPaperScissors = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
  console.log(computerPlay);

  if (computerPlay == 'rock'){
      return 1;
  } else if (computerPlay == 'paper'){
      return 2;
  } else if (computerPlay == 'scissors'){
      return 3;
  }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === 1 && computerSelection === 2){
        return 'You lose! Paper beats rock.'
    } else if (playerSelection == 3 && computerSelection == 1){
        return 'You lose! Rock beats scissors.'
    } else if (playerSelection == 2 && computerSelection == 3){
        return 'You lose! Paper beats scissors.'
    } else if (playerSelection == 1 && computerSelection == 3){
        return 'You win! Rock beats scissors.'
    } else if (playerSelection == 3 && computerSelection == 2){
        return 'You win! Scissors beats paper.'
    } else if (playerSelection == 2 && computerSelection == 1){
        return 'You win! Paper beats rock.'
    } else if (playerSelection == computerSelection){
        return 'Tie game! Try again.'
    }
}



function gameScore(points){
    document.getElementById("round").innerHTML = points;
    switch(true){
        case (points.search('Win') != -1):{
            myScore++;
            break;
        }
        case(points.search('Lose') != -1):{
            compScore++;
            break;
        }
        case(points.search('Tie') != -1):{
            break;
        }
        
    }
}

    if ( myScore === 5 || compScore ===  5) {
        if (myScore > compScore){
        document.getElementById("scores").innerHTML = 'You win the match ' + myScore + '-' + compScore;
        myScore = 0;
        compScore = 0;
        }
        else if (myScore < compScore){
        document.getElementById("scores").innerHTML = 'You lose the match ' + myScore + '-' + compScore;
        myScore = 0;
        compScore = 0;
        }
        else {
        document.getElementById("scores").innerHTML = myScore + " - " + compScore;

    }
}

document.getElementById("rock").addEventListener('click', function(e){
    let playerSelection = 1;
    let computerSelection = computerPlay();
    let points = playRound(playerSelection, computerSelection);
    gameScore(points);
});

document.getElementById("paper").addEventListener('click', function(e){
    let playerSelection = 2;
    let computerSelection = computerPlay();
    let points = playRound(playerSelection, computerSelection);
    gameScore(points);
});

document.getElementById("scissors").addEventListener('click', function(e){
    let playerSelection = 3;
    let computerSelection = computerPlay();
    let points = playRound(playerSelection, computerSelection);
    gameScore(points);
});