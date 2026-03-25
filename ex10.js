const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

if (isNaN(num)) {
  console.log("Por favor, digite um número válido.");
} else if (num % 2 === 0) {
  console.log(`${num} é par!`);
} else {
  console.log(`${num} é ímpar!`);
}
