class Guerreiro {
	constructor(nome) {
		this.nome = nome
	}

	atacar() {
		return `O guerreiro ${this.nome} atacou com espada! Dano padrão: 10`
	}

}

class Arqueiro extends Guerreiro {
	constructor(nome) {
		super(nome)
	}

	atacar() {
		return `O arquerio ${this.nome} disparou uma flecha crítica! Dano disparado: 25`
	}
}

const guerreiro = new Guerreiro('Thor')
console.log(guerreiro.atacar())
const arqueiro = new Arqueiro('Legolas')
console.log(arqueiro.atacar())

class Notificacao {
	constructor(mensagem) {
		this.mensagem = mensagem
	}

	enviar() {
		console.log("📢 Registro de Log Central: " + this.mensagem)

	}
}

class NotificacaoWts extends Notificacao {
	constructor(mensagem) {
		super(mensagem)
	}

	enviar() {
		console.log("💬 Enviando mensagem para o WhatsApp do cliente...")
		super.enviar()
	}
}

const msg = new NotificacaoWts('Funcionou')
msg.enviar()