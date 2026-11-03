export interface EducationEntry {
  title: string;
  institution: string;
  period?: string;
}

export const education: readonly EducationEntry[] = [
  {
    title: 'curso.dev /web',
    institution: 'Filipe Deschamps',
    period: 'Em andamento',
  },
  {
    title: 'Pós-graduação em Desenvolvimento Web com Ênfase em Angular',
    institution: 'FETES',
    period: 'nov/2024 – dez/2025',
  },
  {
    title: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
    institution: 'UniGuairacá',
    period: 'fev/2022 – jun/2024',
  },
];

export const certificates: readonly EducationEntry[] = [
  { title: 'Angular Material', institution: 'Cod3r', period: 'mai/2024' },
  { title: 'TypeScript', institution: 'Udemy', period: 'abr/2024' },
  { title: 'Ionic Framework', institution: 'Udemy', period: 'fev/2024' },
  { title: 'Active Directory', institution: 'Udemy', period: 'abr/2023' },
  { title: 'Computação em Nuvem AWS', institution: 'Ka Solution', period: 'jan/2023' },
  {
    title: 'Infraestrutura de Redes: Cabeamento Estruturado e Redes Sem Fio',
    institution: 'Act Academy',
    period: 'jan/2023',
  },
];
