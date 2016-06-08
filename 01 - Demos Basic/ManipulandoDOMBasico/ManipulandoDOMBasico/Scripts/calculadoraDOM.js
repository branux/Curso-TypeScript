window.onload = function () {
    var calc = new CalculadoraDOM('X', 'Y', 'Output');
};
var CalculadoraDOM = (function () {
    function CalculadoraDOM(xId, yId, outputId) {
        this._x = document.getElementById(xId);
        this._y = document.getElementById(yId);
        this._output = document.getElementById(outputId);
        this.dispararEventos();
    }
    CalculadoraDOM.prototype.dispararEventos = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function () {
            _this._output.innerHTML = _this.somar(parseInt(_this._x.value), parseInt(_this._y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function () {
            _this._output.innerHTML = _this.subtrair(parseInt(_this._x.value), parseInt(_this._y.value)).toString();
        });
    };
    CalculadoraDOM.prototype.somar = function (x, y) {
        return x + y;
    };
    CalculadoraDOM.prototype.subtrair = function (x, y) {
        return x - y;
    };
    return CalculadoraDOM;
}());
//# sourceMappingURL=calculadoraDOM.js.map