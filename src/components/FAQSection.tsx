import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa trocar amortecedor em Conselheiro Lafaiete?",
    answer: "O preço da troca de amortecedor em Lafaiete MG varia conforme o modelo do veículo e a marca da peça escolhida. Trabalhamos com peças originais e paralelas de qualidade, sempre com orçamento prévio gratuito. Envie o modelo do seu carro pelo WhatsApp (31) 98848-0488 e receba uma estimativa rápida."
  },
  {
    question: "Quais são os sinais de amortecedor ruim?",
    answer: "Os principais sintomas são: carro batendo seco em buracos, balanço excessivo após lombadas, instabilidade em curvas, pneus com desgaste irregular, vazamento de óleo no amortecedor e barulhos metálicos. Ao notar qualquer um destes sinais, agende um diagnóstico imediatamente."
  },
  {
    question: "Quando devo trocar a suspensão do carro?",
    answer: "Em geral, recomenda-se uma revisão da suspensão a cada 20.000 km e a troca de amortecedores entre 50.000 e 80.000 km, dependendo do uso e das condições das vias. Quem roda muito em estradas esburacadas pode precisar trocar antes."
  },
  {
    question: "A oficina atende emergência ou casos urgentes?",
    answer: "Sim! Atendemos casos urgentes durante o horário comercial em Conselheiro Lafaiete. Entre em contato pelo WhatsApp (31) 98848-0488 e priorizamos seu atendimento sempre que possível."
  },
  {
    question: "Quanto tempo demora uma revisão de suspensão?",
    answer: "O tempo varia de acordo com o serviço necessário. Uma revisão simples pode levar de 1 a 2 horas, enquanto uma troca completa de componentes pode levar de 3 a 4 horas. Sempre realizamos uma avaliação prévia para informar o tempo estimado."
  },
  {
    question: "Vocês trabalham com todas as marcas de veículos?",
    answer: "Sim! Atendemos todas as marcas e modelos de veículos, incluindo carros nacionais e importados. Nossa equipe é treinada para trabalhar com diferentes sistemas de suspensão e direção."
  },
  {
    question: "Qual a garantia dos serviços realizados?",
    answer: "Oferecemos garantia de 3 meses para mão de obra e seguimos a garantia do fabricante para as peças utilizadas, que geralmente varia de 1 a 2 anos dependendo da marca."
  },
  {
    question: "É necessário agendar ou posso ir direto?",
    answer: "Recomendamos o agendamento pelo WhatsApp para garantir atendimento prioritário e reduzir o tempo de espera. Porém, também atendemos clientes sem agendamento, sujeito à disponibilidade."
  },
  {
    question: "Vocês fazem orçamento gratuito?",
    answer: "Sim! O orçamento de peças é gratuito. Basta trazer seu veículo ou entrar em contato pelo WhatsApp informando o modelo e os sintomas apresentados. Porém, para diagnóstico detalhado do veículo, cobramos a mão de obra do serviço."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito (parcelamos em até 12x). Também trabalhamos com algumas financeiras para facilitar o pagamento de serviços maiores."
  }
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg md:rounded-xl px-3 md:px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-display text-sm md:text-lg hover:text-primary py-3 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-muted-foreground pb-3 md:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
