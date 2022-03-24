function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => { //Sintaxe: document.addEventListener(event, function, Capture)
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => { //Sintaxe: document.addEventListener(event, function, Capture)
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    }
    );
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus(); //retira o foco pra nao ficar com o botao pressionado
  };

  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();
