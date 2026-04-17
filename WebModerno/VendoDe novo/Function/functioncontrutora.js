function Carro(velocidadeMaxima = 200, delta = 5) {
    //atriburo privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    };

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);

function cracha(nomegcm) {
    let matricula = 234;
    this.nome = nomegcm;

    this.gerarExibir = function () {
        matricula = +1;
        console.log(`GCM ${this.nome} | Matricula gerada ${matricula}`);
    };
}

const crachaRomulo = new cracha("Romulo");
const crachaJhessy = new cracha("Jhessy");

crachaRomulo.gerarExibir();
crachaJhessy.gerarExibir();

function Pedômetro() {
    let passo = 0;

    this.andar = function () {
        passo += 1;
    };
    this.lerPassos = function () {
        return passo;
    };
}

const andando = new Pedômetro();
andando.andar();
andando.andar();
andando.andar();
andando.andar();
andando.andar();
console.log(andando.lerPassos());

function tanque(capacidadeMax = 100) {
    let combustivel = 50;

    this.toltalc = function () {
        if (combustivel >= capacidadeMax) {
            console.log("Capacidade execedida");
        } else {
            return (combustivel = capacidadeMax);
        }
    };

    this.gastar = function () {
        combustivel -= 5;
    };
    this.abastecer = function () {
        combustivel += 20;
    };
    this.verTanque = function () {
        return combustivel;
    };
}

const uno = new tanque();
uno.abastecer();
uno.abastecer();
uno.abastecer();
console.log(uno.verTanque());
