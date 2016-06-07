var demo_dynamicTypes;
(function (demo_dynamicTypes) {
    /*
    // ** Erro pois person por inferência é any
    var person;
    person = 'Fabiano Nalin';
    console.log(person.substring(1, 4));

    person = {
        name: 'Raphael Nalin',
        age: 16
    };
    console.log(person.substring(1, 4));
    */
    var person;
    person = 'Fabiano Nalin';
    console.log(person.substring(1, 3));
})(demo_dynamicTypes || (demo_dynamicTypes = {}));
