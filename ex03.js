const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

while (!Number.isInteger(num)) {
  console.log("Valor inválido. Digite um número inteiro.");
  num = Number(prompt("Digite um número: "));
}

if (num > 0) {
  console.log(`${num} é positivo`);
} else if (num === 0) {
  console.log("Número zero");
} else {
  console.log(`${num} é negativo`);
}

if (num % 2 === 0) {
  console.log(`${num} é par`);
} else {
  console.log(`${num} é ímpar`);
}
