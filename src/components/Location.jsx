import React from 'react';
import { FaClock, FaLocationDot, FaSquareParking } from 'react-icons/fa6';
import SectionHeader from './SectionHeader.jsx';
import { restaurant } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function Location() {
  const reveal = useReveal();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapQuery)}&output=embed`;

  return (
    <section id="location" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Find Us"
          title="Easy to reach, easy to settle in"
          text="Address, hours, parking information, and a responsive embedded map."
        />
        <div
          ref={reveal.ref}
          className={`grid overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-700 lg:grid-cols-[0.9fr_1.1fr] ${reveal.className}`}
        >
          <div className="grid gap-5 p-6 sm:p-8">
            <Info icon={FaLocationDot} title="Address" text={restaurant.address} />
            <Info icon={FaClock} title="Opening Hours" text={restaurant.hours.join(' | ')} />
            <Info icon={FaSquareParking} title="Parking" text={restaurant.parking} />
          </div>
          <iframe
            title="Aurora Table location map"
            src={mapSrc}
            className="min-h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, text }) {
  return (
    <article className="rounded-3xl bg-linen p-5">
      <Icon className="mb-4 text-2xl text-ember" aria-hidden="true" />
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="mt-2 leading-7 text-charcoal/68">{text}</p>
    </article>
  );
}

export default Location;
