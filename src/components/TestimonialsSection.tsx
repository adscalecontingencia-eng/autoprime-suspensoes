import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Honda Civic 2019",
      rating: 5,
      text: "Excelente atendimento! Troquei os amortecedores do meu carro e ficou perfeito. A equipe é muito profissional e o preço justo. Recomendo demais!",
      initials: "CE",
    },
    {
      name: "Maria Fernanda",
      role: "Fiat Strada 2021",
      rating: 5,
      text: "Fui fazer a revisão da suspensão e me explicaram tudo detalhadamente. Serviço rápido e de qualidade. Já virei cliente fiel!",
      initials: "MF",
    },
    {
      name: "João Paulo",
      role: "VW Gol 2018",
      rating: 5,
      text: "Melhor oficina de suspensão da região! Resolveram um problema que outras oficinas não conseguiram. Preço honesto e trabalho impecável.",
      initials: "JP",
    },
    {
      name: "Ana Beatriz",
      role: "Chevrolet Onix 2020",
      rating: 5,
      text: "Atendimento nota 10! Fizeram o alinhamento e balanceamento do meu carro rapidamente. A diferença foi incrível. Super recomendo!",
      initials: "AB",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-display font-semibold text-sm tracking-wider mb-4">
            DEPOIMENTOS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            O QUE NOSSOS <span className="text-gradient">CLIENTES</span> DIZEM
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é o que nos motiva a continuar oferecendo o melhor serviço.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-10 h-10 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
