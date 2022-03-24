//metodo 1 - formato DINAMICO
const prod1 = {}
prod1.nome = "celular"
prod1.preco = 4998.56
prod1['DescontoLegal'] = 0.40

console.log(prod1)

//metodo 2
const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        id: 1,
        obj : {
            id: 2
        }
    }
}

console.log(prod2)