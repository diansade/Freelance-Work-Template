import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import { features } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function WhyChooseUs() {
  return (
    <section className="bg-charcoal px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The details guests notice"
          text="From clean service systems to memorable finishing touches, every choice is made for a better meal."
          tone="dark"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const reveal = useReveal();
  const Icon = feature.icon;

  return (
    <article
      ref={reveal.ref}
      className={`rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all duration-700 hover:-translate-y-1 hover:border-ember/60 hover:bg-white/[0.09] ${reveal.className}`}
    >
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-ember text-2xl text-white shadow-glow">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl font-bold">{feature.title}</h3>
      <p className="mt-3 leading-7 text-white/65">{feature.text}</p>
    </article>
  );
}

export default WhyChooseUs;
