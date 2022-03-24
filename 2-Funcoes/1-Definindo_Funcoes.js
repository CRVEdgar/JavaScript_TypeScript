//forma literal
function fun1(){}


//armazenar em variavel
const fun2 = function(){}


//armazenar em array
const array = [function (a,b) {
    return a+b
}, fun1, fun2]


//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {
    return'ola'
}
console.log(obj.falar())


//passar uma funcao como parametro
function run(fun) {
    fun()
}

run(function() {
    console.log('executando req')
} )


//uma funcao pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
