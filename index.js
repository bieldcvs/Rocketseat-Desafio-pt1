//Variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1
//Eventos

btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keypress',handleEnter )


//Funçoes
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  
  //Entre 0 e 10
  if (inputNumber.value >= 0 && inputNumber.value <= 10 ) {   
    if(Number(inputNumber.value) == randomNumber){
      
      toggleScreen()
      document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas .`
    }
    xAttempts++
  }else{
    handleResetClick()
    screen2.querySelector("h2").innerText = `Digite um numero entre 
    0 e 10`
  }
  inputNumber.value = ""
}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(event) {
 if (event.key == "Enter" && screen1.classList("hide") ) {
   handleResetClick()
 }
}