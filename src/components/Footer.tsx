import { GraduationCap, Mail, MapPin, Phone, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { ACADEMY, COURSES } from '@/data/academy';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Classes & Batches', href: '#classes' },
  { label: 'Our Teachers', href: '#teachers' },
  { label: 'Student Results', href: '#results' },
  { label: 'Admission', href: '#admission' },
  { label: 'Contact Us', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: Youtube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
];

const linkClass =
  'text-sm text-primary-200 transition-all duration-300 hover:translate-x-1 hover:text-accent-300';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-950 text-primary-200">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-white">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-white">Bright Future</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">Academy</span>
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-primary-300">
            Building confident learners since 2010 with personal attention, proven methods and a passion for
            every student's success.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Courses</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {COURSES.map((course) => (
              <li key={course.id}>
                <a href="#courses" className={linkClass}>
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-6 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <span>{ACADEMY.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <a href={ACADEMY.phoneHref} className="transition-colors hover:text-white">
                {ACADEMY.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <a href={`mailto:${ACADEMY.email}`} className="break-all transition-colors hover:text-white">
                {ACADEMY.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <span>{ACADEMY.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-primary-300 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {ACADEMY.name}. All rights reserved.</p>
          <p>Designed for students who dream big.</p>
        </div>
      </div>
    </footer>
  );
}
