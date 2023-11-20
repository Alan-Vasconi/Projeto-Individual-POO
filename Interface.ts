interface FormaGeometrica{
    calcularArea(): number;
    calcularPerimetro(): number;
}

class Quadrado implements FormaGeometrica{
    lado1: number;

    constructor (lado1:number){
        this.lado1 = lado1;
    }

    calcularArea(): number {
        return this.lado1 * this.lado1;
    }
    calcularPerimetro(): number {
        return this.lado1 * 4;
    }

}

class Circulo implements FormaGeometrica{
    raio: number;
    PI: number = 3.14;
    constructor (raio:number){
        this.raio = raio;
    }

    calcularArea(): number {
        return this.PI * (this.raio * this.raio);
    }

    calcularPerimetro(): number {
        return (2 * this.PI) * this.raio;
    }

}

let quadrado1 = new Quadrado(4);
let circulo1 = new Circulo(4);

console.log("Área do Quadrado: ", quadrado1.calcularArea()); 
console.log("Perímetro do Quadrado: ", quadrado1.calcularPerimetro());

console.log("Área do Círculo: ", circulo1.calcularArea());
console.log("Perímetro do Círculo: ", circulo1.calcularPerimetro());