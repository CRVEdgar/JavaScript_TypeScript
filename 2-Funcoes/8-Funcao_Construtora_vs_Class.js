//Classe Pessoa
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Edgar')
p1.falar()

//funcao construtora
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('edgar')
p2.falar();

//
function newPessoa(nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p3 = new newPessoa('eddddd')
p3.falar()