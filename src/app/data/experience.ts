export const chatSeguroDownloadsUrl = 'https://www.chatseguro.net/downloads';

export interface CompanyLogo {
  src: string;
  width: number;
  height: number;
}

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  type?: string;
  intro?: string;
  bullets: readonly string[];
  link?: ExperienceLink;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  summary?: string;
  logo?: CompanyLogo;
  roles: readonly ExperienceRole[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    company: 'ChatSeguro',
    location: 'Paraná, Brasil · Remoto',
    summary:
      'Produto da Dallo Sistemas para comunicação corporativa, em desktop, web e celular. Reúne chat, chamadas e ServiceDesk, com lista de contatos privada, auditoria de mensagens e conformidade com a LGPD.',
    logo: { src: '/assets/companies/chatseguro.webp', width: 120, height: 60 },
    roles: [
      {
        title: 'Desenvolvedor de software Pleno',
        period: 'mar/2024 – atual',
        type: 'Tempo integral',
        intro: 'Nessa squad, ajudei a entregar:',
        bullets: [
          'Chamadas de áudio e vídeo 1:1 (v2.3.0) e em grupo (v2.4.0), com escolha da tela compartilhada (v2.4.16)',
          'Tela inicial com resumo de atividades, lista de sessões ativas (v2.4.16) e aba Agenda de tarefas (v2.4.17)',
          'Anexos junto com a mensagem (v2.4.16), mensagens fixadas (v2.4.12) e favoritas (v2.4.10), formatação de texto (v2.4.13) e tema escuro (v2.3.2)',
          'No desktop (Electron), cuido de integrações via IPC, como o seletor de tela das chamadas; no mobile (Ionic/Capacitor), levo as novidades do desktop para o app.',
          'Desenvolvo a interface em Angular, Material e TypeScript, desktop com Electron, apps com Ionic e Capacitor, e APIs em PHP (Laminas / Apigility).',
        ],
        link: {
          label: 'Changelog público do Chat Seguro 2 →',
          href: chatSeguroDownloadsUrl,
        },
      },
    ],
  },
  {
    company: 'ACT Tecnologia',
    location: 'Guarapuava, PR · No local',
    summary:
      'Empresa de Guarapuava que cuida da infraestrutura de operações no Brasil e no Paraguai: servidores, redes, firewall, backup e telefonia, com monitoramento contínuo.',
    logo: { src: '/assets/companies/act.webp', width: 96, height: 52 },
    roles: [
      {
        title: 'Técnico Júnior de TI',
        period: 'abr/2023 – jul/2023',
        type: 'Tempo integral',
        bullets: [
          'Dei suporte remoto com Remmina, além de manutenção de computadores e telefonia.',
          'Configurei servidores e VPNs com Proxmox e Active Directory.',
          'Implantei redes Wi-Fi com UniFi e monitoramento com Zabbix.',
          'Configurei firewalls com Fortinet.',
        ],
      },
      {
        title: 'Suporte ao usuário e manutenção de computadores',
        period: 'mai/2022 – abr/2023',
        type: 'Estágio',
        bullets: [],
      },
    ],
  },
];
