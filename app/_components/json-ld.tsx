import { procedimentos, site } from "../_lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${site.url}/#clinica`,
      name: `${site.name} — Harmonização Facial`,
      description: site.description,
      url: site.url,
      image: [`${site.url}/img/dra-2.jpg`, `${site.url}/img/dra-1.jpg`],
      logo: `${site.url}/icon.png`,
      telephone: "+55-12-98188-6549",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: "BR",
      },
      areaServed: { "@type": "City", name: site.locality },
      sameAs: [site.instagram],
      founder: { "@id": `${site.url}/#dra` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Procedimentos de harmonização facial",
        itemListElement: procedimentos.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.nome, description: item.descricao },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#dra`,
      name: site.name,
      jobTitle: "Biomédica esteta",
      description: "Biomédica com especialização em Biomedicina Estética, especialista em harmonização facial.",
      image: `${site.url}/img/dra-1.jpg`,
      url: site.url,
      sameAs: [site.instagram],
      worksFor: { "@id": `${site.url}/#clinica` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#site`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
    },
  ],
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
  />
);
