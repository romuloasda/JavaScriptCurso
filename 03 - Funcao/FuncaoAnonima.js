const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 20)
imprimirResultado(10, 20, soma)
imprimirResultado(10, 20, function (a, b) {
    return a - b
})
imprimirResultado(10, 20, (a, b) => a * b)
imprimirResultado(10, 20, (a, b) => a / b)
imprimirResultado(10, 20, (a, b) => a + b)
imprimirResultado(10, 20, (a, b) => a - b)