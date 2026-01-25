function Pessoa() {
    this.idade = 1

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this),*/, 1000)
}

new Pessoa()