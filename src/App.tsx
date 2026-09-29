import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF6EE] text-[#231A15]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Marquee Dish Strip */}
        <MarqueeStrip />

        {/* 3. Our Story Section */}
        <OurStory />

        {/* 4. Signature Menu Section */}
        <MenuSection />

        {/* 5. Food Gallery Grid */}
        <GallerySection />

        {/* 6. Customer Reviews on Dark Background */}
        <ReviewsSection />

        {/* 7. Visit Us & Ordering Section */}
        <VisitSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
