
/*
function fullname(nome, sobrenome) {
    return nome + " " + sobrenome;
}

var nome = "Fabiano";
var sobrenome = "Nalin";

console.log(fullname(nome,sobrenome));
*/

/*
interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}


function dados(pessoa: IPessoa) {
    return pessoa.nome + " " + pessoa.sobrenome + " - " + "idade: " + pessoa.idade;
}

var pessoa = {nome:"Fabiano",sobrenome:"Nalin",idade:36};
console.log(dados(pessoa));
*/

interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}


function dados(pessoa: IPessoa) {
    return pessoa.nome + " " + pessoa.sobrenome + " - " + "idade: " + pessoa.idade;
}

class Pessoa implements IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(private _nome: string, private _sobrenome: string, private _idade: number) {
        this.nome = _nome;
        this.sobrenome = _sobrenome;
        this.idade = _idade;
    }

}

var pessoa = new Pessoa("Fabiano", "Nalin", 36);
console.log(dados(pessoa));
