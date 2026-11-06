
class TimeFutebol {
    constructor(nome, cidade, quantidadeJogadores, quantidadeTitulos) {
        this.nome = nome;
        this.cidade = cidade;
        this.quantidadeJogadores = quantidadeJogadores;
        this.quantidadeTitulos = quantidadeTitulos;
    }

    mostrarInformacoes() {
        console.log("Time: " + this.nome);
        console.log("Cidade: " + this.cidade);
        console.log("Jogadores: " + this.quantidadeJogadores);
        console.log("Títulos: " + this.quantidadeTitulos);

        if (this.quantidadeJogadores > 11) {
            console.log("Tem um jogador a mais!");
        } else if (this.quantidadeJogadores < 11) {
            console.log("Está faltando jogadores!");
        } else {
            console.log("Time pode jogar!");
        }
    }
}

let time1 = new TimeFutebol("Santos", "Santos", 11, 8);
let time2 = new TimeFutebol("Palmeiras", "São Paulo", 10, 12);

time1.mostrarInformacoes();
console.log("----------------");
time2.mostrarInformacoes();
