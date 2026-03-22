function IntAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = IntAleatorio(-1, 10)
    console.log('A opção escolhida foi ' + opcao)
}

let contador = 5

while (contador > 0) {
    console.log(`Lançamento em ${contador}....`)
    contador--;
}
console.log('Foguete lançado')

let i = -10

while (i < 11) {
    console.log(`Contando..... ${i}`)
    i++
}

console.log('Contagem encerrada')

let mult = 1

while (mult <=10) {
    console.log(`5 x ${mult} é = ${5 * mult}`)
    mult++
}

let numero = 0
let total = 0

while (numero <= 5) {
    console.log(numero)
    total = numero + total
    if (numero === 5 ){
        console.log(total)
    }
    numero++
}

function cont(num) {
    while (num <= 20) {
        if (num % 2 === 0) {
            console.log(num)
        }
    num++
    } 
}

cont(1)

const fPares = function (perigo) {
    while (perigo <= 10) {
       console.log(perigo)
       perigo++
    }
}

fPares(1)