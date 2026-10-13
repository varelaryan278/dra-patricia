import Image from "next/image";
import draFoto from "@/public/img/dra-1.jpg";

const pilares = [
  { titulo: "Análise", texto: "Cada rosto é avaliado em sua individualidade antes de qualquer indicação." },
  { titulo: "Planejamento", texto: "Uma estratégia pensada para valorizar seus traços, sem exageros." },
  { titulo: "Ciência", texto: "Técnicas baseadas em evidências e atualização constante." },
];

export const Sobre = () => (
  <section id="sobre" className="scroll-mt-20 bg-sand py-20 md:py-28">
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[5fr_6fr] md:gap-20">
      <div className="reveal overflow-hidden">
        <Image
          src={draFoto}
          alt="Dra. Patrícia Chagas em retrato"
          placeholder="blur"
          sizes="(min-width: 768px) 40vw, 100vw"
          className="parallax aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="reveal">
        <p className="text-xs tracking-[0.35em] text-bronze uppercase">Sobre</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
          Dra. Patrícia Chagas
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
          <p>
            Biomédica com especialização em Biomedicina Estética, com cursos e mentorias junto a
            profissionais de referência na área — e em formação contínua.
          </p>
          <p>
            Meu trabalho é baseado em ciência, com foco em resultados naturais, individualizados e
            atenção a cada detalhe. <em className="font-serif text-xl text-bronze">Sua essência é minha prioridade.</em>
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {pilares.map((pilar) => (
            <li key={pilar.titulo} className="reveal border-t border-bronze/40 pt-4">
              <h3 className="font-serif text-2xl text-bronze-dark">{pilar.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{pilar.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
