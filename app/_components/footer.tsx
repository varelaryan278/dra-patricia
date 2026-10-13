import { site } from "../_lib/site";

export const Footer = () => (
  <footer className="bg-ink pb-24 text-center text-xs tracking-widest text-cream/40 uppercase md:pb-10">
    <div className="mx-auto max-w-6xl border-t border-cream/10 px-5 pt-8">
      <p>© 2026 Dra. Patrícia Chagas · Harmonização Facial · {site.crbm}</p>
    </div>
  </footer>
);
