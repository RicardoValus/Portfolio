export interface EducationEntry {
  title: string;
  institution: string;
  year: number;
}

export const education: readonly EducationEntry[] = [
  {
    title: 'Pós-graduação em Desenvolvimento Web com Ênfase em Angular',
    institution: 'FETES',
    year: 2025,
  },
  {
    title: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
    institution: 'UniGuairacá',
    year: 2024,
  },
  {
    title: 'Introdução à HTML',
    institution: 'Udemy',
    year: 2024,
  },
];
