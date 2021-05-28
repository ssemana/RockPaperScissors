

var rockPaperScissors = ['rock', 'paper', 'scissors']

function computerPlay(){
  return rockPaperScissors = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
}
console.log(computerPlay())