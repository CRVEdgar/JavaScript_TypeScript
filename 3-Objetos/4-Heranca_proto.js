//CADEIA DE PROTÓTIPOS (PROTOTYPE CHAIN)
Object.prototype.attr0 = '0'; //nao é indicado fazer isso

const avo = {attr1: 'A'};
const pai = { __proto__: avo, attr2: 'B'};
const filho = { __proto__: pai, attr3: 'C'};

console.log(filho.attr0, filho.attr1, filho.attr2, );

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeComplleto = () =>this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui = 'Texto teste';

const pessoa1 = new Pessoa('Luiz', 'M.');
const pessoa2 = new Pessoa('Edgar', 'M.');
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa1.estouAqui);
console.dir(data);

//setPrototypeOf
const carro = {
    velatual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velatual + delta <= this.velMax){
            this.velatual += delta;
        }else{
            this.velatual = this.velMax
        }
    },
    status() {
        return `${this.velatual}km/h de ${this.velMax}`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 250
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro); // herda de carro
Object.setPrototypeOf(volvo, carro); // herda de carro

console.log(ferrari);
console.log(volvo);


volvo.acelerarMais(300);
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status())