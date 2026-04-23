const bomDia = () => { console.log('Bom dia') }
bomDia()

const somar = (a, b) => {
	return a + b
}
console.log(somar(5, 5))

// Return implicito quando so tem uma sentença de codigo
const somar2 = (a = 0, b = 0) => 5 + 5
console.log(somar2(5, 5))

const executar = (fn) => fn()
const bomDIa = () => 'Bom Dia'

console.log(executar(bomDIa))

//  Com varios return e vesão muito reduzida

const somar3 = (a) => (b) => (c) => a + b + c

console.log(somar3(3)(4)(5))