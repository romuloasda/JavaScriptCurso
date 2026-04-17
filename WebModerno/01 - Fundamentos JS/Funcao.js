// Fucao é um trexo de codigo que pode ser invocado
// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}//bloco de codigo o que esta em chaves {}

imprimirSoma(2, 3)
imprimirSoma(2)// eu posso passar menos argumentos que os parametros
imprimirSoma(2, 10, 4)// eu posso passar mais argumentos que os parametros
imprimirSoma()  //eu posso passar nenhum argumento

//funcao com retorno
function soma(a, b) {
    return a + b
}
console.log(soma(2, 3)) //eu posso passar menos argumentos que os parametros
console.log(soma(2)) //eu posso passar menos argumentos que os parametros
console.log(soma()) //eu posso passar nenhum argumento
console.log(soma(2, 10, 4)) //eu posso passar mais argumentos que os parametros 



