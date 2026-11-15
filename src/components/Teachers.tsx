import { GraduationCap } from 'lucide-react';
import { TEACHERS, type Teacher } from '@/data/academy';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      <div className="relative h-80 overflow-hidden bg-primary-100">
        <img
          src={teacher.image}
          alt={`${teacher.name}, ${teacher.subjects.join(' and ')} teacher`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-950/80 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          {teacher.subjects.map((subject) => (
            <span key={subject} className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-800 backdrop-blur-sm">
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold text-ink-900">{teacher.name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent-600">{teacher.qualification}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">{teacher.bio}</p>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-ink-50 px-4 py-3">
          <GraduationCap className="h-5 w-5 text-primary-600" />
          <span className="text-sm font-semibold text-ink-700">{teacher.experience} of teaching experience</span>
        </div>
      </div>
    </article>
  );
}

export function Teachers() {
  return (
    <section id="teachers" className="relative bg-ink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Teachers"
          title={
            <>
              Meet the Mentors Behind <span className="text-primary-700">Every Success</span>
            </>
          }
          description="Our faculty combines subject mastery with a genuine passion for teaching, and every teacher is trained in our methodology."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((teacher, index) => (
            <Reveal key={teacher.id} delay={(index % 3) * 120}>
              <TeacherCard teacher={teacher} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
