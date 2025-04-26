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
  const result = document.querySelector('.result')
  const human = document.querySelector('.humanScore')
  const computer = document.querySelector('.computerScore')
  const finalResult = document.querySelector('.finalResult')

  const playRound = (humanChoice, computerChoice) => {
    const caseInsHumanChoice = humanChoice.toLowerCase()
    const whatBeatsWhat = {
      'rock': 'scissors',
      'paper': 'rock',
      'scissors': 'paper'
    }
    finalResult.textContent = ''

    if (whatBeatsWhat[caseInsHumanChoice] === computerChoice) {
      result.textContent = `You win! ${caseInsHumanChoice} beats ${computerChoice}`
      humanScore++
      human.textContent = humanScore
    } else if (whatBeatsWhat[computerChoice] === caseInsHumanChoice) {
      result.textContent = `You lose! ${computerChoice} beats ${caseInsHumanChoice}`
      computerScore++
      computer.textContent = computerScore
    } else {
      result.textContent = 'Draw!'
    }

    if (humanScore === 5 || computerScore === 5) {
      humanScore > computerScore
        ? finalResult.textContent = 'You win the game!'
        : finalResult.textContent = 'You lose the game!'

      humanScore = 0
      computerScore = 0
    }
  }

  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (finalResult.textContent !== '') {
        human.textContent = ''
        computer.textContent = ''
      }
      playRound(button.textContent, getComputerChoice())
  })
  })
}

playGame()