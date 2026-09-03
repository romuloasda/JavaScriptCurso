// Em vez de acessar propriedades com item.preco ou item.categoria, você pode abrir o objeto logo na assinatura da Arrow Function:

// // Sem desestruturação (convencional)
// const caros = produtos.filter(p => p.preco > 100);

// // Com desestruturação nos parâmetros (padrão sênior)
// const caros = produtos.filter(({ preco }) => preco > 100);

// // Retornando novo objeto clonado com alteração
// const comAumento = produtos.map(({ preco, ...resto }) => ({
// 	...resto,
// 	preco: preco * 1.1
// }));

const pedidos = [
	{ id: 1, cliente: "Ana", categoria: "Eletrônicos", valor: 1200, entregue: true },
	{ id: 2, cliente: "Bruno", categoria: "Moda", valor: 150, entregue: false },
	{ id: 3, cliente: "Carla", categoria: "Eletrônicos", valor: 850, entregue: true },
	{ id: 4, cliente: "Diego", categoria: "Casa", valor: 320, entregue: true },
	{ id: 5, cliente: "Elena", categoria: "Moda", valor: 90, entregue: false },
	{ id: 6, cliente: "Fabio", categoria: "Eletrônicos", valor: 2100, entregue: false }
];

const nao_entregues = pedidos
	.filter(({ entregue }) => !entregue)
	.map(({ id, cliente, valor }) => `Pedido ${id} - ${cliente}: R$ ${valor} `)
console.log(nao_entregues)

const categoria = pedidos
	.filter(({ categoria }) => categoria === "Eletrônicos")
	.reduce((ac, { valor }) => ac + valor, 0)

console.log(categoria)

const soma_total = pedidos
	.filter(({ entregue, valor }) => entregue && valor > 200)
	.map(({ valor }) => valor * 1.05)
	.reduce((ac, a) => ac + a, 0)

console.log(soma_total)