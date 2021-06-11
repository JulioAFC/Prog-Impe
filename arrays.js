let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
//segundo elemento do array 
console.log ('Acessando posição:', filmes [ 1 ]);

//filmes animados
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

//função para unir filmes e cartoons
function unir (filmes , cartoons){
    return união = filmes . concat (cartoons);
    
}
filmes = unir (filmes , cartoons);
console.log ('\nArrays concatenadas' , filmes);

//retirando o último elemento "fortnite"
filmes.pop();
console.log (filmes);

