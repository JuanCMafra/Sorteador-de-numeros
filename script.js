const resultsContainer = document.getElementById("results")
const button_again = document.getElementById("draw-again")
const button = document.getElementById("draw")
const second = document.getElementById("second")
const first = document.getElementById("first")
const form = document.querySelector("form")
const minInput = document.querySelector("#minimo")
const maxInput = document.querySelector("#maximo")
const qtdInput = document.querySelector("#numbers")
const repeatCheckbox = document.querySelector("#unique")
const animationDuration = 1000

setTimeout(() => {
  button_again.classList.add("show")
  second.classList.add("shift-up")
}, animationDuration)

draw.addEventListener("click", (event)=> {
  const min = Number(minInput.value)
  const max = Number(maxInput.value)
  const qtd = Number(qtdInput.value)
  const no_Repeat = repeatCheckbox.checked

  event.preventDefault()
  try {
    if (min > max){
      throw new Error("O número minimo é maior que o máximo!")
    } else {
      second.classList.remove("display-none")
      first.classList.add("display-none")
    }

    if (noRepeat && qtd > max){
       throw new Error("A quantidade não pode ser maior que o máximo quando não se permite repetições!")
    } else{
      second.classList.remove("display-none")
      first.classList.add("display-none")
    }
  } catch (error) {
    alert(error)
  }
  
  let drawnNumbers
  if(no_Repeat){
    drawnNumbers = draw_noRepeat(min, max, qtd)   
  } else {
    drawnNumbers = draw_repeat(min, max, qtd)
  }
  
  // Colocar os números nas listas
  fillResults(drawnNumbers)

  
})

draw_again.addEventListener("click", (event) => {
  event.preventDefault()
  first.classList.remove("display-none")
  second.classList.add("display-none")

})

function minmax(){
  
}

function noRepeat(){
  const max = Number(maxInput.value)
  const qtd = Number(qtdInput.value)
  const noRepeat = repeatCheckbox.checked

  
}

function draw_noRepeat(min, max, qtd){
  const drawn = []
  const possibleNumbers = []
  
  // Criar array com todos os números possíveis
  for(let i = min; i <= max; i++){
    possibleNumbers.push(i)
  }
  
  // Embaralhar e pegar qtd números
  for(let i = 0; i < qtd; i++){
    const randomIndex = Math.floor(Math.random() * possibleNumbers.length)
    drawn.push(possibleNumbers[randomIndex])
    possibleNumbers.splice(randomIndex, 1)
  }
  
  return drawn
}

function draw_repeat(min, max, qtd){
  const drawn = []
  
  // Gerar qtd números aleatórios com possível repetição
  for(let i = 0; i < qtd; i++){
    drawn.push(Math.floor(Math.random() * ((max - min) + 1)) + min)
  }
  
  return drawn
}

function fillResults(numbers) {
  // Limpar os resultados anteriores
  resultsContainer.innerHTML = ""
  
  // Criar uma li para cada número
  numbers.forEach((number) => {
    const li = document.createElement("li")
    li.textContent = number
    li.style.setProperty("--total", numbers.length)
    resultsContainer.appendChild(li)
  })
}

