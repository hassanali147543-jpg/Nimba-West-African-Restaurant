import React from 'react';
import { Heart, Sun, Flame } from 'lucide-react';
import chefLondonImg from '../assets/images/chef_london_cooking_1789234671101.jpg';

export const OurStory: React.FC = () => {
  return (
    <section
      id="story"
      className="py-20 md:py-28 bg-[#FBF6EE] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-[#3F5C3A] mb-2">
            Our Story & Heritage
          </p>
          <h2
            id="story-headline"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#231A15] leading-[1.2]"
          >
            Rooted in family recipes, cooked for our neighbors.
          </h2>
        </div>

        {/* 2-Column Story Rhythm: Image on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Decorative warm tone backing */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#D8A13B]/40 rounded-[3px] -z-10"></div>
              
              <div className="overflow-hidden rounded-[3px] shadow-sm bg-[#231A15]">
                <img
                  id="chef-london-photo"
                  src={chefLondonImg}
                  alt="London, owner and chef of Nimba, carefully plating stew in the Bridgeport kitchen"
                  className="w-full h-auto object-cover aspect-4/3 sm:aspect-5/4 hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption pill */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#4A3C34] px-1 font-sans">
                <span>London in the kitchen at 3252 S Morgan St</span>
                <span className="text-[#3F5C3A] font-medium">Bridgeport, Chicago</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-5 text-base sm:text-lg text-[#4A3C34] leading-relaxed font-light">
              <p>
                Nimba was born out of a deep reverence for West African home cooking. Growing up with Liberian traditions, food wasn't just supper on a plate; it was hours of slow braising, the crackle of aromatics hitting palm oil, and pots of cassava leaf stew that brought people together across generations.
              </p>
              
              <p>
                When London opened Nimba in Bridgeport, she set out to create a kitchen where every single batch of jollof rice is seasoned from scratch, potato greens simmer until silky and tender with smoked turkey, and plantains are sliced and fried to order. No shortcuts, no reheated bases.
              </p>

              {/* The Personal Redelivery Story */}
              <div className="p-5 my-3 bg-[#F4EDE0] border-l-3 border-[#B3441E] rounded-r-[3px]">
                <p className="text-[#231A15] font-normal italic text-base leading-relaxed">
                  "One evening when a delivery driver botched an order and left a regular customer waiting, London didn't just issue an apology. She packed a fresh, steaming-hot order straight from the stove, slipped in a sample of a new dish she was testing, and drove across town to personally deliver dinner directly to their doorstep."
                </p>
                <p className="text-xs text-[#4A3C34] mt-2 font-medium not-italic">
                  That dedication to people is simply how London does business every day.
                </p>
              </div>

              <p>
                Whether you stop in for a quick weekday lunch, pick up dinner for your family, or spend a warm weekend afternoon out on our backyard patio with fried plantains and pepper soup, you are treated like family the moment you walk through the door.
              </p>

              {/* Sign-off */}
              <div className="pt-4 border-t border-[#E8DCCB]">
                <p
                  id="owner-signature"
                  className="font-serif-heading text-xl sm:text-2xl text-[#231A15] italic font-normal"
                >
                  — London, Owner
                </p>
                <p className="text-xs text-[#3F5C3A] font-medium tracking-normal mt-0.5">
                  Nimba West African Kitchen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
