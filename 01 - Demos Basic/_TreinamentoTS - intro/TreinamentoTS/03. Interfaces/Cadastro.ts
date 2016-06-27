namespace Cadastro{

    var professor = new Model.Professor(1, "Fabiano", "Nalin");
    var nome = professor.nomeCompleto();
    professor.ensinar();
    alert(nome);
}