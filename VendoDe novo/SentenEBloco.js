/*console.log("Sentença") // isso é uma sentença

{
    console.log("Bloco") // isso é um bloco
}

console.log('Casa') // isso é outra sentença

if (true) {
    console.log('Verdadeiro')
}

while (x < 10) {
  x++;
}


console.log('Opções: \n 1 - Conjunção\n 2 - Dijunção \n 3 - Condicional \n 4 - Bicondicional \n 5 - Nenhuma das opções ')
condicional = 1
switch (condicional){
    case 1:
        console.log('Tudo v da v');
        break;
    case 2:
        console.log("Tudo F da F ");
        break;
    case 3:
        console.log("V e F da F ")
        break;
    case 4:
        console.log("O bicondicional é quando haver F Da F")
        break;
    default:
        console.log('Voce não escolheu nenhuma das opções. ')                
}
*/
function aplicarDesconto(valorToral){
    let desc = valorToral * 0.80

    return desc
}

let ValorcomDesc = aplicarDesconto(0)
console.log('O valor com 20% de desconto é ' + ValorcomDesc)

function calcularGorgeta(valordaConta){
    try{
        if (valordaConta <= 0){
            throw ' O valor da conta nao pode ser zero ou negativo'
        }
        let gorgeta = valordaConta * 0.10

        return gorgeta
    
        
    } catch (erro){
        return 'opa! tivemos um problema.' + erro
    }}

let minhaGorgeta = calcularGorgeta(ValorcomDesc)
console.log('A gorgeta do garçon é: ' +minhaGorgeta)

function convererSeguro(reais){
    try {
        if (reais <= 0) {
            throw 'Valor invalido'
        }

        let resultado = reais / 5
        return 'Voce tem ' + resultado
    } catch (erro){
        return 'Não tem como dividir por zero ' + erro
    }
}

let meuValor = convererSeguro(-1)
console.log(meuValor)

function dobrarNumero(numero){
    try{
        if (numero !== Number ){
            throw 'Esse valor não é um numero'
        }

        let dnumero = numero * 2
        return 'O dobro do seu numero é ' + dnumero
    } catch (erro) {
        return ' ' + erro
    }
}

let meuN = dobrarNumero(6)
console.log(meuN)

function calcularMedia(nota1, nota2){
    try{
        if (nota1 || nota2 > 10){
            throw 'Essa nota não é valida'
        }
    
        let media = (nota1 + nota2) / 2
        return 'A media é ' + media
    } catch (erro){
        return (erro)
    }
}

let calcMedia = calcularMedia(11, 10)
console.log(calcMedia)

function quantosLitros(distancia){
    try{
        if (distancia < 0){
            throw 'Distancia Invalida'
        } else if (distancia === 0){
            throw 'A distancia não pode ser zero'
        }

        let kmplitro = distancia / 12
        return 'O km por litro é ' + kmplitro
    } catch (erro){
        return 'O valor é negativo ' + erro
    }
}

let meuConsumo = quantosLitros()
console.log(meuConsumo)
quantosLitros(120)
