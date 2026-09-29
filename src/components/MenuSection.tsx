import React, { useState } from 'react';
import { SIGNATURE_DISHES, RESTAURANT_INFO } from '../data/restaurantData';
import { Utensils, Info, CheckCircle2 } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mains' | 'soups' | 'sides'>('all');

  const filteredDishes = activeCategory === 'all'
    ? SIGNATURE_DISHES
    : SIGNATURE_DISHES.filter((dish) => dish.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#F4EDE0] border-y border-[#E8DCCB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8DCCB]">
          <div>
            <p className="text-sm font-medium text-[#3F5C3A] mb-2">
              Fresh Daily from London's Kitchen
            </p>
            <h2
              id="menu-headline"
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#231A15]"
            >
              Signature Menu
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Dishes' },
              { id: 'mains', label: 'Stews & Mains' },
              { id: 'soups', label: 'Pepper Soups' },
              { id: 'sides', label: 'Sides & Starters' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`menu-filter-${tab.id}`}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-[3px] transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-[#231A15] text-[#FBF6EE]'
                    : 'bg-[#FBF6EE] text-[#4A3C34] hover:bg-[#E8DCCB] border border-[#E8DCCB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Editorial Menu List */}
        <div
          id="menu-items-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
        >
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              id={`dish-item-${dish.id}`}
              className="group flex flex-col justify-between pb-6 border-b border-[#E8DCCB] hover:border-[#B3441E] transition-colors"
            >
              <div>
                {/* Name, Badge & Price Line */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-[#231A15] group-hover:text-[#B3441E] transition-colors">
                      {dish.name}
                    </h3>
                    {dish.badge && (
                      <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-[2px] bg-[#3F5C3A]/10 text-[#3F5C3A] border border-[#3F5C3A]/20">
                        {dish.badge}
                      </span>
                    )}
                  </div>
                  {/* Dotted connector leader on larger screens */}
                  <span className="font-serif-heading text-xl font-bold text-[#B3441E] shrink-0">
                    {dish.price}
                  </span>
                </div>

                {/* One-line Description */}
                <p className="text-sm sm:text-base text-[#4A3C34] font-light leading-relaxed mb-2">
                  {dish.description}
                </p>
              </div>

              {/* Dietary Tag */}
              {dish.dietary && (
                <div className="text-xs text-[#3F5C3A] font-medium tracking-normal mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3F5C3A]"></span>
                  <span>{dish.dietary}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mandatory Sample Pricing Note & Order Callout */}
        <div className="mt-14 pt-8 border-t border-[#E8DCCB] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3C34] max-w-2xl">
            <Info className="w-4 h-4 text-[#B3441E] shrink-0 mt-0.5" />
            <p id="menu-disclaimer-note" className="italic">
              Menu items and prices shown are samples — final menu and pricing to be confirmed with the restaurant. Special seasonal dishes and daily batches are announced in-house.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#visit"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#B3441E] hover:bg-[#983716] text-white text-sm font-medium rounded-[3px] transition-colors"
            >
              <Utensils className="w-4 h-4 mr-2" />
              Order Online / Pickup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
