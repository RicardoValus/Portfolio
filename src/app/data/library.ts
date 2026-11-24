export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  howItHelps: string;
}

export const libraryIntro = 'Livros que uso no dia a dia no ChatSeguro, no Resenha e no Correria.';

export const libraryShelfImage = '/assets/books/biblioteca.webp';
export const libraryShelfWidth = 1024;
export const libraryShelfHeight = 682;

export const libraryBooks: readonly LibraryBook[] = [
  {
    id: 'algoritmos-manzano',
    title: 'Algoritmos',
    author: 'José Augusto N. G. Manzano e Jayr Figueiredo de Oliveira',
    howItHelps: 'Uso para montar regras de negócio claras antes de codar em TypeScript.',
  },
  {
    id: 'codigo-limpo',
    title: 'Código Limpo',
    author: 'Robert C. Martin',
    howItHelps: 'Orienta refactors: serviços na lógica, componentes focados e APIs legíveis.',
  },
  {
    id: 'entendendo-algoritmos',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    howItHelps: 'Ajuda a escolher estruturas e custo ao filtrar listas e sincronizar offline.',
  },
  {
    id: 'aprendendo-typescript',
    title: 'Aprendendo TypeScript',
    author: 'Josh Goldberg',
    howItHelps: 'Base da tipagem que uso em Angular, Ionic, Capacitor e Electron.',
  },
];
