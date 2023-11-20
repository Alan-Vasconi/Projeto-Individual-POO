import { Livro } from './livro';
import { Pessoa } from './pessoa';

export interface Usuario {
    nome: string;
    email: string;
    livrosEmprestados: Livro[];

    getNome(): string;
    setNome(nome: string): void;

    getEmail(): string;
    setEmail(email: string): void;

    getLivrosEmprestados(): Livro[];
    setLivrosEmprestados(livros: Livro[]): void;
}

export class UsuarioFuncao extends Pessoa implements Usuario {
    livrosEmprestados: Livro[];

    constructor(nome: string, email: string, livrosEmprestados: Livro[] = []) {
        super(nome, email, livrosEmprestados); 
        this.livrosEmprestados = livrosEmprestados;
    }

    getLivrosEmprestados(): Livro[] {
        return this.livrosEmprestados;
    }

    setLivrosEmprestados(livros: Livro[]): void {
        this.livrosEmprestados = livros;
    }

    emprestarLivro(livro: Livro): void {
        if (!livro.emprestado) {
            livro.emprestado = true;
            this.livrosEmprestados.push(livro); // Adiciona o livro emprestado ao usuário
            console.log(`\x1b[32m** Livro "${livro.titulo}" emprestado com sucesso para o usuário ${this.nome} **\x1b[0m`);
        } else {
            console.log('\x1b[31mLivro já emprestado.\x1b[0m');
        }
    }

    devolverLivro(livro: Livro): void {
        if (livro.emprestado) {
            livro.emprestado = false;
            this.livrosEmprestados = this.livrosEmprestados.filter((livroEmprestado) => livroEmprestado !== livro); 
            console.log(`\x1b[32mLivro "${livro.titulo}" devolvido com sucesso pelo usuário ${this.nome}\x1b[0m`);
        } else {
            console.log('\x1b[31mLivro já devolvido.\x1b[0m');
        }
    }
}
