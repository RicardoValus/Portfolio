export interface SiteConfig {
  name: string;
  contactEmail: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  siteUrl: string;
}

export const siteConfig: SiteConfig = {
  name: 'Ricardo Medlo Valus',
  contactEmail: 'ricardovalus.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ricardo-medlo-valus-a35429215',
  github: 'https://github.com/RicardoValus',
  cvUrl: '/assets/curriculo-ricardo-medlo-valus.pdf',
  siteUrl: 'https://TODO-SEU-DOMINIO.vercel.app',
};

export const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'stack', label: 'Stack' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
] as const;

export type NavItem = (typeof navItems)[number];
