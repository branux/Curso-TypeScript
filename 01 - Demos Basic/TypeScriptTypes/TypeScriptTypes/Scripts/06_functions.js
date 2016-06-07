var demo_functions;
(function (demo_functions) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    //ou
    var squareItSimplest = function (h, w) { return h * w; };
    //c/ parametro opcional
    var helloworld;
    helloworld = function (name) {
        console.log('Hello ' + (name || ' unknown person'));
    };
    helloworld();
    helloworld('Fabiano');
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
})(demo_functions || (demo_functions = {}));
