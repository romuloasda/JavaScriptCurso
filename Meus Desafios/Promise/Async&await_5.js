const dataAtual = new Date()
dataAtual.setHours(dataAtual.getHours() + 3)

console.log(dataAtual)

let momentoExato = new Date()
let finalDia = new Date(2026, 6, 22, 23, 59)

let milisegundosMomentosExato = momentoExato.getTime()
let milisegundosFinalDia = finalDia.getTime()

const resultado = Math.floor((milisegundosFinalDia - milisegundosMomentosExato) / (60 * 60 * 1000))


console.log(resultado)


