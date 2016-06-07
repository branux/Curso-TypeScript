module demo_dynamicTypes {

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

    var person: string;
    person = 'Fabiano Nalin';
    console.log(person.substring(1, 3));

    //Erro de compilação já que person foi definida como string
    /*
    person = {name:'Fabiano Nalin', age : 36};
    console.log(person.substring(1, 3));
    */
}