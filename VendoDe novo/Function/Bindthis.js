const viatura = {
    prefixo: "101",
    cidade: "Goiana",
    anunciar: function () {
        console.log(
            `Viatura ${this.prefixo} de ${this.cidade} em patrulhamento. `,
        );
    },
};
