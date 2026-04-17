function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa();

if (this === Pessoa) {
    console.log("OLA");
}
