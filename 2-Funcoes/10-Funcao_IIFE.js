(function(idade, peso, altura){

    const sobrenome = 'Melo';


    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Edgar'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.65)