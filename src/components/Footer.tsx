import { BUSINESS_INFO, SERVICES } from '../data/maidOkData';
import { RouteSlug } from '../types';

interface FooterProps {
  onNavigate: (route: RouteSlug) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#29332E] text-[#FAF8F2] pt-16 pb-10 border-t border-[#FAF8F2]/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#FAF8F2]/12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-serif text-3xl text-[#FAF8F2] tracking-tight text-left"
            >
              {BUSINESS_INFO.name}
            </button>
            <p className="font-serif italic text-lg text-[#AEBFAF]">
              {BUSINESS_INFO.subTagline}
            </p>
            <p className="text-sm leading-relaxed text-[#FAF8F2]/70 max-w-xs">
              Locally and family-owned residential cleaning, window care, and
              home organizing based in Norman, serving the greater Oklahoma
              City metro.
            </p>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#AEBFAF]">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-[#FAF8F2]/80">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#AEBFAF]">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-[#FAF8F2]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('why-maid-ok')}
                  className="hover:text-white transition-colors"
                >
                  Why Maid OK
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('service-areas')}
                  className="hover:text-white transition-colors"
                >
                  Service Areas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQs &amp; Policies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('quote')}
                  className="hover:text-white transition-colors"
                >
                  Free Quote
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#AEBFAF]">
              Norman Office
            </p>
            <address className="not-italic text-sm leading-relaxed text-[#FAF8F2]/80 space-y-2">
              <p>
                {BUSINESS_INFO.addressLine1}
                <br />
                {BUSINESS_INFO.addressLine2}
              </p>
              <p>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="hover:text-white transition-colors tabular-nums font-medium"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </address>
            <p className="text-xs leading-relaxed text-[#FAF8F2]/55 pt-1">
              Contact our office for current availability. Services start at{' '}
              {BUSINESS_INFO.startingPrice}; 48-hour notice applies to
              cancellations.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#FAF8F2]/55">
          <p>{BUSINESS_INFO.footerDisclosure}</p>
          <p>
            Licensed &amp; Insured · Norman &amp; Greater Oklahoma City Metro
          </p>
        </div>
      </div>
    </footer>
  );
}
