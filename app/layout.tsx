import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Patrícia Chagas | Harmonização Facial em Taubaté",
  description:
    "Especialista em harmonização facial com naturalidade e propósito. Biomédica esteta em Taubaté-SP. Agende sua avaliação.",
  openGraph: {
    title: "Dra. Patrícia Chagas | Harmonização Facial",
    description: "Especialista em harmonização facial com naturalidade e propósito.",
    images: ["/img/dra-2.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html
    lang="pt-BR"
    className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
  >
    <body className="min-h-full font-sans font-light">{children}</body>
  </html>
);

export default RootLayout;
