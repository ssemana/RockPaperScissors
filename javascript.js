let myScore = 0;
let compScore = 0;



function computerPlay(){
  let random = Math.floor( Math.random() * Math.floor(3));

  if (random == 1)
      return 1;
   else if (random == 2)
      return 2;
  else 
      return 3;

}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 1 && computerSelection ==2){
        return 'You Lose! Paper beats rock.'
    } else if (playerSelection == 3 && computerSelection == 1){
        return 'You Lose! Rock beats scissors.'
    } else if (playerSelection == 2 && computerSelection == 3){
        return 'You Lose! Paper beats scissors.'
    } else if (playerSelection == 1 && computerSelection == 3){
        return 'You Win! Rock beats scissors.'
    } else if (playerSelection == 3 && computerSelection == 2){
        return 'You Win! Scissors beats paper.'
    } else if (playerSelection == 2 && computerSelection == 1){
        return 'You Win! Paper beats rock.'
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
        case (points.search('Lose') != -1):{
            compScore++;
            break;
        }
        case (points.search('Tie') != -1):{
            break;
        }
        
    }
    
    if ( myScore === 5 || compScore === 5 ) {
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
    }
    else{
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