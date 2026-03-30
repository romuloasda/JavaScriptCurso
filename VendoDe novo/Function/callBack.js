const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function (fabricantes) {
    console.log(fabricantes);
});

const notas = [7.5, 6.5, 5.6, 8.9, 7.2, 9.0];

console.log(notas);

//sem usar callback

let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7);
console.log(notasBaixas3);

function enviarAlerta(mensagem, acaoDepois) {
    console.log("Enviando alerta: " + mensagem);

    // Guardamos o que a callback devolve em uma variável
    let resultadoDaCallback = acaoDepois();

    // Retornamos esse valor para fora da função principal
    return resultadoDaCallback;
}

// Agora o console.log vai conseguir mostrar o "Ola"
console.log(enviarAlerta("romulo", () => "Ola"));
