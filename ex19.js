const prompt = require("prompt-sync")();

const valorFatura = Number(prompt("Digite o valor da fatura a ser paga: "));
const numDias = Number(
  prompt("Digite o N° de dias após a emissão da fatura: "),
);

let juros;
let valorFinal;

if (isNaN(valorFatura) || isNaN(numDias) || valorFatura <= 0 || numDias < 0) {
  console.log("Por favor digite valores válidos!");
} else if (numDias <= 10) {
  console.log("Não há juros!");
} else if (numDias <= 20) {
  juros = valorFatura * 0.02;
  valorFinal = valorFatura + juros;
  console.log(
    `Juros: ${juros.toFixed(2)}R$\nValor final da fatura: ${valorFinal.toFixed(2)}R$`,
  );
} else if (numDias <= 30) {
  juros = valorFatura * 0.05;
  valorFinal = valorFatura + juros;
  console.log(
    `Juros: ${juros.toFixed(2)}R$\nValor final da fatura: ${valorFinal.toFixed(2)}R$`,
  );
} else {
  juros = valorFatura * 0.1;
  valorFinal = valorFatura + juros;
  console.log(
    `Juros: ${juros.toFixed(2)}R$\nValor final da fatura: ${valorFinal.toFixed(2)}R$`,
  );
}
