import { tech, textChip, type StackItem } from './tech-icons';

export const projectCategories = ['Web', 'Mobile', 'Full stack', 'Infra'] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const projectFilters = ['Todos', ...projectCategories] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type ProjectStatus = 'público' | 'privado' | 'em desenvolvimento';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  stack: readonly StackItem[];
  repoUrl: string | null;
  liveUrl?: string;
  status: ProjectStatus;
  isPrivate: boolean;
  privateReason?: string;
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
  'order-delivery',
  'angular-webrtc',
  'maintenence_pro',
  'tasks-project',
  'BeatFlow',
  'Synk',
  'garimpo',
  'grana',
  'rango',
]);

function screenshot(id: string): string {
  return `/assets/projects/${id}.webp`;
}

export const projects: readonly Project[] = [
  {
    id: 'rockers',
    name: 'Rockers',
    description:
      'App de agendamento para barbearias: cadastro, login, agenda do cliente e painel de barbeiros e horários. Base do meu TCC.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Angular', 'siAngular'),
      tech('Angular Material', 'siMaterialdesign'),
      tech('Capacitor', 'siCapacitor'),
      tech('Firebase', 'siFirebase'),
    ],
    repoUrl: 'https://github.com/RicardoValus/Rockers',
    status: 'público',
    isPrivate: false,
    featured: true,
    visible: true,
    screenshot: screenshot('rockers'),
  },
  {
    id: 'capacitor-phone-call-notification-android',
    name: 'Phone Call Notification',
    description:
      'Plugin Capacitor, em Java, para chamada recebida e em andamento no Android, mesmo com o app em segundo plano, com ações de atender, recusar e colocar em espera.',
    category: 'Mobile',
    stack: [tech('Capacitor', 'siCapacitor'), textChip('Java')],
    repoUrl: 'https://github.com/RicardoValus/capacitor-phone-call-notification-android',
    status: 'público',
    isPrivate: false,
    featured: true,
    visible: true,
    screenshot: screenshot('capacitor-phone-call-notification-android'),
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
    status: 'público',
    isPrivate: false,
    featured: true,
    visible: true,
    screenshot: screenshot('todo-app'),
  },
  {
    id: 'resenha',
    name: 'Resenha',
    description:
      'Chat e chamadas em grupo, com acesso por convite. Áudio, vídeo e tela vão em P2P; o Firebase faz a presença e a sinalização.',
    category: 'Full stack',
    stack: [
      tech('Angular', 'siAngular'),
      tech('Electron', 'siElectron'),
      tech('Angular Material', 'siMaterialdesign'),
      tech('Firebase', 'siFirebase'),
      tech('WebRTC', 'siWebrtc'),
    ],
    repoUrl: null,
    liveUrl: 'https://github.com/RicardoValus/Resenha-Releases',
    status: 'privado',
    isPrivate: true,
    privateReason: 'os instaladores públicos ficam no repositório de releases',
    featured: true,
    visible: true,
    screenshot: screenshot('resenha'),
  },
  {
    id: 'order-delivery',
    name: 'Order Delivery',
    description:
      'App para gerenciar pedidos: incluir, filtrar e concluir com foto. Os dados ficam no SQLite.',
    category: 'Mobile',
    stack: [tech('Ionic', 'siIonic'), tech('Capacitor', 'siCapacitor'), tech('SQLite', 'siSqlite')],
    repoUrl: 'https://github.com/RicardoValus/order-delivery',
    status: 'público',
    isPrivate: false,
    featured: false,
    visible: true,
    screenshot: screenshot('order-delivery'),
  },
  {
    id: 'angular-webrtc',
    name: 'Angular WebRTC',
    description: 'Videochamada com WebRTC em desenvolvimento, testada localmente por enquanto.',
    category: 'Web',
    stack: [tech('Angular', 'siAngular'), tech('WebRTC', 'siWebrtc')],
    repoUrl: 'https://github.com/RicardoValus/angular-webrtc',
    status: 'em desenvolvimento',
    isPrivate: false,
    featured: false,
    // Hidden: the README is still the Angular CLI template and the app only runs locally.
    visible: false,
    screenshot: screenshot('angular-webrtc'),
  },
  {
    id: 'maintenence_pro',
    name: 'maintenence_pro',
    description:
      'Interface gráfica da manutenção diária do Debian 13: pacotes, DKMS, NVIDIA, microcode, firmware UEFI e relatório de reinício.',
    category: 'Infra',
    stack: [tech('Python', 'siPython'), tech('Bash', 'siGnubash'), tech('Debian', 'siDebian')],
    repoUrl: 'https://github.com/RicardoValus/maintenence_pro',
    status: 'público',
    isPrivate: false,
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
    status: 'público',
    isPrivate: false,
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
    status: 'público',
    isPrivate: false,
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
    status: 'público',
    isPrivate: false,
    featured: false,
    // Hidden: the README is empty and the About does not list features or stack.
    visible: false,
    screenshot: screenshot('Synk'),
  },
  {
    id: 'garimpo',
    name: 'Garimpo',
    description:
      'Rastreador Android de preços de hardware: histórico, alertas, comparação de GPU, builds de PC e backup local.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Capacitor', 'siCapacitor'),
      tech('SQLite', 'siSqlite'),
      tech('Android', 'siAndroid'),
    ],
    repoUrl: null,
    status: 'privado',
    isPrivate: true,
    privateReason: 'em desenvolvimento e ainda não publicado',
    featured: false,
    visible: true,
    screenshot: screenshot('garimpo'),
  },
  {
    id: 'grana',
    name: 'Grana',
    description:
      'Controle financeiro offline: ganhos, despesas e valores a receber, com exportação em PDF e CSV.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Angular', 'siAngular'),
      tech('Capacitor', 'siCapacitor'),
      tech('SQLite', 'siSqlite'),
      tech('Material', 'siMaterialdesign'),
    ],
    repoUrl: null,
    status: 'privado',
    isPrivate: true,
    privateReason: 'em desenvolvimento',
    featured: false,
    visible: true,
    screenshot: screenshot('grana'),
  },
  {
    id: 'rango',
    name: 'Rango',
    description:
      'Pedidos, caixa, relatórios e entregadores para a operação de um restaurante.',
    category: 'Mobile',
    stack: [
      tech('Ionic', 'siIonic'),
      tech('Angular', 'siAngular'),
      tech('Firebase', 'siFirebase'),
      tech('Capacitor', 'siCapacitor'),
    ],
    repoUrl: null,
    status: 'privado',
    isPrivate: true,
    privateReason: 'No ar em rangopos.com.br',
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

export function privateRepositoryMessage(reason: string): string {
  return reason.endsWith('.') ? reason : `${reason}.`;
}
