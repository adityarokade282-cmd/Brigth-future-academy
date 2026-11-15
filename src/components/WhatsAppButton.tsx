import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/academy';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bright Future Academy on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink-800 opacity-0 shadow-lift transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-success-500 text-white shadow-lg shadow-success-500/40 transition-transform duration-300 group-hover:scale-110">
        <span className="animate-ping-soft absolute inset-0 rounded-full bg-success-500" aria-hidden="true" />
        <MessageCircle className="relative h-7 w-7" />
      </span>
    </a>
  );
}
