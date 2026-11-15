import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignment}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2
        className={`text-3xl font-extrabold sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ink-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? 'text-primary-100' : 'text-ink-500'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
