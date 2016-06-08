var demo_interfaces;
(function (demo_interfaces) {
    var squareItBasic = function (num) { return num * num; };
    console.log(squareItBasic(10));
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (obj) {
        if (obj.w === undefined) {
            return obj.h * obj.h;
        }
        return obj.h * obj.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
    var p = {
        name: 'Fabiano',
        age: 36,
        kids: 1,
        calcPets: function () { return this.kids * 2; },
        makeYounger: function (y) { this.age -= y; },
        greet: function (msg) { return msg + ', ' + this.name; }
    };
})(demo_interfaces || (demo_interfaces = {}));
