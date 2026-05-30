import { salvar, deletar, pegarDados, persistirValores } from "./banco.js"
import { menu, finaliza, le, textoVerde, textoAzul, menuSelecaoUsuario } from './interface.js'

const itensMenu = [" Adicionar ", " Editar", " Deletar ", " Ver Todos",
	" Persistir ", " sair "
]

let nome, id;

while (1) {
	const selecionado = await menu(itensMenu)
	switch (selecionado.trim().toLowerCase()) {
		case 'adicionar':
			nome = await le("Digite o nome do usuario")
			salvar(nome);
			textoVerde("Feito!")
			break;
		case 'editar':
			id = await menuSelecaoUsuario(pegarDados())
			nome = await le("Digite o novo nome atualizado: ")
			salvar(nome, id)
			textoVerde("Feito")
			break;
		case 'deletar':
			id = await menuSelecaoUsuario(pegarDados())
			deletar(id)
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
			console.log(`${selecionado.trim().toLowerCase()} não é valido`)
	}

}



