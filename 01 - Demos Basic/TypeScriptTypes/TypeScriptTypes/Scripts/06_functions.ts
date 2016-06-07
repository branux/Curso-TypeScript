module demo_functions {

    var squareItSimple = function (h: number, w: number) {
        return h * w;
    }
    //ou
    var squareItSimplest = (h: number, w: number) => h * w;

    //c/ parametro opcional
    var helloworld: (name?: string) => void;
    helloworld = (name?: string) => {
        console.log('Hello ' + (name || ' unknown person'));
    }

    helloworld();
    helloworld('Fabiano');


    var squareIt: (rect: { h: number; w?: number }) => number;

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

}