const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}


pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa) // bind(~nomeFunc~) faz referencia à funcao falar() do obj pessoa
falarPessoa()


//This e funcao Bind()

function PessoaBind() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

/*
function PessoaSelf() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}
*/
new PessoaBind
//new PessoaSelf