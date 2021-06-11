let cores = ["Azul","Preto","Amarelo","Laranja"];
//.unshift para adicionar
let coresMaisUm = cores.unshift("Violeta")
console.log (coresMaisUm);

// .pop
let coresMenosUm = cores.pop()
console.log (coresMenosUm);

//.indexOf 
let coresindex = cores.indexOf("Preto")
console.log (coresindex);
//.lastIndexOf
let coresLast = cores.lastIndexOf("Amarelo")
console.log (coresLast);