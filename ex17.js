const prompt = require("prompt-sync")();

const valorUsuario = Number(prompt("Digite um valor em R$: "));

const diasDeServico = Math.floor(valorUsuario / 25);
const troco = valorUsuario % 25;

if (isNaN(valorUsuario) || valorUsuario < 25) {
  console.log("valor insuficiente");
} else {
  console.log(`Dias de serviço possiveis: ${diasDeServico} dia(s)`);
  console.log(`Troco: ${troco.toFixed(2)}R$`);
}
