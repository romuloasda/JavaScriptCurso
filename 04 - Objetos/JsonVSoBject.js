const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3, "d": 4 }'))

console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }"))