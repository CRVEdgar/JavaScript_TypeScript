//armazenando função em uma variavel
const varImprimeSoma = function(a =1, b =1){
    console.log(a+b);
}

varImprimeSoma(2,3);

// armazenando uma funcao Arrow ( => ) em uma variavel
const soma = (a,b) => {
    return a+b;
}

console.log(soma(2,3))

//retorno implicito - sem deixar implicito as chaves e com simbolo Arrow =>
const subtracao = (a,b) => (a-b);

console.log(subtracao(20,3))