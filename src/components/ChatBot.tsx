import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const faqResponses: Record<string, string> = {
  "horário": "Funcionamos de Segunda a Sexta das 8h às 18h e Sábado das 8h às 12h. Domingo estamos fechados.",
  "horario": "Funcionamos de Segunda a Sexta das 8h às 18h e Sábado das 8h às 12h. Domingo estamos fechados.",
  "endereço": "Estamos localizados em São Paulo. Para o endereço completo, confira a seção de localização no site ou entre em contato pelo WhatsApp.",
  "endereco": "Estamos localizados em São Paulo. Para o endereço completo, confira a seção de localização no site ou entre em contato pelo WhatsApp.",
  "preço": "Os valores variam de acordo com o veículo e serviço necessário. Solicite um orçamento gratuito pelo nosso formulário ou WhatsApp!",
  "preco": "Os valores variam de acordo com o veículo e serviço necessário. Solicite um orçamento gratuito pelo nosso formulário ou WhatsApp!",
  "orçamento": "Você pode solicitar um orçamento gratuito preenchendo o formulário no site ou entrando em contato pelo WhatsApp (11) 99999-9999.",
  "orcamento": "Você pode solicitar um orçamento gratuito preenchendo o formulário no site ou entrando em contato pelo WhatsApp (11) 99999-9999.",
  "whatsapp": "Nosso WhatsApp é (11) 99999-9999. Estamos prontos para atendê-lo!",
  "serviço": "Oferecemos: Troca de Amortecedores, Troca de Molas, Alinhamento, Balanceamento, Manutenção na Direção e Revisão Completa de Suspensão.",
  "servico": "Oferecemos: Troca de Amortecedores, Troca de Molas, Alinhamento, Balanceamento, Manutenção na Direção e Revisão Completa de Suspensão.",
  "amortecedor": "Realizamos troca de amortecedores de todas as marcas. O tempo médio de serviço é de 2-4 horas dependendo do veículo.",
  "mola": "Trabalhamos com troca e reparo de molas. Utilizamos peças de qualidade das melhores marcas do mercado.",
  "alinhamento": "Sim, realizamos alinhamento e balanceamento com equipamentos de última geração.",
  "balanceamento": "Sim, realizamos balanceamento computadorizado para garantir a melhor dirigibilidade do seu veículo.",
  "garantia": "Oferecemos garantia em todos os nossos serviços e peças. O prazo varia de acordo com o serviço realizado.",
  "pagamento": "Aceitamos dinheiro, PIX, cartões de débito e crédito (parcelamos em até 12x).",
  "marca": "Trabalhamos com todas as marcas de veículos: Honda, Toyota, VW, Fiat, Chevrolet, Ford, Hyundai, Renault e muitas outras.",
  "tempo": "O tempo de serviço varia de acordo com o tipo de reparo. Serviços simples levam de 1-2 horas, serviços completos podem levar um dia.",
  "agendamento": "Você pode agendar seu serviço pelo WhatsApp (11) 99999-9999 ou pelo formulário de orçamento no site.",
  "agendar": "Você pode agendar seu serviço pelo WhatsApp (11) 99999-9999 ou pelo formulário de orçamento no site.",
};

const quickQuestions = [
  "Qual o horário de funcionamento?",
  "Quais serviços vocês oferecem?",
  "Como solicitar orçamento?",
  "Quais formas de pagamento?",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual da Auto Prime Suspensões. Como posso ajudá-lo hoje?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const findResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (lowerQuestion.includes(keyword)) {
        return response;
      }
    }
    
    return "Desculpe, não entendi sua pergunta. Para um atendimento mais completo, entre em contato pelo WhatsApp (11) 99999-9999 ou preencha nosso formulário de orçamento!";
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findResponse(text),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-secondary/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary-foreground">
                    Assistente Virtual
                  </h3>
                  <p className="text-xs text-primary-foreground/80">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-muted text-foreground rounded-tl-none"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Perguntas frequentes:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua pergunta..."
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
