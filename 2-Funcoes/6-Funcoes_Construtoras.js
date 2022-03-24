function Pessoa(nome, sobrenome) {

    //palavra this torna a variavel publica
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ':sou um metodo')
    };

}

const p1 = new Pessoa('ed', 'gar')
const p2 = new Pessoa('me', 'lo')

p1.metodo();
p2.metodo();


function Carro( velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}


const uno = new Carro()

uno.acelerar();
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())
