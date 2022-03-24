const pessoa = {
    nome: 'Rebeca',
    idade: 25,
    peso: 65
}


console.log(Object.keys(pessoa)) //captura os atributos
console.log(Object.values(pessoa)) //captura os valores dos atributos
console.log(Object.entries(pessoa)) //captura os atributos e valores


Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`campos:  ${chave}: ${valor}`);
})

//copiando objetos
const produto = {nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto, //copia mas permite sobrescrever os campos do objeto
    material:'porcelana'
};
const pc = {nome: produto.nome, preco: produto.preco };

caneca.nome = 'caneca';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);
console.log(pc);


//Definindo propriedades
const calcado = {nome: 'Sandalia', preco: 25.60};
Object.defineProperty(calcado, 'nome', {
    writable:false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(calcado, 'nome'));