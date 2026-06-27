import { FaArrowRight, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import SectionHeader from './SectionHeader.jsx';
import { contactCards, restaurant } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-charcoal px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to the front desk"
          text="Call, message, email, or follow along on social for new dishes and seasonal events."
          tone="dark"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => (
            <ContactCard key={card.label} card={card} />
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${restaurant.phone.replaceAll(' ', '')}`}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-extrabold text-charcoal transition hover:-translate-y-1 hover:bg-linen"
          >
            <FaPhone aria-hidden="true" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${restaurant.whatsapp.replace('+', '')}`}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-emerald-600"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ card }) {
  const reveal = useReveal();
  const Icon = card.icon;
  const external = card.href.startsWith('http');

  return (
    <a
      ref={reveal.ref}
      href={card.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 transition-all duration-700 hover:-translate-y-1 hover:border-ember/60 hover:bg-white/[0.09] ${reveal.className}`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ember text-xl text-white shadow-glow">
          <Icon aria-hidden="true" />
        </span>
        <FaArrowRight className="text-white/35 transition group-hover:translate-x-1 group-hover:text-ember" aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl font-bold">{card.label}</h3>
      <p className="mt-2 break-words leading-7 text-white/68">{card.value}</p>
    </a>
  );
}

export default Contact;
