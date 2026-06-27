import React from 'react';
import { FaUtensils } from 'react-icons/fa6';
import { navLinks, restaurant } from '../data/restaurantData.js';

function Footer() {
  return (
    <footer className="bg-[#100d0b] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ember text-white shadow-glow">
              <FaUtensils aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-bold">{restaurant.name}</span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-white/58">{restaurant.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white/50">Quick Links</h2>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/68 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white/50">Opening Hours</h2>
          <div className="grid gap-3 text-white/68">
            {restaurant.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white/50">Social</h2>
          <div className="flex gap-3">
            {restaurant.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/72 transition hover:border-ember hover:bg-ember hover:text-white"
                  aria-label={social.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/45">
        <p>Copyright {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
