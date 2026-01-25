const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Conceito A')
            break
        case 8:
        case 7:
            console.log('Conceito B')
            break
        case 6:
        case 5:
            console.log('Conceito C')
            break
        case 4:
        case 3:
            console.log('Conceito D')
            break
        case 2:
        case 1:
        case 0:
            console.log('Conceito E')
            break
        default:
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