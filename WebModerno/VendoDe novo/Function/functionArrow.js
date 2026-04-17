const somar1 = function (a, b) {
  return a + b;
};

console.log(somar1(5, 5));

const somar2 = (a, b) => {
  return a * b;
};

console.log(somar2(5, 5));

const somar3 = (a, b) => a + b;
console.log(somar3(5, 10));

// Sem Parametros: Use parênteses vazios

const oi = () => "Ola GCM";

console.log(oi());

// Com um parametro voce pode ate tirar os parenteses

const dobrar = (n) => n * 2;
console.log(dobrar(8));

// O this é diferente: Diferente das funções comuns,
// as Arrow Functions não criam seu próprio this.
// Elas usam o this de quem está em volta delas.
// (Por isso, para métodos de objetos que usam this, a função comum ainda é muito usada!).

let codigo = "QAP";

const alerta = () => `Atenção: Código ${codigo} detectado!`;
console.log(alerta());

let valorPago = 100;
const calcLitros = (vp) => vp / 6;
console.log(calcLitros(50));

const processar = (nome, funcaoAcao) => funcaoAcao(nome);

processar("Romulo", (funcaoAcao) => console.log(funcaoAcao));

// 1. Criamos a função "Motor" (ela só executa o que mandarem)
const processarOcorrencia = (nomeGCM, instrucao) => {
  console.log("Sistema processando....");
  instrucao(nomeGCM);
};

// 2. Agora chamamos o motor e passamos a "Instrução" na hora (via Arrow Function)
processarOcorrencia("Romulo", (nome) => {
  console.log(`O GCM ${nome} acabou de finalizar o boletim. `);
});

// Podemos passar uma instrução diferente usando o mesmo "Motor":
processarOcorrencia("Silva", (nome) => {
  console.log(`ALERTA: O GCC ${nome} solicitou apoio imediato`);
});
