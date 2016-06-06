var Carro = (function () {
    function Carro(motor) {
        this.motor = motor;
    }
    Carro.prototype.ligar = function () {
        alert("Iniciando o motor " + this.motor);
    };
    Carro.prototype.desligar = function () {
        alert("parando o motor " + this.motor);
    };
    return Carro;
}());
window.onload = function () {
    var carro = new Carro("V8");
    carro.ligar();
    carro.desligar();
};
