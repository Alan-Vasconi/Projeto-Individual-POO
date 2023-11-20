class Calculadora{

    private static soma(x: number, y:number):number{
        return x + y;
    }
    private static subtrair(x:number, y:number):number{
        return x - y;
    }
    private static multiplicar(x:number, y:number):number{
        return x * y;
    }
    private static dividir(x:number, y:number):number{
        if (y === 0){
            return 0;
        }
        else{
            return x / y;
        }
    }
    static calculoSoma(a: number, b: number): number {
        return this.soma(a, b);
    }

    static calculoSubtracao(a: number, b: number): number {
        return this.subtrair(a, b);
    }

    static calculoMultiplicacao(a: number, b: number): number {
        return this.multiplicar(a, b);
    }

    static calculoDivisao(a: number, b: number): number {
        return this.dividir(a, b);
    }

}

console.log("Soma: ",Calculadora.calculoSoma(6,2));
console.log("Subtração: ",Calculadora.calculoSubtracao(6,2));
console.log("Multiplicação: ",Calculadora.calculoMultiplicacao(6,2));
console.log("Divisão: ",Calculadora.calculoDivisao(6,2));