class ConfiguracaoApp {
    private static configuracao: ConfiguracaoApp = new ConfiguracaoApp();
    private preferencias: Map<string, string> = new Map();

    public static getInstance(): ConfiguracaoApp {
        return ConfiguracaoApp.configuracao;
    }

    private constructor() {}

    setPreferencia(chave: string, valor: string): void {
        if (this.preferencias.has(chave)){
            console.log(`Chave '${chave}' já possui um valor.`);
        }else{
            this.preferencias.set(chave, valor);
        }
    }
    getPreferencia(chave: string): string | undefined {
        return this.preferencias.get(chave);
    }
}

let instancia1 = ConfiguracaoApp.getInstance();
instancia1.setPreferencia("Idioma", "Português");

let instancia2 = ConfiguracaoApp.getInstance();
instancia2.setPreferencia("Idioma", "Inglês");

let instancia3 = ConfiguracaoApp.getInstance();
instancia3.setPreferencia("Idioma", "Russo");
