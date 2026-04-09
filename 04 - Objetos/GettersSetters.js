// Getters é um método que pega um valor
// Setters é um método que define um valor


const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor)

const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
};

// Uso: Acessa como propriedade, sem parênteses ()
console.log(pessoa.nomeCompleto); // João Silva

const usuario = {
  _idade: 0, // Convenção: _ indica propriedade "privada"
  set idade(novaIdade) {
    if (novaIdade > 0) {
      this._idade = novaIdade;
    } else {
      console.log('Idade inválida');
    }
  }
};

// Uso: Atribui como propriedade, sem parênteses
usuario.idade = 25; 
console.log(usuario._idade); // 25
usuario.idade = -5; // Idade inválida
