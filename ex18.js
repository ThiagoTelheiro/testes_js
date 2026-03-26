const prompt = require("prompt-sync")();

const valorCompra = Number(prompt("Valor da compra: "));
let desconto;
let valorFinal;

const mensageDesconto = "Você recebeu um desconto de: ";
const mensagemVF = "Valor final da compra: ";

if (isNaN(valorCompra) || valorCompra <= 0) {
  console.log("Digite um valor pasitivo...");
} else if (valorCompra <= 100) {
  console.log("Não ha desconto");
} else if (valorCompra <= 500) {
  desconto = valorCompra * (5 / 100);
  valorFinal = valorCompra - desconto;
  console.log(
    `${mensageDesconto}${desconto}R$\n${mensagemVF}${valorFinal.toFixed(2)}`,
  );
} else if (valorCompra <= 1000) {
  desconto = valorCompra * (10 / 100);
  valorFinal = valorCompra - desconto;
  console.log(
    `${mensageDesconto}${desconto}R$\n${mensagemVF}${valorFinal.toFixed(2)}`,
  );
} else {
  desconto = valorCompra * (15 / 100);
  valorFinal = valorCompra - desconto;
  console.log(
    `${mensageDesconto}${desconto}R$\n${mensagemVF}${valorFinal.toFixed(2)}`,
  );
}
