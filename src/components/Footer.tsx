import React from 'react';
import { Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#231A15] text-[#FBF6EE] border-t border-[#3A2D25] pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3A2D25]">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-serif-heading text-3xl sm:text-4xl font-semibold text-[#FBF6EE] tracking-tight">
                Nimba
              </span>
              <p className="text-sm text-[#D8A13B] font-medium mt-1">
                West African & Liberian Homestyle Cooking
              </p>
              <p className="text-sm text-[#E8DCCB]/80 font-light mt-4 max-w-md leading-relaxed">
                Handcrafted Jollof rice, slow-simmered cassava leaf, tender potato greens, and authentic West African hospitality in the heart of Bridgeport, Chicago.
              </p>
            </div>

            {/* Owner Tribute */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#E8DCCB]/70 font-light">
              <span>Made with love by London & family</span>
              <span>·</span>
              <span className="text-[#3F5C3A] font-medium">Bridgeport, IL</span>
            </div>
          </div>

          {/* Quick Links & Info */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D8A13B]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#E8DCCB]">
              <li>
                <a href="#story" className="hover:text-[#FBF6EE] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FBF6EE] transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FBF6EE] transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FBF6EE] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FBF6EE] transition-colors">
                  Visit & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D8A13B]">
              Direct Contact
            </h3>
            <div className="space-y-2 text-sm text-[#E8DCCB]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B3441E] shrink-0 mt-0.5" />
                <span>3252 S Morgan St<br />Chicago, IL 60608</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#3F5C3A] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:underline font-medium text-white"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="text-xs text-[#E8DCCB]/70 pt-2 font-light">
                Closed Mon & Tue<br />
                Wed–Sun: 12:00 PM – 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DCCB]/70">
          <p>
            © {new Date().getFullYear()} Nimba West African Kitchen. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-[#D8A13B] hover:underline"
            >
              Call (708) 517-3547
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#E8DCCB] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
