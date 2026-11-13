import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { FORTY_NINE_POINT_AREAS } from '../data/maidOkData';
import { ImageWithFallback } from './ImageWithFallback';
import { RouteSlug } from '../types';

interface FortyNinePointSectionProps {
  onNavigate: (route: RouteSlug) => void;
}

export function FortyNinePointSection({
  onNavigate,
}: FortyNinePointSectionProps) {
  const [activeId, setActiveId] = useState(FORTY_NINE_POINT_AREAS[0].id);

  const activeArea =
    FORTY_NINE_POINT_AREAS.find((area) => area.id === activeId) ??
    FORTY_NINE_POINT_AREAS[0];

  return (
    <section
      aria-labelledby="forty-nine-heading"
      className="py-20 lg:py-28 bg-[#29332E] text-[#FAF8F2]"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#AEBFAF] mb-4">
              The 49-Point Quality Standard
            </p>
            <h2
              id="forty-nine-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium text-[#FAF8F2]"
            >
              The Difference Is in the Details.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg leading-relaxed text-[#FAF8F2]/80">
              A 49-point quality-control process guides every clean, helping
              maintain consistent standards from visit to visit. Explore
              representative focus areas below.
            </p>
          </div>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Numbered Navigation Sequence */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div
              role="tablist"
              aria-label="Representative 49-point quality-control areas"
              className="divide-y divide-[#FAF8F2]/12 border-y border-[#FAF8F2]/12"
            >
              {FORTY_NINE_POINT_AREAS.map((area) => {
                const isSelected = area.id === activeArea.id;
                return (
                  <button
                    key={area.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveId(area.id)}
                    className={`w-full text-left py-5 px-3 sm:px-4 transition-colors duration-200 flex items-start gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AEBFAF] ${
                      isSelected
                        ? 'bg-[#35483D]/55 text-[#FAF8F2]'
                        : 'text-[#FAF8F2]/70 hover:text-[#FAF8F2] hover:bg-[#FAF8F2]/[0.03]'
                    }`}
                  >
                    <span className="font-serif text-2xl tabular-nums text-[#AEBFAF] shrink-0 pt-0.5">
                      {area.number}
                    </span>
                    <div className="min-w-0">
                      <span className="block text-lg font-medium leading-snug">
                        {area.title}
                      </span>
                      <span className="block text-sm text-[#FAF8F2]/65 mt-1">
                        {area.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <p className="text-xs leading-relaxed text-[#AEBFAF]/90 mb-5">
                Note: The complete 49-point checklist is an internal operational
                guide. Items listed here are representative verified examples;
                exact tasks performed vary by service type (Recurring, One-Time,
                Deep, or Moving) and confirmed priorities.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium bg-[#FAF8F2] text-[#29332E] hover:bg-[#EAE5DA] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AEBFAF]"
              >
                <span>Request a Custom Cleaning Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Area Detail Panel */}
          <div
            role="tabpanel"
            aria-label={activeArea.title}
            className="lg:col-span-7 bg-[#35483D]/35 border border-[#FAF8F2]/12 rounded-sm overflow-hidden grid sm:grid-cols-12"
          >
            <div className="sm:col-span-6 aspect-[4/3] sm:aspect-auto min-h-[260px]">
              <ImageWithFallback
                src={activeArea.image}
                alt={activeArea.imageAlt}
                fallbackLabel={activeArea.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#AEBFAF] mb-3">
                  <span className="tabular-nums">{activeArea.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>Representative Examples</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F2] mb-5">
                  {activeArea.title}
                </h3>
                <ul className="space-y-3.5">
                  {activeArea.representativePoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#FAF8F2]/88"
                    >
                      <Check
                        className="w-4 h-4 text-[#AEBFAF] shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 pt-4 border-t border-[#FAF8F2]/12 text-xs leading-relaxed text-[#FAF8F2]/65">
                {activeArea.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
