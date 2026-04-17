const pessoa = {
  saudacao: "Bom dia",
  Horario: "Noite",
  falar() {
    console.log(this.Horario);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar();

const falarDePessoa = pessoa.falar.bind(pessoa); // amarrar determinado objeto ao this
falarDePessoa();
