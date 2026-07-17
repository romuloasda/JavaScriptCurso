const agora = new Date()
console.log(agora)

const fimDoAno = new Date('2026-12-31T23:59:59');
console.log(fimDoAno)

const natal = new Date(2026, 11, 25); // 11 significa Dezembro!
console.log(natal)

let anoCompleto = agora.getFullYear()
console.log(anoCompleto)

let mes = agora.getMonth()
console.log(mes + 1)

let dia = agora.getDate()
console.log(dia)

let diaDaSemana = agora.getDay()
console.log(diaDaSemana) // Pega o dia da semana (0 = Domingo, 1 = Segunda... 6 = Sábado).

let tempoExato = agora.getHours() //.getMinutes(), .getSeconds(): Capturam o tempo exato.
console.log(tempoExato)

const hoje = new Date();
console.log(hoje.toLocaleDateString('pt-BR')); // Exibe: 15/07/2026

console.log(hoje.getTime()); // Exibe algo como: 1784136450000 (milissegundos)

const data1 = new Date('2026-07-20');
const data2 = new Date('2026-07-15');

const diferencaMilissegundos = data1.getTime() - data2.getTime();
const diferencaDias = diferencaMilissegundos / (1000 * 60 * 60 * 24);

console.log(diferencaDias); // Exibe: 5 dias!

const diaDehoje = new Date();
const diaSemanaTexto = hoje.toLocaleDateString('pt-BR', { weekday: 'long' });
console.log(diaSemanaTexto); // Exibe: "quarta-feira" (ou o dia atual)