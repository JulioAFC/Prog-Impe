/*Crie um array de números pares, 
e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.*/
let pares=[2, 4, 6, 8, 10];
let impar = pares.map(function(num){
  return num - 1;
});
console.log(impar);
/*Crie um array de nomes, que possua dois índices com o nome Maria. 
Utilize o .filter() para obter apenas esses dois índices com o nome Maria.*/
let nomes = ['José', 'João', 'Maria', 'Ana', 'Silvia', 'Maria']
let namMaria = nomes.filter(function(nome){
  return nome === 'Maria';
});
console.log(namMaria);
/*Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberString = numbers.reduce(function(acumulador, numero){
    return acumulador + '-' + numero;
});
console.log(numberString);
/*Crie um array de animais,
após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.*/
let animais = ['leão', 'elefante', 'macaco', 'lagarto', 'águia', 'tigre'];
animais.forEach(function(animal){
  return console.log("O animal é " + animal);
});