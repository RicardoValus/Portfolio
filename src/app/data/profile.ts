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
    'Me formei em Análise e Desenvolvimento de Sistemas na UniGuairacá. Desenvolvo interfaces web com Angular, TypeScript e Angular Material, aplicativos com Ionic e Capacitor, e APIs em PHP (Laminas / Apigility) com MySQL e MariaDB.',
    'Tenho experiência complementar em Python, C, Java e cibersegurança, além de servidores e redes. Estou fazendo o curso.dev /web, do Filipe Deschamps.',
  ],
  facts: [
    '2+ anos de experiência',
    'Pós-graduação em Angular (540h)',
    'No ChatSeguro desde 2024, hoje como Pleno',
  ],
};

export const hasProfilePhoto = true;
export const profilePhotoUrl = '/assets/profile.webp';
export const profilePhotoSize = 400;
