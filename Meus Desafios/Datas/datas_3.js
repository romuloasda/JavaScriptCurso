const dataAtual = new Date()
dataAtual.setMinutes(dataAtual.getMinutes() + 45)
console.log(dataAtual.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit' }))


const inicioExpediente = new Date(2026, 6, 23, 8,)
const fimExpediente = new Date(2026, 6, 23, 17, 30)

let miliSegundos = fimExpediente.getTime() - inicioExpediente.getTime()

const umMinuto = 1000 * 60
const umaHora = umMinuto * 60
const umDia = umaHora * 24

const hora = String(Math.floor(miliSegundos / umaHora)).padStart(2, '0')
miliSegundos %= umaHora

const minutos = String(miliSegundos / umMinuto).padStart(2, '0')
console.log(`A jornada de trabalho total é de ${hora} horas e ${minutos} minutos.`)


const dataEntrega = new Date()
dataEntrega.setDate(dataEntrega.getDate() + 2)
dataEntrega.setHours(dataEntrega.getHours() + 8, 0)
console.log(dataEntrega.toLocaleString())

