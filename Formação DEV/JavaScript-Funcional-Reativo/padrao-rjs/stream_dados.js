function gerarNumeros() {
	return {
		inciar(fn, interavalo = 1000) {
			let num = 0
			const i = setInterval(() => {
				fn(num++)
			}, interavalo)

			return {
				parar() {
					clearInterval(i)
				}
			}
		}
	}
}

const temp1 = gerarNumeros()

const exec1 = temp1.inciar(numero => {
	console.log(numero * 2)
}, 1000)

const temp2 = gerarNumeros()

const exec2 = temp2.inciar(a => {
	console.log(a + 100)
}, 2000)

setTimeout(() => {
	exec1.parar()
	exec2.parar()
}, 10000)