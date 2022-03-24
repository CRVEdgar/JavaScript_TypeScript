console.log(soma(3,4))

//FUNCTION DECLARATION
function soma(x,y){
    return x+y;
}

//function expression
const sub = function (x,y){
    return x-y;
}

console.log(sub(2, 6))




//NAMED FUNCTION EXPRESSION
//ex1
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 2))

//ex2
const souUmDado = function(){
    console.log('Funcao - Sou um Dado chamada')
}
function executaFuncao(funcao){
    console.log('Funcao - Executa Funcao chamada')

    funcao();
}

executaFuncao(souUmDado);




//ARROWFUNCTION
//ex1
const arrow = (x,y) => x/y; // ou: (x,y) => { return x/y; }

console.log(arrow(10,5))

//ex2
const arrowFunction = (dado) => {
    console.log(`Soou uma Arrow Function: ${dado}`)
}
arrowFunction('valorParametro')