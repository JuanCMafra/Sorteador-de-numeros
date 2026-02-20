const results = document.querySelectorAll("#results li")
const button = document.getElementById("draw-again")
const wrapper = document.querySelector("#second")

// informa ao CSS quantos itens existem
results.forEach(li => {
  li.style.setProperty("--total", results.length)
})

// espera a animação terminar
const animationDuration = 1200 // ms

setTimeout(() => {
  button.classList.add("show")
  wrapper.classList.add("shift-up")
}, animationDuration)