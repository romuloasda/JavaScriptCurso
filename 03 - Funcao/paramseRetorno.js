function areaRetangulo(largura, altura) {
    const area = largura * altura
    if (area > 10) {
        console.log(`A área é ${area}`) //retorna a area se for maior que 10
    }
    return area //retorna a area    
}

console.log(areaRetangulo(2, 3)) //retorna a area
console.log(areaRetangulo(2, 5)) //retorna a area
console.log(areaRetangulo(2, 10)) //retorna a area
console.log(areaRetangulo(2, 10, 13)) //retorna a area
console.log(areaRetangulo()) //retorna a area
console.log(areaRetangulo(2, 3, 4, 5, 6, 7, 8, 9, 10)) //retorna a area
