import { ArrowRight, BookOpen, Star, Users } from 'lucide-react';

const HERO_IMAGE = 'https://images.pexels.com/photos/8618068/pexels-photo-8618068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const HIGHLIGHTS = [
  { icon: Users, label: 'Expert faculty' },
  { icon: BookOpen, label: 'Class 1 to 12' },
  { icon: Star, label: '96% pass rate' },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-primary-950">
      <img
        src={HERO_IMAGE}
        alt="Students learning together in a bright classroom at Bright Future Academy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-950 via-primary-900/90 to-primary-700/70" />
      <div className="absolute -bottom-40 -right-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-500/20 blur-3xl animate-float-slow" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Admissions open for 2026-27
            </span>

            <h1
              className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ animationDelay: '120ms' }}
            >
              Build Your Future With{' '}
              <span className="relative whitespace-nowrap text-accent-400">
                Quality Education
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent-500/80"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 8 Q 75 1 150 6 T 298 4" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p
              className="animate-fade-up mt-8 max-w-xl text-base leading-relaxed text-primary-100 sm:text-lg"
              style={{ animationDelay: '240ms' }}
            >
              Bright Future Academy delivers personal, result-driven tuition for Class 1 to 12 and competitive
              exams. Small batches, experienced teachers and a proven method help every student learn with
              confidence.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: '360ms' }}
            >
              <a href="#admission" className="btn-primary group">
                Enroll Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#courses" className="btn-outline">
                Explore Courses
              </a>
            </div>

            <ul
              className="animate-fade-up mt-12 flex flex-wrap gap-x-8 gap-y-4"
              style={{ animationDelay: '480ms' }}
            >
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-accent-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="animate-fade-up relative rounded-3xl border border-white/15 bg-white/10 p-3 shadow-lift backdrop-blur-md" style={{ animationDelay: '300ms' }}>
              <img
                src={HERO_IMAGE}
                alt="Teacher guiding students in class"
                className="h-[26rem] w-full rounded-2xl object-cover"
              />
              <div className="absolute -left-10 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lift animate-float-slow">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-50 text-success-600">
                  <Star className="h-6 w-6 fill-current" />
                </span>
                <div>
                  <p className="text-xl font-extrabold text-ink-900">96%</p>
                  <p className="text-xs font-semibold text-ink-500">Board exam pass rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
