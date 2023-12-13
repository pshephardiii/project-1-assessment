let counterNum = 1

const headerCounter = document.getElementById('header-counter')
const numberInput = document.getElementById('number-input') 

document.getElementById('plus-btn').addEventListener('click', () => {
  counterNum = counterNum + parseInt(numberInput.value)
  headerCounter.textContent = `${counterNum}`
  numColor()
})

document.getElementById('minus-btn').addEventListener('click', () => {
  counterNum = counterNum - parseInt(numberInput.value)
  headerCounter.textContent = `${counterNum}`
  numColor()
})

document.getElementById('reset-btn').addEventListener('click', () => {
  counterNum = 1
  numberInput.value = '0'
  headerCounter.textContent = `${counterNum}`
  numColor()
})

function numColor() {
  if (counterNum < 0) {
    headerCounter.style.color = 'red'
  } else {
    headerCounter.style.color = 'black'
  }
}
