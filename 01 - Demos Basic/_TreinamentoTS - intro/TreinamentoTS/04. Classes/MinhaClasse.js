var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TipoAnimal;
(function (TipoAnimal) {
    TipoAnimal[TipoAnimal["Ave"] = 0] = "Ave";
    TipoAnimal[TipoAnimal["Mamifero"] = 1] = "Mamifero";
})(TipoAnimal || (TipoAnimal = {}));
var Animal = (function () {
    function Animal(tipo) {
        this.tipo = tipo;
    }
    return Animal;
}());
var Ave = (function (_super) {
    __extends(Ave, _super);
    function Ave() {
        _super.call(this, TipoAnimal.Ave);
    }
    Ave.prototype.voar = function () {
        console.log("Ave voando");
    };
    return Ave;
}(Animal));
var Mamifero = (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero() {
        _super.call(this, TipoAnimal.Mamifero);
        this.init();
    }
    Mamifero.prototype.init = function () {
        alert("Executou o método init");
    };
    Mamifero.prototype.mamar = function () {
        console.log("Mamífero mamando");
    };
    return Mamifero;
}(Animal));
//# sourceMappingURL=MinhaClasse.js.map