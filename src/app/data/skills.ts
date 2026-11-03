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
      tech('PWA', 'siPwa'),
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: [
      tech('Ionic', 'siIonic'),
      tech('Capacitor', 'siCapacitor'),
      tech('Java (Android)', 'siOpenjdk'),
      tech('Android', 'siAndroid'),
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
      tech('LiveKit', 'siLivekit'),
    ],
  },
  {
    id: 'infra',
    label: 'Infra & Ferramentas',
    items: [
      tech('Debian', 'siDebian'),
      tech('Nginx', 'siNginx'),
      tech('Docker', 'siDocker'),
      tech('Shell', 'siGnubash'),
      tech('Git', 'siGit'),
      tech('GitHub', 'siGithub'),
      tech('Azure DevOps', 'azureDevOps'),
      tech('Proxmox', 'siProxmox'),
      tech('Zabbix', 'zabbix'),
      tech('Fortinet', 'siFortinet'),
      tech('UniFi', 'siUbiquiti'),
      tech('Active Directory', 'activeDirectory'),
    ],
  },
];
