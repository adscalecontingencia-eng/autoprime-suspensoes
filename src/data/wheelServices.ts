export interface WheelService {
  id: "alignment" | "balancing";
  path: string;
  title: string;
  description: string;
  heading: string;
  name: string;
  message: string;
  intro: string;
  benefit: string;
  symptoms: string[];
  evaluation: string;
  difference: string;
  faqs: { question: string; answer: string }[];
}

export const wheelServices: WheelService[] = [
  {
    id: "alignment",
    path: "/alinhamento-3d-conselheiro-lafaiete",
    title: "Alinhamento 3D em Conselheiro Lafaiete | Auto Prime Centro Automotivo",
    description: "Alinhamento 3D em Conselheiro Lafaiete na Auto Prime. Avaliação da geometria das rodas para desgaste irregular e carro puxando. Consulte pelo WhatsApp.",
    heading: "Alinhamento 3D em Conselheiro Lafaiete",
    name: "Alinhamento 3D",
    message: "Olá! Gostaria de orçamento de alinhamento 3D na Auto Prime.",
    intro: "Seu carro está puxando para um lado ou o volante ficou fora de centro? Consulte a Auto Prime Centro Automotivo para avaliar a geometria das rodas e verificar se o alinhamento é indicado.",
    benefit: "Medição da geometria das rodas e da direção para orientar os ajustes de alinhamento conforme as especificações do veículo.",
    symptoms: ["Carro puxando para um lado", "Volante fora de centro ao seguir em linha reta", "Pneus com desgaste irregular"],
    evaluation: "Antes do ajuste, é importante avaliar os pneus e as condições da suspensão e da direção. Folgas, peças desgastadas ou diferenças na pressão dos pneus também podem provocar esses sinais. O alinhamento não substitui a revisão da suspensão e não resolve todas as causas de instabilidade.",
    difference: "O alinhamento avalia os ângulos e a posição das rodas. Já o balanceamento corrige desequilíbrios no conjunto roda e pneu que podem causar vibrações. São dois serviços distintos; a avaliação indica qual deles faz sentido para o seu veículo.",
    faqs: [
      { question: "O que significa alinhamento 3D?", answer: "É a utilização de tecnologia de medição tridimensional para avaliar a geometria das rodas. As medidas orientam os ajustes disponíveis no veículo, seguindo as especificações do fabricante." },
      { question: "Carro puxando sempre precisa de alinhamento?", answer: "Não. Pressão dos pneus, desgaste, folgas na suspensão e outros problemas também podem causar esse comportamento. A avaliação aponta se o alinhamento é indicado ou se outro reparo precisa ser feito antes." },
      { question: "Alinhamento substitui balanceamento ou revisão?", answer: "Não. O balanceamento trata desequilíbrios de roda e pneu, enquanto a revisão verifica componentes. O alinhamento não corrige peças desgastadas." },
      { question: "Como consultar o valor e agendar?", answer: "Informe o modelo do veículo e os sintomas pelo WhatsApp. A oficina confirma o orçamento e a disponibilidade de atendimento." },
    ],
  },
  {
    id: "balancing",
    path: "/balanceamento-de-rodas-conselheiro-lafaiete",
    title: "Balanceamento de Rodas em Lafaiete | Auto Prime Centro Automotivo",
    description: "Balanceamento de rodas em Conselheiro Lafaiete na Auto Prime. Ajuda a corrigir desequilíbrios que causam vibrações ao dirigir. Solicite orçamento no WhatsApp.",
    heading: "Balanceamento de Rodas em Conselheiro Lafaiete",
    name: "Balanceamento de rodas",
    message: "Olá! Gostaria de orçamento de balanceamento de rodas na Auto Prime.",
    intro: "O volante vibra em determinadas velocidades? Na Auto Prime Centro Automotivo, avaliamos se há desequilíbrio no conjunto roda e pneu e se o balanceamento é indicado para o seu carro.",
    benefit: "Ajuste da distribuição de massa do conjunto roda e pneu, com contrapesos quando necessários, para reduzir vibrações causadas por desequilíbrio.",
    symptoms: ["Volante vibrando em determinadas velocidades", "Vibração percebida na carroceria ao rodar", "Vibração após troca de pneus ou intervenção nas rodas"],
    evaluation: "Vibrações também podem estar relacionadas a pneus danificados, rodas deformadas, folgas ou desgaste de outros componentes. A avaliação identifica se o balanceamento é adequado ou se é necessário investigar outra causa. Não é possível garantir a solução de toda vibração apenas com esse serviço.",
    difference: "O balanceamento ajusta o desequilíbrio de roda e pneu. O alinhamento 3D mede a geometria e orienta ajustes dos ângulos das rodas. Balancear não corrige o alinhamento, e alinhar não elimina um desequilíbrio de massa.",
    faqs: [
      { question: "O que é balanceamento de rodas?", answer: "É a identificação e compensação de desequilíbrios no conjunto roda e pneu. O ajuste pode ajudar a reduzir vibrações quando essa é a causa do problema." },
      { question: "Toda vibração no volante é falta de balanceamento?", answer: "Não. Pneus, rodas e componentes da suspensão ou direção também podem estar envolvidos. É importante avaliar antes de definir o serviço." },
      { question: "Balanceamento é o mesmo que alinhamento?", answer: "Não. Balanceamento trata a distribuição de massa da roda e do pneu. Alinhamento trata a geometria das rodas. A tecnologia 3D é utilizada no alinhamento." },
      { question: "Como solicitar orçamento?", answer: "Envie pelo WhatsApp o modelo do carro e diga em quais condições a vibração aparece. A oficina confirma o orçamento e a disponibilidade." },
    ],
  },
];

export function serviceWhatsAppUrl(service: WheelService) {
  return `https://wa.me/5531988480488?text=${encodeURIComponent(service.message)}`;
}