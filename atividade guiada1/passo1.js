// Micro desafio - Passo 1
let curso = require('./curso');
let aluno = require('./alunos');


let novoAluno = new aluno ('Henrique', 2, [10, 7, 8, 6]);
console.log('Faltas:',novoAluno.faltas);
console.log('Faltas atualizadas: ',novoAluno.faltasAtualizadas());
console.log('Faltas atualizadas: ',novoAluno.faltasAtualizadas());
console.log('Faltas:',novoAluno.faltas);
console.log('Média: ',novoAluno.calcularMedia());


let cursoNovo=new curso('CTD',8,2,['Diego','Zezinho']);
cursoNovo.adicionaAlunos(['Julio','Marivaldo']);
console.log('Lista de alunos: ', cursoNovo.listaDeEstudantes);




  



