const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite sua idade: "));

if (isNaN(idade) || idade <= 0) {
  console.log("Por favor, digite uma idade valida...");
} else if (idade <= 12) {
  console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}
