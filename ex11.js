const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite sua idade: "));

if (isNaN(idade) || idade < 0) {
  console.log("Por favor, digite uma idade válida.");
} else if (idade >= 18) {
  console.log("Maior de idade!");
} else {
  console.log("Menor de idade!");
}
