//Quando eu crio uma var sem esta dentro de uma funcao, ela vira global
//Quando eu crio uma var dentro de uma funcao, ela vira local   
var numero = 1
{
    let numero = 2 //let tem escopo de bloco que é um a mais do a Var
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//let tem escopo de bloco que é um a mais do a Var
//let tem escopo de funcao
//let tem escopo global

