import { procedimentos, whatsappLink } from "../_lib/site";

export const Procedimentos = () => (
  <section id="procedimentos" className="scroll-mt-20 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <div className="reveal max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-bronze uppercase">Procedimentos</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
          Tratamentos pensados <em className="text-bronze">para o seu rosto</em>
        </h2>
      </div>
      <ol className="mt-14 grid gap-px overflow-hidden border border-bronze/15 bg-bronze/15 sm:grid-cols-2 lg:grid-cols-3">
        {procedimentos.map((item, index) => (
          <li key={item.nome} className="reveal group bg-cream p-7 transition-colors duration-500 hover:bg-sand md:p-9">
            <span className="block font-serif text-sm text-bronze/70">{String(index + 1).padStart(2, "0")}</span>
            <span className="mt-2 block h-px w-8 bg-bronze/40 transition-all duration-500 group-hover:w-16 group-hover:bg-bronze" />
            <h3 className="mt-3 font-serif text-2xl text-ink transition-colors duration-500 group-hover:text-bronze-dark">{item.nome}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{item.descricao}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-b border-bronze/20 pb-10 sm:flex-row sm:items-center">
        <p className="text-ink/70">Outros procedimentos são indicados após avaliação individual.</p>
        <a
          href={whatsappLink("Olá, Dra. Patrícia! Gostaria de saber mais sobre os procedimentos.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-widest text-bronze uppercase underline-offset-8 hover:underline"
        >
          Tirar dúvidas →
        </a>
      </div>
    </div>
  </section>
);
