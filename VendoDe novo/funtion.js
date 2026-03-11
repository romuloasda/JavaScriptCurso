c

function imSoma(a, b) {
    console.log(a + b)
}

imSoma(2, 3)
imSoma(2)
imSoma(2, 10, 3, 5, 5, 8) //so pega o primeiro e o segundo

//Funtion com retorto 
//Como esta retornando valor para imprimir no console de haver o console log

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))

//Armazenando uma variavel em uma function

const impSoma = function (a , b) {
    console.log(a + b)
}

impSoma(2, 3)

// Armazenando um funcao arrow em uma variavel

const som = (a , b) => {
    return a + b
}

console.log(som(2,3))

//retorno implicito 

const sub = (a, b) => a - b

console.log(sub(10, 5))