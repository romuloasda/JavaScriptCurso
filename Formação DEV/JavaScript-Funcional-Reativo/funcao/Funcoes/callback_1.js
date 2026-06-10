function exec(fn, a, b) {
	return fn(a, b)
}

const somarTerminal = (x, y) => console.log(x + y)
const subtrair = (w, z) => console.log(w - z)

exec(somarTerminal, 56, 38)
exec(subtrair, 182, 27)

setInterval(() => console.log('exec e...'), 3000)