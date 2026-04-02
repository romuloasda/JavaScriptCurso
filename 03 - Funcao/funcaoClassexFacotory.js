class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando`);
    }
}

const p1 = new Pessoa("Romulo", "Silva");
p1.falar();

const pessoa = (nome) => {
    return {
        falar() {
            console.log(`${nome} está falando`);
        },
    };
};

const p2 = pessoa("Romulo");
p2.falar();

// Exemplos IA

class Viatura {
    constructor(prefixo, modelo) {
        this.prefixo = prefixo; // Características
        this.modelo = modelo;
        this.ligada = false; // Começa desligada
    }
    // Ações não precisam da paravra function
    ligar() {
        this.ligada = true;
        console.log(`Viatura ${this.prefixo} | ${this.modelo} pronta para QAP`);
    }

    status() {
        return this.ligada ? "Em operação" : "No pátio";
    }
}

const v101 = new Viatura("101", "Duster");
const v202 = new Viatura("202", "Corolla");

v101.ligar();
console.log(v202.status());

class gcm {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudar() {
        console.log(
            `Bom dia sou o GCM ${this.nome} e minha idade é ${this.idade}`,
        );
    }
}

const gm1 = new gcm("Arantes", 33);
gm1.saudar();

class portao {
    constructor() {
        this.aberto = false;
    }
    abrir() {
        this.aberto = true;
    }
    verificar() {
        if (this.aberto === true) {
            console.log(`Portão liberado `);
        } else {
            console.log("Aguarde....");
        }
    }
}

const abriu = new portao();
abriu.verificar();

class plantao {
    constructor(valorHora) {
        this.valorHora = valorHora;
    }
    calcular(totalHoras) {
        totalHoras = this.valorHora * totalHoras;
        console.log(`Você acumulou ${totalHoras}`);
    }
}

const doze = new plantao(50);
doze.calcular(12);
