import { tech, textChip, type StackItem } from './tech-icons';

export interface SkillGroup {
  id: string;
  label: string;
  items: readonly StackItem[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Front-end',
    items: [
      tech('Angular', 'siAngular'),
      tech('TypeScript', 'siTypescript'),
      tech('JavaScript', 'siJavascript'),
      tech('HTML5', 'siHtml5'),
      tech('CSS3', 'siCss'),
      tech('Angular Material', 'siMaterialdesign'),
      tech('Electron', 'siElectron'),
      tech('WebRTC', 'siWebrtc'),
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: [
      tech('Ionic', 'siIonic'),
      tech('Capacitor', 'siCapacitor'),
      textChip('Java (Android)'),
      tech('SQLite', 'siSqlite'),
    ],
  },
  {
    id: 'backend',
    label: 'Back-end',
    items: [
      tech('PHP (Laminas, Apigility)', 'siPhp'),
      textChip('REST APIs'),
      tech('MySQL', 'siMysql'),
      tech('MariaDB', 'siMariadb'),
      tech('Python', 'siPython'),
      tech('Firebase', 'siFirebase'),
    ],
  },
  {
    id: 'infra',
    label: 'Infra & Ferramentas',
    items: [
      tech('Debian', 'siDebian'),
      tech('Nginx', 'siNginx'),
      tech('Git', 'siGit'),
      tech('GitHub', 'siGithub'),
      textChip('Azure DevOps'),
      tech('Proxmox', 'siProxmox'),
      textChip('Zabbix'),
      tech('Fortinet', 'siFortinet'),
      tech('Unifi', 'siUbiquiti'),
      textChip('Active Directory'),
    ],
  },
];
