// let refeicao = 'Almoço'

// module.exports = function comer(refeicao, ...alimentos) {
// 	console.log(`Na refeição ${refeicao} vou comer ${alimentos}`)
// }
module.exports = function (refeicao) {
	const vouComer = function (...alimentos) {
		console.log(`Na refeição ${refeicao} vou comer ${alimentos}`)
	}
	return vouComer;
}