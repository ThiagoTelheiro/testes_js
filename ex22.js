const prompt = require("prompt-sync")();
const num = Number(prompt("Digite um número: "));

if (isNaN(num)) {
  console.log("Digite um número válido");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
