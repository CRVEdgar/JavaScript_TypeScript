class Pessoa  {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando.`);
    }
    comer(){
        console.log(`${this.nome} esta comendo.`);
    }
    beber(){
        console.log(`${this.nome} esta bebendo.`);
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Vitoria'
pessoa1.sobrenome = 'Lima'
const pessoa2 = new Pessoa('Edgar', 'Melo');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.beber());
console.log(pessoa2.comer());
console.log(pessoa1.falar());


class Lancamento{
    constructor(nome = 'default', valor = 0){
        this.valor = valor;
        this.nome = nome;
    } 
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.varLancamentos = [];
    }
    
    addLancamentos(...lancamentos){

        lancamentos.forEach(
            l => this.varLancamentos.push(l)
        )
    }

    sumario() {
        let valorConsolidado = 0;
        this.varLancamentos.forEach( l=> {
            valorConsolidado += l.valor
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);

contas.addLancamentos(salario, contaLuz);

console.log(contas.sumario());