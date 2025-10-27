'use client';
import { useRef, ReactNode } from 'react';
import { useIsVisible } from '@/app/components/util/is-visible';

interface TransitionSectionProps {
  children: ReactNode;
  className?: string;
}

export function TransitionSection({ children, className }: TransitionSectionProps) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      ref={ref}
      className={`component-section transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
    >
      <div className={`component-section-div`}>
        {children}
      </div>
    </section>
  );
}
