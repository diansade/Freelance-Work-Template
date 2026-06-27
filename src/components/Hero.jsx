import React from 'react';
import { FaArrowRight, FaCalendarCheck, FaPhone } from 'react-icons/fa6';
import { heroImage, restaurant } from '../data/restaurantData.js';

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-charcoal text-white">
      <img
        src={heroImage}
        alt="Warm premium restaurant interior with guests dining"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/74 to-charcoal/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-floatIn">
          <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white backdrop-blur">
            Open daily for lunch and dinner
          </span>
          <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
            {restaurant.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            {restaurant.tagline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ember px-7 text-sm font-extrabold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-flame"
            >
              View Menu
              <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href="#reservation"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-extrabold text-charcoal transition duration-300 hover:-translate-y-1 hover:bg-linen"
            >
              <FaCalendarCheck aria-hidden="true" />
              Reserve Table
            </a>
            <a
              href={`tel:${restaurant.phone.replaceAll(' ', '')}`}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/25 px-7 text-sm font-extrabold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              <FaPhone aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
