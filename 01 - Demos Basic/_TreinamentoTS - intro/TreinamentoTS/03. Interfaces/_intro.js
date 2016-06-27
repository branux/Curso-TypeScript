/*
function fullname(nome, sobrenome) {
    return nome + " " + sobrenome;
}

var nome = "Fabiano";
var sobrenome = "Nalin";

console.log(fullname(nome,sobrenome));
*/
function dados(pessoa) {
    return pessoa.nome + " " + pessoa.sobrenome + " - " + "idade: " + pessoa.idade;
}
var Pessoa = (function () {
    function Pessoa(_nome, _sobrenome, _idade) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
        this.nome = _nome;
        this.sobrenome = _sobrenome;
        this.idade = _idade;
    }
    return Pessoa;
}());
var pessoa = new Pessoa("Fabiano", "Nalin", 36);
console.log(dados(pessoa));
//# sourceMappingURL=_intro.js.map