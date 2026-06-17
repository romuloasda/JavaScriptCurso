const pedirLanche = new Promise((resolve, reject) => {
	let temEstoque = true; // Se mudar para false, vai dar erro

	if (temEstoque) {
		resolve("🍔 Hambúrguer caprichado entregue!");
	} else {
		reject("❌ Desculpe, o ingrediente acabou.");
	}
});

// Como nós USAMOS a promessa (o cliente esperando o bipe)
pedirLanche
	.then((lanche) => console.log(lanche)) // Se der resolve, cai aqui
	.catch((erro) => console.log(erro));   // Se der reject, cai aqui



