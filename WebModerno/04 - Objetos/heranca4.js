function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = MeuObjeto.prototype
console.log(obj1.__proto__) 