import { useState, useMemo } from 'react';
import { MapPin, Search, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CITIES } from '../data/maidOkData';
import { RouteSlug } from '../types';

interface ServiceAreasSectionProps {
  onNavigate: (route: RouteSlug) => void;
  onSelectCityForQuote?: (cityOrZip: string) => void;
  compact?: boolean;
}

export function ServiceAreasSection({
  onNavigate,
  onSelectCityForQuote,
  compact = false,
}: ServiceAreasSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCityName, setSelectedCityName] = useState('Norman');
  const [addressInput, setAddressInput] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    status: 'listed' | 'confirm' | 'empty';
    message: string;
  } | null>(null);

  const filteredCities = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SERVICE_CITIES;
    return SERVICE_CITIES.filter(
      (city) =>
        city.name.toLowerCase().includes(q) ||
        city.region.toLowerCase().includes(q) ||
        city.zipPrefixes.some((zip) => zip.startsWith(q))
    );
  }, [searchQuery]);

  const activeCity =
    SERVICE_CITIES.find((c) => c.name === selectedCityName) ?? SERVICE_CITIES[0];

  const handleCitySelect = (cityName: string) => {
    setSelectedCityName(cityName);
    setLookupResult(null);
  };

  const handleCheckAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = addressInput.trim();
    if (!cleaned) {
      setLookupResult({
        status: 'empty',
        message: 'Enter a city name, street address, or 5-digit Oklahoma ZIP code.',
      });
      return;
    }

    const lower = cleaned.toLowerCase();
    const matchedCity = SERVICE_CITIES.find(
      (city) =>
        lower.includes(city.name.toLowerCase()) ||
        city.zipPrefixes.some((prefix) => lower.includes(prefix))
    );

    if (matchedCity) {
      setSelectedCityName(matchedCity.name);
      setLookupResult({
        status: 'listed',
        message: `${matchedCity.name} is within Maid OK’s listed metro coverage (${BUSINESS_INFO.coverageDescription}). Individual address eligibility and route availability are confirmed by the Norman office.`,
      });
    } else {
      setLookupResult({
        status: 'confirm',
        message: `Coverage extends approximately 50 miles from Moore, OK. Please request a quote or call ${BUSINESS_INFO.phoneDisplay} so our office can confirm availability for "${cleaned}".`,
      });
    }
  };

  const handleStartQuote = () => {
    if (onSelectCityForQuote) {
      onSelectCityForQuote(addressInput.trim() || activeCity.name);
    }
    onNavigate('quote');
  };

  return (
    <section
      aria-labelledby="service-areas-heading"
      className={`${compact ? 'py-20 lg:py-28' : 'py-14 lg:py-20'} bg-[#EAE5DA]/60`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Local Coverage & Address Check */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
                Norman &amp; Greater OKC Metro
              </p>
              <h2
                id="service-areas-heading"
                className="font-serif text-4xl sm:text-[44px] leading-[1.1] text-[#29332E] mb-4"
              >
                Rooted in Norman. Serving Neighbors Across the Metro.
              </h2>
              <p className="text-base leading-relaxed text-[#29332E]/80">
                Headquartered at 3200 Broce Dr, Suite 106 in Norman, Maid OK
                serves residential neighborhoods within{' '}
                {BUSINESS_INFO.coverageDescription.toLowerCase()}.
              </p>
            </div>

            {/* Address / ZIP Check Form */}
            <form
              onSubmit={handleCheckAddress}
              className="bg-[#FAF8F2] border border-[#29332E]/10 p-6 rounded-sm space-y-4"
            >
              <label
                htmlFor="service-area-address-input"
                className="block text-sm font-medium text-[#29332E]"
              >
                Check a City, Address, or ZIP Code
              </label>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  id="service-area-address-input"
                  type="text"
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  placeholder="e.g., Norman, 73072, or Edmond"
                  className="flex-1 min-h-[44px] px-3.5 py-2.5 bg-white border border-[#29332E]/18 rounded-sm text-sm text-[#29332E] placeholder:text-[#29332E]/45 focus:outline-none focus:border-[#35483D] focus:ring-1 focus:ring-[#35483D]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 min-h-[44px] text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm whitespace-nowrap shrink-0"
                >
                  Check Area
                </button>
              </div>

              {lookupResult && (
                <div
                  role="status"
                  className={`p-3.5 text-sm leading-relaxed rounded-sm flex items-start gap-2.5 ${
                    lookupResult.status === 'listed'
                      ? 'bg-[#35483D]/8 text-[#29332E]'
                      : 'bg-[#EAE5DA] text-[#29332E]'
                  }`}
                >
                  {lookupResult.status === 'listed' ? (
                    <CheckCircle2 className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-4 h-4 text-[#6E8C7A] shrink-0 mt-0.5" />
                  )}
                  <span>{lookupResult.message}</span>
                </div>
              )}

              <p className="text-xs leading-relaxed text-[#29332E]/65">
                Listed cities represent primary coverage areas. Individual
                property eligibility and route availability must always be
                confirmed by the Maid OK office.
              </p>
            </form>

            {/* Selected City Spotlight */}
            <div className="bg-[#FAF8F2] border border-[#29332E]/10 p-6 rounded-sm">
              <div className="flex items-center gap-2 text-xs text-[#6E8C7A] mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeCity.region}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#29332E] mb-2">
                {activeCity.name}, Oklahoma
              </h3>
              <p className="text-sm leading-relaxed text-[#29332E]/75 mb-5">
                {activeCity.note}
              </p>
              <button
                type="button"
                onClick={handleStartQuote}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#35483D] hover:text-[#29332E] transition-colors group"
              >
                <span>Request a Quote in {activeCity.name}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Searchable 18-City Directory */}
          <div className="lg:col-span-7 bg-[#FAF8F2] border border-[#29332E]/10 p-6 sm:p-8 rounded-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#29332E]/10">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#29332E]">
                  Listed Service Communities
                </h3>
                <p className="text-sm text-[#29332E]/65 mt-1 tabular-nums">
                  {SERVICE_CITIES.length} Oklahoma cities &amp; towns listed
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#6E8C7A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  aria-label="Filter listed service cities"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter cities or ZIP..."
                  className="w-full min-h-[42px] pl-10 pr-3.5 py-2 bg-white border border-[#29332E]/15 rounded-sm text-sm text-[#29332E] placeholder:text-[#29332E]/45 focus:outline-none focus:border-[#35483D] focus:ring-1 focus:ring-[#35483D]"
                />
              </div>
            </div>

            {filteredCities.length === 0 ? (
              <div className="py-10 text-center space-y-3">
                <p className="text-sm text-[#29332E]/75">
                  No listed city matched &ldquo;{searchQuery}&rdquo;.
                </p>
                <p className="text-xs text-[#29332E]/60 max-w-md mx-auto">
                  Maid OK covers approximately 50 miles from Moore, Oklahoma.
                  Call {BUSINESS_INFO.phoneDisplay} or submit a quote inquiry to
                  confirm your address.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6">
                {filteredCities.map((city) => {
                  const isSelected = city.name === activeCity.name;
                  return (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => handleCitySelect(city.name)}
                      className={`text-left px-4 py-3 rounded-sm border transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] ${
                        isSelected
                          ? 'bg-[#35483D] text-[#FAF8F2] border-[#35483D]'
                          : 'bg-white/70 text-[#29332E] border-[#29332E]/10 hover:border-[#35483D]/40 hover:bg-[#EAE5DA]/50'
                      }`}
                    >
                      <span className="block text-sm font-medium truncate">
                        {city.name}
                      </span>
                      <span
                        className={`block text-[11px] truncate mt-0.5 ${
                          isSelected ? 'text-[#AEBFAF]' : 'text-[#29332E]/55'
                        }`}
                      >
                        {city.region}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-[#29332E]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs leading-relaxed text-[#29332E]/65 max-w-md">
                Not sure if your neighborhood falls within our route? Request a
                free quote and our office will confirm coverage right away.
              </p>
              <button
                type="button"
                onClick={handleStartQuote}
                className="px-5 py-3 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
