/*let doc = 5

if (doc = 5) 
    console.log('Verdadeiro')
    else
    console.log('Falso')


function squere(numero){
    return numero * numero
}
*/

/**
 * Exemplo 1
 
var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = {
  meuCarro: "Punto",
  getCarro: tipoCarro("Fiat"),
  especial: vendas,
};

console.log(carro.meuCarro); // Punto
console.log(carro.getCarro); // Fiat
console.log(carro.especial); // Toyota


console.log('uma linha \n outra linha')

var quote = "Ele lê \"The Cremation of Sam McGee\" de R.W. Service.";
console.log(quote);

var str = "esta é uma \n\
        esta quebrada\n\
        em varias\n\
        linhas. "
console.log(str)
*/

var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "FiatFord") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = {
  meuCarro: "Punto",
  getCarro: tipoCarro("Fiat"),
  especial: vendas,
};

console.log(carro.meuCarro); // Punto
console.log(carro.getCarro); // Fiat
console.log(carro.especial); // Toyota