module demo_primitives {

    //any
    var data: any;
    var info;
    var doSomething = function (arg) {
        return arg;
    }
    var xAny = doSomething(5);

    //primitives
    var age: number = 36;
    var score: number = 33.45;
    var rating = 99.99;

    var hasfata: boolean = true;
    var isReady = true;
    var isBald = function () {
        return 'yes';
    }
    var hasHair = !!isBald();
    var firstName: string = 'Fabiano';
    var lastName = 'Nalin';

    //string array
    var names: string[] = ['Fabiano', 'Adriano', 'Daniel'];
    function getArrayLength(x: string[]) {
        var len = x.length;
        return len;
    }
    var firstPerson: string = names[0];
    console.log(getArrayLength(names));


    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefinined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
}