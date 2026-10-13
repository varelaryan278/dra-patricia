import Image from "next/image";
import caso1 from "@/public/img/caso-1.jpg";
import caso2 from "@/public/img/caso-2.jpg";
import caso3 from "@/public/img/caso-3.jpg";
import caso4 from "@/public/img/caso-4.jpg";
import caso5 from "@/public/img/caso-5.jpg";
import caso6 from "@/public/img/caso-6.jpg";
import { site } from "../_lib/site";
import { InstagramIcon } from "./icons";

const casos = [caso3, caso5, caso6, caso1, caso4, caso2];

export const Resultados = () => (
  <section id="resultados" className="scroll-mt-20 pb-20 md:pb-28">
    <div className="mx-auto max-w-6xl px-5">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.35em] text-bronze uppercase">Resultados</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
            Antes <em className="text-bronze">&</em> depois
          </h2>
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm tracking-widest text-ink/70 uppercase transition-colors hover:text-bronze"
        >
          <InstagramIcon className="size-5" />
          Mais casos no {site.instagramHandle}
        </a>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {casos.map((caso, index) => (
          <li key={caso.src}>
            <Image
              src={caso}
              alt={`Antes e depois — caso ${index + 1}`}
              placeholder="blur"
              sizes="(min-width: 768px) 33vw, 50vw"
              className="aspect-square w-full object-cover"
            />
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-ink/50">
        Os resultados variam de pessoa para pessoa e não são garantidos.
      </p>
    </div>
  </section>
);
