import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

function SectionHeader({ eyebrow, title, text, align = 'center', tone = 'light' }) {
  const reveal = useReveal();
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const dark = tone === 'dark';

  return (
    <div
      ref={reveal.ref}
      className={`mx-auto mb-10 flex max-w-3xl flex-col ${alignment} transition-all duration-700 ${reveal.className}`}
    >
      <span className={`mb-3 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-ember ${
        dark ? 'border-white/10 bg-white/10' : 'border-ember/20 bg-white'
      }`}>
        {eyebrow}
      </span>
      <h2 className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
        dark ? 'text-white' : 'text-charcoal'
      }`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${
          dark ? 'text-white/65' : 'text-charcoal/70'
        }`}>
          {text}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
