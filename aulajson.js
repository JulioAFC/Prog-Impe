//Crie um objeto, contendo int, string, object e array em seu conteúdo. Após isso transforme o array em JSON. Exiba o valor do JSON, copie e valide no site JSON Formatter & Validator
//Pegue o JSON validado na etapa anterior, e o atribua a uma string. Após isso o transforme em um objeto e acesse alguns de seus valores e os exiba.

let objeto = '{"nome":"Julio", "cidade": "Juiz de Fora"}';
let objetoP = JSON.parse(objeto);
console.log(objetoP);

let objeto1 = {
    "frutas":[
       "laranja",
       "uva",
       "pessego",
       "abacaxi"
    ],
    "local":[
       "orta",
       "feira"
    ],
    "custo":25,
    "real":true
 };
let objeto11 = JSON.stringify(objeto1);
console.log(objeto11);

