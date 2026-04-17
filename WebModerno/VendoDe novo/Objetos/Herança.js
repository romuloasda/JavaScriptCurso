const veiculoBase = {
	cidade: 'Goiana',
	acelerar() {
		console.log('Vrummmmmmm.................')
	}
}

const viatura101 = {
	prefixo: '101',
	__proto__: veiculoBase
}

console.log(viatura101.prefixo)
console.log(viatura101.cidade)
viatura101.acelerar()

class Guarda {
	constructor(nome) {
		this.nome = nome
	}
	seApresentar() {
		console.log(`Ola, eu sou o GCM ${this.nome}`)
	}
}

class Romu extends Guarda {
	constructor(nome, equipe) {
		super(nome)
		this.equipe = equipe
	}

	opreacaoEspecial() {
		console.log(`GCM ${this.nome} da equipe ${this.equipe} em incursão!`)
	}
}

const gcmArantes = new Romu('Arantes', 'Charlie-01')

const pai = {sobrenome: 'Arantes', cidade: 'Paulista'}

const filho = {nome: 'Romulo'}

filho.__proto__ = pai
console.log(filho)

class multa {
	constructor(valor) {
		this.valor = valor
	}
	exibirValor() {
		console.log(`O valor da multa é ${this.valor}`)
	}

}

class MultaTransito extends multa {
	constructor (valor, pontos) {
		super(valor)
		this.pontos = pontos
	}
	mostrar() {
		console.log(`O valor da multa é ${this.valor} e a quantidade de pontos é ${this.pontos}`)
	}
}

const grave = new MultaTransito(100, 7)
console.log(grave)

class aSonoro {
	constructor(alerta) {
		this.alerta = alerta
	}
	disparar() {
		console.log(`WIII-UUU! WIII-UUU! 🚨`)
	}
}

class aSilencioso extends aSonoro {
	constructor(alerta) {
		super(alerta)
	}
	disparar() {
		console.log("Enviando notificação silenciosa para a central...")
	}
}

const meuA = new aSilencioso("!!!!!!!!!!!!!!!!!!!!!!")
console.log(meuA)

class Vtr {
    #localizacaoGPS = "Lat: -7.5, Long: -35.0"; // Atributo Privado

    constructor(prefixo) {
        this.prefixo = prefixo; // Atributo Público
    }

    getPosicao() {
        // O segredo está no 'this' antes do '#'
        console.log(`Coordenadas da VTR ${this.prefixo}: ${this.#localizacaoGPS}`);
    }
}

const vtr101 = new Vtr("101");

vtr101.getPosicao(); // Funciona: A classe tem permissão de ler o próprio segredo.

// TESTE DE SEGURANÇA:
//console.log(vtr101.#localizacaoGPS); 
// ^ Se você tirar o comentário acima, o código trava com erro! 
// O mundo externo não vê o que começa com #.