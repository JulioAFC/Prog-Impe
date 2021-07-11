let curso = require('./curso');
let estudantes = require('./novoAluno');


let curso1 = new curso('CTD',8,2,['Diego','Zezinho']);

for (let i=0; i<estudantes.length; i++) {
    if(curso1.verificaAprovacao(estudantes[i])==true) {
        console.log('Aluno',estudantes[i].nome,'está APROVADO!');
    }
    else
    {
        console.log('Aluno',estudantes[i].nome,'está REPROVADO!');
    }
}




