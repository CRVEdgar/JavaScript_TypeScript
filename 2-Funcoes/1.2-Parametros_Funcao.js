 //FUNCAO COM OBJETO LITERAL
 //desestruturação
 function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

funcao({nome: 'Luiz', sobrenome: 'Melo', idade: 25})
// ou:
let obj = {nome: 'Edgar', sobrenome: 'Melo', idade: 25}
funcao(obj)


//RestOperato = ...
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);