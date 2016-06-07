var demo_primitives;
(function (demo_primitives) {
    //any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var xAny = doSomething(5);
    //primitives
    var age = 36;
    var score = 33.45;
    var rating = 99.99;
    var hasfata = true;
    var isReady = true;
    var isBald = function () {
        return 'yes';
    };
    var hasHair = !!isBald();
    var firstName = 'Fabiano';
    var lastName = 'Nalin';
    //string array
    var names = ['Fabiano', 'Adriano', 'Daniel'];
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefinined
    var quantity;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
})(demo_primitives || (demo_primitives = {}));
