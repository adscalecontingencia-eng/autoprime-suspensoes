export interface MechanicalService {
  id: "shocks" | "suspension" | "hydraulic";
  path: string;
  name: string;
  title: string;
  heading: string;
  description: string;
  intro: string;
  message: string;
  symptoms: string[];
  sections: { heading: string; text: string }[];
  faqs: { question: string; answer: string }[];
  related: { path: string; label: string; context: string }[];
  blogSlugs: string[];
}

export const mechanicalServices: MechanicalService[] = [
  {
    id: "shocks",
    path: "/troca-de-amortecedores-conselheiro-lafaiete",
    name: "Troca de amortecedores",
    title: "Troca de Amortecedores em Conselheiro Lafaiete | Auto Prime",
    heading: "Troca de Amortecedores em Conselheiro Lafaiete",
    description: "Troca de amortecedores dianteiros e traseiros em Conselheiro Lafaiete. Avaliação da suspensão na Auto Prime e orçamento pelo WhatsApp.",
    intro: "Percebeu balanço excessivo ou perda de conforto? Na Auto Prime Centro Automotivo, a inspeção da suspensão orienta a necessidade de substituir os amortecedores dianteiros ou traseiros do seu carro.",
    message: "Olá! Gostaria de um orçamento para troca de amortecedores na Auto Prime.",
    symptoms: ["Balanço persistente após lombadas ou irregularidades", "Vazamento aparente no amortecedor", "Impactos secos ou instabilidade ao dirigir", "Desgaste irregular dos pneus, que também pode ter outras causas"],
    sections: [
      { heading: "Inspeção antes da substituição", text: "Um barulho sozinho não confirma defeito no amortecedor. A avaliação profissional verifica sinais de desgaste, fixações e o comportamento da suspensão para definir quais componentes precisam de intervenção. Informe quando o sintoma aparece e se houve algum impacto recente." },
      { heading: "O conjunto também precisa de atenção", text: "Coxins, batentes, coifas e outros componentes associados são avaliados conforme o veículo. Peças desgastadas podem contribuir para ruídos e comprometer o funcionamento do conjunto. A necessidade de substituir itens adicionais deve ser explicada no orçamento, sem presumir a troca de todo o kit." },
      { heading: "Troca por pares: orientação técnica", text: "A substituição dos dois amortecedores do mesmo eixo pode ser indicada para manter um comportamento equilibrado. A recomendação considera as condições de ambos os lados e as orientações do fabricante; não é definida apenas pela quilometragem ou por um sintoma isolado." },
      { heading: "O que informar para consultar o orçamento", text: "Envie o modelo, ano e versão do carro e diga se o problema parece estar na dianteira ou na traseira. A escolha das peças e o orçamento final dependem da aplicação e da inspeção. Não é possível confirmar todos os componentes necessários apenas por mensagem." },
    ],
    faqs: [
      { question: "Todo barulho exige trocar o amortecedor?", answer: "Não. Buchas, bieletas, coxins e fixações também podem provocar ruídos. A inspeção identifica a origem antes de indicar a substituição." },
      { question: "Preciso trocar dianteiros e traseiros juntos?", answer: "Não necessariamente. Cada eixo e seus componentes precisam ser avaliados. A troca por pares no mesmo eixo é orientada quando tecnicamente indicada." },
      { question: "Existe uma quilometragem única para a troca?", answer: "Não. Uso, condições das vias e especificações do fabricante influenciam o desgaste. Sinais percebidos ao dirigir e a inspeção ajudam a orientar a decisão." },
      { question: "Como pedir um orçamento?", answer: "Informe modelo, ano, versão e sintomas pelo WhatsApp. A oficina em Conselheiro Lafaiete orienta a avaliação e confirma os itens necessários." },
    ],
    related: [
      { path: "/oficina-de-suspensao-conselheiro-lafaiete", label: "Avaliação da suspensão", context: "Para investigar ruídos e folgas além dos amortecedores." },
      { path: "/alinhamento-3d-conselheiro-lafaiete", label: "Alinhamento 3D", context: "Quando a avaliação indicar verificar a geometria das rodas após a intervenção." },
    ],
    blogSlugs: ["problemas-amortecedores", "5-sinais-de-que-seu-amortecedor-esta-ruim", "quanto-custa-trocar-amortecedor-em-minas-gerais", "melhor-amortecedor-para-estradas-de-mg"],
  },
  {
    id: "suspension",
    path: "/oficina-de-suspensao-conselheiro-lafaiete",
    name: "Manutenção de suspensão",
    title: "Oficina de Suspensão em Conselheiro Lafaiete | Auto Prime",
    heading: "Oficina de Suspensão em Conselheiro Lafaiete",
    description: "Avaliação de ruídos, folgas, buchas, bieletas e componentes de suspensão em Conselheiro Lafaiete. Consulte a Auto Prime pelo WhatsApp.",
    intro: "Barulhos ao passar em buracos ou sensação de instabilidade merecem investigação. A Auto Prime Centro Automotivo avalia a suspensão mecânica do carro para orientar a manutenção dos componentes que apresentarem desgaste.",
    message: "Olá! Gostaria de um orçamento para avaliação e manutenção da suspensão na Auto Prime.",
    symptoms: ["Batidas ou estalos ao passar em buracos e lombadas", "Rangidos ou ruídos recorrentes na suspensão", "Sensação de instabilidade ou folgas ao dirigir", "Pneus com desgaste irregular que pede avaliação do conjunto"],
    sections: [
      { heading: "Investigar a origem dos ruídos", text: "Diga se a batida acontece na dianteira ou na traseira, em curvas ou em irregularidades. Essas informações ajudam a orientar a inspeção, mas não substituem a verificação profissional. Ruídos parecidos podem vir de componentes diferentes; trocar peças sem identificar a causa pode não resolver o problema." },
      { heading: "Buchas, bieletas, pivôs e coxins", text: "A avaliação considera folgas, desgaste e condições de fixação de buchas, bieletas, pivôs, coxins e outros componentes da suspensão presentes no veículo. A manutenção é indicada conforme o estado das peças e a aplicação, com os itens necessários discriminados no orçamento." },
      { heading: "Estabilidade e desgaste dos pneus", text: "Instabilidade e desgaste irregular podem envolver suspensão, pneus ou geometria das rodas. Folgas e componentes comprometidos precisam ser considerados antes de indicar alinhamento. O alinhamento 3D não corrige peças desgastadas e a revisão não substitui o ajuste de geometria quando ele é necessário." },
      { heading: "Manutenção conforme o diagnóstico", text: "O atendimento é voltado à suspensão mecânica e à substituição dos componentes quando indicada. Não é um serviço de preparação ou rebaixamento. Se a inspeção apontar desgaste nos amortecedores, a oficina orienta a troca; se indicar geometria fora das especificações, orienta a avaliação de alinhamento." },
    ],
    faqs: [
      { question: "Barulho em buracos é sempre bieleta?", answer: "Não. Buchas, coxins, pivôs e fixações também podem gerar ruídos. É necessário inspecionar o conjunto para identificar a origem." },
      { question: "Alinhamento resolve folga na suspensão?", answer: "Não. O alinhamento ajusta a geometria das rodas, não o desgaste de componentes. A avaliação indica a ordem das intervenções necessárias." },
      { question: "Toda revisão exige trocar todas as peças?", answer: "Não. Os componentes são avaliados e a indicação depende do diagnóstico. O orçamento deve esclarecer quais itens precisam de manutenção." },
      { question: "O que enviar pelo WhatsApp?", answer: "Modelo e ano do carro, onde o ruído parece ocorrer e em quais condições ele aparece. Essas informações ajudam a organizar a avaliação na oficina." },
    ],
    related: [
      { path: "/troca-de-amortecedores-conselheiro-lafaiete", label: "Troca de amortecedores", context: "Para entender a substituição quando o desgaste estiver nesses componentes." },
      { path: "/alinhamento-3d-conselheiro-lafaiete", label: "Alinhamento 3D", context: "Para avaliar a geometria quando as condições da suspensão permitirem." },
      { path: "/direcao-hidraulica-conselheiro-lafaiete", label: "Direção hidráulica", context: "Se os sintomas envolverem assistência da direção, vazamentos ou ruídos ao virar." },
    ],
    blogSlugs: ["oficina-de-suspensao-em-lafaiete", "troca-de-bieleta-mg", "quando-trocar-a-suspensao-do-carro", "como-evitar-desgaste-prematuro-da-suspensao"],
  },
  {
    id: "hydraulic",
    path: "/direcao-hidraulica-conselheiro-lafaiete",
    name: "Direção hidráulica",
    title: "Direção Hidráulica em Conselheiro Lafaiete | Auto Prime",
    heading: "Direção Hidráulica em Conselheiro Lafaiete",
    description: "Avaliação de vazamentos, ruídos e manutenção de direção hidráulica em Conselheiro Lafaiete. Reparo condicionado à inspeção e orçamento pelo WhatsApp.",
    intro: "Volante pesado, ruído ao esterçar ou perda de fluido? A Auto Prime Centro Automotivo avalia o sistema de direção hidráulica para identificar a origem do problema e orientar o reparo necessário.",
    message: "Olá! Gostaria de um orçamento para avaliação e reparo da direção hidráulica na Auto Prime.",
    symptoms: ["Volante mais pesado que o habitual", "Ruído ao girar o volante", "Queda recorrente do nível de fluido", "Vazamento aparente próximo ao sistema de direção"],
    sections: [
      { heading: "Identificar de onde vem o vazamento", text: "Uma mancha sob o carro não confirma, sozinha, vazamento na direção. A inspeção procura a origem e avalia as condições do circuito hidráulico. Completar o reservatório repetidamente sem investigar a perda não corrige sua causa; o fluido adequado depende da especificação do veículo." },
      { heading: "Bomba, caixa e mangueiras", text: "A bomba fornece assistência hidráulica à direção, enquanto mangueiras e conexões conduzem o fluido até a caixa. Ruídos, vedação comprometida ou perda de assistência podem exigir avaliação desses componentes. Reparo ou substituição são definidos após a inspeção, sem presumir que toda falha exige trocar a caixa ou a bomba." },
      { heading: "Hidráulica e elétrica são sistemas diferentes", text: "A direção hidráulica utiliza fluido e circuito hidráulico para auxiliar o movimento do volante. A elétrica utiliza assistência por motor elétrico. Esta página trata apenas da direção hidráulica: a Auto Prime não oferece manutenção de direção elétrica. Se não souber qual sistema seu carro utiliza, informe modelo, ano e versão para orientação." },
      { heading: "Como organizar a avaliação", text: "Conte se o ruído aparece parado ou em movimento, se há perda de fluido e quando o volante fica pesado. Dificuldade acentuada para esterçar ou perda de assistência exige atenção à segurança: evite continuar usando o veículo nessas condições e consulte a oficina sobre como encaminhá-lo para avaliação." },
    ],
    faqs: [
      { question: "Volante pesado significa bomba defeituosa?", answer: "Não necessariamente. Nível de fluido, vazamentos e condições de outros componentes podem estar envolvidos. A inspeção determina a causa." },
      { question: "É suficiente completar o fluido?", answer: "Uma perda recorrente precisa ser investigada. O fluido correto segue a especificação do veículo; completar o nível não elimina um vazamento." },
      { question: "Vocês atendem direção elétrica?", answer: "Não. O serviço divulgado aqui é avaliação, manutenção e reparo de direção hidráulica." },
      { question: "O reparo da caixa pode ser confirmado por mensagem?", answer: "Não. Envie os dados do carro e os sintomas para iniciar a consulta. A indicação de reparo e os itens do orçamento dependem da inspeção." },
    ],
    related: [
      { path: "/oficina-de-suspensao-conselheiro-lafaiete", label: "Avaliação da suspensão", context: "Quando ruídos ou folgas também envolvem os componentes da suspensão." },
      { path: "/alinhamento-3d-conselheiro-lafaiete", label: "Alinhamento 3D", context: "Para geometria das rodas quando indicado; não corrige vazamentos nem perda de assistência hidráulica." },
    ],
    blogSlugs: ["direcao-hidraulica-vazando-lafaiete"],
  },
];

export function mechanicalWhatsAppUrl(service: MechanicalService) {
  return `https://wa.me/5531988480488?text=${encodeURIComponent(service.message)}`;
}