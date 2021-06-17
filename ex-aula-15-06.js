// const numeros = []

// for(let i=1;i<=25;i++){
//   numeros.push(11*i)
// }

// console.log(numeros.join(" - "))


const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for(i=0; i<pontos.length; i++){
    console.log(pontos[i]);
}
const pontos2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for(i=0; i<pontos2.length; i++){
    pontos2[i]*=2
    console.log(pontos2[i]);
}

let pontos3 = [1, 3, 5, 4, 7, 8, 13, 9, 15, 17];

function salvar(pontos3){
    console.log('Sequência original: ', pontos3.length, 'elementos');
    console.log ('Impressão:');

    for (let i=0; i<pontos3.length; i++){
    console.log(i,':',pontos3[i]);}}

    salvar(pontos3); console.log();

    function mudandoPontos(pontos3){
        for (let i=0; i<pontos3.length; i++){
            pontos3[i]*=2;
        console.log ('Array pontos3 alterada! Diferentes nºs inseridos.');
    }}
mudandoPontos(pontos3); console.log();
salvar(pontos3); console.log();

let pontos4 = [7, 13, 15, 24, 37, 48, 51, 63, 75, 77];
//     índice: 0  1    2   3   4   5   6   7   8   9
//   elementos: 1  2   3   4   5   6   7   8   9   10
for(i=0; i<pontos4.length; i++){
    console.log(i, '-', pontos4[i]);
}
console.log('Sequência original: ', pontos4.length, 'elementos');

