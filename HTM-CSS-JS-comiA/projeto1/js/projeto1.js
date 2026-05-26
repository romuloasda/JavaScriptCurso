const textoBoasVindas = document.getElementById('texto-boas-vindas')
const btnMudarTexto = document.getElementById('btn-mudar-texto')
const btnResetarTexto = document.getElementById('btn-resetar-texto')

const valorContador = document.getElementById('valor-contador');
const btnSubtrair = document.getElementById('btn-subtrair');
const btnSomar = document.getElementById('btn-somar');

const meuFormulario = document.getElementById('meu-formulario');
const campoNome = document.getElementById('campo-nome');
const campoCor = document.getElementById('campo-cor');
const mensagemResultado = document.getElementById('mensagem-resultado');

const novaTarefaInput = document.getElementById('nova-tarefa');
const btnAddTarefa = document.getElementById('btn-add-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

let contador = 0;

// Muda o texto e a cor do texto quando clica
btnMudarTexto.addEventListener('click', () => {
	textoBoasVindas.innerText = "🎉 Parabéns! Você ativou o JavaScript com sucesso!";
	textoBoasVindas.style.color = 'green'
});

// Volta o texto ao estado original
btnResetarTexto.addEventListener('click', () => {
	textoBoasVindas.innerText = "O texto original está aqui. Clique no botão para mudar!";
	textoBoasVindas.style.color = '#333';
})

// LÓGICA DO CONTADOR

btnSomar.addEventListener('click', () => {
	contador++
	valorContador.innerText = contador
})

btnSubtrair.addEventListener('click', () => {
	contador--
	valorContador.innerText = contador
})


// MANIPULAÇÃO DE FORMULÁRIO

meuFormulario.addEventListener('submit', (evento) => {
	evento.preventDefault()

	const nomeUsuario = campoNome.value;
	const corEscolhida = campoCor.value;

	mensagemResultado.innerText = `Olá, ${nomeUsuario}! Você escolheu a cor hex: ${corEscolhida}`;

	document.body.style.backgroundColor = corEscolhida;
});

function adicionarTarefa() {
	const textoTarefa = novaTarefaInput.value;

	if (textoTarefa.trim() === "") {
		alert('Digite alguma terefa antes de adicionar!')
		return;
	}

	const novoItem = document.createElement('li');
	novoItem.innerText = textoTarefa

	novoItem.addEventListener('click', () => {
		novoItem.classList.toggle('concluido')
	});

	listaTarefas.appendChild(novoItem)

	novaTarefaInput.value = ""
	novaTarefaInput.focus()
}

btnAddTarefa.addEventListener('click', adicionarTarefa)

novaTarefaInput.addEventListener('keypress', (evento) => {
	if (evento.key === 'Enter') {
		adicionarTarefa()
	}
})

listaTarefas.querySelector('li').addEventListener('click', function () {
	this.classList.toggle('concluido')
})