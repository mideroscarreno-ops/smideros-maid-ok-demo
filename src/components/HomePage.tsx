import { ArrowRight, Check, Phone, ShieldCheck } from 'lucide-react';
import {
  AUTHENTIC_REVIEWS,
  BUSINESS_INFO,
  EDITORIAL_KITCHEN_IMAGE,
  HERO_IMAGE,
  SERVICES,
  TRUST_PILLARS,
} from '../data/maidOkData';
import { QuoteServiceChoice, RouteSlug } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { FortyNinePointSection } from './FortyNinePointSection';
import { ServiceAreasSection } from './ServiceAreasSection';
import { FaqAccordion } from './FaqAccordion';

interface HomePageProps {
  onNavigate: (route: RouteSlug) => void;
  onStartQuote: (service?: QuoteServiceChoice) => void;
  onSelectCityForQuote: (cityOrZip: string) => void;
}

export function HomePage({
  onNavigate,
  onStartQuote,
  onSelectCityForQuote,
}: HomePageProps) {
  const scrollToServices = () => {
    const el = document.getElementById('home-services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* B. CINEMATIC LIFESTYLE HERO */}
      <section className="relative bg-[#FAF8F2] pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Editorial Copy Column */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2 lg:py-4">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-5">
                  Norman &amp; Greater Oklahoma City Metro
                </p>

                <h1 className="font-serif text-[44px] sm:text-[54px] lg:text-[62px] leading-[1.03] font-medium text-[#29332E] mb-6">
                  Come Home to Calm.
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80 max-w-md mb-8">
                  Thoughtful house cleaning for busy Oklahoma families. More
                  time for the people and moments that matter.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <button
                    type="button"
                    onClick={() => onStartQuote()}
                    className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F2]"
                  >
                    <span>Get My Free Cleaning Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#35483D] hover:text-[#29332E] underline underline-offset-4 transition-colors min-h-[44px]"
                  >
                    <span>Explore Our Services</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-[#29332E]/12 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#29332E]/75">
                <span>Family-Owned.</span>
                <span aria-hidden="true" className="text-[#6E8C7A]">
                  ·
                </span>
                <span>Locally Trusted.</span>
                <span aria-hidden="true" className="text-[#6E8C7A]">
                  ·
                </span>
                <span>Detail-Driven.</span>
              </div>
            </div>

            {/* Sunlit Hero Photography */}
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[540px] rounded-sm overflow-hidden border border-[#29332E]/10 relative">
              <ImageWithFallback
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fallbackLabel="Come Home to Calm"
                priority
                className="w-full h-full object-cover"
              />
              <div className="hidden sm:block absolute bottom-5 left-5 bg-[#FAF8F2]/94 backdrop-blur-sm border border-[#29332E]/10 px-5 py-3.5 rounded-sm max-w-xs">
                <p className="font-serif italic text-lg text-[#29332E] leading-snug">
                  &ldquo;More Life. Less Housework.&rdquo;
                </p>
                <p className="text-xs text-[#6E8C7A] mt-1 tabular-nums">
                  49-Point Process · Starting at {BUSINESS_INFO.startingPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. MORE TIME FOR WHAT MATTERS */}
      <section className="py-20 lg:py-28 bg-[#EAE5DA]/65 border-y border-[#29332E]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 aspect-[4/3] rounded-sm overflow-hidden border border-[#29332E]/10">
            <ImageWithFallback
              src={EDITORIAL_KITCHEN_IMAGE.src}
              alt={EDITORIAL_KITCHEN_IMAGE.alt}
              fallbackLabel="More Life. Less Housework."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A]">
              More Life. Less Housework.
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.08] text-[#29332E]">
              Your Time Is Worth More Than Another To-Do List.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80">
              Weekends fill quickly between family schedules, commutes across
              the metro, and everyday commitments. Maid OK steps in to handle
              routine and detailed home care so stepping through your front
              door feels restorative rather than demanding.
            </p>
            <p className="text-base leading-relaxed text-[#29332E]/75">
              Our Norman-based team brings its own supplies and equipment, works
              without requiring long-term contracts, and follows a steady
              49-point quality-control standard—giving your household room to
              breathe.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('why-maid-ok')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E] transition-colors group"
              >
                <span>Discover Why Oklahoma Families Choose Maid OK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* D. SIX DIFFERENTIATED CLEANING & HOME SERVICES */}
      <section
        id="home-services-section"
        aria-labelledby="services-heading"
        className="py-20 lg:py-28 bg-[#FAF8F2]"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-6 items-end mb-14 lg:mb-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
                Tailored Residential Services
              </p>
              <h2
                id="services-heading"
                className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] text-[#29332E]"
              >
                Thoughtful Care for Every Season at Home.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E] underline underline-offset-4"
              >
                <span>Compare All Six Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Asymmetric Bento / Editorial Service Showcase (avoiding repetitive cloned 3-col cards) */}
          <div className="space-y-8">
            {/* Featured Marquee Pair: Recurring + Deep Cleaning */}
            <div className="grid lg:grid-cols-12 gap-8">
              {[SERVICES[0], SERVICES[2]].map((service, idx) => (
                <article
                  key={service.slug}
                  className={`${
                    idx === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                  } bg-white border border-[#29332E]/10 rounded-sm overflow-hidden flex flex-col`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackLabel={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#6E8C7A] mb-2.5">
                        <span className="tabular-nums">{service.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {service.slug === 'recurring'
                            ? 'Up to 15% Published Recurring Offer'
                            : 'Detailed Surfaces & Trim'}
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl text-[#29332E] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-[#29332E]/80 mb-5">
                        {service.summary}
                      </p>
                      {service.policyNote && (
                        <p className="text-xs leading-relaxed text-[#29332E]/60 mb-5">
                          {service.policyNote}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#29332E]/10 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onNavigate(service.slug)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E] transition-colors"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onStartQuote(service.quoteOption)}
                        className="text-xs font-medium text-[#29332E]/70 hover:text-[#35483D] underline underline-offset-4"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Remaining Four Services in Editorial 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[SERVICES[1], SERVICES[3], SERVICES[4], SERVICES[5]].map(
                (service) => (
                  <article
                    key={service.slug}
                    className="bg-white border border-[#29332E]/10 rounded-sm overflow-hidden grid sm:grid-cols-12 items-stretch"
                  >
                    <div className="sm:col-span-5 aspect-[4/3] sm:aspect-auto min-h-[210px]">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.imageAlt}
                        fallbackLabel={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#6E8C7A] mb-2">
                          <span className="tabular-nums">{service.index}</span>
                          {service.slug === 'home-organizing' && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span>Distinct From Cleaning</span>
                            </>
                          )}
                        </div>
                        <h3 className="font-serif text-2xl sm:text-[26px] text-[#29332E] mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#29332E]/78 mb-4">
                          {service.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#29332E]/10 flex flex-wrap items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => onNavigate(service.slug)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#35483D] hover:text-[#29332E]"
                        >
                          <span>{service.ctaLabel}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => onStartQuote(service.quoteOption)}
                          className="text-xs font-medium text-[#29332E]/70 hover:text-[#35483D] underline underline-offset-4"
                        >
                          Quote
                        </button>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* E. THE 49-POINT STANDARD */}
      <FortyNinePointSection onNavigate={onNavigate} />

      {/* F. WHY HOMEOWNERS CHOOSE MAID OK */}
      <section className="py-20 lg:py-28 bg-[#FAF8F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
                Built on Local Trust
              </p>
              <h2 className="font-serif text-4xl sm:text-[44px] leading-[1.1] text-[#29332E] mb-4">
                Why Oklahoma Homeowners Choose Maid OK.
              </h2>
              <p className="text-base leading-relaxed text-[#29332E]/78 mb-6">
                No contracts, no hidden supply fees, and a long-standing local
                presence anchored in Norman.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('why-maid-ok')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E] underline underline-offset-4"
              >
                <span>About Our Norman Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#29332E]/12 border-y border-[#29332E]/12">
              {TRUST_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="py-6 sm:py-7 grid sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-5 flex items-baseline gap-4">
                    <span className="font-serif text-xl text-[#6E8C7A] tabular-nums">
                      {pillar.index}
                    </span>
                    <h3 className="font-serif text-2xl text-[#29332E]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="sm:col-span-7 text-sm sm:text-base leading-relaxed text-[#29332E]/78">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G. SATISFACTION GUARANTEE */}
      <section className="py-16 lg:py-24 bg-[#EAE5DA]/75 border-y border-[#29332E]/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#35483D]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.08] text-[#29332E]">
              Care You Can Count On.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/82">
              Maid OK backs its cleaning services with a published 100%
              satisfaction guarantee. If you ever report a cleaning issue under
              the company&rsquo;s published terms, Maid OK will address the
              concern within {BUSINESS_INFO.remediationWindow} at no additional
              cost.
            </p>
          </div>

          <div className="md:col-span-5 bg-[#FAF8F2] border border-[#29332E]/12 p-7 rounded-sm space-y-3">
            <p className="font-serif text-2xl text-[#29332E]">
              Published Guarantee Terms
            </p>
            <ul className="space-y-2.5 text-sm text-[#29332E]/80">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
                <span>
                  Report any cleaning concern promptly to the Norman office
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
                <span>
                  Reported issue addressed within 48 hours at no extra charge
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
                <span>
                  Subject to Maid OK&rsquo;s published service conditions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* H. AUTHENTIC CUSTOMER REVIEWS */}
      <section
        aria-labelledby="reviews-heading"
        className="py-20 lg:py-28 bg-[#FAF8F2]"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-14">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
                Authentic Customer Reviews
              </p>
              <h2
                id="reviews-heading"
                className="font-serif text-4xl sm:text-5xl text-[#29332E]"
              >
                Trusted Across Local Homes.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E] underline underline-offset-4 self-start sm:self-auto"
            >
              <span>Read All Published Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTHENTIC_REVIEWS.map((review) => (
              <figure
                key={review.id}
                className="bg-white border border-[#29332E]/10 p-7 rounded-sm flex flex-col justify-between"
              >
                <blockquote className="font-serif text-xl sm:text-[22px] leading-[1.38] text-[#29332E] mb-6">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="pt-4 border-t border-[#29332E]/10 flex items-center justify-between text-xs text-[#29332E]/60">
                  <span className="font-semibold text-sm text-[#35483D]">
                    {review.author}
                  </span>
                  <span>Verified Maid OK Review</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* I. HOW IT WORKS */}
      <section className="py-20 lg:py-24 bg-[#35483D] text-[#FAF8F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-14">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#AEBFAF] mb-3">
              Simple, Transparent Process
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.08] text-[#FAF8F2]">
              How Working With Maid OK Works.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                num: '01',
                title: 'Tell Us About Your Home',
                body: 'Choose a service and share your home details and cleaning priorities. Submitting an inquiry does not automatically confirm an appointment.',
              },
              {
                num: '02',
                title: 'Review Your Estimate',
                body: 'Our Norman office reviews your request, confirms pricing based on your home’s needs, and coordinates available dates directly with you.',
              },
              {
                num: '03',
                title: 'Enjoy Your Clean Home',
                body: 'Our licensed, insured cleaning team arrives with supplies and equipment, following Maid OK’s 49-point quality-control process.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="pt-6 border-t border-[#FAF8F2]/20 space-y-3"
              >
                <span className="font-serif text-3xl text-[#AEBFAF] tabular-nums">
                  {step.num}
                </span>
                <h3 className="font-serif text-2xl sm:text-[28px] text-[#FAF8F2]">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#FAF8F2]/80">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* J. SERVICE AREAS */}
      <ServiceAreasSection
        onNavigate={onNavigate}
        onSelectCityForQuote={onSelectCityForQuote}
        compact
      />

      {/* K. PRICING TRANSPARENCY */}
      <section className="py-20 lg:py-24 bg-[#FAF8F2] border-b border-[#29332E]/10">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 bg-[#EAE5DA] p-8 sm:p-10 rounded-sm">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-2">
              Published Starting Rate
            </p>
            <p className="font-serif text-5xl sm:text-6xl text-[#29332E] tabular-nums mb-3">
              {BUSINESS_INFO.startingPrice}
              <span className="text-2xl text-[#6E8C7A] font-normal">+</span>
            </p>
            <p className="text-sm leading-relaxed text-[#29332E]/78">
              Residential cleaning services start at{' '}
              {BUSINESS_INFO.startingPrice}, with tailored estimates prepared by
              our office rather than one-size-fits-all guesswork.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A]">
              Pricing Transparency
            </p>
            <h2 className="font-serif text-4xl sm:text-[44px] leading-[1.1] text-[#29332E]">
              A Clear Starting Point. A Quote Made for Your Home.
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-[#29332E]/82">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-1" />
                <span>
                  Services start at {BUSINESS_INFO.startingPrice}, with final
                  pricing reflecting the home&rsquo;s actual size and condition.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-1" />
                <span>
                  If condition adjustments are needed upon arrival or review,
                  Maid OK confirms any changes with customer approval.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-1" />
                <span>
                  Submitting a website quote request begins the estimate
                  conversation—it is not an automatically confirmed appointment.
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onStartQuote()}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
              >
                <span>Start Your Free Personalized Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* L. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 bg-[#FAF8F2]">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 lg:mb-12">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
              Common Questions &amp; Policies
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#29332E] mb-3">
              Clear Answers Before You Book.
            </h2>
            <p className="text-base text-[#29332E]/75">
              Review how Maid OK handles quotes, supplies, pets, entry notes,
              and our 48-hour cancellation policy.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* M. FINAL CONVERSION SECTION */}
      <section className="py-20 lg:py-28 bg-[#EAE5DA] border-t border-[#29332E]/10">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A]">
            Norman &amp; Greater Oklahoma City
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] text-[#29332E]">
            The Best Part of a Clean Home? Living in It.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80 max-w-xl mx-auto">
            Let Maid OK handle the cleaning so you can enjoy more of what
            matters.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onStartQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
            >
              <span>Request My Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium border border-[#35483D]/35 text-[#35483D] hover:bg-[#FAF8F2] transition-colors rounded-sm min-h-[44px] tabular-nums"
            >
              <Phone className="w-4 h-4" />
              <span>Call Our Local Office</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
