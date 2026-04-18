import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";
import { SITE_URL, buildBreadcrumbSchema, injectJsonLd } from "@/lib/seo";

const LOGO_URL = `${SITE_URL}/favicon.png`;
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | Auto Prime Suspensões`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", post.description);

    const keywordsList = [
      post.category,
      "amortecedor",
      "amortecedor dianteiro",
      "amortecedor traseiro",
      "kit amortecedor",
      "troca de amortecedor",
      "conserto de amortecedor",
      "suspensão automotiva",
      "revisão de suspensão",
      "barulho na suspensão",
      "carro batendo em buraco",
      "bucha da suspensão",
      "coxim do amortecedor",
      "bieleta",
      "pivô de suspensão",
      "terminal de direção",
      "mola helicoidal",
      "direção hidráulica",
      "caixa de direção",
      "bomba de direção hidráulica",
      "Cofap",
      "Monroe",
      "Nakata",
      "oficina de suspensão Conselheiro Lafaiete",
      "oficina de amortecedores Lafaiete MG",
      "oficina mecânica Lafaiete",
      "mecânico de suspensão Lafaiete",
      "Conselheiro Lafaiete",
      "Congonhas",
      "Ouro Branco",
      "Catas Altas da Noruega",
      "Itaverava",
      "Cristiano Otoni",
      "Queluzito",
      "Alto Paraopeba",
      "MG",
    ];

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywordsList.join(", "));

    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: [DEFAULT_IMAGE],
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: "Auto Prime Suspensões",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Auto Prime Suspensões",
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      url: postUrl,
      articleSection: post.category,
      inLanguage: "pt-BR",
      keywords: keywordsList.join(", "),
    };

    const cleanups = [
      injectJsonLd("blog-post-jsonld", articleSchema),
      injectJsonLd(
        "blog-post-breadcrumb-jsonld",
        buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url: postUrl },
        ]),
      ),
    ];

    return () => cleanups.forEach((fn) => fn());
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-28 pb-10 md:pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
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
