console.log("** ANY ** ");
var qualquer: any = "Teste";
qualquer = 123;
qualquer = [1, "Teste", true, new Date()];

console.log(qualquer);


console.log("\n** Boleano **");
var boleano: boolean = true;

console.log(boleano)


console.log("\n** Numero **");
var num1: number = -1;
var num2: number = 3.14;

console.log(num1);
console.log(num2);


console.log("\n** String **");
var texto: string = "Minha string";

console.log(texto);


console.log("\n** array **");
var arrayAny: any[] = ["teste", 123, true];
var arrayAny2: Array<any> = ["teste 2", 123, true];

var arrayNumber: number[] = [1, 123, 0.99];

console.log(arrayAny);
console.log(arrayAny2);
console.log(arrayNumber);


console.log("\n** Enum **");
enum cores { Vermelho = 3, Verde = 1, Azul = 5 };

var cor: string = cores[5];

console.log(cores.Azul);
console.log(cor);



console.log("\n** Void **");
function Alerta(): void {
    console.log("FIM");
}
Alerta();