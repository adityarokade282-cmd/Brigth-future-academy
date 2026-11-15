import { CalendarCheck, GraduationCap, ShieldCheck, UserPlus } from 'lucide-react';
import { AdmissionForm } from '@/components/AdmissionForm';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const STEPS = [
  { icon: UserPlus, title: 'Submit the form', text: 'Share your details and preferred class, subject and batch.' },
  { icon: CalendarCheck, title: 'Book a demo class', text: 'Attend a free trial class to experience our teaching first-hand.' },
  { icon: GraduationCap, title: 'Start learning', text: 'Complete admission and begin with a personalised learning plan.' },
];

const BENEFITS = [
  'Free assessment and trial class',
  'Scholarships for meritorious students',
  'Flexible online and offline batches',
  'Regular parent-teacher updates',
];

export function Admission() {
  return (
    <section id="admission" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -left-48 top-0 h-[28rem] w-[28rem] rounded-full bg-primary-50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Admission & Registration"
              title={
                <>
                  Secure Your Child's <span className="text-primary-700">Seat Today</span>
                </>
              }
              description="Fill in the registration form and our admissions team will guide you through the next steps. Limited seats are available in each batch."
            />

            <ol className="flex flex-col gap-5">
              {STEPS.map(({ icon: Icon, title, text }, index) => (
                <li key={title}>
                  <Reveal delay={index * 120}>
                    <div className="group flex gap-5 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-900 text-accent-400 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-accent-600">Step {index + 1}</p>
                        <h3 className="mt-1 font-bold text-ink-900">{title}</h3>
                        <p className="mt-1 text-sm text-ink-500">{text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <ul className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-success-600" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-span-7" delay={150}>
            <AdmissionForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
