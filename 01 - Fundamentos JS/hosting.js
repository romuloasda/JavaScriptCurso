//Hosting é içamento de variável    
console.log('a =', a)
var a = 2
console.log('a =', a)
//Hosting ocorre com variáveis
function teste() {
    console.log('b =', b)
    var b = 2
    console.log('b =', b)
}
teste()
//Hosting ocorre com funções

//Hosting não ocorre com let
console.log('b =', b)
let b = 2
console.log('b =', b)
