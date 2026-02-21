const prompt = require("prompt-sync")();

const kwh = Number(prompt("Consumo Kwh: "));
const instalacao = prompt(
  "Tipo de instalação (Residencial, Comercial ou Industrial) ",
).toLowerCase();
let valorTotal;

if (instalacao === "residencial" && kwh <= 150) {
  valorTotal = kwh * 0.6;
} else if (instalacao === "residencial" && kwh > 150) {
  valorTotal = kwh * 0.75;
}

if (instalacao === "comercial" && kwh <= 250) {
  valorTotal = kwh * 0.8;
} else if (instalacao === "comercial" && kwh > 250) {
  valorTotal = kwh * 1.0;
}

if (instalacao === "industrial" && kwh <= 500) {
  valorTotal = kwh * 1.2;
} else if (instalacao === "industrial" && kwh > 500) {
  valorTotal = kwh * 1.5;
}

console.log("-------------------------------------------");
console.log(`Tipo de Instalação: ${instalacao}`);
console.log(`Consumo: ${kwh} Kwh`);
console.log(`Valor Total: ${valorTotal.toFixed(2)} R$`);
