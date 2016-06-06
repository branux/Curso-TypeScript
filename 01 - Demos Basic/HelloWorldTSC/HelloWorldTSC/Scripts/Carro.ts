class Carro {
    motor: string
    constructor(motor: string) {
        this.motor = motor;
    }

    ligar() {
        alert("Iniciando o motor " + this.motor);
    }

    desligar() {
        alert("parando o motor " + this.motor);
    }
}

window.onload = function () {
    var carro = new Carro("V8");
    carro.ligar();
    carro.desligar();
};