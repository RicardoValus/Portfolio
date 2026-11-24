export interface Profile {
  headline: string;
  location: string;
  valueProp: string;
  about: readonly string[];
  facts: readonly string[];
}

export const profile: Profile = {
  headline: 'Desenvolvedor Angular & Ionic · Web e Mobile',
  location: 'Guarapuava, Paraná, Brasil',
  valueProp:
    'Crio interfaces web e aplicativos móveis com Angular e Ionic, da tela à integração com APIs e recursos nativos.',
  about: [
    'Desenvolvo interfaces com Angular, TypeScript e Ionic/Capacitor, e APIs em PHP com MySQL e MariaDB. Sou bacharel em ADS pela UniGuairacá e, antes do front, trabalhei com infraestrutura (servidores, redes e Active Directory), o que me ajuda a enxergar o sistema do banco até a tela.',
  ],
  facts: ['Pós-graduação na FETES', 'Bacharel pela UniGuairacá'],
};

export const hasProfilePhoto = true;
export const profilePhotoUrl = '/assets/profile.webp';
export const profilePhotoSize = 400;
