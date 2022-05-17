import pegarArquivo from "./index.js";
import chalk from "chalk";
import validar_URL from "./arquivos/http-validacao.js";


const caminho = process.argv;

async function processaTexto (caminhoDoArquivo){
    const resultado =  await pegarArquivo(caminhoDoArquivo[2]);
    //console.log(chalk.bgCyan('Lista de link'), resultado);

    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('Links Validados: '), await validar_URL(resultado))
    }else {
        console.log(chalk.yellow('Lista de links: '), resultado)
    }
}

processaTexto(caminho);     
//console.log(pegarArquivo(caminho[2]));

