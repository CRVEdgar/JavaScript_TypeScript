//OBJECT PREVENTEXTENSIONS
const produto =  Object.preventExtensions({ //Object.preventExtensions - nao ppermite  acriação de novos atributos
    nome: 'Any',
    preco: 12.98,
    tag: 'promocao'
})

console.log('Extensivel?: ', Object.isExtensible(produto))
produto.nome = 'novo nome'; //permite adcionar novos valores
produto.descricao = 'desc'; //nao será adicionado
delete produto.tag; //permite apagar

console.log(produto)

//OBJECT SEAL
const pessoa = {
    nome: 'Juliana',
    idade: 35,
    peso: 160
}
Object.seal(pessoa);

pessoa.nome = 'novo nome'; //permite adicionar novos valores
pessoa.sobrenome = 'silva'; //na permite criar novos objetos
delete pessoa.peso; //nao permite apagar
console.log(pessoa)

//OBJECT  FREEZE: objeto totalmente constante
//nao permite apagar, inserir novos campos ou aadcionar novo valor em variaveis