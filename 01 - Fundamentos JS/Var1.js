//Quando eu crio uma var sem esta dentro de uma funcao, ela vira global
//Quando eu crio uma var dentro de uma funcao, ela vira local
{ { { { var global = 'sera? ' } } } }
console.log(global)

function teste() {
    var Local = 'sera2? '
    console.log(Local)
}
teste()
console.log(Local)
