const gameForm = document.querySelector("#gameForm");
const result = document.querySelector("#result");
const userInput = document.querySelector("#number-input");

function gameFormHolder(e) {
  e.preventDefault();

  const random = Math.round(Math.random() * 10) + 1;
  const input = userInput.value;
  const inputConvert = Number(input)

  if(inputConvert === random) {
    result.innerHTML = `You Win, the random number was ${random}`;
  } else{
    result.innerHTML = `You Lost, the random number was ${random}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  gameForm.onsubmit = gameFormHolder
})