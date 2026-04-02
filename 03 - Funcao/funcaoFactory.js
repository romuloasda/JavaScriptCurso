//factory function simples
//Factory é uma função que retorna um objeto

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
    };
}

console.log(criarPessoa());
console.log(criarPessoa("Romulo", "Silva"));

// Exercicios IA

function criarviatura(prefixo, modelo) {
    return {
        prefixo: prefixo,
        modelo: modelo,
        ligarSirene() {
            console.log(`A viatura ${prefixo} | ${modelo} ligando sirene... `);
        },
    };
}

const v1 = criarviatura("01", "Reneged");
const v2 = criarviatura("02", "Reneged");

v1.ligarSirene();
v2.ligarSirene();

function criarGuarda(nome, cargo) {
    return {
        nome: nome,
        cargo: cargo,
        guarda() {
            console.log(`O GCM ${nome} é ${cargo}`);
        },
    };
}

const gm1 = criarGuarda("Arantes", "Lider");

gm1.guarda();

function gerarMulta(valorbase) {
    return {
        valorbase: valorbase,
        calcularComJuros() {
            valorbase = valorbase * 1.1;
            console.log(`O valor da multa é ${valorbase}`);
        },
    };
}
const multa = gerarMulta(100);
multa.calcularComJuros();

function criarRonda() {
    let km = 0;
    return {
        patrulhar() {
            km = km + 5;
            console.log(`olha ai ${km}`);
        },
    };
}
const rodou = criarRonda();
rodou.patrulhar(1);
rodou.patrulhar(1);
