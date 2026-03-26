const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite um número: "));
const operador = prompt("Digite um operador matematico (+, -, * ou /): ");
const num2 = Number(prompt("Digite outro número: "));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Por favor, digite números válidos.");
  process.exit();
}

switch (operador) {
  case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    break;
  case "/":
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  default:
    console.log("Por favor, digite um operador válido.");
}
