// Pelo fato do var ter escopo global ele sofre o efeito de var
//for (var i = 0; i < 10; i++) {
//console.log(i)
//}
//console.log('i =', i)

// Pelo fato do let ter escopo de bloco ele nao sofre o efeito de var   
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i)   