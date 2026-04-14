//ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//  Melhorias na notação literal
const nome = "Carla"
const pessoa = {
	nome,
	obj,
	ola() {
		return 'Ola'
	}
}

console.log(pessoa.obj, pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
	falar() {
		return "Au AU"
	}
}

console.log(new Cachorro().falar())