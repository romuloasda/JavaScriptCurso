const numeros = [40, 100, 1, 5, 25, 10];

// Ordem Crescente (Menor para Maior)
numeros.sort((a, b) => a - b);
// Resultado: [1, 5, 10, 25, 40, 100]



// Ordem Decrescente (Maior para Menor)
numeros.sort((a, b) => b - a);
// Resultado: [100, 40, 25, 10, 5, 1]

const nomes = ["Zeca", "ana", "Álvaro", "Bruna"];

// Errado (padrão)
nomes.sort(); // ["Bruna", "Zeca", "ana", "Álvaro"]

// Correto (com localeCompare)
nomes.sort((a, b) => a.localeCompare(b, 'pt-BR'));
// Resultado: ["Álvaro", "ana", "Bruna", "Zeca"]

const usuarios = [
	{ nome: "Ana", idade: 25 },
	{ nome: "Carlos", idade: 20 },
	{ nome: "Beto", idade: 30 }
];

// Ordenar por Idade (Crescente)
usuarios.sort((a, b) => a.idade - b.idade);

// Ordenar por Nome (Ordem Alfabética)
usuarios.sort((a, b) => a.nome.localeCompare(b.nome));

// ⚠️ Cuidados Importantes
// Mutação: O array original é modificado.
// Se precisar preservar a lista original,
// crie uma cópia antes usando o operador spread[...]
// ou o método moderno.toSorted().Método Moderno(Recomendado): O array.toSorted()
// funciona igual ao sort(),
// mas gera um novo array sem alterar o original.