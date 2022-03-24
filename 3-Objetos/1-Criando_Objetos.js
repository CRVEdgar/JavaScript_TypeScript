//NOTAÇÃO LITERAL
const obj1 ={}
console.log(obj1);
 

//OBJECT JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);


//FUNCAO CONSTRUTORA
function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * ( 1-desc );
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.78, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


//FUNCAO FACTORY
function criaFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}


const f1 = criaFuncionario('Joao', 7980, 4);
const f2 = criaFuncionario('Edgar', 11400, 1);

console.log( f1.getSalario(), f2.getSalario() );


//OBJECT.CREATE
const filha = Object.create(null);
filha.nome = 'Vick';
console.log(filha)


//JSON PARSE
const fromJson = JSON.parse('{"campo1": "Campo Json", "campo2": "campo 2 Json"}');
console.log(fromJson.campo1, fromJson.campo2);