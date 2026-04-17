function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: "Produto 1",
    preco: 100,
    desconto: 0.15,
    getPreco,
};

global.preco = 20;
global.desconto = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desconto: 0.2 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));
console.log(getPreco.call(carro, 0.17, "$"));
console.log(getPreco.apply(global, [0.17, "$"]));

function comunicar(menssagem) {
    return `${menssagem} VTR com o prefixo ${this.prefixo}`;
}

const viatura1 = { prefixo: "101" };
const viatura2 = { prefixo: "202" };

console.log(comunicar.call(viatura1, "QAP"));

const agente = { nome: "Arantes" };

function rm(qtd, tipo) {
    return `${this.nome} registrou ${qtd} de multas do tipo ${tipo}`;
}

const info = [5, "Transito"];

console.log(rm.apply(agente, info));

const sistema = { nomesistema: "SISTEMA GCM" };
const ver = [2.0];

function mostra(sistema) {
    return `A versão do ${this.nomesistema} é ${sistema}`;
}

console.log(mostra.call(sistema));
console.log(mostra.apply(sistema, ver));

const vtr = { prefixo: "105" };
function identificar() {
    console.log(`Viatura: ${this.prefixo}`);
}

// Tente completar esta linha mentalmente:
identificar.call(vtr);
