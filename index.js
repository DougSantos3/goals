import { select } from "@inquirer/prompts";

const start = async () => {
  while (true) {
    let option = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastra meta",
          value: "cadastrar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    });

    switch (option) {
      case "cadastrar":
        console.log("Vamos cadastrar");
        break;
      case "listar":
        console.log("Vamos listar");
        break;
      case "sair":
        return;
    }
  }
};

start();
