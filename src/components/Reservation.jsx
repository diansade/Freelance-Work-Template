import React from 'react';
import { useState } from 'react';
import { FaCalendarCheck } from 'react-icons/fa6';
import SectionHeader from './SectionHeader.jsx';
import { useReveal } from '../hooks/useReveal.js';

const initialForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  request: '',
};

function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const reveal = useReveal();

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your name.';
    if (!/^[0-9+\-\s()]{8,}$/.test(form.phone)) nextErrors.phone = 'Please enter a valid phone number.';
    if (!form.date) nextErrors.date = 'Please choose a date.';
    if (!form.time) nextErrors.time = 'Please choose a time.';
    if (Number(form.guests) < 1) nextErrors.guests = 'Guests must be at least 1.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      setForm(initialForm);
    }
  };

  return (
    <section id="reservation" className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Reservation"
          title="Book a table with a few details"
          text="The form validates essential information and shows a confirmation once submitted."
        />
        <form
          ref={reveal.ref}
          onSubmit={handleSubmit}
          className={`mx-auto grid max-w-4xl gap-5 rounded-[2rem] bg-white p-5 shadow-soft transition-all duration-700 sm:p-8 md:grid-cols-2 ${reveal.className}`}
          noValidate
        >
          <Field label="Name" name="name" value={form.name} onChange={updateField} error={errors.name} autoComplete="name" />
          <Field label="Phone" name="phone" value={form.phone} onChange={updateField} error={errors.phone} autoComplete="tel" />
          <Field label="Date" name="date" type="date" value={form.date} onChange={updateField} error={errors.date} />
          <Field label="Time" name="time" type="time" value={form.time} onChange={updateField} error={errors.time} />
          <Field label="Guests" name="guests" type="number" min="1" max="18" value={form.guests} onChange={updateField} error={errors.guests} />
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-extrabold text-charcoal">Special Request</span>
            <textarea
              name="request"
              value={form.request}
              onChange={updateField}
              rows="4"
              className="w-full rounded-2xl border border-charcoal/10 bg-cream px-4 py-3 text-charcoal transition focus:border-ember focus:bg-white"
              placeholder="Birthday setup, dietary preference, seating request..."
            />
          </label>
          {success && (
            <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 md:col-span-2">
              Your table request has been received. We will call shortly to confirm.
            </p>
          )}
          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ember px-7 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-1 hover:bg-flame md:col-span-2"
          >
            <FaCalendarCheck aria-hidden="true" />
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, ...props }) {
  const errorId = `${name}-error`;

  return (
    <label>
      <span className="mb-2 block text-sm font-extrabold text-charcoal">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="h-14 w-full rounded-2xl border border-charcoal/10 bg-cream px-4 text-charcoal transition focus:border-ember focus:bg-white"
        {...props}
      />
      {error && (
        <span id={errorId} className="mt-2 block text-sm font-semibold text-flame">
          {error}
        </span>
      )}
    </label>
  );
}

export default Reservation;
