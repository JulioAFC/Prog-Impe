//loops ou ciclos servem para criarem REPETIÇÕES em poucas linhas de código
//for (início; condição; modificador){código que será executado em cada repetição}
// == igual // !== diferente
for (let i=0; i <=4; i++){
    console.log('Olá mundo');
}
for (let impar=0; impar <=10; impar++){
    if(impar % 2 !== 0){
        console.log(impar);
    }    }
    
// criando tabuada
//Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

for (let unidade = 1; unidade <=10; unidade ++){
    console.log('Operação do',unidade +':');
    for(let uni2=1; uni2 <=10; uni2 ++){
        console.log(unidade,'x',uni2,'=', unidade*uni2);
    }console.log ('\n');
}