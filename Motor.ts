class Motor{
    funcionando: boolean = false;
    ligar():void{
        if(this.funcionando == true){
            console.log("Motor já está ligado!");
        }else{
            this.funcionando = true;
            console.log("Ligando Motor..");
        }
    }

    desligar():void{
        if (this.funcionando == true){
            this.funcionando = false;
            console.log("Desligando motor..")
        }else{
            console.log("Motor já está desligado!");
        }
    }

}

class Carro{
    motorCarro: Motor;

    constructor(){
        this.motorCarro = new Motor;
    }

    ligarMotorCarro():void{
        this.motorCarro.ligar();
    }

    desligarMotorCarro():void{
        this.motorCarro.desligar();
    }
}

const celta = new Carro();

// Funciona corretamente
celta.ligarMotorCarro();
celta.desligarMotorCarro();

// Teste de erro quando o carro já está desligado

celta.desligarMotorCarro();

// Teste de erro quando o carro já está ligado

celta.ligarMotorCarro();
celta.ligarMotorCarro();