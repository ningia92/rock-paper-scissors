const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1
  
  if (choice === 1) {
    return 'rock'
  } else if (choice === 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

const getHumanChoice = () => {
  return prompt('Choose one between rock, paper and scissors:')
}

let humanScore = 0
let computerScore = 0 

const playRound = (humanChoice, computerChoice) => {
  const caseInsHumanChoice = humanChoice.toLowerCase()
  const whatBeatsWhat = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  }
  
  if (whatBeatsWhat[caseInsHumanChoice] === computerChoice) {
    console.log(`You win! ${caseInsHumanChoice} beats ${computerChoice}`)
    humanScore++
  } else if (whatBeatsWhat[computerChoice] === caseInsHumanChoice) {
    console.log(`You lose! ${computerChoice} beats ${caseInsHumanChoice}`)
    computerScore++
  } else {
    console.log('Draw!')
  }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)