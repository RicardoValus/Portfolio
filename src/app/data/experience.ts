export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  type?: string;
  note?: string;
  bullets: readonly string[];
}

export const experience: readonly ExperienceEntry[] = [
  {
    role: 'Desenvolvedor de software Pleno',
    company: 'ChatSeguro',
    period: 'mar/2024 – atual',
    location: 'Paraná, Brasil · Remoto',
    type: 'Tempo integral',
    bullets: [
      'Nós lançamos chamadas de áudio e vídeo entre duas pessoas e, na v2.4.0, em grupo, com escolha da tela compartilhada.',
      'Nós lançamos a tela inicial com o resumo de atividades e a lista de sessões ativas.',
      'Nós adicionamos anexos enviados junto com a mensagem, mensagens fixadas e favoritas, formatação de texto e tema escuro.',
      'Desenvolvo a interface em Angular, Material e TypeScript, apps com Ionic e Capacitor, e APIs em PHP (Laminas / Apigility).',
    ],
  },
  {
    role: 'Técnico Júnior de TI',
    company: 'Act Tecnologia',
    period: 'abr/2023 – jul/2023',
    location: 'Guarapuava, PR · No local',
    note: 'Estágio anterior: mai/2022 – abr/2023',
    bullets: [
      'Suporte técnico remoto com Remmina, manutenção de computadores e telefonia.',
      'Servidores e VPNs com Proxmox e Active Directory.',
      'Redes Wi-Fi com Unifi e monitoramento com Zabbix.',
      'Firewalls com Fortinet.',
    ],
  },
];
