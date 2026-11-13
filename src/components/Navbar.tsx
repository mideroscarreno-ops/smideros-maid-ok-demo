import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/maidOkData';
import { RouteSlug } from '../types';

interface NavbarProps {
  currentRoute: RouteSlug;
  onNavigate: (route: RouteSlug) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServiceRoute =
    currentRoute === 'services' ||
    SERVICES.some((service) => service.slug === currentRoute);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesMenuOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (route: RouteSlug) => {
    onNavigate(route);
    setMobileOpen(false);
    setServicesMenuOpen(false);
  };

  const navItemClass = (active: boolean) =>
    `relative py-1.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F2] ${
      active
        ? 'text-[#35483D] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#35483D]'
        : 'text-[#29332E]/80 hover:text-[#35483D]'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#29332E]/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between gap-6 lg:gap-8">
        {/* Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="font-serif text-2xl sm:text-[26px] font-semibold tracking-tight text-[#29332E] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] rounded-sm"
        >
          {BUSINESS_INFO.name}
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7"
        >
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className={navItemClass(currentRoute === 'home')}
          >
            Home
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesMenuOpen((prev) => !prev)}
              aria-expanded={servicesMenuOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 ${navItemClass(
                isServiceRoute
              )}`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesMenuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-72 bg-[#FAF8F2] border border-[#29332E]/12 shadow-lg rounded-md py-2 z-50"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleLinkClick('services')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wide text-[#35483D] border-b border-[#29332E]/10 hover:bg-[#EAE5DA]/60 transition-colors"
                >
                  View All Services Overview
                </button>
                <div className="py-1">
                  {SERVICES.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      role="menuitem"
                      onClick={() => handleLinkClick(service.slug)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-baseline justify-between gap-2 ${
                        currentRoute === service.slug
                          ? 'bg-[#EAE5DA] text-[#35483D] font-medium'
                          : 'text-[#29332E] hover:bg-[#EAE5DA]/60'
                      }`}
                    >
                      <span>{service.title}</span>
                      <span className="text-[11px] text-[#6E8C7A] tabular-nums">
                        {service.index}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('why-maid-ok')}
            className={navItemClass(currentRoute === 'why-maid-ok')}
          >
            Why Maid OK
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('service-areas')}
            className={navItemClass(currentRoute === 'service-areas')}
          >
            Service Areas
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('reviews')}
            className={navItemClass(currentRoute === 'reviews')}
          >
            Reviews
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={navItemClass(currentRoute === 'contact')}
          >
            Contact
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#29332E]/85 hover:text-[#35483D] transition-colors whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] rounded-sm px-1 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#6E8C7A]" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => handleLinkClick('quote')}
            className="px-5 py-2.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F2]"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('quote')}
            className="px-3.5 py-2 text-xs font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm whitespace-nowrap shrink-0 min-h-[40px]"
          >
            Free Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center w-11 h-11 text-[#29332E] hover:bg-[#EAE5DA] rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF8F2] border-t border-[#29332E]/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav
            aria-label="Mobile navigation"
            className="px-4 py-5 space-y-1"
          >
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#29332E] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
            >
              Home
            </button>

            <div className="pt-2 pb-1 px-3">
              <p className="text-xs font-medium text-[#6E8C7A] mb-1">
                Cleaning &amp; Home Services
              </p>
              <div className="space-y-0.5 pl-2 border-l border-[#AEBFAF]">
                <button
                  type="button"
                  onClick={() => handleLinkClick('services')}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#35483D] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
                >
                  All Services Overview
                </button>
                {SERVICES.map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => handleLinkClick(service.slug)}
                    className="w-full text-left px-3 py-2.5 text-sm text-[#29332E]/90 hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick('why-maid-ok')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#29332E] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
            >
              Why Maid OK
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('service-areas')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#29332E] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
            >
              Service Areas
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('reviews')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#29332E] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
            >
              Reviews
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('faq')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#29332E] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
            >
              Frequently Asked Questions
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="w-full text-left px-3 py-3 text-base font-medium text-[#29332E] hover:bg-[#EAE5DA]/60 rounded-sm min-h-[44px]"
            >
              Contact
            </button>

            <div className="pt-4 mt-3 border-t border-[#29332E]/10 space-y-3 px-2">
              <button
                type="button"
                onClick={() => handleLinkClick('quote')}
                className="w-full py-3.5 px-5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] rounded-sm transition-colors min-h-[44px]"
              >
                Get a Free Quote
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full py-3 px-5 text-sm font-medium border border-[#35483D]/30 text-[#35483D] hover:bg-[#EAE5DA] rounded-sm transition-colors flex items-center justify-center gap-2 min-h-[44px] tabular-nums"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
