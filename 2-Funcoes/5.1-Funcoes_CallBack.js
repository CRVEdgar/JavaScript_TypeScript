const notas = [6, 5, 7, 7, 8, 9, 10, 10]

//sem callback
const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callBack

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//callBack com ArrowFunction

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)