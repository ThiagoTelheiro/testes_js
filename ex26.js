const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um valor: "));
let contador = 0;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
    contador++;
  }
}

console.log(`Quantidade de números pares: ${contador}`);
