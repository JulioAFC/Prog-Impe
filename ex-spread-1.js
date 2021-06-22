//exercício Ver números - parte1
let numerosPrimos = ['2','3','5','7','11','13'];
let numeros = [...numerosPrimos];
console.log(numeros);

//exercício Ver números - parte2
let number = [1,2,3,4,5,6,7,8,9,10];
function maiorNumero(){
    return Math.min(...number);
    };
    console.log(maiorNumero());