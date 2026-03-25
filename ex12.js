const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite um número: "));
const num2 = Number(prompt("Digite outro número: "));

const operador = prompt("Digite um operador matematico (+, -, * ou /): ");

if (isNaN(num1) || isNaN(num2)) {
  console.log("Por favor, digite números válidos.");
} else if (operador === "+") {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operador === "-") {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operador === "*") {
  console.log(`${num1} x ${num2} = ${num1 * num2}`);
} else if (operador === "/") {
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}
