import Image from "next/image";
import draFoto from "@/public/img/dra-2.jpg";
import { site, whatsappLink } from "../_lib/site";
import { WhatsappIcon } from "./icons";

export const Hero = () => (
  <section id="inicio" className="relative overflow-hidden">
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-16 md:grid-cols-2 md:gap-16 md:pt-16 md:pb-24">
      <div className="order-2 md:order-1">
        <h1 className="enter enter-delay-1 text-xs font-normal tracking-[0.35em] text-bronze uppercase">
          Dra. Patrícia Chagas · Harmonização Facial em Taubaté
        </h1>
        <p className="enter enter-delay-2 mt-5 font-serif text-5xl leading-[1.05] font-light text-ink md:text-7xl">
          Naturalidade
          <br />
          <em className="text-bronze">e propósito.</em>
        </p>
        <p className="enter enter-delay-3 mt-6 max-w-md text-lg leading-relaxed text-ink/75">
          Não existe uma fórmula para harmonizar. Cada rosto pede uma análise, um planejamento e uma
          estratégia.
        </p>
        <div className="enter enter-delay-4 mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-7 py-4 text-sm tracking-widest text-cream uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-dark hover:shadow-lg hover:shadow-bronze/30"
          >
            <WhatsappIcon className="size-5" />
            Agendar avaliação
          </a>
          <a
            href="#procedimentos"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 px-7 py-4 text-sm tracking-widest text-ink/80 uppercase transition-colors hover:border-bronze hover:text-bronze"
          >
            Procedimentos
          </a>
        </div>
        <p className="enter enter-delay-4 mt-8 text-xs tracking-widest text-ink/50 uppercase">
          Biomédica esteta · {site.crbm}
        </p>
      </div>
      <div className="relative order-1 md:order-2">
        <div className="enter-arch absolute -inset-3 translate-x-4 translate-y-4 rounded-t-full border border-bronze/30 md:-inset-4" />
        <Image
          src={draFoto}
          alt="Dra. Patrícia Chagas, biomédica especialista em harmonização facial em Taubaté"
          placeholder="blur"
          preload
          sizes="(min-width: 768px) 50vw, 100vw"
          className="enter-zoom relative aspect-[4/5] w-full rounded-t-full object-cover object-top"
        />
      </div>
    </div>
  </section>
);
