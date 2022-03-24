
//escopo global = VAR

var numero = 1

{
    var numero = 2
    console.log('local = ', numero)
}

console.log('externa = ', numero)


//escopo local - bloco = LET

var numero2 = 1

{
    let numero2 = 2
    console.log('local = ', numero2)
}

console.log('externa = ', numero2)