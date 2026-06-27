import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import { specials } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function Specials() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Today's Special"
          title="Chef-selected dishes for the table"
          text="Three signatures built around aroma, texture, and a little tableside drama."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {specials.map((dish) => (
            <SpecialCard key={dish.name} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialCard({ dish }) {
  const reveal = useReveal();

  return (
    <article
      ref={reveal.ref}
      className={`group overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-700 hover:-translate-y-2 hover:shadow-glow ${reveal.className}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">{dish.name}</h3>
          <span className="shrink-0 rounded-full bg-ember/10 px-3 py-1 text-sm font-extrabold text-ember">
            {dish.price}
          </span>
        </div>
        <p className="leading-7 text-charcoal/68">{dish.description}</p>
      </div>
    </article>
  );
}

export default Specials;
