const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
        console.log('Parabéns!')
    } else {
        console.log('Reprovado!')
        console.log('Infelizmente você foi reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa') //cuidado com a tipagem
