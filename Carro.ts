class Carro{
    modelo: string;
    ano: number;
    cor: string;

    constructor(modelo: string, ano:number, cor:string){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    imprimirCarro(): void{
        console.log(`Detalhes do carro escolhido:
                    - Modelo: ${this.modelo}
                    - Ano: ${this.ano}
                    - Cor: ${this.cor}`);
    }
}

let novoCarro1 = new Carro("Fox",2013,"branco");
let novoCarro2 = new Carro("Gol-Bolinha",2010,"Prata");

novoCarro1.imprimirCarro();
novoCarro2.imprimirCarro();

