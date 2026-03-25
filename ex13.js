const prompt = require("prompt-sync")();

let permissao;
permissao = "comum"

switch (permissao) {
  case "comum":
    console.log("Usuario comum");
    break;

  case "gerente":
    console.log("Usuario gerente");
    break;

  default:
    console.log("Sem Usuario");
}
