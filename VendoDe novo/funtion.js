/*-

function imSoma(a, b) {
    console.log(a + b)
}

imSoma(2, 3)
imSoma(2)
imSoma(2, 10, 3, 5, 5, 8) //so pega o primeiro e o segundo

//Funtion com retorto 
//Como esta retornando valor para imprimir no console de haver o console log

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))

//Armazenando uma variavel em uma function

const impSoma = function (a , b) {
    console.log(a + b)
}

impSoma(2, 3)

// Armazenando um funcao arrow em uma variavel

const som = (a , b) => {
    return a + b
}

console.log(som(2,3))

//retorno implicito 

const sub = (a, b) => a - b

console.log(sub(10, 5))

*/
//Função sem retorno
function saudar(nome) {
    console.log('Olá' + nome )
}

console.log('Felipe')

//Função com retorno

function somar(a, b) {
    return a + b
}

let res = somar(5, 10)
console.log(res)

//exercicios:
//01
function sempr() {
    console.log('Bem vindo ao sistema testes! ')

}

sempr()

//02

function idade(maior) {
    if(maior >= 18) {
        return ('Voce é maior')
    } else { return ('Voce é menor')
    }
}

let resultado = idade(20)
console.log(resultado)

//03

function logErro(senha) {
    
    if(senha === 123456) {
        console.log('Senha correta')
    }   console.log('[ERRO]: Senha incorreta ')
}

logErro(123456)

//04

function conDolar(real) {
    return real /5
}

let vReal = 15
let converção = conDolar(vReal)
console.log('Seu valor em real é ' + vReal + ' O valor em dolares é ' + converção)

//05

function gritar(maiusculo) {
    return maiusculo.toUpperCase()
}

let ma = gritar('OLA ')

console.log(ma)

//06

function statusSistema() {
    console.log(' Verificando arquivos... \n Conectando ao banco de dados...  \n Tudo pronto!')
}

statusSistema()

//

//01

let saldo = 100

function tentarGastar() {
    let saldo = 50
    console.log(saldo)
}

tentarGastar()
console.log(saldo)

//02

let usuario = 'Convidado'

function trocaNome() {
    usuario = 'Administrador'
    
}

trocaNome()
console.log(usuario)



//03

function criarSegredo() {
    let segredo = "12345";
    console.log('Loing efetuado com sucesso ')
}

criarSegredo();
//console.log(segredo);

//segrado nao existe no escopo global
function somar(a,b) {
    return a + b
}

const somar = (a, b) => a + b

somar(13, 13)

//Arrow Function

const dizerOla = () => 'Olá, DEv'

dizerOla()