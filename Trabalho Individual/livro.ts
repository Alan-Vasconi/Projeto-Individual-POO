import { Usuario } from './usuario';

export interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;
    emprestado: boolean;

    emprestarLivro(usuario: Usuario): void;
    devolverLivro(usuario: Usuario): void;
}

export class LivroFuncao implements Livro {
    constructor(
        public titulo: string,
        public autor: string,
        public anoPublicacao: number,
        public genero: string,
        public emprestado: boolean = false
    ) {}

    emprestarLivro(usuario: Usuario): void {
        if (this.emprestado) {
            console.log('Este livro já foi emprestado!!!');
        } else {
            this.emprestado = true;
            usuario.livrosEmprestados.push(this);
        }
    }

    devolverLivro(usuario: Usuario): void {
        if (this.emprestado) {
            this.emprestado = false;
            usuario.livrosEmprestados = usuario.livrosEmprestados.filter((livroEmprestado) => livroEmprestado !== this);
        } else {
            console.log('Este livro já foi devolvido!!!');
        }
    }
}
