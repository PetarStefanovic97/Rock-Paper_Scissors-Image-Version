let valueRock = document.querySelector('.rock').addEventListener('click', function () {
  valueRock = 'rock'
  document.querySelector('.user').textContent = valueRock

  aiChoice()
})

let valuePaper = document.querySelector('.paper').addEventListener('click', function () {
  valuePaper = 'paper'
  document.querySelector('.user').textContent = valuePaper

  aiChoice()
})

let valueScissor = document.querySelector('.scissor').addEventListener('click', function () {
  valueScissor = 'scissor'
  document.querySelector('.user').textContent = valueScissor

  aiChoice()
})

function aiChoice() {
  let number = Math.floor(Math.random() * 3)


  if (number === 0) {
    number = 'rock'
  } else if (number === 1) {
    number = 'paper'
  } else {
    number = 'scissor'
  }

  document.querySelector('.ai').textContent = number

  if (valueScissor === number) {
    document.querySelector('.result').textContent = 'Draw'
  } else if (valueScissor && number === 'rock') {
    document.querySelector('.result').textContent = 'AI Win'
  } else if (valueScissor && number === 'paper') {
    document.querySelector('.result').textContent = 'User Win'
  }

  if (valuePaper === number) {
    document.querySelector('.result').textContent = 'Draw'
  } else if (valuePaper && number === 'rock') {
    document.querySelector('.result').textContent = 'User Win'
  } else if (valuePaper && number === 'scissor') {
    document.querySelector('.result').textContent = 'AI Win'
  }

  if (valueRock === number) {
    document.querySelector('.result').textContent = 'Draw'
  } else if (valueRock && number === 'paper') {
    document.querySelector('.result').textContent = 'AI Win'
  } else if (valueRock && number === 'scissor') {
    document.querySelector('.result').textContent = 'User Win'
  }
}