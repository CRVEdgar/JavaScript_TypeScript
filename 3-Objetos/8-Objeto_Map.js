const pessoas = [
    {id:1, nome: 'Luiz'},
    {id:2, nome: 'Edgar'},
    {id:3, nome: 'Jailson'},

];

//SEM UTILIZAR A ESTRUTURA DE DADOS MAP
/*
const novasPessoas = {};
for (const pessoa of pessoas){
    const{id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const{ id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const valorPessoas of novasPessoas.values()){
    console.log(valorPessoas);
}
for (const indices of novasPessoas.keys()){
    console.log(`indice: ${indices}`);
}

novasPessoas.delete(3);
console.log(novasPessoas);
