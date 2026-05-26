import { modulo, div } from "./calculos.js"

function divPorEx(a, b) {
	return `A divisão de ${a} e ${b} é ${div(a, b)} e o resto é ${modulo(a, b)}`
}

export default { div: divPorEx }