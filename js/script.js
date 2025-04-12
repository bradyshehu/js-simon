// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui
// l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare
// sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numberListEl = document.getElementById("numbers-list");
const buttonEl = document.getElementById("confirm");
const formEl = document.getElementById("answers-form");
const input = document.querySelectorAll("input");
const message = document.getElementById("message");

const randomNumbers = generateRandomNumbers(5);
console.table(randomNumbers);

// stampo in pagina i numeri randomici

for (i = 0; i < randomNumbers.length; i++) {
  const li = document.createElement("li");
  li.append(randomNumbers[i]);
  numberListEl.appendChild(li);
}

// button.addEventListener("click", function{

// })
buttonEl.addEventListener("click", function (event) {
  event.preventDefault();

  const userNumbers = [];
  input.forEach((input) => userNumbers.push(parseInt(input.value)));
  console.table(userNumbers);
  let corretNumberAmount = 0;
  let correctNumbers = [];

  for (i = 0; i < randomNumbers.length; i++) {
    const currentEl = randomNumbers[i];
    if (userNumbers.includes(currentEl)) {
      corretNumberAmount += 1;
      correctNumbers.push(currentEl);
    }
  }

  message.innerText =
    "Hai indovinato " +
    corretNumberAmount +
    " numeri! (" +
    correctNumbers.join(", ") +
    ")";
});
