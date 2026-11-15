import { ArrowUpRight } from 'lucide-react';
import { COURSES, type Course } from '@/data/academy';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={`${course.name} class at Bright Future Academy`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-700 shadow-lg transition-transform duration-500 group-hover:-rotate-6">
          <Icon className="h-6 w-6" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-ink-900">{course.name}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500" />
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{course.description}</p>

        <div className="mt-6 border-t border-ink-100 pt-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Class levels</p>
          <ul className="flex flex-wrap gap-2">
            {course.levels.map((level) => (
              <li
                key={level}
                className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800"
              >
                {level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Courses() {
  return (
    <section id="courses" className="relative bg-ink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Courses"
          title={
            <>
              Expert Courses for <span className="text-primary-700">Every Subject</span>
            </>
          }
          description="Choose from our core subjects, each taught by specialists with structured notes, regular tests and personal feedback."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, index) => (
            <Reveal key={course.id} delay={(index % 3) * 120}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary-900 p-8 text-white sm:flex-row sm:p-10">
          <div>
            <h3 className="text-2xl font-bold">Not sure which subject to pick?</h3>
            <p className="mt-2 text-sm text-primary-100">Book a free counselling session and we will suggest the right path.</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Talk to a Counsellor
          </a>
        </Reveal>
      </div>
    </section>
  );
}
