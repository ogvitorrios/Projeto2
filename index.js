import chalk from "chalk";
import fs from "fs";


function extraiLinks (texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^*$\#].[^\s]*)\)/gm;
    const arrayResultados = [];

    let temp;
    while ((temp = regex.exec(texto))!= null){
          arrayResultados.push({ [temp[1]]: [temp[2]] });

    
    //const linkExtraidos = texto.match(regex);
    //const linkExtraidos = regex.exec(texto);
}
return(arrayResultados.length === 0 ? "Não há links" : arrayResultados);

}


function tratarErro (erro){
    throw new Error(chalk.red(erro.code, "Caminho errado"));
}

async function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return(extraiLinks(texto))
    } catch(erro){
    tratarErro(erro);

    }
}






/*function pegarArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then ((texto) => console.log(texto))
    .catch ((erro) => tratarErro(erro))
}



function pegarArquivo (caminhoDoArquivo){
   const encoding = "utf-8";
   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
       if (erro){
           tratarErro(erro);
       }
    console.log (chalk.green(texto));*/

//pegarArquivo(' ');
export default pegarArquivo;

