function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //retorna a soma
console.log(soma(1, 2, 3)) //retorna a soma
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) //retorna a soma
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)) //retorna a soma   
console.log(soma(a, b, c))