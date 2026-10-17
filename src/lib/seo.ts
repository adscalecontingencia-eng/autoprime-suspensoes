export const SITE_URL = "https://www.autoprimesuspensoes.com.br";

// Capture the static homepage test metadata before any route effects run.
const homeMetadata = {
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
  keywords: document.querySelector('meta[name="keywords"]')?.getAttribute("content") ?? "",
};

export function setPropertyMeta(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setPageMetadata(title: string, description: string, url: string) {
  document.title = title;
  setMeta("description", description);
  setCanonical(url);
  setPropertyMeta("og:title", title);
  setPropertyMeta("og:description", description);
  setPropertyMeta("og:url", url);
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
}

export function restoreHomeMetadata() {
  setPageMetadata(homeMetadata.title, homeMetadata.description, `${SITE_URL}/`);
  setMeta("keywords", homeMetadata.keywords);
}

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(crumbs: BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** Inject (or replace) a JSON-LD <script> tag in <head>. Returns a cleanup fn. */
export function injectJsonLd(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
  return () => {
    const el = document.getElementById(id);
    if (el) el.remove();
  };
}

export function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setCanonical(url: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}
