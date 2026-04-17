import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog de Suspensão Automotiva | Auto Prime Lafaiete MG";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Dicas e artigos sobre suspensão, amortecedores e manutenção automotiva por especialistas em Conselheiro Lafaiete MG."
      );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-28 pb-10 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <span className="inline-block text-primary font-display font-semibold text-xs md:text-sm tracking-wider mb-2 md:mb-4">
              BLOG AUTO PRIME
            </span>
            <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              DICAS DE <span className="text-gradient">SUSPENSÃO</span> E AMORTECEDORES
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Conteúdo escrito por especialistas em manutenção automotiva em Conselheiro Lafaiete MG.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-7 hover:border-primary/50 hover:shadow-glow transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm md:text-base hover:gap-3 transition-all"
                >
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
