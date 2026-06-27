import { restaurant } from '../data/restaurantData.js';
import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-charcoal text-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-2 border-white/15" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-ember" />
          <span className="absolute inset-4 rounded-full bg-ember shadow-glow" />
        </div>
        <p className="font-display text-2xl font-bold">{restaurant.name}</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
