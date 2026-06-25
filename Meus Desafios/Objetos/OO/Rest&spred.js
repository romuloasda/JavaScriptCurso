// 1. Operador Spread (Espalhar / Clonar)

const cachorro = { nome: 'Rex', raca: 'Poodle' };

// Criando um novo objeto e "espalhando" as propriedades do Rex lá dentro
const cachorroComIdade = { ...cachorro, idade: 3 };

console.log(cachorroComIdade);
// Saída: { nome: 'Rex', raca: 'Poodle', idade: 3 } ✅ (Cópia perfeita criada!)

const frutasTropicais = ['manga', 'banana'];
const todasAsFrutas = [...frutasTropicais, 'maçã', 'uva'];

console.log(todasAsFrutas);
// Resultado: ['manga', 'banana', 'maçã', 'uva']

const usuario = { nome: 'Ana', idade: 25 };
const usuarioAtualizado = { ...usuario, cidade: 'São Paulo' };

console.log(usuarioAtualizado);
// Resultado: { nome: 'Ana', idade: 25, cidade: 'São Paulo' }


// 2. Operador Rest (Recolher / O Resto)

// O '...numeros' vai recolher todos os argumentos enviados e transformá-los em um Array
function somarTudo(...numeros) {
	return numeros.reduce((ac, atual) => ac + atual, 0);
}

console.log(somarTudo(10, 20, 30, 40)); // Saída: 100 ✅ (Ele recolheu os 4 números num array e somou!)

function calcularTotal(...precos) {
	return precos.reduce((total, preco) => total + preco, 0);
}

console.log(calcularTotal(10, 20, 30)); // Resultado: 60
console.log(calcularTotal(5, 5));       // Resultado: 10

const { nome, ...outrosDados } = { nome: 'Carlos', idade: 30, profissao: 'Dev' };

console.log(nome);        // Resultado: 'Carlos'
console.log(outrosDados); // Resultado: { idade: 30, profissao: 'Dev' }
