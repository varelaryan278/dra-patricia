import { Contato } from "./_components/contato";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Procedimentos } from "./_components/procedimentos";
import { Resultados } from "./_components/resultados";
import { Sobre } from "./_components/sobre";
import { WhatsappFloat } from "./_components/whatsapp-float";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Sobre />
      <Procedimentos />
      <Resultados />
      <Contato />
    </main>
    <Footer />
    <WhatsappFloat />
  </>
);

export default Home;
