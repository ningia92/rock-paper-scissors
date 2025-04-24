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