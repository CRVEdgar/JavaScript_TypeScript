//funcção sem retorno
function imprimirSoma(a, b){
    console.log(a+b);
}

imprimirSoma(2, 5);
imprimirSoma(2); //NaN
imprimirSoma(2, 5, 8,9,10,11); //os demais parametros serao ignorados
imprimirSoma(); //NaN

//funcao com retorno
function soma(a, b = 1){ //valor de b, caso nao especificado, será 1
    return a+b;
}

console.log(soma(1));
console.log(soma(1, 2));
