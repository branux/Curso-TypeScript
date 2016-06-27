namespace Cadastro.Interfaces {
    interface IPessoa {
        id: number;
        nome: string;
        sobreNome: string;
        idade?: number;
        nomeCompleto(): string;
    }

    export interface IAluno extends IPessoa {
        estudar(): void;
    }

    export interface IProfessor extends IPessoa {
        ensinar(): void;
    }
}