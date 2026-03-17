/*function soBoanota(nota) {
    if(nota >= 7){
        console.log('Aluno Na Média ' + nota)
    }
}

soBoanota(5)

function seForverdade(valor){
    if(valor) {
        console.log('É verdade ..? ')
    }
}

seForverdade(null)
seForverdade()


function teste1(num) {
    if(num > 7){
        console.log(num)
        console.log('Final')
    }
}

teste1(9)
teste1(8)

function teste2(num2){
    if(num2 > 7) {
        console.log(num2)
    }
}

teste2(8)


const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado ')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(' ')
*/

var idade = 81

function calcIdade(idade) {
    if(idade >= 18 ) {
        console.log('Voce é maior de idade ')
    } if (idade < 18) {
        console.log('Voce é menor de idade ')
    } 
}

calcIdade(17)

function Calcnota(nota) {
    if (nota >= 7) {
        console.log('Parabens Voce foi aprovado ')
    } else if (nota >= 6) {
        console.log('Voce foi aprovado, mas poderia ter se dedicado mais')
    } else if (nota <= 5) 
        console.log('Voce foi reprovado ')
    
}

Calcnota(6)

function verNumero(num) {
    
    if (num === 0) {
        console.log('O numero verificado é zero ')
    } else if (num % 1) {
        console.log('O numero é IMPAR ')
    } else if (num % 0) {
        console.log('O numero é par')
    }
}

verNumero(0)