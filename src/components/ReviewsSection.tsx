import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REAL_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#231A15] text-[#FBF6EE] relative overflow-hidden"
    >
      {/* Subtle background warm pattern/glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B3441E]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3F5C3A]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#3A2D25]">
          <div>
            <p className="text-sm font-medium text-[#D8A13B] mb-2">
              Words from Our Community
            </p>
            <h2
              id="reviews-headline"
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF6EE]"
            >
              Beloved by Chicago regulars.
            </h2>
          </div>

          {/* Google Summary Badge */}
          <div className="mt-6 md:mt-0 flex items-center gap-3 bg-[#322620] px-4 py-2.5 rounded-[3px] border border-[#4A3C34]">
            <div className="flex items-center gap-1 text-[#D8A13B]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 fill-[#D8A13B] ${i === 4 ? '[clip-path:polygon(0_0,50%_0,50%_100%,0_100%)]' : ''}`}
                />
              ))}
            </div>
            <div className="text-xs text-[#E8DCCB]">
              <span className="font-semibold text-white">4.5 Stars</span> · Google Reviews
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Card Layout */}
        <div
          id="reviews-cards-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {REAL_REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              id={`review-card-${idx + 1}`}
              className="bg-[#2B201A] border border-[#3A2D25] rounded-[3px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D8A13B]/50 transition-colors"
            >
              <div>
                {/* 5-Star Rating Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-1 text-[#D8A13B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8A13B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#4A3C34]" />
                </div>

                {/* Review Text */}
                <p className="text-[#FBF6EE]/90 text-base sm:text-lg font-light leading-relaxed mb-6 font-sans">
                  "{review.quote}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-[#3A2D25] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D8A13B]"></span>
                  <span className="text-xs font-medium text-[#E8DCCB] tracking-normal">
                    {review.author}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#3F5C3A] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#3F5C3A]" />
                  <span>Verified Guest</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Quote below */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#E8DCCB]/80 italic">
            "Cooked with love and passion — from London's kitchen to your table."
          </p>
        </div>
      </div>
    </section>
  );
};
