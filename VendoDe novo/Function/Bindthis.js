const viatura = {
    prefixo: "101",
    cidade: "Goiana",
    anunciar: function () {
        console.log(
            `Viatura ${this.prefixo} de ${this.cidade} em patrulhamento. `,
        );
    },
};

viatura.anunciar();

// O PROBLEMA

const anunciarSolto = viatura.anunciar;
anunciarSolto();

const anunciarAmarrado = viatura.anunciar.bind(viatura);
anunciarAmarrado();

const gcm = {
    nome: "Romulo",
    matricula: "123456",
    id: function () {
        console.log(`GCM: ${this.nome} com a matricula ${this.matricula}`);
    },
};

gcm.id();

const idficarFora = gcm.id.bind(gcm);
idficarFora();

const relatorio = {
    total: 0,
    incrementar: function () {
        this.total++;
        console.log(this.total);
    },
};

// 2. Se tentarmos tirar a função de dentro do objeto:
const dispararSolto = relatorio.incrementar;
// dispararSolto(); // ❌ Isso daria erro ou NaN, porque o 'this' sumiu!

// 3. AGORA O PULO DO GATO: Usamos o bind para "amarrar"
const dispararRelatorio = relatorio.incrementar.bind(relatorio);

// 4. Testando a execução "amarrada"
dispararRelatorio(); // Exibe: Total no sistema: 1
dispararRelatorio(); // Exibe: Total no sistema: 2
dispararRelatorio(); // Exibe: Total no sistema: 3

// Veja que o valor mudou DENTRO do objeto original:
console.log(`Valor final no objeto: ${relatorio.total}`);

const radio = {
    canal: "Frequencia 01",
    ouvir: function () {
        console.log(`A frequencia que esta é a ${this.canal}`);
    },
};

const ligarRadio = radio.ouvir.bind(radio);
ligarRadio();

const portao = {
    stats: "Fechado",
    verificar: function () {
        console.log(`O portão da guarita esta ${this.stats}`);
    },
};

const check = portao.verificar.bind(portao);
check();
console.log(check());

const vtr = {
    placa: 'ABC-1234'
	trocarPlaca: function () {
		
	}
};
