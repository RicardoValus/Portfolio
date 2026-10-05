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
    role: 'Desenvolvedor de software',
    company: 'ChatSeguro',
    period: 'mar/2024 – atual',
    location: 'Remoto',
    type: 'Tempo integral',
    bullets: [
      'Lancei a v2.4.0 com chamadas de áudio e vídeo em grupo, o recurso mais pedido pelos clientes.',
      'Desenvolvo interfaces web responsivas em Angular e Material, e apps híbridos com Ionic e Capacitor.',
    ],
  },
  {
    role: 'Técnico Júnior de TI',
    company: 'Act Tecnologia',
    period: 'abr/2023 – jul/2023',
    location: 'Guarapuava, PR · No local',
    note: 'Estágio anterior: mai/2022 – abr/2023',
    bullets: [
      'Suporte técnico remoto e manutenção de computadores.',
      'Servidores e VPNs com Proxmox e Active Directory.',
      'Redes Wi-Fi com Unifi e monitoramento com Zabbix.',
      'Firewalls com Fortinet.',
    ],
  },
];
