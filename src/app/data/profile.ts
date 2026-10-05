export interface Profile {
  headline: string;
  valueProp: string;
  about: readonly [string, string];
  facts: readonly [string, string, string];
}

export const profile: Profile = {
  headline: 'Desenvolvedor Angular & Ionic · Web e Mobile',
  valueProp:
    'Crio interfaces web e aplicativos móveis com Angular e Ionic, da tela à integração com APIs e recursos nativos.',
  about: [
    'Sou desenvolvedor web e mobile. Trabalho com Angular, TypeScript e Angular Material para criar interfaces responsivas, e com Ionic e Capacitor para levar esses projetos ao celular.',
    'Antes de focar em desenvolvimento, atuei com suporte técnico, servidores e redes. Essa base ajuda na hora de integrar APIs, publicar aplicações e entender o ambiente onde elas rodam.',
  ],
  facts: [
    '2+ anos de experiência',
    'Pós-graduação em Angular (540h)',
    'Desenvolvedor de software na ChatSeguro desde 2024',
  ],
};

export const hasProfilePhoto = false;
export const profilePhotoUrl = '/assets/profile.webp';
export const profilePhotoSize = 160;
