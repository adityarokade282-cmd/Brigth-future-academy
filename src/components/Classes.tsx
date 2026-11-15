import { useState } from 'react';
import { ArrowRight, Award, CalendarClock, Check, Laptop, MapPin } from 'lucide-react';
import { BATCHES, CLASS_GROUPS, COMPETITIVE_EXAMS, type Batch } from '@/data/academy';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

type BatchFilter = 'All' | Batch['mode'];
const FILTERS: BatchFilter[] = ['All', 'Offline', 'Online'];

function BatchSchedule() {
  const [filter, setFilter] = useState<BatchFilter>('All');
  const visibleBatches = BATCHES.filter((batch) => filter === 'All' || batch.mode === filter);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-ink-900">Batch Timings</h3>
          <p className="mt-2 text-sm text-ink-500">Choose the format that fits your schedule.</p>
        </div>
        <div role="tablist" aria-label="Batch mode" className="inline-flex rounded-full bg-ink-100 p-1">
          {FILTERS.map((option) => (
            <button
              key={option}
              role="tab"
              type="button"
              aria-selected={filter === option}
              onClick={() => setFilter(option)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === option ? 'bg-white text-primary-800 shadow-soft' : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleBatches.map((batch) => {
          const isOnline = batch.mode === 'Online';
          const ModeIcon = isOnline ? Laptop : MapPin;

          return (
            <article
              key={batch.id}
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                    isOnline ? 'bg-primary-50 text-primary-700' : 'bg-accent-50 text-accent-700'
                  }`}
                >
                  <ModeIcon className="h-3.5 w-3.5" />
                  {batch.mode}
                </span>
                <span className="text-xs font-semibold text-ink-400">{batch.forLevels}</span>
              </div>
              <h4 className="mt-5 text-lg font-bold text-ink-900">{batch.name}</h4>
              <div className="mt-4 flex items-center gap-2 text-sm text-ink-600">
                <CalendarClock className="h-4 w-4 text-primary-600" />
                {batch.timing}
              </div>
              <p className="mt-2 pl-6 text-sm text-ink-500">{batch.days}</p>
              <a
                href="#admission"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition-colors hover:text-accent-600"
              >
                Reserve a seat
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function Classes() {
  return (
    <section id="classes" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Classes & Batches"
          title={
            <>
              Programs for Every <span className="text-primary-700">Stage of Learning</span>
            </>
          }
          description="From primary school to senior secondary and competitive exams, we offer structured programs in both online and offline batches."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASS_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-gradient-to-b from-white to-primary-50/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent-600">{group.range}</span>
                <h3 className="mt-3 text-xl font-bold text-ink-900">{group.title}</h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ink-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-900 p-8 text-white sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-300">
                  <Award className="h-4 w-4" />
                  Competitive Exams
                </span>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Focused preparation for India's toughest exams
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-100">
                  Mock tests, error analysis and mentor check-ins keep students on track from foundation to final attempt.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {COMPETITIVE_EXAMS.map((exam) => (
                  <li
                    key={exam.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    <p className="font-bold text-white">{exam.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-primary-200">{exam.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-24">
          <Reveal>
            <BatchSchedule />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
