import React, { useEffect, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import SectionHeader from './SectionHeader.jsx';
import { galleryImages } from '../data/restaurantData.js';
import { useReveal } from '../hooks/useReveal.js';

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="gallery" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="A glimpse of the atmosphere"
          text="Dining room moments, kitchen craft, and polished plates from the Aurora Table experience."
        />
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <GalleryTile
              key={image.src}
              image={image}
              index={index}
              onOpen={() => setActiveImage(image)}
            />
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-charcoal shadow-soft"
            onClick={() => setActiveImage(null)}
            aria-label="Close gallery preview"
          >
            <FaXmark aria-hidden="true" />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[84vh] w-full max-w-5xl rounded-[1.5rem] object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function GalleryTile({ image, index, onOpen }) {
  const reveal = useReveal();
  const span = index === 0 || index === 5 ? 'lg:col-span-2' : '';

  return (
    <button
      ref={reveal.ref}
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden rounded-[1.6rem] shadow-soft transition-all duration-700 hover:-translate-y-1 hover:shadow-glow ${span} ${reveal.className}`}
      aria-label={`Open preview: ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
    </button>
  );
}

export default Gallery;
