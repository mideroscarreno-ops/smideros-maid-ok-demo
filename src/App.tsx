import { useState, useEffect } from 'react';
import { SERVICES } from './data/maidOkData';
import { QuoteServiceChoice, RouteSlug } from './types';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { QuoteExperience } from './components/QuoteExperience';
import {
  ContactPageView,
  FaqPageView,
  ReviewsView,
  WhyMaidOkView,
} from './components/SecondaryPages';
import { Footer } from './components/Footer';

const VALID_ROUTES: RouteSlug[] = [
  'home',
  'services',
  'recurring',
  'one-time',
  'deep-cleaning',
  'move-in-out',
  'window-cleaning',
  'home-organizing',
  'why-maid-ok',
  'service-areas',
  'reviews',
  'faq',
  'quote',
  'contact',
];

function getInitialRoute(): RouteSlug {
  const hash = window.location.hash.replace(/^#\/?/, '') as RouteSlug;
  return VALID_ROUTES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteSlug>(getInitialRoute);
  const [quoteServicePreset, setQuoteServicePreset] = useState<
    QuoteServiceChoice | ''
  >('');
  const [quoteCityPreset, setQuoteCityPreset] = useState<string>('');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (route: RouteSlug) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuote = (service?: QuoteServiceChoice) => {
    setQuoteServicePreset(service ?? '');
    navigate('quote');
  };

  const activeService = SERVICES.find((s) => s.slug === currentRoute);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#29332E] overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#35483D] focus:text-[#FAF8F2] focus:rounded-sm"
      >
        Skip to main content
      </a>

      <Navbar currentRoute={currentRoute} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigate}
            onStartQuote={handleStartQuote}
            onSelectCityForQuote={(city) => setQuoteCityPreset(city)}
          />
        )}

        {currentRoute === 'services' && (
          <ServiceDetailView
            onNavigate={navigate}
            onStartQuote={handleStartQuote}
          />
        )}

        {activeService && (
          <ServiceDetailView
            service={activeService}
            onNavigate={navigate}
            onStartQuote={handleStartQuote}
          />
        )}

        {currentRoute === 'why-maid-ok' && (
          <WhyMaidOkView onNavigate={navigate} />
        )}

        {currentRoute === 'service-areas' && (
          <div className="bg-[#FAF8F2]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 lg:pt-20 pb-4">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
                Oklahoma Service Coverage
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#29332E]">
                Service Areas Across the OKC Metro.
              </h1>
            </div>
            <ServiceAreasSection
              onNavigate={navigate}
              onSelectCityForQuote={(city) => setQuoteCityPreset(city)}
            />
          </div>
        )}

        {currentRoute === 'reviews' && <ReviewsView onNavigate={navigate} />}

        {currentRoute === 'faq' && <FaqPageView onNavigate={navigate} />}

        {currentRoute === 'quote' && (
          <QuoteExperience
            initialService={quoteServicePreset || undefined}
            initialCityOrZip={quoteCityPreset}
            onNavigate={navigate}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPageView onNavigate={navigate} />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
