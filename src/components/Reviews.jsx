import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa6';
import SectionHeader from './SectionHeader.jsx';
import { reviews } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function Reviews() {
  const [active, setActive] = useState(0);
  const reveal = useReveal();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const review = reviews[active];

  return (
    <section id="reviews" className="bg-charcoal px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Hospitality people come back for"
          text="Real-looking dummy testimonials are stored in the data file and ready to replace."
          tone="dark"
        />
        <div
          ref={reveal.ref}
          className={`rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-glow backdrop-blur transition-all duration-700 sm:p-10 ${reveal.className}`}
        >
          <FaQuoteLeft className="mb-6 text-4xl text-ember" aria-hidden="true" />
          <p className="text-xl font-medium leading-9 text-white/86 sm:text-2xl">"{review.text}"</p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-extrabold">{review.name}</h3>
                <div className="mt-1 flex gap-1 text-ember" aria-label={`${review.rating} star rating`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <FaStar key={index} aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
                aria-label="Previous review"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setActive((active + 1) % reviews.length)}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"
                aria-label="Next review"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2" aria-label="Review slides">
          {reviews.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                active === index ? 'w-8 bg-ember' : 'w-2.5 bg-white/30'
              }`}
              aria-label={`Show review from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
