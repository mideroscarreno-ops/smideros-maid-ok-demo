import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
  Info,
  ShieldCheck,
} from 'lucide-react';
import {
  AUTHENTIC_REVIEWS,
  BUSINESS_INFO,
  EDITORIAL_KITCHEN_IMAGE,
  TRUST_PILLARS,
} from '../data/maidOkData';
import { RouteSlug } from '../types';
import { FortyNinePointSection } from './FortyNinePointSection';
import { FaqAccordion } from './FaqAccordion';
import { ImageWithFallback } from './ImageWithFallback';

interface PageNavProps {
  onNavigate: (route: RouteSlug) => void;
}

export function WhyMaidOkView({ onNavigate }: PageNavProps) {
  return (
    <div className="bg-[#FAF8F2]">
      <section className="py-14 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
              About Maid OK · Norman, Oklahoma
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#29332E] mb-5">
              A Family-Owned Approach to Caring for Oklahoma Homes.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80 mb-5">
              Based in Norman and serving families across the greater Oklahoma
              City metro, Maid OK has earned a long-standing local presence
              through consistent standards, approachable communication, and
              genuine care for the spaces you live in.
            </p>
            <p className="text-base leading-relaxed text-[#29332E]/75 mb-8">
              We are licensed and insured, bring our own supplies and equipment
              to every clean, never require long-term contracts, and guide our
              work with a structured 49-point quality-control process.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
              >
                <span>Get My Free Cleaning Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-[#35483D]/30 text-[#35483D] hover:bg-[#EAE5DA] transition-colors rounded-sm min-h-[44px]"
              >
                <span>Explore Our Services</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto min-h-[320px] rounded-sm overflow-hidden border border-[#29332E]/10">
            <ImageWithFallback
              src={EDITORIAL_KITCHEN_IMAGE.src}
              alt={EDITORIAL_KITCHEN_IMAGE.alt}
              fallbackLabel="Maid OK Kitchen Care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Six Verified Pillars */}
      <section className="py-16 lg:py-24 bg-[#EAE5DA]/60 border-y border-[#29332E]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
              Verified Commitments
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-[#29332E]">
              Why Homeowners Choose Maid OK
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="pt-5 border-t border-[#29332E]/15"
              >
                <span className="font-serif text-xl text-[#6E8C7A] tabular-nums">
                  {pillar.index}
                </span>
                <h3 className="font-serif text-2xl text-[#29332E] mt-2 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#29332E]/78">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FortyNinePointSection onNavigate={onNavigate} />

      {/* Guarantee Callout */}
      <section className="py-16 lg:py-24 bg-[#FAF8F2]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
            100% Satisfaction Guarantee
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#29332E] mb-5">
            Care You Can Count On.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80 mb-8">
            Maid OK backs its cleaning work with a published 100% satisfaction
            guarantee. If a customer reports a cleaning concern under our
            published conditions, Maid OK states it will address the issue
            within {BUSINESS_INFO.remediationWindow} at no additional cost.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('faq')}
            className="text-sm font-medium text-[#35483D] underline underline-offset-4 hover:text-[#29332E]"
          >
            Review Guarantee &amp; Service Policies in FAQs
          </button>
        </div>
      </section>
    </div>
  );
}

export function ReviewsView({ onNavigate }: PageNavProps) {
  return (
    <section className="py-14 lg:py-24 bg-[#FAF8F2]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
            Customer Voices
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#29332E] mb-4">
            Words From Oklahoma Homeowners.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80">
            The reviews below are authentic published testimonials attributed by
            first name as featured on Maid OK&rsquo;s website.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {AUTHENTIC_REVIEWS.map((review) => (
            <figure
              key={review.id}
              className="bg-white border border-[#29332E]/10 p-7 sm:p-8 rounded-sm flex flex-col justify-between"
            >
              <blockquote className="font-serif text-xl sm:text-2xl leading-[1.38] text-[#29332E] mb-6">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="pt-4 border-t border-[#29332E]/10 flex items-center justify-between text-xs text-[#29332E]/65">
                <span className="font-semibold text-sm text-[#35483D]">
                  {review.author}
                </span>
                <span>{review.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="bg-[#EAE5DA] p-8 sm:p-12 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl text-[#29332E] mb-2">
              Ready to experience calm at home?
            </h2>
            <p className="text-sm sm:text-base text-[#29332E]/75">
              Request a personalized quote starting at{' '}
              {BUSINESS_INFO.startingPrice}—no contracts required.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="px-7 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm whitespace-nowrap shrink-0 min-h-[44px]"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export function FaqPageView({ onNavigate }: PageNavProps) {
  return (
    <section className="py-14 lg:py-24 bg-[#FAF8F2]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
            Clear Answers &amp; Published Policies
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#29332E] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#29332E]/78 max-w-2xl">
            Everything you need to know about Maid OK quotes, cleaning
            supplies, pets, home entry, payments, and our 48-hour cancellation
            and satisfaction policies.
          </p>
        </div>

        <FaqAccordion />

        <div className="mt-12 p-7 bg-[#EAE5DA]/70 border border-[#29332E]/10 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-serif text-2xl text-[#29332E] mb-1">
              Have a question specific to your home?
            </h2>
            <p className="text-sm text-[#29332E]/75">
              Contact our Norman office directly or start a personalized quote
              inquiry.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="px-5 py-3 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
            >
              Get a Free Quote
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 text-sm font-medium border border-[#35483D]/30 text-[#35483D] hover:bg-[#FAF8F2] transition-colors rounded-sm min-h-[44px]"
            >
              Contact Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPageView({ onNavigate }: PageNavProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submittedDemo, setSubmittedDemo] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !emailPattern.test(email.trim()) || !message.trim()) {
      setError('Please enter your name, a valid email address, and a message.');
      return;
    }
    setError('');
    setSubmittedDemo(true);
  };

  const mailtoLink = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Website Inquiry from ${name || 'Homeowner'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
  )}`;

  return (
    <section className="py-14 lg:py-24 bg-[#FAF8F2]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6E8C7A] mb-3">
            Norman Office &amp; Scheduling
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#29332E] mb-4">
            Get in Touch With Maid OK.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#29332E]/80">
            Reach our family-owned Norman office by phone or email for current
            scheduling availability, service-area confirmation, or questions
            about your home.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#29332E]/10 p-7 sm:p-8 rounded-sm space-y-6">
              <div>
                <p className="text-xs text-[#6E8C7A] uppercase tracking-wider mb-2">
                  Office Address
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#35483D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#29332E]">
                      {BUSINESS_INFO.name}
                    </p>
                    <p className="text-sm text-[#29332E]/80">
                      {BUSINESS_INFO.addressLine1}
                    </p>
                    <p className="text-sm text-[#29332E]/80">
                      {BUSINESS_INFO.addressLine2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#29332E]/10">
                <p className="text-xs text-[#6E8C7A] uppercase tracking-wider mb-2">
                  Phone
                </p>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-3 text-lg font-medium text-[#35483D] hover:text-[#29332E] tabular-nums transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-5 border-t border-[#29332E]/10">
                <p className="text-xs text-[#6E8C7A] uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="inline-flex items-center gap-3 text-base font-medium text-[#35483D] hover:text-[#29332E] break-all transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              <div className="pt-5 border-t border-[#29332E]/10 space-y-2 text-sm leading-relaxed text-[#29332E]/78">
                <p className="font-medium text-[#29332E]">
                  Scheduling &amp; Availability
                </p>
                <p>
                  Please contact the office directly for current scheduling
                  availability. A website inquiry or quote request is reviewed by
                  office staff and does not automatically confirm an
                  appointment.
                </p>
                <p className="text-xs text-[#29332E]/65 pt-1">
                  Service radius: {BUSINESS_INFO.coverageDescription}.
                  Individual address availability is confirmed by the office.
                </p>
              </div>
            </div>

            <div className="bg-[#EAE5DA] p-6 sm:p-7 rounded-sm space-y-3">
              <h2 className="font-serif text-2xl text-[#29332E]">
                Looking for an Estimate?
              </h2>
              <p className="text-sm text-[#29332E]/78">
                Our guided quote workflow lets you select your service and share
                relevant property details in four quick steps.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
              >
                <span>Open Smarter Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Direct Message Form (Demo) */}
          <div className="lg:col-span-7 bg-white border border-[#29332E]/10 p-7 sm:p-10 rounded-sm">
            <h2 className="font-serif text-3xl text-[#29332E] mb-2">
              Send a Message
            </h2>
            <p className="text-sm text-[#29332E]/70 mb-6">
              For general questions or callback requests.
            </p>

            <div className="mb-6 p-4 bg-[#FAF8F2] border border-[#29332E]/10 rounded-sm flex items-start gap-2.5 text-xs leading-relaxed text-[#29332E]/80">
              <Info className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration Form:</strong> No backend server is
                connected to this preview. For immediate office contact, use{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="underline text-[#35483D] font-medium"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                or{' '}
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="underline text-[#35483D] font-medium"
                >
                  {BUSINESS_INFO.email}
                </a>
                .
              </span>
            </div>

            {submittedDemo ? (
              <div className="space-y-5 py-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[#35483D]">
                  <Check className="w-4 h-4" />
                  <span>Preview message prepared for {name}</span>
                </div>
                <p className="text-sm text-[#29332E]/80 leading-relaxed">
                  Because this is a frontend concept demonstration, your note
                  was not transmitted automatically. Click below to open this
                  message in your email application, or call our office directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] rounded-sm min-h-[44px]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedDemo(false);
                      setMessage('');
                    }}
                    className="px-5 py-3 text-sm font-medium border border-[#29332E]/20 text-[#29332E] hover:bg-[#EAE5DA] rounded-sm min-h-[44px]"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} noValidate className="space-y-5">
                {error && (
                  <p role="alert" className="text-sm text-red-700 font-medium">
                    {error}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#29332E] mb-1.5"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#29332E] mb-1.5"
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-[#29332E] mb-1.5"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(405) 555-0142"
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#29332E] mb-1.5"
                  >
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can our Norman office help?"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F2] border border-[#29332E]/20 rounded-sm text-sm text-[#29332E] focus:outline-none focus:border-[#35483D]"
                  />
                </div>

                <div className="p-3.5 bg-[#FAF8F2] border border-[#29332E]/10 rounded-sm flex items-start gap-2.5 text-xs text-[#29332E]/70">
                  <ShieldCheck className="w-4 h-4 text-[#35483D] shrink-0 mt-0.5" />
                  <span>
                    Do not submit door-entry codes, alarm passcodes, or payment
                    card details through this form.
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3.5 text-sm font-medium bg-[#35483D] text-[#FAF8F2] hover:bg-[#2A3A31] transition-colors rounded-sm min-h-[44px]"
                >
                  Prepare Contact Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
