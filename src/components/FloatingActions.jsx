import { useEffect, useState } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa6';
import { restaurant } from '../data/restaurantData.js';
import React from 'react';

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${restaurant.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-glow transition hover:-translate-y-1 hover:bg-emerald-600"
        aria-label="Message Aurora Table on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`grid h-12 w-12 place-items-center rounded-full bg-charcoal text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-ember ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
}

export default FloatingActions;
