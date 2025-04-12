getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function generateRandomNumbers(num) {
  const randomNumbers = [];
  for (i = 0; i < num; i++) {
    let randomizedNumber = getRandomNumber(1, 50);
    randomNumbers.push(randomizedNumber);
  }
  return randomNumbers;
}

setTimeout(function () {
  instructionsEl.innerText =
    "Inserisci i numeri che ricordi e controlla quanti ne hai indovinati";
  numberListEl.classList.replace("d-flex", "d-none");
  formEl.classList.remove("d-none");
}, 3000);
