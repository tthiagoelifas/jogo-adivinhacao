//variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let radomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleTryEnter)


//funções
function handleTryEnter (event){
  if(event.key == "Enter" && screen1.classList.contains("hide")){
    handleResetClick()
  }
}

function handleTryClick (event){
  event.preventDefault() //Não faça o pardão
  const inputNumber = document.querySelector("#inputNumber")
  
  
  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0){
    alert("Só é aceito números entre 0 e 10 !")
    xAttempts--
  }
  
  if(inputNumber.value != ""){
    if(Number(inputNumber.value) == radomNumber) {
      toggleScreen()
      screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
    }
    inputNumber.value = ""
    xAttempts++
  }
  console.log(xAttempts)
}
  

function handleResetClick (){
  toggleScreen()
  xAttempts = 1
  radomNumber = Math.round(Math.random() * 10)
}

function toggleScreen (){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}




