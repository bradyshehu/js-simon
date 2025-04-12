getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function generateRandomNumbers(num) {
  const randomNumbers = [];
  for (i = 0; i < num; i++) {
    let randomizedNumber = getRandomNumber(1, 50);
    randomNumbers.push(randomizedNumber);
  }
  return randomNumbers;
}
