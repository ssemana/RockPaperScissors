

var rockPaperScissors = ['rock', 'paper', 'scissors']

function playerSelection(){
    if (playerPlay == 'rock'){
        console.log(playerPlay=1);
    } else if (playerPlay == 'paper'){
        console.log(playerPlay=2);
    } else if (playerPlay == 'scissors'){
        console.log(playerPlay=3);
    }
}

function computerPlay(){
  return rockPaperScissors = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
  console.log(computerPlay);

  if (computerPlay === 'rock'){
      return 1;
  } else if (computerPlay === 'paper'){
      return 2;
  } else if (computerPlay === 'scissors'){
      return 3;
  }
}
console.log(computerPlay())

function playRound(computerSelection, playerSelection){
    if(computerSelection === 1 && playerSelection === 2){
        return 'You win! Paper beats rock.'
    } else if (computerSelection === 3 && playerSelection === 1){
        return 'You win! Rock beats scissors.'
    } else if (computerSelection === 2 && playerSelection === 3){
        return 'You win! Paper beats scissors.'
    } else if (computerSelection === 1 && playerSelection === 3){
        return 'You lose! Rock beats scissors.'
    } else if (computerSelection === 3 && playerSelection === 2){
        return 'You lose! Scissors beats paper.'
    } else if (computerSelection === 2 && playerSelection === 1){
        return 'You lose! Paper beats rock.'
    } else if (computerSelection == playerSelection){
        return 'Tie game! Try again.'
    }
}

const computerSelection = computerPlay();
console.log(playRound());

function game(){
    function playRound(playerSelection, computerSelection){
        
    }
}