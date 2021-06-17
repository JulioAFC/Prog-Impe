
let andar = () => 'o carro está andando';
let parar = () => 'o carro parou';

let acaoCarro = (callback) => console.log (callback(andar , parar));

acaoCarro( andar);
acaoCarro ( parar );