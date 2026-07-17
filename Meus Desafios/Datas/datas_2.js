const data = new Date()
data.setHours(data.getHours() + 3)
console.log(data.toLocaleDateString('pt-BR'))