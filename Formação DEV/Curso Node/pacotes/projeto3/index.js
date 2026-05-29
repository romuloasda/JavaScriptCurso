import { salvar, deletar, pegarDados, persistirValores } from "./banco.js"
import { menu, finaliza, le, textoVerde, textoAzul } from './interface.js'

const itensMenu = [" Adicionar ", " Editar", " Deletar ", " Ver Todos",
	" Persistir ", " sair "
]

let nome, id;

while (1) {
	const selecionado = await menu(itensMenu)
	switch (selecionado.trim().toLocaleLowerCase()) {
		case 'adicionar':
			nome = await le("Digite o nome do usuario")
			salvar(nome);
			textoVerde("Feito!")
			break;
		case 'editar':
			nome = await le("ID para editar")
			nome = await le("Nome atualizado: ")
			salvar(nome, +id)
			textoVerde("Feito")
			break;
		case 'deletar':
			nome = await le("ID para excluir")
			deletar(+id)
			textoAzul("Feito")
			break;
		case 'ver todos':
			const dados = pegarDados()
			textoAzul(dados)
			break;
		case 'persistir':
			persistirValores()
			textoVerde('Feito')
			break;
		case 'sair':
			finaliza()
			textoVerde('Até mais')
		default:
			console.log(`${selecionado.trim().toLocaleLowerCase()} não é valido`)
	}

}



