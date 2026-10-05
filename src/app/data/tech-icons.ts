import {
  siAndroid,
  siAngular,
  siCapacitor,
  siCss,
  siDebian,
  siElectron,
  siFirebase,
  siFortinet,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siIonic,
  siJavascript,
  siMariadb,
  siMaterialdesign,
  siMysql,
  siNginx,
  siPhp,
  siProxmox,
  siPython,
  siSqlite,
  siTypescript,
  siUbiquiti,
  siWebrtc,
  type SimpleIcon,
} from 'simple-icons';

export const TECH_ICONS = {
  siAndroid,
  siAngular,
  siCapacitor,
  siCss,
  siDebian,
  siElectron,
  siFirebase,
  siFortinet,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siIonic,
  siJavascript,
  siMariadb,
  siMaterialdesign,
  siMysql,
  siNginx,
  siPhp,
  siProxmox,
  siPython,
  siSqlite,
  siTypescript,
  siUbiquiti,
  siWebrtc,
} as const satisfies Record<string, SimpleIcon>;

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
