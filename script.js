const results = document.querySelectorAll("#results li")
const button = document.getElementById("draw-again")
const wrapper = document.querySelector("#second")
const form = document.querySelector("form")
const minInput = document.querySelector("#minimo")
const maxInput = document.querySelector("#maximo")
const qtdInput = document.querySelector("#numbers")
const repeatCheckbox = document.querySelector("#unique")

// informa ao CSS quantos itens existem
results.forEach(li => {
  li.style.setProperty("--total", results.length)
})
// espera a animação terminar
const animationDuration = 1000 // ms
setTimeout(() => {
  button.classList.add("show")
  wrapper.classList.add("shift-up")
}, animationDuration)

form.addEventListener("submit", (event)=> {
  event.preventDefault()
  minmax()
  noRepeat()
})


function minmax(){
  const min = Number(minInput.value)
  const max = Number(maxInput.value)
  if (min > max){
    alert("Erro! o número minimo é maior que o máximo!")
  }
}

function noRepeat(){
  const max = Number(maxInput.value)
  const qtd = Number(qtdInput.value)
  const noRepeat = repeatCheckbox.checked

  if(noRepeat && qtd > max){
       alert("Erro! A quantidade não pode ser menor que o máximo quando não se permite repetições!")
  }
}
