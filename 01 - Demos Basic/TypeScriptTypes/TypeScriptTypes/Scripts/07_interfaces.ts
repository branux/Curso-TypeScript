module demo_interfaces {
    interface SquareFunction {
        (x: number): number;
    }

    var squareItBasic: SquareFunction = (num) => num * num;
    console.log(squareItBasic(10));



    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt: (rect: Rectangle) => number;

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



    //person interface
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'Fabiano',
        age: 36,
        kids: 1,
        calcPets: function () { return this.kids * 2; },
        makeYounger: function (y: number) { this.age -= y; },
        greet: function (msg: string) { return msg + ', ' + this.name }
    };



}