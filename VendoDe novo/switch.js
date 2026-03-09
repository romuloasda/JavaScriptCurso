const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Hora')
        case 7:
            console.log('Quadro de Honra ')
    }
}

imprimirResultado(10)