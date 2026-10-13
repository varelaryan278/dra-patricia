import { whatsappLink } from "../_lib/site";
import { WhatsappIcon } from "./icons";

export const WhatsappFloat = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Agendar pelo WhatsApp"
    className="enter-fade fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
  >
    <span className="pulse-ring absolute inset-0 rounded-full bg-[#25d366]" />
    <WhatsappIcon className="relative size-7" />
  </a>
);
