import { Eye, GraduationCap, Heart, Target, Lightbulb, ClipboardCheck, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const METHODOLOGY = [
  {
    icon: ClipboardCheck,
    title: 'Diagnose',
    text: 'A short assessment reveals each student\'s strengths and learning gaps from day one.',
  },
  {
    icon: Lightbulb,
    title: 'Understand',
    text: 'Concepts are taught with real examples, visuals and step-by-step reasoning.',
  },
  {
    icon: Target,
    title: 'Practise',
    text: 'Structured worksheets, timed tests and previous-year papers build exam confidence.',
  },
  {
    icon: Heart,
    title: 'Review',
    text: 'Weekly progress reports and parent updates keep everyone aligned on growth.',
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={ABOUT_IMAGE}
                alt="Teacher explaining a math lesson at Bright Future Academy"
                loading="lazy"
                className="h-[28rem] w-full object-cover transition-transform duration-1000 hover:scale-105 sm:h-[34rem]"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-64 rounded-2xl bg-primary-900 p-6 text-white shadow-lift sm:block">
              <p className="text-4xl font-extrabold text-accent-400">15+</p>
              <p className="mt-1 text-sm font-medium text-primary-100">Years of guiding students to success</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={
                <>
                  An Academy Built on <span className="text-primary-700">Care, Clarity</span> and Results
                </>
              }
              description="Founded in 2010, Bright Future Academy began with a single classroom and one belief: every student can excel when they are taught the right way. Today we serve thousands of learners across Class 1 to 12 and competitive exams."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={100}>
                <article className="group h-full rounded-2xl border border-primary-100 bg-primary-50/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary-300 hover:bg-white hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-white transition-transform duration-500 group-hover:scale-110">
                    <Target className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">Our Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    To make quality education accessible, engaging and affordable, so every child can discover their potential.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article className="group h-full rounded-2xl border border-accent-100 bg-accent-50/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent-300 hover:bg-white hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-white transition-transform duration-500 group-hover:scale-110">
                    <Eye className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">Our Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    To be the most trusted learning partner for families, shaping confident thinkers and responsible citizens.
                  </p>
                </article>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="flex items-center gap-4 rounded-2xl bg-ink-50 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary-700 shadow-soft">
                  <Users className="h-6 w-6" />
                </span>
                <p className="text-sm leading-relaxed text-ink-600">
                  <span className="font-bold text-ink-900">Experienced teachers.</span> Our faculty holds advanced degrees and
                  an average of over a decade of classroom experience, with regular training in modern teaching methods.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Our Methodology"
            title="How We Help Students Learn"
            description="A proven four-step cycle that turns effort into understanding and understanding into results."
          />
          <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 120}>
                <div className="group relative h-full rounded-3xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                  <span className="absolute right-6 top-6 text-5xl font-extrabold text-ink-100 transition-colors duration-500 group-hover:text-primary-100">
                    0{index + 1}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-900 text-white shadow-lg transition-transform duration-500 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary-50 px-6 py-3 text-sm font-semibold text-primary-800">
            <GraduationCap className="h-5 w-5 text-accent-500" />
            Trusted by families across the city since 2010
          </div>
        </Reveal>
      </div>
    </section>
  );
}
