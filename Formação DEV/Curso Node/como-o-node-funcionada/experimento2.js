function f1() {
	setTimeout(() => f2(), 2000)
	console.log('Chamei f1')
}
function f2() {
	setTimeout(() => f3(), 2000)
	console.log('Chamei f2')
}
function f3() {
	console.log('Chamei f3')
}

function principal() {
	console.log('Chamei a funcao principal  ')
	f1()
}

principal()