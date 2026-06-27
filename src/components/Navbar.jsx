import React, { useEffect, useState } from 'react';
import { FaBars, FaPhone, FaUtensils, FaXmark } from 'react-icons/fa6';
import { navLinks, restaurant } from '../data/restaurantData.js';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/92 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-charcoal'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3 text-white" aria-label={`${restaurant.name} home`}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-ember text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
            <FaUtensils aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-xl font-bold leading-none">{restaurant.name}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/55">Fine Dining</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/75 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${restaurant.phone.replaceAll(' ', '')}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-bold text-white transition duration-200 hover:border-ember hover:bg-ember"
          >
            <FaPhone aria-hidden="true" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <FaBars aria-hidden="true" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[60] h-dvh w-[86%] max-w-sm bg-charcoal px-6 py-6 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-2xl font-bold">{restaurant.name}</span>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <FaXmark aria-hidden="true" />
          </button>
        </div>
        <div className="grid gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </header>
  );
}

export default Navbar;
