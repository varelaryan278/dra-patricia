import { mapEmbed, site, whatsappLink } from "../_lib/site";
import { InstagramIcon, WhatsappIcon } from "./icons";

export const Contato = () => (
  <section id="contato" className="scroll-mt-20 bg-ink py-20 text-cream md:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-20">
      <div className="reveal">
        <p className="text-xs tracking-[0.35em] text-bronze uppercase">Contato</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
          Sua melhor versão <em className="text-[#c9a891]">começa com uma conversa.</em>
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
          Agende sua avaliação e receba um planejamento feito para o seu rosto.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-bronze px-7 py-4 text-sm tracking-widest text-cream uppercase transition-colors hover:bg-[#a07e67]"
        >
          <WhatsappIcon className="size-5" />
          {site.phone}
        </a>
        <dl className="mt-12 space-y-6 text-cream/80">
          <div>
            <dt className="text-xs tracking-[0.3em] text-cream/50 uppercase">Endereço</dt>
            <dd className="mt-1">
              <address className="not-italic">
                {site.address}
                <br />
                {site.city}
              </address>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.3em] text-cream/50 uppercase">Redes</dt>
            <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#c9a891]">
                <InstagramIcon className="size-4" />
                {site.instagramHandle}
              </a>
              <a href={site.googleReview} target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a891]">
                ★ Avalie no Google
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <iframe
        src={mapEmbed}
        title="Localização do consultório da Dra. Patrícia Chagas"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="reveal h-80 w-full grayscale-[60%] transition-[filter] duration-700 hover:grayscale-0 md:h-full md:min-h-96"
      />
    </div>
  </section>
);
