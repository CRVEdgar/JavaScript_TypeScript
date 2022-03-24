//forma normal
let dobro = function (a) {
    return 2 * a
}

//Arrow Function
dobro = (a) => {
    return 2 * a
}

//Arrow Function - retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))


ola = () => 'ola'
console.log(ola())