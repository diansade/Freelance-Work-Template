import { FaAward, FaLeaf, FaPeopleRoof, FaUserTie } from 'react-icons/fa6';
import { aboutImage, restaurant } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';
import React from 'react';

const stats = [
  { value: '14+', label: 'Years of experience', icon: FaAward },
  { value: '100%', label: 'Fresh ingredients', icon: FaLeaf },
  { value: '18', label: 'Professional chefs', icon: FaUserTie },
  { value: 'Family', label: 'Friendly environment', icon: FaPeopleRoof },
];

function About() {
  const imageReveal = useReveal();
  const contentReveal = useReveal();

  return (
    <section id="about" className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          ref={imageReveal.ref}
          className={`relative transition-all duration-700 ${imageReveal.className}`}
        >
          <img
            src={aboutImage}
            alt="Chef finishing dishes in a premium restaurant"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            loading="lazy"
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/50 bg-white/85 p-5 shadow-soft backdrop-blur">
            <p className="font-display text-3xl font-bold text-charcoal">14 years</p>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">serving memorable meals</p>
          </div>
        </div>

        <div
          ref={contentReveal.ref}
          className={`transition-all delay-100 duration-700 ${contentReveal.className}`}
        >
          <span className="mb-4 inline-flex rounded-full border border-ember/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-ember">
            Our Story
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Designed for slow conversations, cooked with serious intent.
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">{restaurant.description}</p>
          <p className="mt-4 leading-8 text-charcoal/68">
            Every dish begins with seasonal produce, properly toasted spices, and a kitchen team that respects both classic comfort food and modern presentation. The room is polished, but the feeling is warm enough for birthdays, business lunches, and relaxed family dinners.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-3xl bg-white p-5 shadow-soft">
                  <Icon className="mb-4 text-2xl text-ember" aria-hidden="true" />
                  <p className="font-display text-3xl font-bold">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-charcoal/60">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
