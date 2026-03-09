/*let contador = -5

while(contador <= 10) {
    console.log(contador)
    contador++
}

for(let i = 1; i <= 10; i++ ){
    console.log(i)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

for (i in notas) {
    console.log(i, notas[i])
}

let arg = 'Verdadeiro'

while(arg = 'Verdadeiro') {
    console.log('Tenta de novo')
    break
}

for(let i = 1; i <= 5; i++){
    console.log('Contagem: ' + i)
}

const usuario = {
    nome: 'Helena',
    idade: 4,
    cidade: 'Olinda'
}

for (let chave in usuario) {
    console.log(chave + ':' + usuario[chave])
}

let c = 5
for (let r = 1; r <= 10; r++) {
    console.log(c*r)
}

const estoque = {
    macas: 15,
    bananas: 30,
    uvas: 10
}

for(let frutas in estoque) {
    console.log(frutas + estoque[frutas])
} 

let s = 10
for(let p = 10; p <= 100; (p += s)) {
    console.log(p)
}

const perfil = {
    nome: ' Romulo',
    cargo: ' GCM',
    experiencia: ' Lider'
}

for(let guarda in perfil) {
    console.log('O campo tem valor ' + guarda + perfil[guarda])
}

const compras = ['arroz', 'feijão', 'ovos', 'leite'];
for(let lista in compras) {
    console.log('Essa é minha lista de compras ' + lista + compras[lista])
}

const equipe = [
    { nome: "Romulo", posto: "Sede" },
    { nome: "Silva", posto: "Patrulha" },
    { nome: "Oliveira", posto: "Posto A" }
];


for(let i = 0 ; i < equipe.length; i++) {
    console.log('Guarda ' + equipe[i].nome + ' - posto ' + equipe[i].posto)
}

const vtr = {
    prefixo: " VTR-2026",
    modelo: " Hilux",
    km: 45000,
    combustivel: " Diesel"
};

// Use o for...in aqui para imprimir: "O item [campo] tem o valor [valor]"

for(let campo in vtr) {
    console.log(campo + vtr[campo])
}



const ocorrencias = [
    { tipo: "Trânsito", status: "Normal" },
    { tipo: "Assalto", status: "Urgente" },
    { tipo: "Apoio", status: "Normal" },
    { tipo: "Invasão", status: "Urgente" }
];

// Use o for tradicional (let i = 0...) para percorrer a lista.
// Dentro dele, use um IF para mostrar no console apenas o 'tipo' das ocorrências que forem "Urgente".

for(let i = 0; i < ocorrencias.length; i++) {
    if(ocorrencias[i].status === "Urgente" ){
        console.log(ocorrencias[i].tipo)
    }
        
}

for(let i = 5; i >= 0; i--) {
    console.log(i)
}

const velocidades = [60, 85, 70, 110, 50];

for (let i = 0; i < velocidades.length; i++) {
    if(velocidades[i] > 80) {
        console.log('Sua velociade foi ' + velocidades[i] + ' maior que a permitida que é 80')
    }
    // Se a velocidade na posição i for maior que 80...
    // Imprima: "Veículo [i]: Multado! Velocidade: [valor]"
}

const postos = ["Centro", "Vila Rica", "Cohab", "Ponte"];

// Objetivo: Percorra a lista e mostre: "Ronda atual: [nome do posto]"
// Dica: Use postos[i] dentro do console.log
for(let i = 0; i < postos.length; i++) {
    console.log('Ronda atual ' + postos[i])
}

for(goiana in postos) {
    if(postos[goiana] === 'Centro')
    console.log(postos[goiana])
}

const config = {
    tema: 'Escuro',
    noficacoes: 'Ativadas',
    versao: '2.1.0'
}

for(let chave in config) {
    console.log(config[chave].tema)
}

const char = {
    nome: 'Romulo', status: 'Man',
    classe: 'Mago', status: 'Arcano',
    level: 'Max'

}

console.log(char)

for(perso in char) {
    console.log(char[perso])
}

for(i = 0; i <= 10; i++) {
    console.log(i)
}
    Resumo Comparativo:
for tradicional: Use quando precisar da posição (o número i). Ex: "Mudar apenas o 3º item da lista".

for...in: Use para Objetos {} (para ver as chaves/etiquetas).

for...of: Use para Arrays [] (quando você só quer os valores da lista).
*/
const dependentes = [
    {nome: 'Helena', idade: 4},
    {nome: 'Jhessyca', idade: 32},
    {nome: 'Romulo', idade: 34}
]
for(let depe of dependentes) {
    if(depe.idade < 18) {
        console.log(depe.nome)
    }
    
}


for(perso in dependentes) {
    if(dependentes[perso].idade >= 18) {
    console.log('Esse são os meiores de 18 ' + dependentes[perso].nome)
    }
}

const idades = [12, 25, 8, 40, 17]
for(let i = 0; i < idades.length; i++) {
    if(idades[i] <= 18) {
        console.log(idades[i])
    }
}
const viaturas = ["VTR-01", "VTR-05", "VTR-10"];

// Escreva o loop aqui para que o console mostre:
// "A viatura VTR-01 saiu para patrulha."
// "A viatura VTR-05 saiu para patrulha." ...

for(let vtr of viaturas) {
    console.log('A vtr ' + vtr + ' saiu para patrulha')
}
const materiais = ["Papel A4", "Caneta Azul", "Grampeador"];

// Tente escrever o loop for...of para mostrar:
// "Material disponível: Papel A4"
// "Material disponível: Caneta Azul" ...

for(let material of materiais) {
    console.log('Material disponivel: ' + material)
}

const equipamentos = [
    {radio: 1, status: 'Funcionando'},
    {lanterna: 1, status: 'Bateria fraca'},
    {algema: 1, status:'OK'}
]

for(let equi of equipamentos) {
    console.log(equi.status)
}

//se eu quiser fazer dessa forma 'O ' radio ' esta ' funcionando. Como eu faço ?

const cameras = {camera:['Camera sul', 'Camera Norte', 'Camera Leste']}
for(let cam of cameras.camera) {
    console.log('Monitorando ' + cam)
}