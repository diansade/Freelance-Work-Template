import React, { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { menuCategories } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].category);
  const activeItems = useMemo(
    () => menuCategories.find((category) => category.category === activeCategory)?.items ?? [],
    [activeCategory],
  );

  return (
    <section id="menu" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Menu"
          title="Seven categories, one generous table"
          text="Filter the menu by craving and find polished comfort food for every mood."
        />

        <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
          {menuCategories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.category;
            return (
              <button
                key={category.category}
                type="button"
                onClick={() => setActiveCategory(category.category)}
                className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-extrabold transition duration-200 ${
                  active
                    ? 'border-ember bg-ember text-white shadow-glow'
                    : 'border-charcoal/10 bg-white text-charcoal hover:border-ember/40 hover:text-ember'
                }`}
                aria-pressed={active}
              >
                <Icon aria-hidden="true" />
                {category.category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {activeItems.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItem({ item }) {
  const reveal = useReveal();

  return (
    <article
      ref={reveal.ref}
      className={`group grid grid-cols-[112px_1fr] gap-4 rounded-[1.6rem] bg-white p-3 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-glow sm:grid-cols-[152px_1fr] ${reveal.className}`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full min-h-32 rounded-[1.15rem] object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="flex min-w-0 flex-col justify-center py-2 pr-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold leading-tight sm:text-2xl">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-linen px-3 py-1 text-sm font-extrabold text-ember">
            {item.price}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-charcoal/65 sm:text-base">{item.description}</p>
      </div>
    </article>
  );
}

export default Menu;
