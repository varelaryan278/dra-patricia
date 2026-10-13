import Image from "next/image";
import logo from "@/public/img/logo-monograma.png";
import { whatsappLink } from "../_lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => (
  <header className="sticky top-0 z-40 border-b border-bronze/15 bg-cream/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
      <a href="#inicio" aria-label="Dra. Patrícia Chagas — início" className="flex items-center gap-3">
        <Image src={logo} alt="" className="h-9 w-auto md:h-11" loading="eager" />
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-sm tracking-[0.1em] text-bronze-dark uppercase md:text-lg md:tracking-[0.18em]">
            Dra. Patrícia Chagas
          </span>
          <span className="text-[0.6rem] tracking-[0.35em] text-ink/50 uppercase">Harmonização Facial</span>
        </span>
      </a>
      <nav className="hidden gap-8 text-sm tracking-widest text-ink/70 uppercase md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-bronze">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-bronze px-4 py-2 text-xs tracking-widest text-bronze uppercase transition-colors hover:bg-bronze hover:text-cream md:px-6"
      >
        Agendar
      </a>
    </div>
  </header>
);
