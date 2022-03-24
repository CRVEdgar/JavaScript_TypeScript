class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'dev'){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva');
    }
}

const filho = new Filho();
const pai = new Pai('melo');
const vo = new Avo('costa');

console.log(filho);
console.log(pai);
console.log(vo);

