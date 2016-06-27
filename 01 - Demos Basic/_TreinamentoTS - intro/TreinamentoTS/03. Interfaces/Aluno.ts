namespace Cadastro.Model {

    import models = Cadastro.Interfaces; 

    class Aluno implements models.IAluno {
        id: number;
        nome: string;
        sobreNome: string;
        idade: number;

        nomeCompleto(): string {
            return this.nome + " " + this.sobreNome;
        };

        estudar(): void {
            console.log("Estudar");
        };
    }
}