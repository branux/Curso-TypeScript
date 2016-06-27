namespace Cadastro.Model {
    export class Professor implements Cadastro.Interfaces.IProfessor {
        constructor(public id: number, public nome: string, public sobreNome: string) { }

        nomeCompleto(): string {
            return this.nome + " " + this.sobreNome;
        };

        ensinar(): void {
            console.log("Ensinar...");
        };
    }
}