// 	Para fazer uma classe herdar a outra,
// o JavaScript usa duas palavras - chave fundamentais:

// 	extends (Estende / Herda): Avisa ao JavaScript que uma classe filha
// está puxando a estrutura de uma classe mãe.

// 	super()(Chamar a Mãe): É uma função especial que nós usamos dentro do constructor da filha.
// Ela serve para pegar os parâmetros e enviar para o construtor da mãe resolver.

// 1. A CLASSE MÃE (A base de tudo)
class Personagem {
	constructor(nome, vida) {
		this.nome = nome;
		this.vida = vida;
	}

	status() {
		return `${this.nome} está com ${this.vida} de vida.`;
	}
}

// 2. A CLASSE FILHA (Herda tudo da mãe usando 'extends')
class Mago extends Personagem {
	constructor(nome, vida, mana) {
		// O super() DEVE ser a primeira linha! 
		// Ele passa o nome e a vida para o constructor da mãe preencher
		super(nome, vida);

		// Agora criamos a propriedade EXCLUSIVA do mago
		this.mana = mana;
	}

	// Método exclusivo do mago
	lancarMagia() {
		this.mana -= 10;
		return `${this.nome} lançou um feitiço! Mana restante: ${this.mana}`;
	}
}

// --- INSTANCIANDO O MOTOR ---
const gandalf = new Mago('Gandalf', 100, 50);

// Olha a mágica: o gandalf consegue usar o método .status() que está lá na mãe!
console.log(gandalf.status()); // Saída: Gandalf está com 100 de vida.

// E também usa o seu próprio método exclusivo!
console.log(gandalf.lancarMagia()); // Saída: Gandalf lançou um feitiço! Mana restante: 40

// Polimorfismo (A evolução da Herança) - O Polimorfismo é simplesmente 
// o ato de a classe filha reescrever 
// (sobrescrever) um método que ela herdou da mãe, 
// adaptando a ação para a sua própria realidade!

class Animal {
	constructor(nome) {
		this.nome = nome;
	}

	emitirSom() {
		return "Som genérico de animal...";
	}
}

// Classe filha que vai reescrever o método da mãe!
class Leao extends Animal {
	// SOBREESCRITA (Polimorfismo): O Leão não faz um som genérico, ele ruge!
	emitirSom() {
		return `O leão ${this.nome} fez: ROAARRR!`;
	}
}

const bicho = new Animal('Genérico');
const simba = new Leao('Simba');

console.log(bicho.emitirSom()); // Saída: Som genérico de animal...
console.log(simba.emitirSom()); // Saída: O Simba fez: ROAARRR! ✅
//  (Reescreveu com sucesso!)

// Os métodos estáticos pertencem à Classe em si,
// e não aos objetos gerados por ela!
// Você pode chamá-los direto pelo nome da classe, sem usar o new.

class Calculadora {
	// Usar o static diz ao JS: "Esse método é acessado direto pela classe!"
	static somar(a, b) {
		return a + b;
	}
}

// ATENÇÃO: Não usamos o "new Calculadora()"! Chamamos direto:
const resultado = Calculadora.somar(10, 20);
console.log(resultado); // Saída: 30 ✅

//  Propriedade Estatica

class Robo {
	// 1. Criamos a propriedade estática (o contador central da fábrica)
	static totalRobosCriados = 0;

	constructor(nome) {
		this.nome = nome; // Propriedade de cada robô individual

		// 2. Toda vez que um robô nasce, a Classe Mãe adiciona +1 no seu próprio contador!
		Robo.totalRobosCriados += 1;
	}

	// 3. Um método estático para ler esse contador central
	static exibirRelatorio() {
		return `Fábrica ativa! Total de robôs no sistema: ${Robo.totalRobosCriados}`;
	}
}

// Criando os robôs individualmente
const r1 = new Robo('Alpha');
const r2 = new Robo('Beta');
const r3 = new Robo('Cyber');

// Acessando o contador direto pela Classe, sem o new!
console.log(Robo.exibirRelatorio()); // Saída: Fábrica ativa! Total de robôs no sistema: 3

class Usuario {
	constructor(nome, cargo) {
		this.nome = nome;
		this.cargo = cargo;
	}

	// Fábrica Estática: Um método da classe que fabrica um objeto pronto!
	static criarAdministrador(nome) {
		// Ele mesmo usa o 'new' internamente com o cargo fixado!
		return new Usuario(nome, 'Administrador');
	}
}

// Em vez de fazer: const admin = new Usuario('Master', 'Administrador')
// Chamamos a fábrica estática direto pela Classe:
const admin = Usuario.criarAdministrador('Master');

console.log(admin);
// Saída: Usuario { nome: 'Master', cargo: 'Administrador' } ✨ (Nasceu pronto!)