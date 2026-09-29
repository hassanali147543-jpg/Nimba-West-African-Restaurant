import React from 'react';
import { MARQUEE_ITEMS } from '../data/restaurantData';

export const MarqueeStrip: React.FC = () => {
  // Duplicate array to ensure smooth infinite loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      id="dishes-marquee-strip"
      className="bg-[#231A15] border-y border-[#3A2D25] py-4 overflow-hidden select-none"
    >
      <div className="flex w-max animate-marquee items-center">
        {items.map((dish, index) => (
          <div key={`${dish}-${index}`} className="flex items-center">
            <span className="font-serif-heading text-lg sm:text-xl text-[#FBF6EE] font-medium tracking-wide px-6 whitespace-nowrap">
              {dish}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8A13B]/80 mx-2 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
