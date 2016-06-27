enum TipoAnimal { Ave, Mamifero }

interface IAnimal {
    tipo: TipoAnimal;
}

class Animal implements IAnimal {
    constructor(public tipo: TipoAnimal) { }
}

class Ave extends Animal {
    constructor() {
        super(TipoAnimal.Ave);
    }
    voar() {
        console.log("Ave voando");
    }
}


class Mamifero extends Animal {
    constructor() {
        super(TipoAnimal.Mamifero);
        this.init();
    }

    init() {
        alert("Executou o método init");
    }

    mamar() {
        console.log("Mamífero mamando");
    }
}