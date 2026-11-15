import { SectionHeading } from '@/components/SectionHeading';
import { ToppersShowcase } from '@/components/ToppersShowcase';
import { Testimonials } from '@/components/Testimonials';

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-primary-900 py-24 sm:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Student Results"
          title={
            <>
              Celebrating Our <span className="text-accent-400">Students' Achievements</span>
            </>
          }
          description="Every topper, every rank and every success story is the result of hard work, guidance and a supportive community."
        />

        <div className="mt-16">
          <ToppersShowcase />
        </div>

        <Testimonials />
      </div>
    </section>
  );
}
