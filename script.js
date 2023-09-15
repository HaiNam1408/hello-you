let heading = document.querySelector('.heading')
let typeBlock = document.querySelector('.type-block')
let endBlock = document.querySelector('.end-block')
let btnNo = document.querySelector('#btn-no')
let btnYes = document.querySelector('#btn-yes')
let input = document.querySelector('#input')
let main = document.querySelector('.main')
let sendInput = document.querySelector('.send-input')

btnNo.onmousemove = () => {
  let randomX = Math.floor(Math.random() * 85 + 5)
  let randomY = Math.floor(Math.random() * 85 + 5)
  btnNo.style.transition = 'all ease .55s'
  btnNo.style.position = 'absolute'
  btnNo.style.left = randomX + '%'
  btnNo.style.top = randomY + '%'
}

btnYes.onclick = () => {
  main.style.display = 'none'
  typeBlock.style.display = 'flex'
  input.focus()
}

sendInput.onclick = () => {
  typeBlock.style.display = 'none'
  endBlock.style.display = 'flex'
}

let message = 'Because you very kind and good looking!😋'
let index = 0

function showInput() {
  if (index < message.length) {
    input.value += message[index]
    index++
  } else {
    sendInput.removeAttribute('disabled')
    input.setAttribute('readOnly')
  }
}

input.addEventListener("compositionstart", (e) => {
  e.preventDefault()
  input.readOnly = true
  showInput()
  setTimeout(() => {
    input.readOnly = false
    input.focus
  }, 0)
  // setTimeout(() => { input.focus }, 0)
});

input.addEventListener("keydown", (e) => {
  e.preventDefault()
  input.readOnly = true
  showInput()
  setTimeout(() => {
    input.readOnly = false
    input.focus
  }, 0)
  // setTimeout(() => { input.focus }, 0)
});