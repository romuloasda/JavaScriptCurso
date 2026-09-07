(function () {
	const elemento = document.querySelector('p')
	const nome = 'romulo'
	if (nome) {
		elemento.textContent += nome
	} else {
		elemento.remove()
	}

})()

// Estudades element.parent e element.child