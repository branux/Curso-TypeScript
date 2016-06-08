var Engine = (function () {
    function Engine(horsepower, engineType) {
        this.horsepower = horsepower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply as engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('car engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};
//# sourceMappingURL=car.js.map