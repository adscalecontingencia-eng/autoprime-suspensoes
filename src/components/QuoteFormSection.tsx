import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Revisão de Suspensão",
  "Troca de Amortecedores",
  "Manutenção na Direção",
  "Troca de Buchas",
  "Diagnóstico Completo",
  "Outro"
];

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Redireciona para WhatsApp com os dados
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Veículo:* ${formData.vehicle}%0A*Serviço:* ${formData.service}%0A*Descrição:* ${formData.message}`;
    
    window.open(`https://wa.me/5531988480488?text=${whatsappMessage}`, '_blank');

    toast({
      title: "Orçamento enviado!",
      description: "Em breve entraremos em contato pelo WhatsApp.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", phone: "", email: "", vehicle: "", service: "", message: "" });
  };

  return (
    <section id="orcamento" className="py-10 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              SOLICITE SEU <span className="text-primary">ORÇAMENTO</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
              Preencha o formulário e receba um orçamento sem compromisso.
            </p>

            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">Orçamento gratuito e sem compromisso</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">Resposta rápida pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">Peças originais com garantia</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">Profissionais especializados</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl">
              <div className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="name" className="text-xs md:text-sm">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-9 md:h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="phone" className="text-xs md:text-sm">WhatsApp</Label>
                    <Input
                      id="phone"
                      placeholder="(31) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-9 md:h-10 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="vehicle" className="text-xs md:text-sm">Veículo</Label>
                    <Input
                      id="vehicle"
                      placeholder="Ex: Fiat Uno 2020"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      required
                      className="h-9 md:h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <Label className="text-xs md:text-sm">Serviço</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="h-9 md:h-10 text-sm">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label htmlFor="message" className="text-xs md:text-sm">Descreva o problema</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre o problema..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-orange-dark text-primary-foreground font-display text-sm md:text-lg py-5 md:py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      SOLICITAR ORÇAMENTO
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
