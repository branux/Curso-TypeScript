var Cadastro;
(function (Cadastro) {
    var professor = new Cadastro.Model.Professor(1, "Fabiano", "Nalin");
    var nome = professor.nomeCompleto();
    professor.ensinar();
    alert(nome);
})(Cadastro || (Cadastro = {}));
//# sourceMappingURL=Cadastro.js.map