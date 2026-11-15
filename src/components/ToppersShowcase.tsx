import { Trophy } from 'lucide-react';
import { ACHIEVEMENT_STATS, TOPPERS, type Topper } from '@/data/academy';
import { CountUp } from '@/components/CountUp';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

function TopperCard({ topper }: { topper: Topper }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      <div className="flex items-center gap-5 p-7">
        <img
          src={topper.image}
          alt={`${topper.name}, ${topper.achievement}`}
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-4 ring-primary-50 transition-transform duration-500 group-hover:scale-105"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent-600">{topper.batch}</p>
          <h3 className="mt-1 text-xl font-bold text-ink-900">{topper.name}</h3>
          <p className="mt-1 text-sm font-semibold text-primary-700">{topper.achievement}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-ink-100 px-7 py-5">
        <p className="max-w-[60%] text-sm italic leading-relaxed text-ink-500">"{topper.quote}"</p>
        <div className="text-right">
          <p className="text-2xl font-extrabold text-primary-900">{topper.score}</p>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Score</p>
        </div>
      </div>
    </article>
  );
}

export function ToppersShowcase() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENT_STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-primary-200">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
            <Trophy className="h-6 w-6 text-accent-400" />
            Our Toppers
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TOPPERS.map((topper, index) => (
            <Reveal key={topper.id} delay={index * 120}>
              <TopperCard topper={topper} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
