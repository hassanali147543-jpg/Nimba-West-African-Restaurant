import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Utensils, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBF6EE]/95 backdrop-blur-md shadow-xs border-b border-[#E8DCCB]'
          : 'bg-[#FBF6EE] border-b border-[#E8DCCB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-baseline space-x-2 group focus:outline-hidden"
          >
            <span className="font-serif-heading text-3xl sm:text-4xl font-semibold tracking-tight text-[#231A15] group-hover:text-[#B3441E] transition-colors">
              Nimba
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#3F5C3A] tracking-normal font-sans">
              West African Kitchen
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#231A15] hover:text-[#B3441E] text-base font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B3441E] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Order Now & Call */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              id="nav-phone-link"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm font-medium text-[#231A15] hover:text-[#B3441E] px-2 py-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B3441E]" />
              <span>(708) 517-3547</span>
            </a>
            <a
              id="nav-order-now-btn"
              href="#visit"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#B3441E] hover:bg-[#983716] text-white text-sm font-medium rounded-[3px] transition-colors duration-150"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#visit"
              className="px-3.5 py-1.5 bg-[#B3441E] text-white text-xs font-medium rounded-[3px]"
            >
              Order
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#231A15] hover:text-[#B3441E] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-[#FBF6EE] border-b border-[#E8DCCB] px-6 py-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#E8DCCB]">
              <p className="text-xs text-[#3F5C3A] font-medium">Bridgeport, Chicago</p>
              <p className="text-sm text-[#4A3C34]">{RESTAURANT_INFO.address}</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#231A15] hover:text-[#B3441E] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8DCCB] flex flex-col gap-2.5">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#231A15] text-[#231A15] rounded-[3px] text-sm font-medium hover:bg-[#F3EBDD] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B3441E]" />
                Call (708) 517-3547
              </a>
              <a
                href="#visit"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#B3441E] text-white rounded-[3px] text-sm font-medium hover:bg-[#983716] transition-colors"
              >
                <Utensils className="w-4 h-4" />
                Order Pickup or Delivery
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
