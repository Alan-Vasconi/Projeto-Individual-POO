class Animal{
    emitirSom(): void{
        console.log("O animal está emitindo som");
    }

    mover(): void{
        console.log("O animal está se movendo");
    }
}

class Cachorro extends Animal{
    emitirSom(): void {
        console.log("Au Au Au Au");
    }
}

class Passaro extends Animal{
    emitirSom(): void {
        console.log("Piu!! Piu!! Piu!!");
    }
}

let Cachorro1 = new Cachorro();
let Passaro1 = new Passaro();

Cachorro1.emitirSom();
Cachorro1.mover();

Passaro1.emitirSom();
Passaro1.mover();
