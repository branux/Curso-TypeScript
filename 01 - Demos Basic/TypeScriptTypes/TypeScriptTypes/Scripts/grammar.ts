var x = 1;

var y;

var firstName = 'Fabiano';

var lastName: string = 'Nalin';

var num1 = 100;
var num2: number = 20;

/*
//Sem js - não gera erra de compilação
function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    alert('A soma é = ' + result);
};
addNumbers(num1, num2, 'teste');
*/


function addNumbers(n1:number, n2:number, n3:number) {
    var result = n1 + n2 + n3;
    alert('A soma é = ' + result);
};
//addNumbers(num1, num2, 'teste');
addNumbers(num1, num2, 19);