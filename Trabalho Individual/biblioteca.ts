import { Livro } from './livro';
import { Usuario } from './usuario';
import { Autor } from './autor';


export class Biblioteca { // Exporta a biblioteca
  private _regLivros: Livro[] = []; // Responsável pelos livros registrados privado
  private _usuariosBiblioteca: Usuario[] = []; // Responsável pela lista de usuarios da bibliotecas privado
  private _autoresBiblioteca: Autor[] = []; // Responsável pela lista de autores da Biblioteca privado

  adicionarLivro(livro: Livro): void {
    if (livro.autor) {
      this._regLivros.push(livro);
      console.log(`\x1b[32m✓\x1b[0m Livro "${livro.titulo}" adicionado com sucesso!`);
    } else {
      console.log(`\x1b[31m✗\x1b[0m Não foi possível adicionar o livro "${livro.titulo}" sem um autor.`);
    }
  }

  removerLivro(livro: Livro): void { // Função para remover livro
    this._regLivros = this._regLivros.filter((livroItem) => livroItem !== livro);
    // Utilizando filter ele remove o livro, pois se for igual ao livro escolhido ele não vai aparecer na array final
  }
  
  adicionarAutor(autor: Autor): void { // Função para adicionar autor
    this._autoresBiblioteca.push(autor); // Adiciona a lista de autoresBiblioteca
  }

  removerAutor(autor: Autor): void { // Função para remover autor
    this._autoresBiblioteca = this._autoresBiblioteca.filter((autorItem) => autorItem !== autor);
    // Da mesma forma dos anteriores, remove um autor da biblioteca
  }
  
  adicionarUsuario(usuario: Usuario): void { // Função para adicionar Usuário
    this._usuariosBiblioteca.push(usuario); // Adiciona a lista de usuariosBiblioteca 
  }

  removerUsuario(usuario: Usuario): void { // Função para remover Usuário
    this._usuariosBiblioteca = this._usuariosBiblioteca.filter((usuarioItem) => usuarioItem !== usuario);
    // Remove usuário utilizando o filtro, funciona da mesma forma da remoção de livros
  }


  buscarLivrosPorAutor(autor: Autor): Livro[] { // Função para buscar livro por autor
    return this._regLivros.filter((livro) => livro.autor === autor.nome);
    // Retorna um array que resulta do filtro, se o livro tiver o nome do autor ele é retornado no array
  }

  listarLivrosEmprestados(): Livro[] {
    return this._regLivros.filter((livro) => livro.emprestado);
    // Se o livro estiver como true, ou seja emprestado, ele é retornado no novo array
  }
}
