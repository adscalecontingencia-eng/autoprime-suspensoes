export interface CityLanding {
  slug: string;
  name: string;
  state: string;
  distanceKm: number;
  intro: string;
  neighborhoods: string[];
}

export const cities: CityLanding[] = [
  {
    slug: "oficina-amortecedor-conselheiro-lafaiete",
    name: "Conselheiro Lafaiete",
    state: "MG",
    distanceKm: 0,
    intro:
      "Somos uma oficina especializada em suspensão e amortecedores localizada em Conselheiro Lafaiete, no bairro Manoel Correa. Atendemos motoristas de toda a cidade com diagnóstico gratuito, mão de obra qualificada e peças das melhores marcas (Cofap, Monroe e Nakata).",
    neighborhoods: ["Centro", "Manoel Correa", "Gagé", "São João", "JK", "Carijós", "Novo Horizonte"],
  },
  {
    slug: "oficina-amortecedor-congonhas",
    name: "Congonhas",
    state: "MG",
    distanceKm: 25,
    intro:
      "Atendemos motoristas de Congonhas MG na nossa oficina em Conselheiro Lafaiete, a apenas 25 km. Especialistas em troca de amortecedores, buchas, bieletas e direção hidráulica para todos os veículos da região do Alto Paraopeba.",
    neighborhoods: ["Centro", "Plataforma", "Pires", "Basílica", "Residencial Campos", "Lobo Leite"],
  },
  {
    slug: "oficina-amortecedor-ouro-branco",
    name: "Ouro Branco",
    state: "MG",
    distanceKm: 35,
    intro:
      "Para os motoristas de Ouro Branco MG, oferecemos serviço completo de suspensão automotiva e direção hidráulica em Conselheiro Lafaiete. Carros, picapes e SUVs atendidos com garantia em peças e mão de obra.",
    neighborhoods: ["Centro", "Vila dos Engenheiros", "Pioneiros", "Soares", "Mineiros"],
  },
  {
    slug: "oficina-amortecedor-catas-altas-da-noruega",
    name: "Catas Altas da Noruega",
    state: "MG",
    distanceKm: 30,
    intro:
      "Especialistas em suspensão para os motoristas de Catas Altas da Noruega. Diagnóstico, troca de amortecedor, kit de suspensão completo e revisão preventiva — tudo em Conselheiro Lafaiete com agendamento pelo WhatsApp.",
    neighborhoods: ["Centro", "Zona Rural"],
  },
  {
    slug: "oficina-amortecedor-itaverava",
    name: "Itaverava",
    state: "MG",
    distanceKm: 40,
    intro:
      "Motoristas de Itaverava encontram em Conselheiro Lafaiete uma oficina especializada exclusivamente em suspensão e direção hidráulica. Atendimento honesto, orçamento sem compromisso e peças de marcas reconhecidas.",
    neighborhoods: ["Centro", "Distritos rurais"],
  },
  {
    slug: "oficina-amortecedor-cristiano-otoni",
    name: "Cristiano Otoni",
    state: "MG",
    distanceKm: 20,
    intro:
      "A Auto Prime atende motoristas de Cristiano Otoni MG com serviço de troca de amortecedores, conserto de direção hidráulica e revisão completa de suspensão. Oficina próxima, com pronto atendimento.",
    neighborhoods: ["Centro", "Bairros próximos"],
  },
  {
    slug: "oficina-amortecedor-queluzito",
    name: "Queluzito",
    state: "MG",
    distanceKm: 18,
    intro:
      "Para os motoristas de Queluzito MG, nossa oficina em Conselheiro Lafaiete oferece troca de amortecedores, buchas, bieletas, pivôs e reparo de caixa de direção hidráulica com garantia.",
    neighborhoods: ["Centro", "Zona Rural"],
  },
  {
    slug: "oficina-amortecedor-entre-rios-de-minas",
    name: "Entre Rios de Minas",
    state: "MG",
    distanceKm: 45,
    intro:
      "Motoristas de Entre Rios de Minas contam com a Auto Prime em Conselheiro Lafaiete para serviços completos de suspensão automotiva, com mão de obra especializada e peças Cofap, Monroe e Nakata.",
    neighborhoods: ["Centro", "Distritos"],
  },
  {
    slug: "oficina-amortecedor-carandai",
    name: "Carandaí",
    state: "MG",
    distanceKm: 50,
    intro:
      "A Auto Prime Suspensões atende motoristas de Carandaí MG em Conselheiro Lafaiete. Especialistas em amortecedores, suspensão e direção hidráulica para carros, SUVs e picapes.",
    neighborhoods: ["Centro", "Pedra do Sino", "Hermilo Alves"],
  },
  {
    slug: "oficina-amortecedor-desterro-de-entre-rios",
    name: "Desterro de Entre Rios",
    state: "MG",
    distanceKm: 55,
    intro:
      "Para motoristas de Desterro de Entre Rios MG, oferecemos atendimento especializado em suspensão automotiva em Conselheiro Lafaiete. Diagnóstico gratuito e orçamento via WhatsApp.",
    neighborhoods: ["Centro", "Zona Rural"],
  },
];
