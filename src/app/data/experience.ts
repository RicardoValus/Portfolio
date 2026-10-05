export interface CompanyLogo {
  src: string;
  width: number;
  height: number;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  type?: string;
  summary?: string;
  note?: string;
  logo?: CompanyLogo;
  bullets: readonly string[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    role: 'Desenvolvedor de software Pleno',
    company: 'ChatSeguro',
    period: 'mar/2024 – atual',
    location: 'Paraná, Brasil · Remoto',
    type: 'Tempo integral',
    summary:
      'Produto da Dallo Sistemas para comunicação corporativa, em desktop, web e celular. Reúne chat, chamadas e ServiceDesk, com lista de contatos privada, auditoria de mensagens e conformidade com a LGPD.',
    logo: { src: '/assets/companies/chatseguro.webp', width: 120, height: 60 },
    bullets: [
      'Nós lançamos chamadas de áudio e vídeo entre duas pessoas e, na v2.4.0, em grupo, com escolha da tela compartilhada.',
      'Nós lançamos a tela inicial com o resumo de atividades e a lista de sessões ativas.',
      'Nós adicionamos anexos enviados junto com a mensagem, mensagens fixadas e favoritas, formatação de texto e tema escuro.',
      'Desenvolvo a interface em Angular, Material e TypeScript, apps com Ionic e Capacitor, e APIs em PHP (Laminas / Apigility).',
    ],
  },
  {
    role: 'Técnico Júnior de TI',
    company: 'ACT Tecnologia',
    period: 'abr/2023 – jul/2023',
    location: 'Guarapuava, PR · No local',
    summary:
      'Empresa de Guarapuava que cuida da infraestrutura de operações no Brasil e no Paraguai: servidores, redes, firewall, backup e telefonia, com monitoramento contínuo.',
    note: 'Estágio anterior: mai/2022 – abr/2023',
    logo: { src: '/assets/companies/act.webp', width: 96, height: 52 },
    bullets: [
      'Dei suporte remoto com Remmina, além de manutenção de computadores e telefonia.',
      'Configurei servidores e VPNs com Proxmox e Active Directory.',
      'Implantei redes Wi-Fi com UniFi e monitoramento com Zabbix.',
      'Configurei firewalls com Fortinet.',
    ],
  },
];
