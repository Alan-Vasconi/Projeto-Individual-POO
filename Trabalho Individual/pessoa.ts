import { Livro } from './livro';

export class Pessoa {
    constructor(public nome: string, public email: string, public livrosEmprestados: Livro[] = []) {}
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getLivrosEmprestados(): Livro[] {
        return this.livrosEmprestados;
    }

    setLivrosEmprestados(livros: Livro[]): void {
        this.livrosEmprestados = livros;
    }
}
