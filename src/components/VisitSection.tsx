import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, WEEKLY_HOURS } from '../data/restaurantData';

export const VisitSection: React.FC = () => {
  // Determine if open right now based on Chicago time
  const getOpenStatus = () => {
    try {
      const now = new Date();
      // Chicago is America/Chicago
      const chicagoTimeString = now.toLocaleString("en-US", { timeZone: "America/Chicago" });
      const chicagoDate = new Date(chicagoTimeString);
      const day = chicagoDate.getDay(); // 0 is Sunday, 1 is Monday...
      const hour = chicagoDate.getHours();

      // Closed Monday (1) & Tuesday (2)
      if (day === 1 || day === 2) {
        return { isOpen: false, text: "Closed today · Opens Wednesday at 12:00 PM" };
      }
      // Wed (3) - Sun (0): 12:00 PM (12) to 8:00 PM (20)
      if (hour >= 12 && hour < 20) {
        return { isOpen: true, text: "Open right now · Closes at 8:00 PM" };
      }
      return { isOpen: false, text: "Closed now · Open today 12:00 PM – 8:00 PM" };
    } catch {
      return { isOpen: true, text: "Open Wed–Sun: 12:00 PM – 8:00 PM" };
    }
  };

  const status = getOpenStatus();

  return (
    <section
      id="visit"
      className="py-20 md:py-28 bg-[#FBF6EE] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-sm font-medium text-[#3F5C3A] mb-2">
            Bridgeport, Chicago
          </p>
          <h2
            id="visit-headline"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#231A15]"
          >
            Visit us & place an order.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A3C34] font-light">
            We look forward to feeding you. Dine in, enjoy our cozy outdoor patio, or order your favorites for pickup and delivery.
          </p>
        </div>

        {/* 2-Column Content Grid: Info & Hours on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Details & Hours Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#F4EDE0] border border-[#E8DCCB] mb-6">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    status.isOpen ? 'bg-[#3F5C3A] animate-pulse' : 'bg-[#B3441E]'
                  }`}
                />
                <span className="text-xs font-medium text-[#231A15]">
                  {status.text}
                </span>
              </div>

              {/* Address & Phone */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B3441E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-[#231A15]">Location</h3>
                    <p className="text-base text-[#4A3C34]">{RESTAURANT_INFO.address}</p>
                    <p className="text-xs text-[#3F5C3A] mt-0.5 font-medium">Bridgeport Neighborhood · Free & meter street parking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#3F5C3A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-[#231A15]">Phone & Call-Ahead</h3>
                    <a
                      id="visit-phone-link"
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-base font-medium text-[#B3441E] hover:underline inline-flex items-center gap-1"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <p className="text-xs text-[#4A3C34] mt-0.5">Call directly for takeout orders, catering, and daily specials.</p>
                  </div>
                </div>

                {/* Outdoor Patio Note */}
                <div className="flex items-start gap-3 bg-[#F4EDE0] p-3.5 rounded-[2px] border border-[#E8DCCB]">
                  <Sparkles className="w-5 h-5 text-[#D8A13B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#231A15]">Outdoor Patio Seating</h4>
                    <p className="text-xs text-[#4A3C34] mt-0.5">
                      Relax on our welcoming backyard garden patio during spring, summer, and warm autumn afternoons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Weekly Hours Table */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3F5C3A] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Weekly Hours</span>
                </h3>
                <div className="border border-[#E8DCCB] rounded-[2px] overflow-hidden bg-white/40 divide-y divide-[#E8DCCB]">
                  {WEEKLY_HOURS.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between px-4 py-2.5 text-sm"
                    >
                      <span className="font-medium text-[#231A15]">{item.day}</span>
                      <span
                        className={
                          item.isOpen
                            ? 'text-[#231A15] font-normal'
                            : 'text-[#B3441E] font-medium'
                        }
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Three Required Action Buttons */}
            <div className="pt-4 border-t border-[#E8DCCB]">
              <p className="text-xs font-semibold text-[#3F5C3A] mb-3 uppercase tracking-wide">
                Ready to eat? Choose your order option:
              </p>
              <div
                id="order-actions-container"
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {/* Button 1: Call to Order */}
                <a
                  id="call-to-order-btn"
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-4 py-3 bg-[#231A15] hover:bg-[#322620] text-white text-sm font-medium rounded-[3px] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#D8A13B]" />
                  <span>Call to Order</span>
                </a>

                {/* Button 2: Order on DoorDash */}
                <a
                  id="order-doordash-btn"
                  href={RESTAURANT_INFO.doorDashLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-[#B3441E] hover:bg-[#983716] text-white text-sm font-medium rounded-[3px] transition-colors"
                >
                  <UtensilsCrossed className="w-4 h-4 mr-2" />
                  <span>DoorDash</span>
                </a>

                {/* Button 3: Order on Uber Eats */}
                <a
                  id="order-ubereats-btn"
                  href={RESTAURANT_INFO.uberEatsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-[#3F5C3A] hover:bg-[#2C4328] text-white text-sm font-medium rounded-[3px] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>Uber Eats</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[400px] lg:h-full min-h-[380px] rounded-[3px] overflow-hidden border border-[#E8DCCB] shadow-xs bg-[#E8DCCB]">
              <iframe
                id="google-maps-embed"
                title="Google Maps Location of Nimba in Bridgeport Chicago"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=3252+S+Morgan+St,+Chicago,+IL+60608&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
              {/* Map Footer overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-[#FBF6EE]/95 backdrop-blur-xs p-3 border-t border-[#E8DCCB] flex items-center justify-between">
                <div className="text-xs text-[#231A15]">
                  <span className="font-semibold">Nimba West African Kitchen</span>
                  <p className="text-[#4A3C34]">3252 S Morgan St, Chicago, IL 60608</p>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#B3441E] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
