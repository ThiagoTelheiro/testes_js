const prompt = require("prompt-sync")();

const ano = new Date().getFullYear();

for (let i = ano; i >= 2005; i--) {
  console.log(i);
}
