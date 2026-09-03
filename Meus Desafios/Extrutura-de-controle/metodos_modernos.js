/**
 * MEGA GUIA DE MÉTODOS MODERNOS DO JAVASCRIPT (ES2020 - ES2026)
 * Este arquivo serve como referência prática dos métodos mais recentes e eficientes.
 */

// --- BASE DE DADOS PARA OS EXEMPLOS ---
const usuarios = [
	{ id: 1, nome: "Ana", nivel: "junior", stack: ["React", "HTML"], score: 85 },
	{ id: 2, nome: "Carlos", nivel: "pleno", stack: ["Node", "Python"], score: 92 },
	{ id: 3, nome: "Beto", nivel: "senior", stack: ["Go", "Node", "AWS"], score: 78 },
	{ id: 4, nome: "Diana", nivel: "pleno", stack: ["Vue", "Node"], score: 95 },
	{ id: 5, nome: "Bruna", nivel: "junior", stack: ["CSS", "HTML"], score: 60 }
];

const precos = [10, 25, 40, 15, 30, 5];

console.log("=== 1. AGRUPAMENTO DE DADOS (ES2024) ===");

// Object.groupBy: Agrupa elementos gerando um objeto comum
const porNivel = Object.groupBy(usuarios, ({ nivel }) => nivel);
console.log("Agrupado por Nível:", porNivel);

// Map.groupBy: Agrupa elementos usando estruturas/objetos como chave
const chavePremium = { tipo: "VIP" };
const chaveNormal = { tipo: "Standard" };
const porCategorizacao = Map.groupBy(usuarios, (u) => u.score >= 90 ? chavePremium : chaveNormal);
console.log("Usuários VIP mapeados:", porCategorizacao.get(chavePremium));


console.log("\n=== 2. MÉTODOS DE ARRAY IMUTÁVEIS (ES2023) ===");
// Métodos que alteram a ordem ou valores retornando uma nova cópia limpa

// toSorted(): Ordenação sem mutação
const precosOrdenados = precos.toSorted((a, b) => a - b);
console.log("Original intacto:", precos);
console.log("Nova cópia ordenada:", precosOrdenados);

// toReversed(): Inversão sem mutação
const usuariosInvertidos = usuarios.toReversed();
console.log("Último usuário agora é o primeiro:", usuariosInvertidos[0].nome);

// with(): Altera um índice específico de forma totalmente imutável
const precosAtualizados = precos.with(0, 99);
console.log("Primeiro preço alterado na cópia:", precosAtualizados);

// toSpliced(): Adiciona/remove elementos gerando novo array
const semOsDoisPrimeiros = precos.toSpliced(0, 2);
console.log("Cópia sem os dois primeiros índices:", semOsDoisPrimeiros);


console.log("\n=== 3. BUSCA DE TRÁS PARA FRENTE (ES2023) ===");

// findLast(): Encontra o ÚLTIMO item que condiz com o filtro
const ultimoPleno = usuarios.findLast(u => u.nivel === "pleno");
console.log("Último pleno encontrado (varredura reversa):", ultimoPleno.nome);

// findLastIndex(): Índice do último item que condiz com o filtro
const indiceUltimoCaro = precos.findLastIndex(p => p > 20);
console.log("Índice do último preço maior que 20:", indiceUltimoCaro);


console.log("\n=== 4. OPERAÇÕES NATIVAS COM SET / CONJUNTOS (ES2024) ===");
const devA = new Set(["React", "Node", "TypeScript"]);
const devB = new Set(["Node", "Python", "Go"]);

// intersection(): Elementos presentes em ambos
const emComum = devA.intersection(devB);
console.log("Tecnologias em comum:", [...emComum]); // ['Node']

// union(): Une os conjuntos sem duplicar dados
const todasStacks = devA.union(devB);
console.log("Todas as stacks combinadas:", [...todasStacks]);

// difference(): Elementos exclusivos do primeiro conjunto
const exclusivoDevA = devA.difference(devB);
console.log("O que só o Dev A sabe:", [...exclusivoDevA]); // ['React', 'TypeScript']


console.log("\n=== 5. NOVOS RECURSOS ASSÍNCRONOS E DE SINTAXE (ES2020 - ES2024) ===");

// Promise.withResolvers(): Expõe resolve/reject para fora do escopo da Promise
const { promise, resolve, reject } = Promise.withResolvers();
promise.then(msg => console.log("Promise resolvida externamente:", msg));
resolve("Sucesso total!");

// Optional Chaining (?.) & Nullish Coalescing (??)
const usuarioIndefinido = { configuracoes: { tema: null } };
const temaDefinido = usuarioIndefinido.configuracoes?.tema ?? "escuro";
console.log("Tema padrão aplicado via ? e ??:", temaDefinido);
