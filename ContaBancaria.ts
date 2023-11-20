class ErroNaConta extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'SaldoInsuficienteError';
    }
}

class ContaBancaria {
    saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    sacarDinheiro(saque: number): void {
        if (saque > this.saldo) {
            throw new ErroNaConta("Impossível sacar, valor acima do que está na conta!");
        } else {
            this.saldo -= saque;
            console.log("Saque realizado com sucesso, valor atual da conta é: ", this.saldo);
        }
    }

    depositarDinheiro(deposito: number): void {
        this.saldo += deposito;
        console.log("Depósito efetuado com sucesso, valor atual da conta é: ", this.saldo);
    }
}

const contaCorrente = new ContaBancaria(2000);

try {
    contaCorrente.depositarDinheiro(100);
    contaCorrente.sacarDinheiro(500);
    contaCorrente.sacarDinheiro(3000);
} catch (error) {
    if (error instanceof ErroNaConta){
        console.log(error.message);
    }else{
        console.log("Ocorreu um erro desconhecido.")
    }
}
