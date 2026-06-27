import React from 'react';
import { FaStar } from 'react-icons/fa6';
import SectionHeader from './SectionHeader.jsx';
import { popularDishes } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function PopularDishes() {
  return (
    <section className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Popular Dishes"
          title="Most-loved plates this month"
          text="Guest favorites that consistently earn another round of recommendations."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {popularDishes.map((dish) => (
            <PopularCard key={dish.name} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularCard({ dish }) {
  const reveal = useReveal();

  return (
    <article
      ref={reveal.ref}
      className={`group overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-700 hover:-translate-y-2 hover:shadow-glow ${reveal.className}`}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/92 px-3 py-2 text-sm font-extrabold text-charcoal backdrop-blur">
          <FaStar className="text-ember" aria-hidden="true" />
          {dish.rating}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">{dish.name}</h3>
          <span className="font-extrabold text-ember">{dish.price}</span>
        </div>
        <p className="mt-3 leading-7 text-charcoal/65">{dish.description}</p>
      </div>
    </article>
  );
}

export default PopularDishes;
