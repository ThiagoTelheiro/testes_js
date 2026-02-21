const prompt = require("prompt-sync")();

const numA = Number(prompt("Digite um número inteiro: "));
const numB = Number(prompt("Digite outro número inteiro: "));

if (!Number.isInteger(numA) || !Number.isInteger(numB)) {
  console.log("Um ou ambos os valores não são números inteiros");
} else if (numA > numB) {
  console.log(`${numA} é maior que ${numB}`);
} else if (numB > numA) {
  console.log(`${numB} é maior que ${numA}`);
} else {
  console.log("Os números são iguais");
}