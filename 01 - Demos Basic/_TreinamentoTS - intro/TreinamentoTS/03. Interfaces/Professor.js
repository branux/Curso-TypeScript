var Cadastro;
(function (Cadastro) {
    var Model;
    (function (Model) {
        var Professor = (function () {
            function Professor(id, nome, sobreNome) {
                this.id = id;
                this.nome = nome;
                this.sobreNome = sobreNome;
            }
            Professor.prototype.nomeCompleto = function () {
                return this.nome + " " + this.sobreNome;
            };
            ;
            Professor.prototype.ensinar = function () {
                console.log("Ensinar...");
            };
            ;
            return Professor;
        }());
        Model.Professor = Professor;
    })(Model = Cadastro.Model || (Cadastro.Model = {}));
})(Cadastro || (Cadastro = {}));
//# sourceMappingURL=Professor.js.map