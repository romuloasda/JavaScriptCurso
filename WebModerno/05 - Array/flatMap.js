const escola = [{
    nome: 'Turma M1',
    alunos: [
        { nome: 'Ana', nota: 7.8 },
        { nome: 'Bia', nota: 9.2 },
        { nome: 'Carlos', nota: 8.5 },
        { nome: 'Daniel', nota: 7.6 }
    ]
}, {
    nome: 'Turma M2',
    alunos: [
        { nome: 'Ana', nota: 7.8 },
        { nome: 'Bia', nota: 9.2 },
        { nome: 'Carlos', nota: 8.5 },
        { nome: 'Daniel', nota: 7.6 }
    ]
}]

const getAlunosDoNome = aluno => aluno.nome
const getAlunosDaTurma = turma => turma.alunos.map(getAlunosDoNome)

console.log(escola.flatMap(getAlunosDaTurma))

// flatMap é equivalente a map seguido de flat
console.log(escola.map(getAlunosDaTurma).flat())

// flatMap pode ser usado com o operador spread
console.log([...escola.map(getAlunosDaTurma)])

// flatMap não modifica os arrays originais
console.log(escola)