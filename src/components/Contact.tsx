import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ACADEMY, WHATSAPP_URL } from '@/data/academy';
import { ContactForm } from '@/components/ContactForm';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ACADEMY.mapQuery)}&output=embed`;

const CONTACT_ITEMS = [
  { icon: MapPin, label: 'Academy Address', value: ACADEMY.address, href: undefined },
  { icon: Phone, label: 'Phone', value: ACADEMY.phone, href: ACADEMY.phoneHref },
  { icon: Mail, label: 'Email', value: ACADEMY.email, href: `mailto:${ACADEMY.email}` },
  { icon: Clock, label: 'Office Hours', value: ACADEMY.hours, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              We would love to <span className="text-primary-700">hear from you</span>
            </>
          }
          description="Have a question about admissions, timings or fees? Reach out through the form, call us, or start a WhatsApp chat."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal>
              <ul className="flex flex-col gap-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-400">{label}</p>
                      {href ? (
                        <a href={href} className="mt-1 block break-words text-sm font-semibold text-ink-800 transition-colors hover:text-primary-700">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-ink-800">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-success-600 p-5 text-white shadow-lg shadow-success-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-success-700"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold">Chat on WhatsApp</span>
                    <span className="block text-sm text-white/85">Usually replies within an hour</span>
                  </span>
                </span>
                <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">Open</span>
              </a>
            </Reveal>

            <Reveal delay={200} className="flex-1">
              <div className="h-full min-h-[18rem] overflow-hidden rounded-3xl border border-white bg-white shadow-soft">
                <iframe
                  title="Bright Future Academy location on Google Maps"
                  src={MAP_EMBED_URL}
                  className="h-full min-h-[18rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
