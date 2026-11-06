
class Celular {
    constructor(marca, modelo, cor, bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.bateria = bateria;
    }

    ligar() {
        console.log("Celular ligado!");
    }

    desligar() {
        console.log("Celular desligado!");
    }

    carregarBateria(percentual) {
        this.bateria += percentual;

        if (this.bateria > 100) {
            this.bateria = 100;
        }

        console.log("Bateria: " + this.bateria + "%");
    }
}

let celular = new Celular("Samsung", "A54", "Preto", 50);

celular.ligar();
celular.carregarBateria(60);
celular.desligar();
