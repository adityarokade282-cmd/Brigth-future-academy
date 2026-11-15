import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/academy';
import { Reveal } from '@/components/Reveal';

export function Testimonials() {
  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="text-center text-2xl font-bold text-white sm:text-3xl">Success Stories in Their Own Words</h3>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <Reveal key={item.id} delay={index * 120}>
            <figure className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white p-8 shadow-lift transition-transform duration-500 hover:-translate-y-2">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent-100" aria-hidden="true" />
              <div className="flex gap-1 text-accent-500" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-600">"{item.quote}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-ink-100 pt-6">
                <img src={item.image} alt={item.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-ink-900">{item.name}</p>
                  <p className="text-xs font-medium text-ink-500">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
