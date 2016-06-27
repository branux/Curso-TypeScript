var Cadastro;
(function (Cadastro) {
    var Model;
    (function (Model) {
        var Aluno = (function () {
            function Aluno() {
            }
            Aluno.prototype.nomeCompleto = function () {
                return this.nome + " " + this.sobreNome;
            };
            ;
            Aluno.prototype.estudar = function () {
                console.log("Estudar");
            };
            ;
            return Aluno;
        }());
    })(Model = Cadastro.Model || (Cadastro.Model = {}));
})(Cadastro || (Cadastro = {}));
//# sourceMappingURL=Aluno.js.map