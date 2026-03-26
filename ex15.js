const prompt = require("prompt-sync")();

const mes = prompt("Digite um mês: ").toLowerCase();

switch (mes) {
  case "janeiro":
    console.log("Começo do Ano");
    break;
  case "junho":
    console.log("Meio do Ano");
    break;
  case "dezembro":
    console.log("Fim de Ano");
    break;
  default:
    console.log("O mês não foi reconhecido");
}
