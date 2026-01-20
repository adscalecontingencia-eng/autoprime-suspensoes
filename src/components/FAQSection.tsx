import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
    answer: "Oferecemos garantia de 6 meses para mão de obra e seguimos a garantia do fabricante para as peças utilizadas, que geralmente varia de 1 a 2 anos dependendo da marca."
  },
  {
    question: "É necessário agendar ou posso ir direto?",
    answer: "Recomendamos o agendamento pelo WhatsApp para garantir atendimento prioritário e reduzir o tempo de espera. Porém, também atendemos clientes sem agendamento, sujeito à disponibilidade."
  },
  {
    question: "Vocês fazem orçamento gratuito?",
    answer: "Sim! Realizamos avaliação e orçamento gratuito. Basta trazer seu veículo ou entrar em contato pelo WhatsApp informando o modelo e os sintomas apresentados."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito (parcelamos em até 12x). Também trabalhamos com algumas financeiras para facilitar o pagamento de serviços maiores."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
