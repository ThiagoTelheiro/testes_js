const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite um número: "));
const num2 = Number(prompt("Digite outro número: "));

if (num1 > num2) {
  console.log(`Número ${num1} é maior!`);
} else {
  console.log(`Número ${num2} é maior!`);
}
