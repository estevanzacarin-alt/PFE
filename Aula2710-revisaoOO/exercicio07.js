
class Semaforo {
    constructor() {
        this.corAtual = "Vermelho";
    }

    abrir() {
        this.corAtual = "Verde";
        console.log("Verde: pode passar!");
    }

    fechar() {
        this.corAtual = "Vermelho";
        console.log("Vermelho: pare!");
    }

    atencao() {
        this.corAtual = "Amarelo";
        console.log("Amarelo: atenção!");
    }
}

let semaforo = new Semaforo();

semaforo.abrir();
semaforo.atencao();
semaforo.fechar();
