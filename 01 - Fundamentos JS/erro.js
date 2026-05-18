function tratarErro(erro) {
    //throw new Error('Ocorreu um erro')
    throw new Error('Ocorreu um erro')
}

function imprimirNomeGritado(obs) {
    try {
        console.log(obs.name.toUpperCase())
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const(obj = { name: 'Romeu' })
imprimirNomeGritado(obj)