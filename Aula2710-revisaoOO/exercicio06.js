
class Pessoa {
    constructor(nome, idade, profissao, cidade, renda) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.cidade = cidade;
        this.renda = renda;
    }

    apresentar() {
        if (this.idade > 60) {
            this.renda *= 1.05;
        }

        console.log(
            "Nome: " + this.nome +
            ", Idade: " + this.idade +
            ", Profissão: " + this.profissao +
            ", Cidade: " + this.cidade +
            ", Renda: R$ " + this.renda.toFixed(2)
        );
    }
}

let pessoa1 = new Pessoa("Heitor", 65, "Professor", "São Paulo", 3000);
let pessoa2 = new Pessoa("Higrauldo", 30, "Médico", "Santos", 5000);
let pessoa3 = new Pessoa("Lucas", 45, "Programador", "Araçatuba", 4000);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();
