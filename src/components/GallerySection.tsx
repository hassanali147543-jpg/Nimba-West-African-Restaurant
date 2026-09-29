import React, { useState } from 'react';
import galleryJollofImg from '../assets/images/gallery_jollof_1789234683604.jpg';
import galleryCassavaImg from '../assets/images/gallery_cassava_leaf_1789234695978.jpg';
import galleryPlantainsImg from '../assets/images/gallery_plantains_1789234708767.jpg';
import galleryPepperSoupImg from '../assets/images/gallery_peppersoup_1789234723971.jpg';

interface GalleryDish {
  id: string;
  name: string;
  subtitle: string;
  src: string;
  alt: string;
}

export const GallerySection: React.FC = () => {
  const galleryDishes: GalleryDish[] = [
    {
      id: 'gallery-jollof',
      name: 'Jollof Rice',
      subtitle: 'Fragrant steamed rice, fresh parsley & roasted red pepper sauce',
      src: galleryJollofImg,
      alt: 'Close-up of West African Jollof Rice in a white ceramic bowl with herbs',
    },
    {
      id: 'gallery-cassava',
      name: 'Cassava Leaf Stew',
      subtitle: 'Slow-simmered rich greens, savory aromatics & white jasmine rice',
      src: galleryCassavaImg,
      alt: 'Traditional West African Cassava Leaf Stew in a rustic bowl with white rice',
    },
    {
      id: 'gallery-plantains',
      name: 'Fried Plantains (Dodo)',
      subtitle: 'Golden caramelized edges, tender center, fried fresh to order',
      src: galleryPlantainsImg,
      alt: 'Golden fried sweet plantains stacked on a ceramic dish',
    },
    {
      id: 'gallery-peppersoup',
      name: 'Salmon Pepper Soup',
      subtitle: 'Traditional aromatic spiced broth with tender wild herbs & salmon',
      src: galleryPepperSoupImg,
      alt: 'Steaming bowl of West African Salmon Pepper Soup with fragrant herbs',
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#FBF6EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-[#3F5C3A] mb-2">
            A Feast for the Senses
          </p>
          <h2
            id="gallery-headline"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#231A15] leading-[1.2]"
          >
            Plated with passion.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A3C34] font-light">
            Every dish at Nimba is prepared fresh from whole ingredients — vibrant colors, fragrant West African spices, and slow cooking you can taste.
          </p>
        </div>

        {/* 4-Image Grid */}
        <div
          id="gallery-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryDishes.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="group relative flex flex-col bg-[#F4EDE0] border border-[#E8DCCB] rounded-[3px] overflow-hidden transition-all duration-300 hover:border-[#B3441E] hover:shadow-md"
            >
              {/* Image Container */}
              <div className="overflow-hidden aspect-square relative bg-[#231A15]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231A15]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading text-xl font-medium text-[#231A15] group-hover:text-[#B3441E] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#4A3C34] font-light mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#E8DCCB]/60 flex items-center justify-between text-[11px] text-[#3F5C3A] font-medium">
                  <span>Cooked Fresh Daily</span>
                  <span>Made in Bridgeport</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
