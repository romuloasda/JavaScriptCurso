function texto(min, max, erro, texto) {
	const tamanho = (texto || '').trim().length


	if (tamanho < min || tamanho > max) {
		throw erro
	}
}

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
texto(4, 255, 'Nome Invalido!', p1.nome)