import { useEffect, useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { ACADEMY } from '@/data/academy';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Classes', href: '#classes' },
  { label: 'Teachers', href: '#teachers' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-900 text-accent-400 shadow-lg transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
            <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className={`text-lg font-extrabold ${solid ? 'text-primary-900' : 'text-white'}`}>
              Bright Future
            </span>
            <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${solid ? 'text-accent-600' : 'text-accent-300'}`}>
              Academy
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent-500 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  solid ? 'text-ink-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <a href="#admission" className="btn-primary !px-6 !py-3">
            Enroll Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 xl:hidden ${
            solid ? 'bg-primary-50 text-primary-900' : 'bg-white/15 text-white backdrop-blur-sm'
          }`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-all duration-500 ease-out xl:hidden ${
          menuOpen ? 'max-h-[520px] border-t border-ink-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-6 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              {link.label}
            </a>
          ))}
          <a href="#admission" onClick={closeMenu} className="btn-primary mt-4">
            Enroll Now
          </a>
          <p className="mt-4 text-center text-sm text-ink-500">{ACADEMY.phone}</p>
        </div>
      </div>
    </header>
  );
}
