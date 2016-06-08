/// <reference path="../typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    var calc = new CalculadorajQuery('X', 'Y', 'Output');
});
var CalculadorajQuery = (function () {
    function CalculadorajQuery(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }
    CalculadorajQuery.prototype.wireEvents = function () {
        var _this = this;
        $('#Add').click(function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $('#Subtract').click(function (event) {
            _this.output.html(_this.subtract(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
    };
    CalculadorajQuery.prototype.add = function (x, y) {
        return x + y;
    };
    CalculadorajQuery.prototype.subtract = function (x, y) {
        return x - y;
    };
    return CalculadorajQuery;
}());
//# sourceMappingURL=calculadoraJQuery.js.map