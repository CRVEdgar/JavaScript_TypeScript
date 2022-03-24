// Factory simples
function criarPessoa(){
    return {
        nome: 'Edgar',
        sobrenome: 'Melo'
    }
}

console.log(criarPessoa())

//factory com parametros
//mod1
function criarPessoa2(name, lastname){
    return {
        nome: name,
        sobrenome: lastname
    }
}
//mod2
function criarPessoa3(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa2('edgar', 'costa'))
console.log(criarPessoa3('edgar', 'melo'))
