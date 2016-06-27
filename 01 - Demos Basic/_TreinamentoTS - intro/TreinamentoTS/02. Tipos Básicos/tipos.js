console.log("** ANY ** ");
var qualquer = "Teste";
qualquer = 123;
qualquer = [1, "Teste", true, new Date()];
console.log(qualquer);
console.log("\n** Boleano **");
var boleano = true;
console.log(boleano);
console.log("\n** Numero **");
var num1 = -1;
var num2 = 3.14;
console.log(num1);
console.log(num2);
console.log("\n** String **");
var texto = "Minha string";
console.log(texto);
console.log("\n** array **");
var arrayAny = ["teste", 123, true];
var arrayAny2 = ["teste 2", 123, true];
var arrayNumber = [1, 123, 0.99];
console.log(arrayAny);
console.log(arrayAny2);
console.log(arrayNumber);
console.log("\n** Enum **");
var cores;
(function (cores) {
    cores[cores["Vermelho"] = 3] = "Vermelho";
    cores[cores["Verde"] = 1] = "Verde";
    cores[cores["Azul"] = 5] = "Azul";
})(cores || (cores = {}));
;
var cor = cores[5];
console.log(cores.Azul);
console.log(cor);
console.log("\n** Void **");
function Alerta() {
    console.log("FIM");
}
Alerta();
//# sourceMappingURL=tipos.js.map