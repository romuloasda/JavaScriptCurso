console.log(typeof Object)
console.log(typeof new Object)

console.log(Object.prototype, new Object().__proto__)
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('arantes'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())