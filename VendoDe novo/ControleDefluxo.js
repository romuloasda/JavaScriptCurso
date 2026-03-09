/*let saborCoxinha = 

switch (saborCoxinha){
    case 'Frango':
        console.log('Dez reais')
        break
    case 'Camarão':
        console.log('Doze reais')
        break
    case 'Charque':
        console.log('trese reais')
        break
    default:
        console.log('Não temos esse sabor de COXINHA')
    throw "Error2"            
}
throw "Error2"; // tipo string
throw 42; // tipo numérico
throw true; // tipo booleano
throw {
  toString: function () {
    return "Eu sou um objeto!";
  },
};

function dividir(a, b) {
  try {
    if (b === 0) {
      // 1. Lance (throw) um novo Erro (Error) dizendo "Divisão por zero!"
      throw new Error("Divisão por zero!");
    }
    let resultado = a / b;
    console.log("Resultado: " + resultado);

  } catch (erro) {
    // 2. Mostre a mensagem de erro no console
    console.log("Erro detectado: " + erro.message);

  } finally {
    // 3. Escreva algo que deve aparecer sempre (ex: "Calculadora desligada")
    console.log("Calculadora desligada.");
  }
}

dividir(10, 2); // Deve mostrar 5 e "desligada"
dividir(10, 0); // Deve mostrar o erro e "desligada"*/
//01
var capacidadeMaxima = 10
var pessoasNaFila = 15

if (pessoasNaFila > capacidadeMaxima){
    throw 'Clube Lotado'
} else {
    console.log('Pode entrar! ')
}
//02
function medio(n1, n2){
    try{
        if (n2 === 0){
            throw new Error ('Divisão impossível')
        }
        let smedia = (n1 + n2) / 2
        return 'A media é ' + smedia
    } catch (erro){
        return 'Opa '+ erro.message
    }
}
let x = medio(4, 0)
console.log(x)

//03

let portaAberta = false
try{
    console.log('Tentando')
    throw new Error ('Erro limpeza ')
} catch (erro){
    console.log('Erro' + erro.message)
}finally {
    portaAberta = false
    console.log('Porta trancada')
}

function checarNome(nome){
    
    if (nome.trim().length < 3 ){
        throw new Error ('Nome muito curto ')
    }
    
    return 'Nome valido '

}

console.log(checarNome('mromulo'))

try{
    console.log(checarNome())
} catch (erro) {
    console.log('Capturado' + erro.message)
}

