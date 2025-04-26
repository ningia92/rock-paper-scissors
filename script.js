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

const playGame = () => {
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

  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.textContent, getComputerChoice()))
  })

  console.log(`Results: \n - human score: ${humanScore} \n - computer score: ${computerScore}`)
  humanScore > computerScore
  ? console.log('You win the game!')
  : console.log('You lose the game!')
}

playGame()