const alunos = [
    { nome: "Ana", nota: 7.8, bolsista: false },
    { nome: "Bia", nota: 9.2, bolsista: true },
    { nome: "Carlos", nota: 8.5, bolsista: false },
    { nome: "Daniel", nota: 7.6, bolsista: true }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

