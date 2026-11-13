import { ArrowLeft, ArrowRight, Check, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/maidOkData';
import { ImageWithFallback } from './ImageWithFallback';
import { QuoteServiceChoice, RouteSlug, ServiceDefinition } from '../types';

interface ServiceDetailViewProps {
  service?: ServiceDefinition;
  onNavigate: (route: RouteSlug) => void;
  onStartQuote: (service: QuoteServiceChoice) => void;
}

export function ServiceDetailView({
  service,
  onNavigate,
  onStartQuote,
}: ServiceDetailViewProps) {
  if (!service) {
    // Services Overview Page
    return (
      <section className="py-14 lg:py-24 bg-[#FAF8F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-14 lg:mb-16">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
              Residential Cleaning &amp; Home Care
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#29332E] mb-5">
              Six Thoughtful Services, Tailored to How You Live.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80">
              From steady weekly housekeeping to detailed seasonal resets,
              inside-and-out windows, and practical home organizing, Maid OK
              brings supplies, equipment, and care starting at{' '}
              {BUSINESS_INFO.startingPrice}.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES.map((item, idx) => (
              <article
                key={item.slug}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white border border-[#29332E]/10 rounded-sm overflow-hidden"
              >
                <div
                  className={`lg:col-span-5 aspect-[4/3] lg:aspect-auto min-h-[260px] ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#6E8C7A] mb-3">
                      <span className="tabular-nums">{item.index}</span>
                      <span aria-hidden="true">·</span>
                      <span>Residential Service</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#29332E] mb-3">
                      {item.title}
                    </h2>
                    <p className="text-base leading-relaxed text-[#29332E]/80 mb-6">
                      {item.summary}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-[#29332E]/85"
                        >
                          <Check className="w-4 h-4 text-[#6E8C7A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {item.policyNote && (
                      <p className="text-xs leading-relaxed text-[#29332E]/65 mb-6">
                        {item.policyNote}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#29332E]/10 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.slug)}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onStartQuote(item.quoteOption)}
                      className="text-sm font-medium text-[#35483D] hover:text-[#29332E] underline underline-offset-4 py-2"
                    >
                      Request Quote for {item.shortTitle}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Individual Service Page
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(
    0,
    3
  );

  return (
    <article className="bg-[#FAF8F2]">
      {/* Breadcrumb & Hero */}
      <section className="pt-10 pb-16 lg:pt-14 lg:pb-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#6E8C7A] hover:text-[#35483D] mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-[#6E8C7A] mb-4">
                <span className="tabular-nums">Service {service.index}</span>
                <span aria-hidden="true">·</span>
                <span>Norman &amp; Greater OKC Metro</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#29332E] mb-5">
                {service.title}
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#35483D] mb-5">
                {service.tagline}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80 mb-8">
                {service.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onStartQuote(service.quoteOption)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
                >
                  <span>Request a {service.shortTitle} Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#35483D]/30 text-[#35483D] hover:bg-[#EAE5DA] transition-colors rounded-sm min-h-[44px] tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto min-h-[320px] rounded-sm overflow-hidden border border-[#29332E]/10">
              <ImageWithFallback
                src={service.image}
                alt={service.imageAlt}
                fallbackLabel={service.title}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details & Scope */}
      <section className="py-16 lg:py-24 bg-[#EAE5DA]/60 border-y border-[#29332E]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#29332E]">
              What to Expect
            </h2>
            <p className="text-base leading-relaxed text-[#29332E]/80">
              {service.editorialNote}
            </p>
            <ul className="space-y-3.5 pt-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-[#29332E]/90"
                >
                  <Check className="w-4 h-4 text-[#35483D] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#FAF8F2] border border-[#29332E]/10 p-6 sm:p-8 rounded-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-[#29332E] mb-3">
                Ideal For
              </h3>
              <ul className="space-y-2.5">
                {service.idealFor.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#29332E]/80"
                  >
                    <span className="text-[#6E8C7A] font-semibold">—</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-[#29332E]/10 space-y-2 text-xs leading-relaxed text-[#29332E]/70">
              <p>
                <strong>Starting Point:</strong> Services begin at{' '}
                {BUSINESS_INFO.startingPrice}. Final pricing depends on your
                home’s actual condition and is confirmed with your approval.
              </p>
              <p>
                <strong>Guarantee &amp; Scheduling:</strong> Backed by Maid OK’s
                published 100% satisfaction guarantee (reported issues addressed
                within 48 hours at no additional cost). Cancellations require
                48 hours’ notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-20 bg-[#FAF8F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl text-[#29332E]">
              Explore Other Services
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="text-sm font-medium text-[#35483D] hover:underline"
            >
              View All Services
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div
                key={other.slug}
                className="bg-white border border-[#29332E]/10 p-6 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-[#6E8C7A] tabular-nums">
                    {other.index}
                  </span>
                  <h3 className="font-serif text-2xl text-[#29332E] mt-1 mb-2">
                    {other.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#29332E]/75 mb-5">
                    {other.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate(other.slug)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E]"
                >
                  <span>{other.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
