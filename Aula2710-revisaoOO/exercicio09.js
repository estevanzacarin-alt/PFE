
class Pedido {
    constructor(numero, cliente, produto, valor, status, feedback) {
        this.numero = numero;
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
        this.status = status;
        this.feedback = feedback;
    }

    finalizarPedido() {
        this.status = "Finalizado";

        if (this.feedback === "negativo") {
            this.valor *= 1.05;
        }

        console.log("Pedido " + this.numero + " finalizado!");
        console.log("Valor: R$ " + this.valor.toFixed(2));
    }

    cancelarPedido() {
        this.status = "Cancelado";
        console.log("Pedido " + this.numero + " cancelado!");
    }
}

let pedido1 = new Pedido(1, "João", "Pizza", 50, "Aberto", "positivo");
let pedido2 = new Pedido(2, "Maria", "Hambúrguer", 30, "Aberto", "negativo");

pedido1.finalizarPedido();
pedido2.finalizarPedido();

pedido1.cancelarPedido();
