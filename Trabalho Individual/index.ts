import { LivroFuncao } from './livro';
import { UsuarioFuncao } from './usuario';
import { Biblioteca } from './biblioteca';

// Definir novos livros para utilizar nos testes
const Livro1 = new LivroFuncao("The Lightning Thief", "Rick Riordan", 2005, "Aventura");
const Livro2 = new LivroFuncao("The Sea of Monsters", "Rick Riordan", 2006, "Aventura");
const Livro3 = new LivroFuncao("The Clean Coder: A Code of Conduct for Professional Programmers", "Robert C. Martin", 2011, "Educacional");
const Livro4 = new LivroFuncao("Clean Agile: Back to Basics","Rick Riordan", 2019, "Educacional");

// Adicionar livro sem autor
const livroSemAutor = new LivroFuncao('Livro Sem Autor', '', 2023, 'Desconhecido');

// Criar novos usuários para a biblioteca
const usuario1 = new UsuarioFuncao("Alan", "alansouzeesi@gmail.com");
const usuario2 = new UsuarioFuncao("Dannyel", "dannyel_kayke@hotmail.com");

// Criar a biblioteca
const biblioteca = new Biblioteca();

// Adicionar os devidos livros à biblioteca
biblioteca.adicionarLivro(Livro1);
biblioteca.adicionarLivro(Livro2);
biblioteca.adicionarLivro(Livro3);
biblioteca.adicionarLivro(Livro4);
biblioteca.adicionarLivro(livroSemAutor);

// Simular um empréstimo para alterar se o livro foi emprestado ou não
usuario1.emprestarLivro(Livro2);
usuario2.emprestarLivro(Livro4);
usuario1.emprestarLivro(Livro3);
usuario2.emprestarLivro(Livro1);

// Teste empréstimo livro não disponível
usuario1.emprestarLivro(Livro1);

// Fazer um relatório mostrando os livros emprestados
const livrosEmprestados = biblioteca.listarLivrosEmprestados();

// Relatório dos livros emprestados
console.log('\n📚 Livros emprestados na biblioteca:')
console.log('')
console.log(`| Título | Autor |`)
console.log('|---|---|')

livrosEmprestados.forEach(livro => {
    console.log(`| \x1b[34m${livro.titulo}\x1b[0m | \x1b[31m${livro.autor}\x1b[0m |`)
});

// Relatório dos livros emprestados por usuário
console.log(`\n👤 Livros emprestados pelo usuário ${usuario1.nome}:`)

usuario1.livrosEmprestados.forEach(livro => {
    console.log(`| \x1b[34m${livro.titulo}\x1b[0m |`)
});

console.log('\n👤 Livros emprestados pelo usuário ${usuario2.nome}:')

usuario2.livrosEmprestados.forEach(livro => {
    console.log(`| \x1b[34m${livro.titulo}\x1b[0m |`)
});

// Simular a devolução
usuario2.devolverLivro(Livro4);
usuario1.devolverLivro(Livro3);

// Atualizar a lista de livros emprestados na biblioteca
biblioteca.listarLivrosEmprestados();

// Relatório dos livros emprestados por usuário
console.log(`\n-->  Livros emprestados pelo usuário ${usuario1.nome}:`)

usuario1.livrosEmprestados.forEach(livro => {
    console.log(`| \x1b[34m${livro.titulo}\x1b[0m |`)
});

console.log(`\n-->  Livros emprestados pelo usuário ${usuario2.nome}:`)

usuario2.livrosEmprestados.forEach(livro => {
    console.log(`| \x1b[34m${livro.titulo}\x1b[0m |`)
});

// Fazer um relatório mostrando os livros emprestados
const livrosEmprestadosAtualizados = biblioteca.listarLivrosEmprestados();

// Relatório dos livros emprestados
console.log('\n📚 Livros emprestados na biblioteca:')
console.log('')
console.log(`| Título | Autor |`)
console.log('|---|---|')

livrosEmprestadosAtualizados.forEach(livro => {
    console.log(`| \x1b[34m${livro.titulo}\x1b[0m | \x1b[31m${livro.autor}\x1b[0m |`)
});

