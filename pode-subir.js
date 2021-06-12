//programa para montanha russa
let altura = 1.23;
let acompanhada = true;
let resposta

//A pessoa deve medir mais de 1.40m e menos de 2 metros.
//Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
//Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.


function podeSubir (altura , acompanhada){

    if (altura <1.2 | altura >2){
        resposta = "True. Acesso negado";
    }
    else if( altura >1.4){
        resposta = "True.Acesso autorizado";
    }
    else{
        if (acompanhada == true){
            resposta = "True. Acesso autorizado somente com acompanhante";
        }
        else{
            resposta = "False. Acesso negado";
        }
    }
    return console.log (resposta);
}
podeSubir(altura , acompanhada);