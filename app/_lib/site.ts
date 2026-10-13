const whatsappNumber = "5512981886549";

export const whatsappLink = (text = "Olá, Dra. Patrícia! Gostaria de agendar uma avaliação.") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export const site = {
  phone: "(12) 98188-6549",
  instagram: "https://www.instagram.com/drapattichagas/",
  instagramHandle: "@drapattichagas",
  googleReview: "https://share.google/TmDz3oqh9T3yuBMFo",
  crbm: "CRBM 35486",
  address: "R. Jurandir Martins Filho, 35, Sala 204",
  city: "Taubaté - SP",
};

export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address}, ${site.city}`,
)}&output=embed`;

export const procedimentos = [
  {
    nome: "Rinomodelação",
    descricao: "Remodelação do nariz sem cirurgia: alinha o dorso e corrige pequenas assimetrias.",
  },
  {
    nome: "Preenchimento Labial",
    descricao: "Corrige assimetrias, devolve volume, define o contorno e hidrata os lábios.",
  },
  {
    nome: "Toxina Botulínica",
    descricao: "Suaviza rugas e linhas de expressão com o relaxamento temporário da musculatura.",
  },
  {
    nome: "Bioestimulador de Colágeno",
    descricao: "Estimula a produção natural de colágeno, melhorando firmeza e elasticidade da pele.",
  },
  {
    nome: "Preenchimento de Olheiras",
    descricao: "Suaviza a depressão abaixo dos olhos para um olhar mais descansado.",
  },
  {
    nome: "Preenchimento de Mandíbula",
    descricao: "Define o contorno mandibular, trazendo estrutura e equilíbrio ao rosto.",
  },
  {
    nome: "Preenchimento de Mento",
    descricao: "Projeta o queixo, alonga o rosto e harmoniza o perfil.",
  },
  {
    nome: "Preenchimento Malar",
    descricao: "Devolve estrutura e volume às maçãs do rosto para um aspecto rejuvenescido.",
  },
  {
    nome: "Fios de PDO",
    descricao: "Fios lisos e de preenchimento que estimulam colágeno e melhoram firmeza e textura.",
  },
];
