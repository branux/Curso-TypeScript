var Demo_objects;
(function (Demo_objects) {
    //Object
    var points1 = { x: 10, y: 20 };
    var x1 = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    //erro var x2 = points2.x;
    var points3 = { x: 1 };
    //erro var x3 = points3.x;
    var rectangle = {
        h: 10, w: 20, calArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rect area = ' + rectangle.calArea());
    //Functions
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1(2);
    console.log('1. squareIt = ' + val1);
    //val1 = squareIt1('Raphael');
    //console.log('s2. quareIt = ' + val1);
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10 });
    var sq2 = squareIt({ h: 10, w: 40 });
    console.log('sq1 = ' + sq1);
    console.log('sq2 = ' + sq2);
})(Demo_objects || (Demo_objects = {}));
