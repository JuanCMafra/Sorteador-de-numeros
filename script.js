const results = document.querySelectorAll("#results li")
const button = document.getElementById("draw-again")
const wrapper = document.querySelector("#second")
const form = document.querySelector("form")
const minInput = document.querySelector("#minimo")
const maxInput = document.querySelector("#maximo")
const qtdInput = document.querySelector("#numbers")
const repeatCheckbox = document.querySelector("#unique")

results.forEach(li => {
  li.style.setProperty("--total", results.length)
})
const animationDuration = 1000
setTimeout(() => {
  button.classList.add("show")
  wrapper.classList.add("shift-up")
}, animationDuration)

form.addEventListener("submit", (event)=> {
  const min = Number(minInput.value)
  const max = Number(maxInput.value)
  const qtd = Number(qtdInput.value)
  const no_Repeat = repeatCheckbox.checked
  event.preventDefault()
  minmax()
  noRepeat()
  if(no_Repeat === true){
    draw_noRepeat(min, max, qtd)
    console.log(draw_noRepeat(min, max, qtd))
  }else
    draw_repeat()
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
       alert("Erro! A quantidade não pode ser maior que o máximo quando não se permite repetições!")
  }
}

function draw_noRepeat(min, max, qtd){
  return Math.floor(Math.random() * (max - min + 1)) + min
}


