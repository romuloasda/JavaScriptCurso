const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Hora')
        case 7:
            console.log('Quadro de Honra ')
    }
}

imprimirResultado(10)

const contMes = function () {
    let dia = 2
    let nomeMes

    switch (dia) {
        case 1: 
            nomeMes = 'Janeiro '
            console.log(nomeMes)
            break;
        case 2:
            nomeMes = 'Fevereiro'
            console.log(nomeMes)
            break;
        default:
            console.log('O mes selecionado não esta disponivel ')
    }
}

contMes()

const selFruta = function () {
    let fruta = 'Abacaxi '

    switch (fruta) {
        case 'Abacaxi ':
            console.log('O preço do ' + fruta + 'é R$ 5.00 KG')
            break;
        default:
            console.log('Não temo essa fruta no estoque ')
    }
}

selFruta()

const calTempServ = function () {
    let temp = 30

    switch (temp) {
        case 3:
            console.log('Voce passou pelo estagio probatório e pode dar entrada nasua progressão ')
            break;
        case 5: case 10: case 15: case 20: case 25:
            console.log('Você pode dar entrada na sua progressão horizontal ')
            break;
        case 30:
            console.log('Voce atingiu a aposentadoria ')
            break;
        default:
            console.log('Continue trabalhando em breve você alcança o tempo necessário')
    }
}

calTempServ()

const menuCafe = function() {
    let caf = 'Café'
    let ch = 'Cha'
    let menu


    switch (menu) {
        case caf == 'Café': case ch == 'Cha':
        console.log('A bebida é quente')
        break;
    }
}

menuCafe()

function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            console.log(n1 + n2)
            break
        case "-":
            // O que vai aqui?
            break
        // Adicione o case "*" e o "/"
        default:
            console.log("Operação inválida")
    }
}

calculadora(10, 5, "+") // Deve mostrar 15
calculadora(10, 5, "-") // Deve mostrar 5

const verdeEst = function (mes) {
    switch (mes) {
        case "Dezembro": case "Janeiro": case "Fevereiro":
            console.log('Verão')
            break;
        case "Março": case "Abril": case "Maio":
            console.log ('outono')
            break;
        default:
            console.log('Mes invalido')
    }
}

verdeEst("Dezembro")

const convMoedas = function (valorReal, moedaDestino) {
    switch(moedaDestino) {
        case 'USD':
            let resultado = valorReal / 5 
            console.log('O seu valor foi de ' + valorReal + ' que convertido da ' + resultado + ' em dolares!')
            break;
        case 'EUR':
            let resultad = valorReal / 6
            console.log('O seu valor de ' + valorReal + ' que convertido da ' + resultad + ' EUA')
            break;
        default:
            console.log('Moeda não aceita !!!!!!!!!!')
    }
}

convMoedas(15, 'EUR')

const sisNotas = function (notas) {
    switch(notas) {
        case 'A':
            console.log('Excelente ')
            break;
        case 'B':
            console.log('Bom')
            break;
        case 'C':
            console.log('Regular')
            break;
        case 'D': case 'F':
            console.log('Reprovado !!!!!')
            break;
        default:
            console.log('NOTA INVALIDA !!!!!!!!!!!!!')
    }
}

sisNotas('B')

const estacaoDoAno = function (mes) {
    let estacao;
    
    switch (mes) {
        case 'Dezembro': case 'Janeiro': case 'Fevereiro':
            estacao = 'Verao'
            break;
        case "Março": case "Abril": case "Maio":
            estacao = 'Outuno'
            break;
        default:
            console.log('MES INVALIDO !!!!!!!')
            return;
    }
    console.log(`O mes escholido foi ${mes} e a estação é ${estacao}`)
}

estacaoDoAno('sdsds')