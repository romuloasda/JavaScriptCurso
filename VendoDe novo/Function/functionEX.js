function nomet (parametro) {
    console.log(`Ola ${parametro}`)
}

nomet('Romulo')

function soma(a, b) {
    return a + b
}


console.log(soma(4, 5))

function calSala(salBase, bonus) {
    return salBase + bonus
}

let res = calSala(1500, 600)
console.log(res)

function podeFolgar(diaDaSemana) {
    if (diaDaSemana === 'Sabado') {
        return 'Pode Folgar'
    } else {
        return 'Negativo'
    }
}
let dsem = podeFolgar('Sabado')

console.log(`Eu posso folgar no sabado ${dsem}`)

function statuSis() {
    console.log("Sistema GCM Goiana: ONLINE e Operando.")
}

statuSis()

function gerarCrachá(nome, cargo) {
    console.log(`NOME ${nome} | CARGO ${cargo}`)
}

gerarCrachá('romulo', 'gcm')

function dobrarValor (num) {
    return num * 2
}

let resultado = dobrarValor(50)

console.log(resultado)

function verUsuSenha(usuario, senha) {
    if (usuario ==='admin' && senha === '1234') {
        return 'Acesso concedido'
    }
        return 'Acesso Negado'

}

let login = verUsuSenha('admn', '1234')
console.log(login)

var totalOcorrencia = 0

function registrar() {
    totalOcorrencia = totalOcorrencia + 1
    return totalOcorrencia
}

registrar('asduasduasuiyduas')

console.log(totalOcorrencia)

var vdtMultas = 100

function aplicarMulta(vdInfracao) {
    vdtMultas = vdInfracao + vdtMultas
}

aplicarMulta(100)
console.log(vdtMultas)

const gritar = function (texto) {
    return texto.toUpperCase()
}

let maius = (gritar('ola'))
console.log(maius)

const calc = function(larg,comp) {
    return larg * comp
}

let area = calc(2, 4)
console.log(area)

const chacaTurno = function (hora) {
    if (hora >= 06 && hora <= 18) {
       return'Turno do dia '
        
    } return 'Turno da noite' 
}

console.log(chacaTurno(06))

const acoes = [
    function() {return 'Ligar a sirene '},
    function() {return 'Consultando placas'}
]

console.log(acoes[0]())

const avisos = [
    function() {return 'Portão aberto'},
    function() {return 'Camera ativa'}
]

console.log(avisos[0]())

const operacoes = [
    function(a, b) {return a + b},
    function(a, b) {return a * b}
]

console.log(operacoes[1](5, 5))

const ocombo = [
    function() {return 'Passo 1'},
    function() {return 'Passo 2'},
    function() {return 'Passo 2'}
]

for (let i of ocombo) {
    console.log(i())
}

const vtr = {
    prefixo: '101',
    cidade: 'Goiana',
    emitirAlerta: function() {
        return 'QAP QRV, VTR EM DESLOCAMENTO'
    }
}

console.log(vtr.emitirAlerta())

for(let i in vtr) {
    console.log(i)
}

const central = {
    comandos:[
        function() {return 'Sirene Ligada'},
        function() {return 'Farol Ativado'},
        function(nome) {return `A viatura de ${nome} em patrulhamento`}
    ]
}

for(let i in central) {
    central.comandos[2]('romulo')
    console.log(central.comandos[i])
}

const guarda = {
    nome: 'Romulo',
    saudar: function() {
        return `Bom dia ${this.nome}! `
    }
}

console.log(guarda)

const sistemadeMultas = {
    taxaAdm: +50,
    calcularTotal: function(valordaMulta) {
        return valordaMulta + this.taxaAdm
    }
}

console.log(sistemadeMultas.calcularTotal)

const painelViatura = {
    combustivel: 80,
    stats: ['Estacionamento', 'Em Patrulha']
    
}

console.log(painelViatura.stats[1])