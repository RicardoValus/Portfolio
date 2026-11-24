export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  about: string;
  howItHelps: string;
}

export const libraryIntro =
  'Livros que li e que ainda uso no dia a dia: do raciocínio básico ao TypeScript tipado que roda no ChatSeguro, no Resenha e no Correria.';

export const libraryShelfImage = '/assets/books/biblioteca.webp';
export const libraryShelfWidth = 1024;
export const libraryShelfHeight = 682;

export const libraryBooks: readonly LibraryBook[] = [
  {
    id: 'algoritmos-manzano',
    title: 'Algoritmos',
    author: 'José Augusto N. G. Manzano e Jayr Figueiredo de Oliveira',
    about:
      'Base de lógica de programação: variáveis, estruturas de controle, modularização e o hábito de pensar o problema antes do código.',
    howItHelps:
      'É o alicerce quando monto fluxos no ChatSeguro, no financeiro do Correria ou em qualquer regra de negócio: primeiro o algoritmo claro, depois a implementação em TypeScript.',
  },
  {
    id: 'codigo-limpo',
    title: 'Código Limpo',
    author: 'Robert C. Martin',
    about:
      'Nomes honestos, funções pequenas, responsabilidade única e o cuidado com o código que outras pessoas (e o eu do futuro) vão manter.',
    howItHelps:
      'Orienta refactors no portfolio e nos apps Ionic/Angular: serviços em vez de lógica na tela, componentes focados e APIs legíveis. O mesmo critério que uso no Resenha e no Meet Seguro.',
  },
  {
    id: 'entendendo-algoritmos',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    about:
      'Guia ilustrado de estruturas e algoritmos clássicos: busca, ordenação, grafos e a noção de Big O sem enrolação.',
    howItHelps:
      'Ajuda a escolher estruturas e a medir custo quando filtro listas grandes, sincronizo dados offline (Dexie/SQLite) ou monto projeções financeiras: menos chute, mais decisão consciente.',
  },
  {
    id: 'aprendendo-typescript',
    title: 'Aprendendo TypeScript',
    author: 'Josh Goldberg',
    about:
      'TypeScript moderno: tipagem estrita, genéricos, narrowing e como o compilador vira aliado no dia a dia web.',
    howItHelps:
      'É o idioma do meu trabalho: Angular 19, Ionic, Capacitor e Electron. Tipagem forte reduz regressão em auth, IPC e contratos de API. Exatamente o que o stack do Correria e do ChatSeguro exige.',
  },
];
