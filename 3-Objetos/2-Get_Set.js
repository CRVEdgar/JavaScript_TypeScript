const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++;
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 900; //nao deixa setar,, porque é menor que o valor anterior
console.log(sequencia.valor, sequencia.valor);


//Get Set na função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Apenas Numeros');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 'receba';
console.log(p1.estoque);

//Get Set na Função Factory
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('Tenis');
console.log(p2);
console.log(p2.nome);

//Get e Set na Classe 
const _velocidade =  Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('GETTER CHAMADO');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <=0 ) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('SETTER CHAMADO');
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 99;
console.log(c1.velocidade);