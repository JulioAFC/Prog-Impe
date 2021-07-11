//Molde para exportar
function Alunos (nome, faltas, notas)  
{
    this.nome = nome
    this.faltas = faltas
    this.notas = notas

    //falta
    this.faltasAtualizadas = ()=>this.faltas +=1;
    //media
    this.calcularMedia=()=>((this.notas.reduce((total,el)=>total+el))/this.notas.length).toFixed(1);
}
let idade=18;
console.log(idade);
module.exports = Alunos;



