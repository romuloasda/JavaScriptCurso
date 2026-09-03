// Desestruturação de Arrays: Extrai itens de uma lista com base em sua posição ordinal
const cores = ["azul", "verde", "vermelho"];
const [primeira, segunda] = cores; // primeira = "azul", segunda = "verde"

// Desestruturação de Objetos: Extrai dados diretamente pelo nome das chaves:
const usuario = { nome: "Romulo", nivel: 40 };
const { nome, nivel } = usuario;

// Desestruturação nos Parâmetros de Métodos: Permite descompactar os atributos de um item diretamente na assinatura da função:
const formatar = ({ nome, nivel }) => `${nome} está no nível ${nivel}`;

formatar('romulo', 41)


// Operador Spread (...) em Coleções: Despeja ou clona os itens de um array/objeto existente dentro de uma nova estrutura, viabilizando mutações isoladas:
const copiaAtualizada = { ...usuario, nivel: 41 };

// Desafios de TREINO:

const coordenadas = [120, -45, 10];
const servidor = { host: "localhost", porta: 8080, ssl: true };

const [x, y] = coordenadas;
const { host, porta } = servidor

console.log(x, y, host, porta)

const clientesNorte = ["Ana", "Carlos"];
const clientesSul = ["Bia", "Daniel"];

const todosClientes = [...clientesNorte, ...clientesSul, 'Eduardo']
console.log(todosClientes)

const equipe = [
	{ id: 1, nome: "Alice", cargo: "Desenvolvedora" },
	{ id: 2, nome: "Bruno", cargo: "Designer" },
	{ id: 3, nome: "Carla", cargo: "Gerente" }
];

equipe.forEach(({ nome, cargo }) => console.log(nome, cargo))

const inventario = [
	{ id: 101, produto: "Teclado", preco: 150, emPromocao: false },
	{ id: 102, produto: "Mouse", preco: 80, emPromocao: false },
	{ id: 103, produto: "Monitor", preco: 900, emPromocao: false }
];

const inventarioBlackFriday = inventario.map(a => {
	return {
		...a,
		preco: Number((a.preco * 0.85).toFixed(2)),
		emPromocao: true

	}
})

console.log(inventarioBlackFriday)

