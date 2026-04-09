const bairro = {cidade: 'Paulista', Loteamento: 'Janga'}

console.log(bairro)

function eqp (tipo, serie) {
	this.tipo = tipo
	this.serie = serie
}

const algema = new eqp ('invictus', '001')
console.log(algema)

const veiculoBase = {rodas: 4}

const carroGCM = Object.create(veiculoBase)
console.log(veiculoBase)

const modeloRadio = {
	frequencia: '155.5hz',
	transmitir() {console.log('Tranmitindo.......')}
}

const meuRadio = Object.create(modeloRadio)
meuRadio.codigo = 'GCM-01'

console.log(meuRadio.codigo)

const permissaoBase = {
	visualizar: true,
	editar: false
}

const usuarioGCM1 = Object.create(permissaoBase)
usuarioGCM1.editar = true

const uVisitante = Object.create(permissaoBase)

console.log(`O visistante ${uVisitante.editar} o GCM1 ${usuarioGCM1.editar}`)

permissaoBase.visualizar = false

console.log(usuarioGCM1)

const configBanco = {
	host: 'Local Host',
	porta: 3306,
	usuario: 'Admin',
	conectar() {
		console.log("Conectando ao banco em localhost")
	}
}

console.log(configBanco)

class Morador {
	constructor (nome, cpf) {
		this.nome = nome
		this.cpf = cpf
	}
	notificar() {
		console.log(`Enviando alerta para o morador ${this.nome}`)
	}
}

const Morador00 = new Morador('romulo', '12334556789')

Morador00.notificar()

const oficioPadrao = {
	cabecalho: 'Prefeitura Municipal de GOIANA - GCM'
}

Object.freeze(oficioPadrao)
oficioPadrao.cabecalho = 'Prefeitura Goiana'
console.log(oficioPadrao.cabecalho)
Object.isFrozen(oficioPadrao.cabecalho)


const oficio001 = Object.create(oficioPadrao)
oficio001.conteudo = 'Solicito reparo na viatura'
console.log(oficio001)



function criarOcorrencia(tipo, severidade) {
	return {
		detalhar() {
			console.log(`O tipo ${tipo} e severidade ${severidade}`)
		}
	}
}

const ocorrencia = criarOcorrencia('Som Alto', 'Baixa')

ocorrencia.detalhar()

const guardam = { nome: "Romulo", matricula: 1234 }

Object.freeze(guardam)

guardam.nome = 'Arantes'

console.log(guardam.nome)

const vtr2 = { placa: "ABC-123" }


console.log(Object.isFrozen(vtr2))
Object.freeze(vtr2)
console.log(Object.isFrozen(vtr2))

const viatura = { 
	eqp: {
		radio: true
	}
}

Object.freeze(viatura)

viatura.eqp.radio = false
console.log(Object.isFrozen(viatura))

const celular = {marca: 'Samsung', modelo: 'S20fe'}
console.log(celular.modelo)

const usuario = {}
console.log(usuario)

usuario.nome = 'Romulo'
console.log(usuario)

usuario.senha = "123456"
console.log(usuario)

delete usuario.senha
console.log(usuario)

const radio = {
	falar() {
		console.log('QAP QAP !!!!!!!')
	}
}

radio.falar()

const gcm = {
	nome: 'Arantes',
	fala() {
		console.log(`Ola eu sou o gcm ${this.nome}`)
	}
}

gcm.fala()

const vtr = {placa: 'ABC', KM: 1000}

console.log(Object.keys(vtr))
console.log(Object.values(vtr))

const base = {id: 1, tipo: 'Furto'}
const local = {cidade: 'Goiana'}

Object.assign(base, local)

console.log(base)

const config = {versao: '1.0'}
Object.freeze(config)

config.versao = '2.0'
console.log(config.versao)

Object.isFrozen(config)
config.versao = '2.0'
console.log(config.versao)

const human = {cabelo:"preto"}
const rNascido = {nome: 'Helena'}
rNascido.__proto__ = human
console.log(rNascido.cabelo)

class Guarda {
	constructor(nome) {
		this.nome = nome
	}
	apresentar() {
		console.log(`Bem vindo GCM ${this.nome}`)
	}
}

const GCM1 = new Guarda('Arantes')
GCM1.apresentar()

class Cofre {
	#senha = 1234
	constructor(senha) {
		this.#senha = senha
	}
}

const meuCofre = new Cofre()
console.log(meuCofre.#senha)

const viatura = {
	_vel: 0,
	get vel() {
		return this._vel
	},
	set vel(vel) {
		if(vel > 0) {
			this._vel = vel
		}
	}
}

console.log(viatura.vel)

viatura.vel = -50
console.log(viatura.vel)

const guarda = {
	nome: 'Arantes',
	mat: '2021',
	posto: 'centro'
}

const {nome, mat} = guarda

console.log(nome, mat)

const sistema = {
	versao: '1.0',
	admin: {
		nome: 'Romulo'
	}
}

Object.freeze(sistema)
sistema.admin.nome = 'Arantes'
console.log(sistema.admin)

class Func {
	constructor(salario) {
		this.salario = salario
	}
}

class GCM extends Func {
	constructor(salario, name) {
		super(salario)
		this.name = name
	}
	exibir() {
		console.log(`O GCM ${this.name} tem o salario ${this.salario}`)
	}
}

const servidor = new GCM(1000, 'Arantes')
servidor.exibir()

const criarLogin = function (usuario, senha) {
    return {
        usuario, // Isso fica público
        exibir() {
            // Eu consigo ver a 'senha' aqui porque estou dentro da função
            console.log(`Usuário: ${this.usuario} | Senha está segura!`);
        }
    }
}

const meuLogin = criarLogin('Romulo', 'p@ssword');
console.log(meuLogin.usuario); // "Romulo"
console.log(meuLogin.senha);   // undefined (Protegido com sucesso!)