//HERANÇA COM Object.create()
const pai = {
    nome: 'Edgar',
    corCabelo: 'Preto'
}

const filho1 = Object.create(pai);
filho1.nome = 'Romeu'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: {value: 'Julio', writable: false, enumerable: false}
});

console.log(filho2.nome);
filho2.nome = 'carla'; //writable: false -> nao deixa sobrescrever
console.log( `${filho2.nome} tem cabelo ${filho2.corCabelo}` )

console.log(Object.keys(filho1));
console.log(Object.keys(filho2)); //enumerable: false -> nao deixar mostrar a chave


//
for(let key in filho2){
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança de: ${key}`)
}