class Conta {
	constructor(saldoInicial) {
		this._saldo = saldoInicial; // O '_' avisa que a propriedade real está protegida
	}

	// O GET finge ser a propriedade na hora de ler: console.log(minhaConta.saldo)
	get saldo() {
		return `R$ ${this._saldo.toFixed(2)}`; // Devolve bonitinho
	}

	// O SET intercepta a alteração: minhaConta.saldo = 500
	set saldo(novoValor) {
		if (novoValor < 0) {
			console.log("❌ Erro! O saldo não pode ser negativo.");
		} else {
			this._saldo = novoValor; // Altera o valor real protegido
		}
	}
}

const minhaConta = new Conta(100);
minhaConta.saldo = -50; // Alerta: "Erro! O saldo não pode ser negativo" (O segurança barrou!)
minhaConta.saldo = 200; // Passou no teste!
console.log(minhaConta.saldo); // Chama o GET. Saída: "R$ 200.00"