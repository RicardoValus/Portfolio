import { tech, textChip, type StackItem } from './tech-icons';

export type ProjectBadgeKind = 'live' | 'in-development' | 'completed' | 'open-source' | 'private';

export const projectCategories = ['Web', 'Mobile', 'Full stack', 'Infra'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const projectFilters = ['Todos', ...projectCategories] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type ProjectLifecycle = Extract<ProjectBadgeKind, 'live' | 'in-development' | 'completed'>;
export type ProjectAccess = Extract<ProjectBadgeKind, 'open-source' | 'private'>;

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  stack: readonly StackItem[];
  repoUrl: string | null;
  links?: readonly ProjectLink[];
  lifecycle?: ProjectLifecycle;
  access?: ProjectAccess;
  featured: boolean;
  visible: boolean;
  screenshot: string;
}

export const shotWidth = 800;
export const shotHeight = 500;

export const availableScreenshots: ReadonlySet<string> = new Set<string>([
  'rockers',
  'capacitor-phone-call-notification-android',
  'todo-app',
  'resenha',
  'angular-webrtc',
  'maintenence_pro',
  'tasks-project',
  'BeatFlow',
  'Synk',
  'garimpo',
  'grana',
  'rango',
  'meet-seguro',
]);

function screenshot(id: string): string {
  return `/assets/projects/${id}.webp`;
}

export const projects: readonly Project[] = [
  {
    id: 'rockers',
    name: 'Rockers',
    description:
      'App de agendamento para barbearias: cadastro, login, agenda do cliente e painel de barbeiros e horários. Base do meu TCC. Login, recuperação de senha, perfil com foto e painel administrativo de barbeiros e horários.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Angular', 'siAngular'),
      tech('Angular Material', 'siMaterialdesign'),
      tech('Capacitor', 'siCapacitor'),
      tech('Firebase', 'siFirebase'),
    ],
    repoUrl: 'https://github.com/RicardoValus/Rockers',
    links: [
      { label: 'Ver código', href: 'https://github.com/RicardoValus/Rockers' },
      { label: 'Baixar APK', href: 'https://github.com/RicardoValus/Rockers' },
    ],
    lifecycle: 'completed',
    access: 'open-source',
    featured: true,
    visible: true,
    screenshot: screenshot('rockers'),
  },
  {
    id: 'capacitor-phone-call-notification-android',
    name: 'Phone Call Notification',
    // TODO: Ricardo vai decidir se acrescenta "baseado em @anuradev/capacitor-phone-call-notification".
    description:
      'Plugin Capacitor em Java para chamada recebida e em andamento no Android, mesmo com o app em segundo plano. Ações de atender, recusar, encerrar e colocar em espera, com checagem de permissão de notificações.',
    category: 'Mobile',
    stack: [tech('Capacitor', 'siCapacitor'), tech('Java', 'siOpenjdk')],
    repoUrl: 'https://github.com/RicardoValus/capacitor-phone-call-notification-android-ios',
    links: [
      {
        label: 'Ver código',
        href: 'https://github.com/RicardoValus/capacitor-phone-call-notification-android-ios',
      },
    ],
    lifecycle: 'completed',
    access: 'open-source',
    featured: true,
    visible: true,
    screenshot: screenshot('capacitor-phone-call-notification-android'),
  },
  {
    id: 'meet-seguro',
    name: 'Meet Seguro',
    description:
      'Videochamada em grupo no estilo Jitsi, feita para a Dallo Sistemas. Cada conta tem uma sala fixa; o anfitrião abre ligações nomeadas e gera convites de uso único para quem não tem conta. O LiveKit leva áudio e vídeo. A API em PHP cuida de contas, salas, ligações e convites.',
    category: 'Full stack',
    stack: [
      tech('Angular', 'siAngular'),
      tech('PHP', 'siPhp'),
      tech('LiveKit', 'siLivekit'),
      tech('MariaDB', 'siMariadb'),
      tech('Docker', 'siDocker'),
    ],
    repoUrl: null,
    links: [{ label: 'Ver site', href: 'https://meetseguro.com.br/login' }],
    lifecycle: 'live',
    access: 'private',
    featured: false,
    visible: true,
    screenshot: screenshot('meet-seguro'),
  },
  {
    id: 'resenha',
    name: 'Resenha',
    description:
      'Chat e chamadas em grupo estilo Discord, com acesso por convite. Áudio, vídeo e tela vão em P2P (WebRTC); o Firebase faz presença e sinalização. Compartilhamento de tela de jogo em 1080p60 (H.264), auto-update e instaladores para Windows e Linux.',
    category: 'Full stack',
    stack: [
      tech('Angular', 'siAngular'),
      tech('Electron', 'siElectron'),
      tech('Angular Material', 'siMaterialdesign'),
      tech('Firebase', 'siFirebase'),
      tech('WebRTC', 'siWebrtc'),
    ],
    repoUrl: null,
    links: [
      { label: 'Abrir app', href: 'https://resenha-c9174.web.app' },
      {
        label: 'Baixar instaladores',
        href: 'https://github.com/RicardoValus/Resenha-Releases/releases',
      },
    ],
    lifecycle: 'live',
    access: 'private',
    featured: true,
    visible: true,
    screenshot: screenshot('resenha'),
  },
  {
    id: 'angular-webrtc',
    name: 'Angular WebRTC',
    description: 'Videochamada com WebRTC em desenvolvimento, testada localmente por enquanto.',
    category: 'Web',
    stack: [tech('Angular', 'siAngular'), tech('WebRTC', 'siWebrtc')],
    repoUrl: 'https://github.com/RicardoValus/angular-webrtc',
    featured: false,
    // Hidden: the README is still the Angular CLI template and the app only runs locally.
    visible: false,
    screenshot: screenshot('angular-webrtc'),
  },
  {
    id: 'todo-app',
    name: 'Todo App',
    description:
      'Lista de tarefas em monorepo: Angular 22, API em Mezzio (PHP 8.4), MariaDB, Nginx e phpMyAdmin no Debian 13.',
    category: 'Full stack',
    stack: [
      tech('Angular', 'siAngular'),
      tech('PHP (Mezzio)', 'siPhp'),
      tech('MariaDB', 'siMariadb'),
      tech('Nginx', 'siNginx'),
      tech('Debian', 'siDebian'),
    ],
    repoUrl: 'https://github.com/RicardoValus/todo-app',
    links: [{ label: 'Ver código', href: 'https://github.com/RicardoValus/todo-app' }],
    lifecycle: 'completed',
    access: 'open-source',
    featured: true,
    visible: true,
    screenshot: screenshot('todo-app'),
  },
  {
    id: 'maintenence_pro',
    name: 'Manutenção Pro',
    description:
      'Interface gráfica para a manutenção diária do Debian 13 (GNOME) e Pop!_OS 24.04 (COSMIC): pacotes, DKMS, NVIDIA, microcode, firmware UEFI e relatório de reinício. Empacotado em .deb, com autorização via polkit e modo demonstração.',
    category: 'Infra',
    stack: [
      tech('Python', 'siPython'),
      tech('Shell', 'siGnubash'),
      textChip('Meson'),
      tech('Debian', 'siDebian'),
    ],
    repoUrl: 'https://github.com/RicardoValus/maintenence_pro',
    links: [{ label: 'Ver código', href: 'https://github.com/RicardoValus/maintenence_pro' }],
    lifecycle: 'in-development',
    access: 'open-source',
    featured: false,
    visible: true,
    screenshot: screenshot('maintenence_pro'),
  },
  {
    id: 'tasks-project',
    name: 'Tasks Project',
    description:
      'Prática de arquitetura: usuários e tarefas, API REST com token, do Nginx ao Angular, no Debian 12.',
    category: 'Full stack',
    stack: [
      tech('Debian', 'siDebian'),
      tech('Nginx', 'siNginx'),
      tech('PHP (Laminas/Apigility)', 'siPhp'),
      tech('MariaDB', 'siMariadb'),
      tech('Angular', 'siAngular'),
    ],
    repoUrl: 'https://github.com/RicardoValus/tasks-project',
    featured: false,
    visible: true,
    screenshot: screenshot('tasks-project'),
  },
  {
    id: 'BeatFlow',
    name: 'BeatFlow',
    description: 'App de música em Angular e Ionic com API local via JSON Server.',
    category: 'Mobile',
    stack: [tech('Angular', 'siAngular'), tech('Ionic', 'siIonic'), textChip('JSON Server')],
    repoUrl: 'https://github.com/RicardoValus/BeatFlow',
    featured: false,
    // Hidden: the repository has no README, only a one-line About.
    visible: false,
    screenshot: screenshot('BeatFlow'),
  },
  {
    id: 'Synk',
    name: 'Synk',
    description:
      'CRM para gerenciar relacionamento com clientes, pipeline de vendas e colaboração de equipe.',
    category: 'Web',
    stack: [textChip('TODO')],
    repoUrl: 'https://github.com/RicardoValus/Synk',
    featured: false,
    // Hidden: the README is empty and the About does not list features or stack.
    visible: false,
    screenshot: screenshot('Synk'),
  },
  {
    id: 'garimpo',
    name: 'Garimpo',
    description:
      'Rastreador Android de preços de peças de PC: busca multi-loja no aparelho, histórico com tendência e score da oferta, alertas de queda, comparação de GPUs, builds com checagem de compatibilidade, calendário de promoções e backup local. Usa IA para sugerir upgrades.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Capacitor', 'siCapacitor'),
      tech('SQLite', 'siSqlite'),
      tech('Android', 'siAndroid'),
    ],
    repoUrl: null,
    lifecycle: 'in-development',
    access: 'private',
    featured: false,
    visible: true,
    screenshot: screenshot('garimpo'),
  },
  {
    id: 'grana',
    name: 'Grana',
    description:
      'Controle financeiro offline: ganhos, despesas e valores a receber, com exportação em PDF e CSV no mobile e testes unitários.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Angular', 'siAngular'),
      tech('Capacitor', 'siCapacitor'),
      tech('SQLite', 'siSqlite'),
      tech('Material', 'siMaterialdesign'),
    ],
    repoUrl: null,
    lifecycle: 'completed',
    access: 'private',
    featured: false,
    visible: true,
    screenshot: screenshot('grana'),
  },
  {
    id: 'rango',
    name: 'Rango',
    description:
      'Sistema de gestão em produção em um restaurante familiar: pedidos, caixa, relatórios e entregadores, com QR Code, cadastro de entregadores com rota no Maps e instalação como PWA.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Angular', 'siAngular'),
      tech('Firebase', 'siFirebase'),
      textChip('Firestore'),
      tech('PWA', 'siPwa'),
      tech('Capacitor', 'siCapacitor'),
    ],
    repoUrl: null,
    links: [{ label: 'Ver site', href: 'https://rangopos.com.br' }],
    lifecycle: 'live',
    access: 'private',
    featured: false,
    visible: true,
    screenshot: screenshot('rango'),
  },
];

export function isProjectFilter(value: unknown): value is ProjectFilter {
  return typeof value === 'string' && projectFilters.some((filter) => filter === value);
}

export function readProjectFilter(value: unknown): ProjectFilter {
  return isProjectFilter(value) ? value : 'Todos';
}

export function projectsForFilter(
  source: readonly Project[],
  filter: ProjectFilter,
): readonly Project[] {
  return source.filter(
    (project) => project.visible && (filter === 'Todos' || project.category === filter),
  );
}

export function featuredProjects(
  source: readonly Project[],
  filter: ProjectFilter,
): readonly Project[] {
  return projectsForFilter(source, filter).filter((project) => project.featured);
}

export function gridProjects(
  source: readonly Project[],
  filter: ProjectFilter,
): readonly Project[] {
  return projectsForFilter(source, filter).filter((project) => !project.featured);
}

export function visibleProjectCount(source: readonly Project[]): number {
  return projectsForFilter(source, 'Todos').length;
}

export function projectLinks(project: Project): readonly ProjectLink[] {
  const links = project.links?.filter((link) => link.href.length > 0) ?? [];
  if (links.length > 0) {
    return links;
  }

  if (project.repoUrl) {
    return [{ label: 'Ver código', href: project.repoUrl }];
  }

  return [];
}

export function projectBadges(project: Project): readonly ProjectBadgeKind[] {
  const badges: ProjectBadgeKind[] = [];
  if (project.lifecycle) {
    badges.push(project.lifecycle);
  }
  if (project.access) {
    badges.push(project.access);
  }

  return badges;
}
