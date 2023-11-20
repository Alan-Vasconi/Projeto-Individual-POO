import { Livro } from './livro';
import { Pessoa } from './pessoa';

export interface Autor {
  nome: string;
  dataNascimento: string;
  nacionalidadeAutor: string;
  seusLivros: Livro[];
}

export class AutorFuncao extends Pessoa implements Autor {
  private _seusLivros: Livro[] = []; // Lista de livros do Autor privado
  nacionalidadeAutor: string; 
  dataNascimento: string;

  constructor(
    nome: string,
    dataNascimento: string,
    nacionalidadeAutor: string
  ) {
    super(nome, '', []); 
    this.dataNascimento = dataNascimento;
    this.nacionalidadeAutor = nacionalidadeAutor; 
  }

  get seusLivros(): Livro[] {
    return this._seusLivros;
  }

  adicionarLivro(livro: Livro): void {
    this._seusLivros.push(livro);
  }

  removerLivro(livro: Livro): void {
    this._seusLivros = this._seusLivros.filter((livroAssoc) => livroAssoc !== livro);
  }
}
