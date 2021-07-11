let Alunos = require('./alunos');

function Curso (nomdeDoCurso, notaDeAprovacao, faltasMaximas, listaDeEstudantes)
{
    this.nomdeDoCurso = nomdeDoCurso;
    this.notaDeAprovacao = notaDeAprovacao;
    this.faltasMaximas = faltasMaximas;
    this.listaDeEstudantes = listaDeEstudantes;
    this.adicionaAlunos=(array)=>this.listaDeEstudantes.push(...array);

// saber a média do aluno e relação de faltas
this.verificaAprovacao=(aluno)=>{
    
     if (aluno.calcularMedia()>=this.notaDeAprovacao && aluno.faltas<this.faltasMaximas)
    {
        return true;
    }
    else if (aluno.calcularMedia()>=this.notaDeAprovacao*1.1 && aluno.faltas===this.faltasMaximas)
    {
        return true;
    }
    else {
        return false;
    }
}};
module.exports=Curso;