Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Conceito A')
    } else if (nota.entre(7, 8.99)) {
        console.log('Conceito B')
    } else if (nota.entre(5, 6.99)) {
        console.log('Conceito C')
    } else if (nota.entre(3, 4.99)) {
        console.log('Conceito D')
    } else if (nota.entre(0, 2.99)) {
        console.log('Conceito E')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(6.5)
imprimirResultado(4.5)
imprimirResultado(2.5)
imprimirResultado(11)
imprimirResultado(-1)   