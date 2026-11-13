import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  Mail,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/maidOkData';
import { QuoteServiceChoice, RouteSlug } from '../types';

interface QuoteExperienceProps {
  initialService?: QuoteServiceChoice | '';
  initialCityOrZip?: string;
  onNavigate: (route: RouteSlug) => void;
}

const SERVICE_OPTIONS: {
  value: QuoteServiceChoice;
  title: string;
  subtitle: string;
}[] = [
  {
    value: 'Recurring Cleaning',
    title: 'Recurring House Cleaning',
    subtitle: 'Weekly, every-other-week, or monthly care · No contracts',
  },
  {
    value: 'One-Time Cleaning',
    title: 'One-Time Cleaning',
    subtitle: 'Single-visit reset for busy weeks, hosting, or seasonal refresh',
  },
  {
    value: 'Deep Cleaning',
    title: 'Deep Cleaning',
    subtitle: 'Extra focus on baseboards, vents, blinds, light fixtures, and trim',
  },
  {
    value: 'Move-In / Move-Out Cleaning',
    title: 'Move-In / Move-Out Cleaning',
    subtitle: 'Thorough transition care before moving in or handing over keys',
  },
  {
    value: 'Window Cleaning',
    title: 'Window Cleaning',
    subtitle: 'Professional inside-and-out residential window care',
  },
  {
    value: 'Home Organizing',
    title: 'Home Organizing',
    subtitle: 'Sorting, decluttering, organizing, and unpacking (not cleaning)',
  },
  {
    value: 'Not Sure Yet',
    title: 'Not Sure Yet',
    subtitle: 'Share your goals and our Norman office will help recommend an option',
  },
];

interface QuoteFormState {
  service: QuoteServiceChoice | '';
  // Residential cleaning fields
  cityOrZip: string;
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  frequency: string;
  priorities: string;
  // Window cleaning fields
  propertyType: string;
  windowCount: string;
  windowScope: string;
  // Home organizing fields
  organizingRooms: string;
  organizingDescription: string;
  organizingTiming: string;
  // Customer contact
  fullName: string;
  email: string;
  phone: string;
  preferredContact: 'Phone Call' | 'Email' | 'Text Message';
  additionalNotes: string;
}

export function QuoteExperience({
  initialService = '',
  initialCityOrZip = '',
  onNavigate,
}: QuoteExperienceProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(initialService ? 2 : 1);
  const [submittedDemo, setSubmittedDemo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<QuoteFormState>({
    service: initialService,
    cityOrZip: initialCityOrZip,
    bedrooms: '3',
    bathrooms: '2',
    squareFootage: '',
    frequency:
      initialService === 'Recurring Cleaning' ? 'Every Other Week' : 'One-Time',
    priorities: '',
    propertyType: 'Single-Story Home',
    windowCount: '',
    windowScope: 'Interior & Exterior',
    organizingRooms: '',
    organizingDescription: '',
    organizingTiming: 'Within 2–4 Weeks',
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'Phone Call',
    additionalNotes: '',
  });

  useEffect(() => {
    if (initialService) {
      setForm((prev) => ({
        ...prev,
        service: initialService,
        frequency:
          initialService === 'Recurring Cleaning'
            ? 'Every Other Week'
            : prev.frequency,
      }));
      setStep(2);
      setSubmittedDemo(false);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialCityOrZip) {
      setForm((prev) => ({ ...prev, cityOrZip: initialCityOrZip }));
    }
  }, [initialCityOrZip]);

  const isWindowService = form.service === 'Window Cleaning';
  const isOrganizingService = form.service === 'Home Organizing';

  const updateField = <K extends keyof QuoteFormState>(
    key: K,
    value: QuoteFormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validateStep = (targetStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (targetStep === 1) {
      if (!form.service) {
        newErrors.service = 'Please select a service option to continue.';
      }
    }

    if (targetStep === 2) {
      if (!form.cityOrZip.trim()) {
        newErrors.cityOrZip =
          'Please enter your city or ZIP code so we can check coverage.';
      }
      if (isOrganizingService) {
        if (!form.organizingRooms.trim()) {
          newErrors.organizingRooms =
            'Please let us know which room(s) or spaces need organizing.';
        }
        if (!form.organizingDescription.trim()) {
          newErrors.organizingDescription =
            'Please add a brief description of your organizing project.';
        }
      }
    }

    if (targetStep === 3) {
      if (!form.fullName.trim()) {
        newErrors.fullName = 'Please enter your full name.';
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
      const digits = form.phone.replace(/\D/g, '');
      if (digits.length < 10) {
        newErrors.phone = 'Please enter a 10-digit phone number.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(4, prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1) as 1 | 2 | 3 | 4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(1) && validateStep(2) && validateStep(3)) {
      setSubmittedDemo(true);
    }
  };

  const buildMailtoDraft = () => {
    const subject = encodeURIComponent(
      `Quote Inquiry (${form.service || 'Home Service'}) — ${form.fullName}`
    );
    const details: string[] = [
      `Service Selected: ${form.service}`,
      `City / ZIP: ${form.cityOrZip}`,
    ];

    if (isWindowService) {
      details.push(`Property Type: ${form.propertyType}`);
      details.push(`Window Scope: ${form.windowScope}`);
      if (form.windowCount) details.push(`Approx. Windows: ${form.windowCount}`);
    } else if (isOrganizingService) {
      details.push(`Rooms: ${form.organizingRooms}`);
      details.push(`Project: ${form.organizingDescription}`);
      details.push(`Preferred Timing: ${form.organizingTiming}`);
    } else {
      details.push(`Bedrooms: ${form.bedrooms}`);
      details.push(`Bathrooms: ${form.bathrooms}`);
      if (form.squareFootage)
        details.push(`Approx. Sq Ft: ${form.squareFootage}`);
      if (
        form.service === 'Recurring Cleaning' ||
        form.service === 'Not Sure Yet'
      ) {
        details.push(`Preferred Frequency: ${form.frequency}`);
      }
      if (form.priorities) details.push(`Special Priorities: ${form.priorities}`);
    }

    details.push(
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Preferred Contact: ${form.preferredContact}`
    );
    if (form.additionalNotes) {
      details.push(`Additional Notes: ${form.additionalNotes}`);
    }

    const body = encodeURIComponent(details.join('\n'));
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const stepLabels = [
    { num: 1, label: 'Select Service' },
    { num: 2, label: 'Property Details' },
    { num: 3, label: 'Contact Info' },
    { num: 4, label: 'Review & Submit' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#FAF8F2]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
            Free Personalized Estimate
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#29332E] leading-[1.08] mb-4">
            Tell Us About Your Home.
          </h1>
          <p className="text-base sm:text-lg text-[#29332E]/75 max-w-2xl">
            Services start at {BUSINESS_INFO.startingPrice}. Share a few details
            below—only the questions relevant to your chosen service appear.
          </p>
        </div>

        {/* Interactive Demo Notice Banner */}
        <div className="mb-8 p-4 sm:p-5 bg-[#EAE5DA]/80 border border-[#29332E]/12 rounded-sm flex items-start gap-3">
          <Info className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed text-[#29332E]/85">
            <strong>Interactive Redesign Demonstration:</strong> This quote
            experience is a frontend concept without a live backend server.
            Submitting prepares a review summary on screen rather than sending
            directly to Maid OK. To reach the real Norman office, call{' '}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="underline font-medium text-[#35483D] tabular-nums"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>{' '}
            or email{' '}
            <a
              href={BUSINESS_INFO.emailHref}
              className="underline font-medium text-[#35483D]"
            >
              {BUSINESS_INFO.email}
            </a>
            .
          </p>
        </div>

        {/* Progress Indicator */}
        <nav aria-label="Quote form steps" className="mb-10">
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stepLabels.map((item) => {
              const isCompleted = step > item.num || submittedDemo;
              const isCurrent = step === item.num && !submittedDemo;
              return (
                <li key={item.num}>
                  <button
                    type="button"
                    disabled={item.num > step && !submittedDemo}
                    onClick={() => {
                      if (item.num <= step && !submittedDemo) {
                        setStep(item.num as 1 | 2 | 3 | 4);
                      }
                    }}
                    className={`w-full text-left p-3.5 rounded-sm border transition-colors ${
                      isCurrent
                        ? 'bg-[#35483D] text-[#FAF8F2] border-[#35483D]'
                        : isCompleted
                        ? 'bg-[#EAE5DA] text-[#29332E] border-[#29332E]/15 hover:border-[#35483D]/40'
                        : 'bg-white/50 text-[#29332E]/45 border-[#29332E]/10 cursor-not-allowed'
                    }`}
                  >
                    <span className="block text-[11px] tabular-nums opacity-80">
                      Step 0{item.num}
                    </span>
                    <span className="block text-sm font-medium mt-0.5 truncate">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Form Card */}
        {submittedDemo ? (
          <div className="bg-white border border-[#29332E]/12 rounded-sm p-6 sm:p-10 space-y-8">
            <div className="space-y-3 border-b border-[#29332E]/10 pb-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#35483D]">
                <Check className="w-4 h-4" />
                <span>Demonstration Summary Ready</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#29332E]">
                Thank You, {form.fullName}.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#29332E]/80 max-w-2xl">
                Because this site is an independent redesign demonstration with
                no backend connected, this inquiry has{' '}
                <strong>not been transmitted to Maid OK</strong> and does not
                schedule or confirm an appointment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm bg-[#FAF8F2] p-6 rounded-sm border border-[#29332E]/10">
              <div>
                <p className="text-xs text-[#6E8C7A] mb-1">Requested Service</p>
                <p className="font-medium text-[#29332E]">{form.service}</p>
              </div>
              <div>
                <p className="text-xs text-[#6E8C7A] mb-1">City / ZIP Code</p>
                <p className="font-medium text-[#29332E]">{form.cityOrZip}</p>
              </div>
              <div>
                <p className="text-xs text-[#6E8C7A] mb-1">Contact Details</p>
                <p className="font-medium text-[#29332E]">
                  {form.email} · {form.phone}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#6E8C7A] mb-1">Preferred Method</p>
                <p className="font-medium text-[#29332E]">
                  {form.preferredContact}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-[#29332E]">
                Ready to send this real inquiry to Maid OK?
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={buildMailtoDraft()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Draft to {BUSINESS_INFO.email}</span>
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#35483D]/35 text-[#35483D] hover:bg-[#EAE5DA] transition-colors rounded-sm min-h-[44px] tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedDemo(false);
                    setStep(1);
                  }}
                  className="px-5 py-3.5 text-sm font-medium text-[#29332E]/75 hover:text-[#29332E] transition-colors min-h-[44px]"
                >
                  Start Another Quote Preview
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-[#29332E]/12 rounded-sm p-6 sm:p-10"
          >
            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl text-[#29332E] mb-2">
                    Which service best fits your home?
                  </h2>
                  <p className="text-sm text-[#29332E]/70">
                    Choose one option below. Your selection tailors the next
                    step to avoid irrelevant questions.
                  </p>
                </div>

                {errors.service && (
                  <p role="alert" className="text-sm text-red-700 font-medium">
                    {errors.service}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {SERVICE_OPTIONS.map((option) => {
                    const selected = form.service === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          updateField('service', option.value);
                          if (option.value === 'Recurring Cleaning') {
                            updateField('frequency', 'Every Other Week');
                          }
                        }}
                        className={`text-left p-5 rounded-sm border transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] ${
                          selected
                            ? 'bg-[#35483D] text-[#FAF8F2] border-[#35483D]'
                            : 'bg-[#FAF8F2] text-[#29332E] border-[#29332E]/15 hover:border-[#35483D]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-medium text-base">
                            {option.title}
                          </span>
                          {selected && <Check className="w-4 h-4 shrink-0" />}
                        </div>
                        <span
                          className={`block text-xs leading-relaxed ${
                            selected ? 'text-[#EAE5DA]' : 'text-[#29332E]/70'
                          }`}
                        >
                          {option.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: CONDITIONAL PROPERTY DETAILS */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#6E8C7A] mb-1">
                    Selected: {form.service}
                  </p>
                  <h2 className="font-serif text-3xl text-[#29332E] mb-2">
                    {isWindowService
                      ? 'Window & Property Details'
                      : isOrganizingService
                      ? 'Organizing Project Details'
                      : 'Tell Us About Your Residence'}
                  </h2>
                  <p className="text-sm text-[#29332E]/70">
                    Required fields are marked with an asterisk (*).
                  </p>
                </div>

                {/* Common City/ZIP */}
                <div>
                  <label
                    htmlFor="quote-city-zip"
                    className="block text-sm font-medium text-[#29332E] mb-1.5"
                  >
                    City or ZIP Code <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="quote-city-zip"
                    type="text"
                    required
                    value={form.cityOrZip}
                    onChange={(e) => updateField('cityOrZip', e.target.value)}
                    placeholder="e.g., Norman, 73072, Edmond, Moore"
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D] focus:ring-1 focus:ring-[#35483D]"
                  />
                  <p className="text-xs text-[#29332E]/60 mt-1.5">
                    Used to verify route coverage (~50 miles from Moore, OK).
                  </p>
                  {errors.cityOrZip && (
                    <p role="alert" className="text-xs text-red-700 mt-1">
                      {errors.cityOrZip}
                    </p>
                  )}
                </div>

                {/* Branch A: Window Cleaning */}
                {isWindowService && (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-property-type"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Property Type <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="quote-property-type"
                        value={form.propertyType}
                        onChange={(e) =>
                          updateField('propertyType', e.target.value)
                        }
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      >
                        <option value="Single-Story Home">
                          Single-Story Home
                        </option>
                        <option value="Two-Story Home">Two-Story Home</option>
                        <option value="Townhome / Patio Home">
                          Townhome / Patio Home
                        </option>
                        <option value="Other Residential Property">
                          Other Residential Property
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-window-scope"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Interior / Exterior Preference{' '}
                        <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="quote-window-scope"
                        value={form.windowScope}
                        onChange={(e) =>
                          updateField('windowScope', e.target.value)
                        }
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      >
                        <option value="Interior & Exterior">
                          Interior &amp; Exterior
                        </option>
                        <option value="Interior Only">Interior Only</option>
                        <option value="Exterior Only">Exterior Only</option>
                        <option value="Not Sure — Discuss with Office">
                          Not Sure — Discuss with Office
                        </option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="quote-window-count"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Approximate Number of Windows (Optional)
                      </label>
                      <input
                        id="quote-window-count"
                        type="text"
                        value={form.windowCount}
                        onChange={(e) =>
                          updateField('windowCount', e.target.value)
                        }
                        placeholder="e.g., 16 windows + 2 French patio doors"
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      />
                    </div>
                  </div>
                )}

                {/* Branch B: Home Organizing */}
                {isOrganizingService && (
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="quote-org-rooms"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Rooms or Spaces Requiring Organization{' '}
                        <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="quote-org-rooms"
                        type="text"
                        required
                        value={form.organizingRooms}
                        onChange={(e) =>
                          updateField('organizingRooms', e.target.value)
                        }
                        placeholder="e.g., Kitchen pantry, primary closet, playroom, moving boxes"
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      />
                      {errors.organizingRooms && (
                        <p role="alert" className="text-xs text-red-700 mt-1">
                          {errors.organizingRooms}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-org-desc"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Project Description <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="quote-org-desc"
                        rows={3}
                        required
                        value={form.organizingDescription}
                        onChange={(e) =>
                          updateField('organizingDescription', e.target.value)
                        }
                        placeholder="Briefly describe whether you need sorting, decluttering, storage setup, or unpacking."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      />
                      {errors.organizingDescription && (
                        <p role="alert" className="text-xs text-red-700 mt-1">
                          {errors.organizingDescription}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-org-timing"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Preferred Timing (Optional)
                      </label>
                      <select
                        id="quote-org-timing"
                        value={form.organizingTiming}
                        onChange={(e) =>
                          updateField('organizingTiming', e.target.value)
                        }
                        className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      >
                        <option value="As Soon as Available">
                          As Soon as Available
                        </option>
                        <option value="Within 2–4 Weeks">
                          Within 2–4 Weeks
                        </option>
                        <option value="Flexible / Next Month">
                          Flexible / Next Month
                        </option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Branch C: Residential Cleaning */}
                {!isWindowService && !isOrganizingService && (
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-3 gap-5">
                      <div>
                        <label
                          htmlFor="quote-bedrooms"
                          className="block text-sm font-medium text-[#29332E] mb-1.5"
                        >
                          Bedrooms <span aria-hidden="true">*</span>
                        </label>
                        <select
                          id="quote-bedrooms"
                          value={form.bedrooms}
                          onChange={(e) =>
                            updateField('bedrooms', e.target.value)
                          }
                          className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                        >
                          {['1', '2', '3', '4', '5', '6+'].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === '1' ? 'Bedroom' : 'Bedrooms'}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="quote-bathrooms"
                          className="block text-sm font-medium text-[#29332E] mb-1.5"
                        >
                          Bathrooms <span aria-hidden="true">*</span>
                        </label>
                        <select
                          id="quote-bathrooms"
                          value={form.bathrooms}
                          onChange={(e) =>
                            updateField('bathrooms', e.target.value)
                          }
                          className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                        >
                          {['1', '1.5', '2', '2.5', '3', '3.5', '4+'].map(
                            (n) => (
                              <option key={n} value={n}>
                                {n} {n === '1' ? 'Bathroom' : 'Bathrooms'}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="quote-sqft"
                          className="block text-sm font-medium text-[#29332E] mb-1.5"
                        >
                          Approx. Sq Ft (Optional)
                        </label>
                        <input
                          id="quote-sqft"
                          type="text"
                          value={form.squareFootage}
                          onChange={(e) =>
                            updateField('squareFootage', e.target.value)
                          }
                          placeholder="e.g., 2,200 sq ft"
                          className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                        />
                      </div>
                    </div>

                    {(form.service === 'Recurring Cleaning' ||
                      form.service === 'Not Sure Yet') && (
                      <div>
                        <label
                          htmlFor="quote-frequency"
                          className="block text-sm font-medium text-[#29332E] mb-1.5"
                        >
                          Preferred Cleaning Frequency
                        </label>
                        <select
                          id="quote-frequency"
                          value={form.frequency}
                          onChange={(e) =>
                            updateField('frequency', e.target.value)
                          }
                          className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                        >
                          <option value="Weekly">Weekly</option>
                          <option value="Every Other Week">
                            Every Other Week
                          </option>
                          <option value="Monthly">Monthly</option>
                          <option value="One-Time">
                            One-Time / Undecided
                          </option>
                        </select>
                        <p className="text-xs text-[#29332E]/60 mt-1.5">
                          No contracts required. Maid OK advertises savings of
                          up to 15% on qualifying recurring plans confirmed by
                          the office.
                        </p>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="quote-priorities"
                        className="block text-sm font-medium text-[#29332E] mb-1.5"
                      >
                        Special Cleaning Priorities (Optional)
                      </label>
                      <textarea
                        id="quote-priorities"
                        rows={3}
                        value={form.priorities}
                        onChange={(e) =>
                          updateField('priorities', e.target.value)
                        }
                        placeholder="e.g., Pet hair in living room, baseboards, kitchen cabinetry, guest bedrooms before family arrives"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: CUSTOMER CONTACT */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl text-[#29332E] mb-2">
                    How Should Our Norman Office Reach You?
                  </h2>
                  <p className="text-sm text-[#29332E]/70">
                    Required fields are marked with an asterisk (*).
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-medium text-[#29332E] mb-1.5"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="Your full name"
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                    />
                    {errors.fullName && (
                      <p role="alert" className="text-xs text-red-700 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-sm font-medium text-[#29332E] mb-1.5"
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="you@example.com"
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                    />
                    {errors.email && (
                      <p role="alert" className="text-xs text-red-700 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-medium text-[#29332E] mb-1.5"
                    >
                      Phone Number <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="(405) 555-0142"
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                    />
                    {errors.phone && (
                      <p role="alert" className="text-xs text-red-700 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-preferred-contact"
                      className="block text-sm font-medium text-[#29332E] mb-1.5"
                    >
                      Preferred Contact Method <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="quote-preferred-contact"
                      value={form.preferredContact}
                      onChange={(e) =>
                        updateField(
                          'preferredContact',
                          e.target.value as QuoteFormState['preferredContact']
                        )
                      }
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                    >
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email</option>
                      <option value="Text Message">Text Message</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-notes"
                    className="block text-sm font-medium text-[#29332E] mb-1.5"
                  >
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="quote-notes"
                    rows={3}
                    value={form.additionalNotes}
                    onChange={(e) =>
                      updateField('additionalNotes', e.target.value)
                    }
                    placeholder="Share pets at home, preferred days of the week, or general questions."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                  />
                </div>

                {/* Security & Privacy Guardrail */}
                <div className="p-4 bg-[#FAF8F2] border border-[#29332E]/10 rounded-sm flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed text-[#29332E]/75">
                    For your security, please do{' '}
                    <strong>not</strong> include alarm codes, door-entry
                    passwords, or payment-card details in this form. Entry
                    instructions and payment arrangements are coordinated
                    privately with the Maid OK office once scheduled.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW & SUBMIT */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-3xl text-[#29332E] mb-2">
                    Review Your Quote Inquiry
                  </h2>
                  <p className="text-sm text-[#29332E]/75">
                    Your request will be reviewed by the Maid OK office. Final
                    pricing and scheduling are confirmed separately.
                  </p>
                </div>

                <div className="bg-[#FAF8F2] border border-[#29332E]/10 rounded-sm p-6 space-y-5 text-sm">
                  <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-[#29332E]/10">
                    <div>
                      <p className="text-xs text-[#6E8C7A] mb-1">Service</p>
                      <p className="font-medium text-[#29332E]">
                        {form.service}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6E8C7A] mb-1">
                        City / ZIP Code
                      </p>
                      <p className="font-medium text-[#29332E]">
                        {form.cityOrZip}
                      </p>
                    </div>
                  </div>

                  {isWindowService ? (
                    <div className="grid sm:grid-cols-3 gap-4 pb-4 border-b border-[#29332E]/10">
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">
                          Property Type
                        </p>
                        <p className="text-[#29332E]">{form.propertyType}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">Scope</p>
                        <p className="text-[#29332E]">{form.windowScope}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">
                          Approx. Windows
                        </p>
                        <p className="text-[#29332E]">
                          {form.windowCount || 'Not specified'}
                        </p>
                      </div>
                    </div>
                  ) : isOrganizingService ? (
                    <div className="space-y-3 pb-4 border-b border-[#29332E]/10">
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">
                          Rooms to Organize
                        </p>
                        <p className="text-[#29332E]">{form.organizingRooms}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">
                          Project Summary &amp; Timing
                        </p>
                        <p className="text-[#29332E]">
                          {form.organizingDescription} ({form.organizingTiming})
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-3 gap-4 pb-4 border-b border-[#29332E]/10">
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">Home Size</p>
                        <p className="text-[#29332E] tabular-nums">
                          {form.bedrooms} Bed / {form.bathrooms} Bath
                          {form.squareFootage ? ` · ${form.squareFootage}` : ''}
                        </p>
                      </div>
                      {(form.service === 'Recurring Cleaning' ||
                        form.service === 'Not Sure Yet') && (
                        <div>
                          <p className="text-xs text-[#6E8C7A] mb-1">
                            Preferred Frequency
                          </p>
                          <p className="text-[#29332E]">{form.frequency}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-[#6E8C7A] mb-1">
                          Priorities
                        </p>
                        <p className="text-[#29332E]">
                          {form.priorities || 'Standard 49-point guide'}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#6E8C7A] mb-1">
                        Customer Contact
                      </p>
                      <p className="font-medium text-[#29332E]">
                        {form.fullName}
                      </p>
                      <p className="text-[#29332E]/80">
                        {form.email} · {form.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6E8C7A] mb-1">
                        Preferred Follow-Up
                      </p>
                      <p className="text-[#29332E]">{form.preferredContact}</p>
                      {form.additionalNotes && (
                        <p className="text-xs text-[#29332E]/70 mt-1">
                          Notes: {form.additionalNotes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-[#29332E]/65">
                  Pricing transparency: Maid OK services start at{' '}
                  {BUSINESS_INFO.startingPrice}. Final pricing reflects the
                  actual condition of the home and any adjustments are confirmed
                  with your approval. Cancellations within 48 hours may incur a
                  full cleaning charge.{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('faq')}
                    className="underline text-[#35483D]"
                  >
                    Read full FAQs
                  </button>
                  .
                </p>
              </div>
            )}

            {/* Step Controls */}
            <div className="mt-8 pt-6 border-t border-[#29332E]/10 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#29332E] border border-[#29332E]/20 hover:bg-[#EAE5DA] transition-colors rounded-sm min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>
              ) : (
                <div className="text-xs text-[#29332E]/65">
                  Prefer to speak directly?{' '}
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="underline font-medium text-[#35483D] tabular-nums"
                  >
                    Call {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
                >
                  <span>Request My Free Cleaning Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
