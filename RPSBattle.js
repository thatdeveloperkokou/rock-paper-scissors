//computer's choice
const getComputerChoice=()=>{
    const options=['ROCK','PAPER','SCISSORS'];
    let randomIndex=Math.floor(Math.random()*options.length);
    return (options[randomIndex])
}
 
//the wininng info display
let winning=document.querySelector('h1')
let score=document.querySelector('h2')

//audio
const audio=document.querySelector('audio')

//buttons
const rock=document.querySelector('button.rock')
const paper=document.querySelector('button.paper')
const scissors=document.querySelector('button.scissors')

let playerScore=0;
let computerScore=0;

//the default score display
score.textContent=`${playerScore}-${computerScore}`

//default message
winning.textContent='choose your weapon'

//score adder
function updatePlayerScore(){
   playerScore++;
}
function updateComputerScore(){
  computerScore++;
}

//this is here to change the text color based on results

function changeTextColor(color){
 winning.style.color=color
}

//this declares a winner

function checkWinner(){
  
  if(playerScore==5 && playerScore>computerScore){
    changeTextColor('green')
    winning.textContent=`you won ${playerScore}-${computerScore}`
    resetGame();
  }

  else if(computerScore==5&& computerScore>playerScore){
    winning.textContent=`you lost ${computerScore}-${playerScore}`
    resetGame()
  }
}



function playRound(player,computer){

  function playerLose(){
    changeTextColor('#ab0707')
    updateComputerScore();
    score.textContent=`${playerScore}-${computerScore}`
    winning.textContent=`you lose ${computer} beats ${player}`
    checkWinner()
  }

  function playerWins(){
    changeTextColor('#2fc82c')
    updatePlayerScore();
    score.textContent=`${playerScore}-${computerScore}`
    winning.textContent=`you win ! ${player} beats ${computer}`
    checkWinner();
  }
  function playerTies(){
    changeTextColor('#e9e916')
    score.textContent=`${playerScore}-${computerScore}`
    winning.textContent="awwn ! It's a tie"
    checkWinner()
  }
     //the game itself in the form of conditionals
       if(player==='ROCK'&&computer==='PAPER'){
         playerLose()
      }

      else if(player==='ROCK'&&computer==='SCISSORS'){
         playerWins()
       }

       else if(player==='ROCK'&&computer==='ROCK'){
         playerTies()
       }

       else if(player==='PAPER'&&computer==='ROCK'){
         playerWins()
       }

       else if(player==='PAPER'&&computer==='SCISSORS'){
         playerLose()
       }

       else if(player==='PAPER'&&computer==='PAPER'){
         playerTies()
       }

       else if(player==='SCISSORS'&&computer==='ROCK'){
         playerLose()
       }

       else if(player==='SCISSORS'&&computer==='PAPER'){
         playerWins()
       }

       else if (player==='SCISSORS'&&computer==='SCISSORS'){
         playerTies()
       }

      
       
}    

//restarts the game by changing the scoreline
function resetGame(){
  playerScore=0;
  computerScore=0;
}

//eventlisteners for the button
rock.addEventListener('click',()=>{
  audio.currentTime=0
  audio.play()
 playRound('ROCK',getComputerChoice())
})

paper.addEventListener('click', playPaper=()=>{
  audio.currentTime=0
  audio.play()
  playRound('PAPER',getComputerChoice())
 })

 scissors.addEventListener('click', playScissors=()=>{
  audio.currentTime=0
  audio.play()
  playRound('SCISSORS',getComputerChoice())
 })
 



