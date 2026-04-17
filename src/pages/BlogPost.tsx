import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Auto Prime Suspensões`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", post.description);
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Auto Prime Suspensões" },
    publisher: {
      "@type": "Organization",
      name: "Auto Prime Suspensões",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-20 md:pt-28 pb-10 md:pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
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

          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            {post.title}
          </h1>

          <div
            className="prose prose-invert max-w-none text-foreground
              [&>h2]:font-display [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:text-foreground
              [&>p]:text-sm [&>p]:md:text-base [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ul]:text-sm [&>ul]:md:text-base [&>ul]:text-muted-foreground [&>ul>li]:mb-1
              [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 md:mt-12 p-5 md:p-8 rounded-xl bg-card-gradient border border-primary/30 text-center">
            <h3 className="font-display text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">
              Precisa de uma oficina de suspensão em Conselheiro Lafaiete?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Fale com a Auto Prime e receba um orçamento gratuito.
            </p>
            <a
              href="https://wa.me/5531988480488?text=Ol%C3%A1!%20Vim%20pelo%20blog%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm md:text-base hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
