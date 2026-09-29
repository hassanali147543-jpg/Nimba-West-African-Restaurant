import React from 'react';
import { Star, Clock, Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroJollofImg from '../assets/images/hero_jollof_bowl_1789234653341.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-[#3F5C3A]"></span>
              <span
                id="hero-eyebrow"
                className="text-sm font-medium tracking-wide text-[#3F5C3A]"
              >
                Bridgeport, Chicago · Open Wed–Sun
              </span>
            </div>

            {/* Large Headline */}
            <h1
              id="hero-main-headline"
              className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#231A15] mb-6"
            >
              West African cooking, made with love in Bridgeport.
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-description-paragraph"
              className="text-lg sm:text-xl text-[#4A3C34] leading-relaxed max-w-2xl mb-8 font-light"
            >
              Rooted in rich Liberian family traditions, owner London brings slow-simmered stews, aromatic jollof rice, and soulful dishes prepared fresh daily to Morgan Street. Pull up a chair in our welcoming dining room or relax outside on our neighborhood patio.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                id="hero-see-menu-btn"
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#B3441E] hover:bg-[#983716] text-white text-base font-medium rounded-[3px] transition-colors shadow-xs group"
              >
                <span>See the Menu</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-get-directions-btn"
                href={RESTAURANT_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-[#231A15] hover:bg-[#231A15] hover:text-[#FBF6EE] text-[#231A15] text-base font-medium rounded-[3px] transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2 text-[#3F5C3A]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Stat Row */}
            <div
              id="hero-stats-row"
              className="pt-8 border-t border-[#E8DCCB] grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {/* Stat 1: Google Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#231A15] mb-1">
                  <span className="font-serif-heading text-2xl font-bold">4.5</span>
                  <div className="flex items-center text-[#D8A13B]">
                    <Star className="w-4 h-4 fill-[#D8A13B]" />
                    <Star className="w-4 h-4 fill-[#D8A13B]" />
                    <Star className="w-4 h-4 fill-[#D8A13B]" />
                    <Star className="w-4 h-4 fill-[#D8A13B]" />
                    <Star className="w-4 h-4 fill-[#D8A13B] [clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]" />
                  </div>
                </div>
                <span className="text-xs text-[#4A3C34] tracking-normal font-medium">
                  Google Rating · 80+ Local Reviews
                </span>
              </div>

              {/* Stat 2: 100% Scratch */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#231A15] mb-1">
                  <Sparkles className="w-4 h-4 text-[#3F5C3A]" />
                  <span className="font-serif-heading text-2xl font-bold">100%</span>
                </div>
                <span className="text-xs text-[#4A3C34] tracking-normal font-medium">
                  Made From Scratch Daily
                </span>
              </div>

              {/* Stat 3: Hours */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#231A15] mb-1">
                  <Clock className="w-4 h-4 text-[#B3441E]" />
                  <span className="font-serif-heading text-xl sm:text-2xl font-bold">Wed–Sun</span>
                </div>
                <span className="text-xs text-[#4A3C34] tracking-normal font-medium">
                  12:00 PM – 8:00 PM · Closed Mon & Tue
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle architectural frame accent */}
              <div className="absolute -inset-2 rounded-[6px] border border-[#3F5C3A]/20 -z-10 translate-x-2 translate-y-2"></div>
              
              <div className="relative overflow-hidden rounded-[4px] shadow-md bg-[#231A15]">
                <img
                  id="hero-jollof-image"
                  src={heroJollofImg}
                  alt="Plated West African Jollof Rice bowl with golden fried plantains at Nimba"
                  className="w-full h-auto object-cover aspect-4/3 sm:aspect-square lg:aspect-4/3 hover:scale-[1.02] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Editorial image caption tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#231A15]/90 via-[#231A15]/60 to-transparent p-5 text-white">
                  <p className="font-serif-heading text-lg font-medium text-[#FBF6EE]">
                    Signature Jollof Rice & Sweet Plantains
                  </p>
                  <p className="text-xs text-[#E8DCCB] font-light mt-0.5">
                    Slow-simmered in seasoned tomato-pepper reduction
                  </p>
                </div>
              </div>

              {/* Warm neighborhood stamp */}
              <div className="absolute -bottom-4 -left-4 bg-[#FBF6EE] border border-[#E8DCCB] px-4 py-2 rounded-[2px] shadow-sm hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B3441E]"></span>
                <span className="text-xs font-medium text-[#231A15]">3252 S Morgan St · Bridgeport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
