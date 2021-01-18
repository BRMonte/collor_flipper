const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  //get random number between 0 and 3 -> array colors
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; // e o textinho mostrando o codigo da cor
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); //forma de fazer c q a geracao de random numbers fique limitada ao numero de elementos do array + arrendondada
}
