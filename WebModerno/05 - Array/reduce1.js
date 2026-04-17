const alunos = [
    { nome: "Ana", nota: 7.8, bolsista: false },
    { nome: "Bia", nota: 9.2, bolsista: true },
    { nome: "Carlos", nota: 8.5, bolsista: false },
    { nome: "Daniel", nota: 7.6, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    return acumulador + atual
}, 0) / alunos.length



console.log(resultado)


//console.log(alunos.reduce(function (acumulador, atual) {
//    return acumulador + atual.nota
//}, 0) / alunos.length)