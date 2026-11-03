import {
  siAndroid,
  siAngular,
  siCapacitor,
  siCss,
  siDebian,
  siDocker,
  siElectron,
  siFirebase,
  siFortinet,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siIonic,
  siJavascript,
  siLivekit,
  siMariadb,
  siMaterialdesign,
  siMysql,
  siNginx,
  siOpenjdk,
  siPhp,
  siProxmox,
  siPwa,
  siPython,
  siSqlite,
  siTypescript,
  siUbiquiti,
  siWebrtc,
  type SimpleIcon,
} from 'simple-icons';

interface PortfolioIcon {
  title: string;
  path: string;
}

const azureDevOps: PortfolioIcon = {
  title: 'Azure DevOps',
  path: 'M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z',
};

const zabbix: PortfolioIcon = {
  title: 'Zabbix',
  path: 'M3 4h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7.2L9.6 20.4A1 1 0 0 1 8 19.6V16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2.2 3.2v1.7h2.35V13h1.85V8.9H12V7.2zm8.05 0 1.55 5.8h.1l1.55-5.8h2.05L16.75 13h-2.15L12.9 7.2z',
};

const activeDirectory: PortfolioIcon = {
  title: 'Active Directory',
  path: 'M12 2 3.5 6.5v3.2L12 14.2l8.5-4.5V6.5zm0 14.1-8.5-4.5v3.1L12 19.2l8.5-4.5v-3.1zm0-9.8 5.2 2.75L12 11.9 6.8 9.05z',
};

export const TECH_ICONS = {
  siAndroid,
  siAngular,
  siCapacitor,
  siCss,
  siDebian,
  siDocker,
  siElectron,
  siFirebase,
  siFortinet,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siIonic,
  siJavascript,
  siLivekit,
  siMariadb,
  siMaterialdesign,
  siMysql,
  siNginx,
  siOpenjdk,
  siPhp,
  siProxmox,
  siPwa,
  siPython,
  siSqlite,
  siTypescript,
  siUbiquiti,
  siWebrtc,
  azureDevOps,
  zabbix,
  activeDirectory,
} as const satisfies Record<string, SimpleIcon | PortfolioIcon>;

export type TechIconKey = keyof typeof TECH_ICONS;

export interface StackItem {
  label: string;
  icon?: TechIconKey;
}

export function tech(label: string, icon: TechIconKey): StackItem {
  return { label, icon };
}

export function textChip(label: string): StackItem {
  return { label };
}
