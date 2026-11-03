export interface Profile {
  headline: string;
  location: string;
  valueProp: string;
  about: readonly [string, string];
  facts: readonly [string, string, string];
}

export const profile: Profile = {
  headline: 'Desenvolvedor Angular & Ionic · Web e Mobile',
  location: 'Guarapuava, Paraná, Brasil',
  valueProp:
    'Crio interfaces web e aplicativos móveis com Angular e Ionic, da tela à integração com APIs e recursos nativos.',
  about: [
    'Desenvolvo interfaces web com Angular, TypeScript e Angular Material, aplicativos com Ionic e Capacitor, e APIs em PHP (Laminas / Apigility) com MySQL e MariaDB. Me formei em Análise e Desenvolvimento de Sistemas na UniGuairacá.',
    'Tenho conhecimento em Python, C, Java e cibersegurança, além de servidores e redes. No curso.dev /web, do Filipe Deschamps, aprofundo o que uso no dia a dia. Antes do front passei pela infraestrutura (servidores, redes, Active Directory), o que me ajuda a enxergar o sistema do banco até a tela.',
  ],
  facts: [
    'Pleno no ChatSeguro',
    'Pós-graduação na FETES',
    'Bacharel pela UniGuairacá',
  ],
};

export const hasProfilePhoto = true;
export const profilePhotoUrl = '/assets/profile.webp';
export const profilePhotoSize = 400;
