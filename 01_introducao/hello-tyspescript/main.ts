// Neste tópico do curso tivemos alguns exemplos das diferenças e vantagens do typescript comparado ao javascript 
var minhaVar = 'minha-variavel';

function minhaFunc(x, y): any{
    return x + y;
}

let num = 2;
const PI = 3.14;

let numeros = [1,2,3]
numeros.map( function (valor) {
    return valor * 2
});

numeros.map(valor => valor *2);

class Matematica {
    soma(x, y){
        return x + y;
    }
}

var n1 : any = 'xptppsn '