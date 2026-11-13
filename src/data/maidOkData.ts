import {
  ChecklistArea,
  CustomerReview,
  FaqItem,
  ServiceCity,
  ServiceDefinition,
} from '../types';

export const BUSINESS_INFO = {
  name: 'Maid OK',
  tagline: 'Come Home to Calm.',
  subTagline: 'More Life. Less Housework.',
  phoneDisplay: '(405) 447-4964',
  phoneHref: 'tel:+14054474964',
  email: 'info.maidok@gmail.com',
  emailHref: 'mailto:info.maidok@gmail.com',
  addressLine1: '3200 Broce Dr, Suite 106',
  addressLine2: 'Norman, OK 73072',
  startingPrice: '$95',
  coverageDescription: 'Approximately 50 miles from Moore, Oklahoma',
  remediationWindow: '48 hours',
  cancellationNotice: '48 hours',
  footerDisclosure: 'Independent website redesign concept by S.Mideros Agency.',
};

export const HERO_IMAGE = {
  src: '/images/hero-sunlit-living.webp',
  alt: 'Sunlit Oklahoma residential living room with oak floors, natural linen sofa, and eucalyptus stems on the coffee table',
};

export const EDITORIAL_KITCHEN_IMAGE = {
  src: '/images/editorial-kitchen-calm.webp',
  alt: 'Spotless modern kitchen with honed stone island, natural oak cabinetry, and morning sunlight',
};

export const BEDROOM_IMAGE = {
  src: '/images/service-bedroom-sanctuary.webp',
  alt: 'Peaceful residential bedroom with warm cream and soft sage linen bedding and sunlit hardwood floors',
};

export const BATHROOM_IMAGE = {
  src: '/images/service-bathroom-detail.webp',
  alt: 'Freshly cleaned travertine bathroom with spotless glass shower enclosure and folded waffle towels',
};

export const WINDOW_ORGANIZING_IMAGE = {
  src: '/images/service-window-organizing.webp',
  alt: 'Bright residential sunroom with clear windows and woven storage baskets on oak shelves',
};

export const SERVICES: ServiceDefinition[] = [
  {
    slug: 'recurring',
    index: '01',
    title: 'Recurring House Cleaning',
    shortTitle: 'Recurring Cleaning',
    quoteOption: 'Recurring Cleaning',
    ctaLabel: 'Explore Recurring Cleaning',
    tagline: 'Consistent calm on a weekly, every-other-week, or monthly rhythm.',
    summary:
      'Keep your household running smoothly without sacrificing weekends. Choose weekly, bi-weekly, or monthly visits tailored to your home, with zero long-term contracts required.',
    editorialNote:
      'Maid OK publishes savings of up to 15% on recurring cleaning schedules. Eligibility and final recurring rates are confirmed by our Norman office based on your home’s scope and frequency—this promotional offer is not an automatic discount on every booking.',
    image: HERO_IMAGE.src,
    imageAlt: HERO_IMAGE.alt,
    highlights: [
      'Weekly, every-other-week, or monthly scheduling flexibility',
      'No long-term contracts—adjust or pause with 48-hour notice',
      'Published promotional savings of up to 15% for recurring plans',
      'Cleaning supplies and equipment brought by our team every visit',
    ],
    idealFor: [
      'Busy families balancing work, school, and activities',
      'Homeowners seeking steady upkeep from visit to visit',
      'Households wanting predictable care guided by our 49-point process',
    ],
    policyNote:
      'Promotional claim note: Savings of up to 15% apply to qualifying recurring plans confirmed by the office and are not applied automatically to all bookings.',
  },
  {
    slug: 'one-time',
    index: '02',
    title: 'One-Time Cleaning',
    shortTitle: 'One-Time Cleaning',
    quoteOption: 'One-Time Cleaning',
    ctaLabel: 'Explore One-Time Cleaning',
    tagline: 'Thoughtful single-visit care for busy seasons, hosting, or a fresh reset.',
    summary:
      'When life gets full, guests are arriving, or the house simply needs a thorough reset, a one-time visit restores order and comfort without any ongoing commitment.',
    editorialNote:
      'Our team arrives with full supplies and equipment to focus on your kitchen, bathrooms, living areas, and bedrooms—plus any priority rooms you highlight when requesting your quote.',
    image: BEDROOM_IMAGE.src,
    imageAlt: BEDROOM_IMAGE.alt,
    highlights: [
      'No recurring schedule or ongoing commitment required',
      'Ideal before family visits, holidays, or seasonal transitions',
      'Custom priority notes shared with the office in advance',
      'Backed by Maid OK’s published 100% satisfaction guarantee',
    ],
    idealFor: [
      'Pre-event and holiday hosting preparation',
      'Post-travel or busy-week household catch-up',
      'Trying Maid OK for the first time with a clear starting estimate',
    ],
  },
  {
    slug: 'deep-cleaning',
    index: '03',
    title: 'Deep Cleaning',
    shortTitle: 'Deep Cleaning',
    quoteOption: 'Deep Cleaning',
    ctaLabel: 'Explore Deep Cleaning',
    tagline: 'Detailed attention for buildup, edges, fixtures, and overlooked surfaces.',
    summary:
      'Designed for homes needing extra care beyond routine upkeep. Deep cleaning addresses built-up dust and residue on baseboards, light fixtures, vent covers, cabinet doors, blinds, and related surfaces.',
    editorialNote:
      'Deep cleans take extra time and care to restore forgotten corners. Many recurring clients begin with a deep clean so subsequent visits maintain a truly crisp baseline.',
    image: BATHROOM_IMAGE.src,
    imageAlt: BATHROOM_IMAGE.alt,
    highlights: [
      'Focused attention on baseboards, door frames, and trim',
      'Careful dusting and wiping of light fixtures and vent covers',
      'Exterior cabinet doors, hardware, and blinds refreshed',
      'Thorough kitchen and bath detail work tailored to home condition',
    ],
    idealFor: [
      'First-time residential cleans or annual seasonal resets',
      'Homes with accumulated dust on blinds, vents, and woodwork',
      'Preparing a residence before starting a recurring schedule',
    ],
  },
  {
    slug: 'move-in-out',
    index: '04',
    title: 'Move-In / Move-Out Cleaning',
    shortTitle: 'Move-In / Move-Out',
    quoteOption: 'Move-In / Move-Out Cleaning',
    ctaLabel: 'Explore Moving Cleaning',
    tagline: 'A clean slate for incoming residents and peace of mind when handing over keys.',
    summary:
      'Moving brings enough logistics on its own. Whether preparing a home for new occupants or settling into a new address in the Norman or OKC area, we clean top to bottom so you can focus on the transition.',
    editorialNote:
      'Our office confirms whether the property is vacant or furnished during quoting so the team arrives prepared for cabinetry, shelving, floors, baths, and trim.',
    image: EDITORIAL_KITCHEN_IMAGE.src,
    imageAlt: EDITORIAL_KITCHEN_IMAGE.alt,
    highlights: [
      'Detailed surface preparation for empty or transitional residences',
      'Kitchens, appliances exterior, cabinetry, and bath sanitization',
      'Baseboards, sills, and hard floors cleared of moving dust',
      'Coordinates cleanly alongside Home Organizing unpacking support',
    ],
    idealFor: [
      'Homeowners preparing a residence for listing or closing',
      'Renters leaving a property clean for final walkthroughs',
      'Families stepping into a freshly sanitized new home',
    ],
  },
  {
    slug: 'window-cleaning',
    index: '05',
    title: 'Window Cleaning',
    shortTitle: 'Window Cleaning',
    quoteOption: 'Window Cleaning',
    ctaLabel: 'Explore Window Cleaning',
    tagline: 'Professional inside-and-out window care that welcomes Oklahoma sunlight.',
    summary:
      'Clear glass transforms how every room feels. Maid OK provides dedicated interior and exterior residential window cleaning to lift dust, pollen, and water spots from panes and sills.',
    editorialNote:
      'Because window count, story height, and access vary by architecture, window cleaning estimates are scoped specifically to your property and interior/exterior preferences.',
    image: WINDOW_ORGANIZING_IMAGE.src,
    imageAlt: WINDOW_ORGANIZING_IMAGE.alt,
    highlights: [
      'Professional inside-and-out residential window cleaning',
      'Tailored scoping for single-story or multi-story homes',
      'Restores natural daylight to living rooms, kitchens, and sunrooms',
      'Available as a standalone service or paired with home cleaning',
    ],
    idealFor: [
      'Spring and fall pollen resets across Norman and OKC',
      'Homes with expansive patio doors, sunrooms, or garden views',
      'Pre-listing curb appeal and natural light enhancement',
    ],
  },
  {
    slug: 'home-organizing',
    index: '06',
    title: 'Home Organizing',
    shortTitle: 'Home Organizing',
    quoteOption: 'Home Organizing',
    ctaLabel: 'Explore Home Organizing',
    tagline: 'Calm, practical sorting, decluttering, organizing, and unpacking support.',
    summary:
      'Distinct from house cleaning, Home Organizing helps you bring intentional order to closets, pantries, playrooms, home offices, and moving boxes—creating systems that stay easy to live with.',
    editorialNote:
      'Important distinction: Home Organizing focuses on sorting, decluttering, arranging belongings, and unpacking rather than scrubbing or housekeeping. Many clients pair organizing with a cleaning visit for a full household refresh.',
    image: WINDOW_ORGANIZING_IMAGE.src,
    imageAlt: WINDOW_ORGANIZING_IMAGE.alt,
    highlights: [
      'Dedicated hands-on sorting and mindful decluttering support',
      'Practical room-by-room systems for pantries, closets, and storage',
      'Unpacking assistance after a move to help you settle in faster',
      'Clearly scoped separately from routine residential cleaning',
    ],
    idealFor: [
      'New homeowners unpacking boxes after a relocation',
      'Overflowing pantries, garages, closets, or family playrooms',
      'Households craving simpler daily routines with less clutter',
    ],
    policyNote:
      'Service distinction: Home Organizing is a dedicated sorting, decluttering, and unpacking service—separate from residential cleaning.',
  },
];

export const FORTY_NINE_POINT_AREAS: ChecklistArea[] = [
  {
    id: 'kitchens',
    number: '01',
    title: 'Kitchens & Dining Surfaces',
    subtitle: 'Representative examples for food-prep and gathering areas',
    image: EDITORIAL_KITCHEN_IMAGE.src,
    imageAlt: EDITORIAL_KITCHEN_IMAGE.alt,
    representativePoints: [
      'Wiping and sanitizing countertops, islands, and backsplash areas',
      'Cleaning sink basins, faucets, and exterior appliance surfaces',
      'Cleaning microwave interiors and stove-top surfaces',
      'Wiping cabinet fronts, handles, and dining table surfaces',
      'Vacuuming and mopping hard kitchen flooring',
    ],
    note: 'Representative examples from Maid OK’s 49-point quality-control process. Exact points addressed vary by selected service type and home priorities.',
  },
  {
    id: 'bathrooms',
    number: '02',
    title: 'Bathrooms & Vanities',
    subtitle: 'Representative examples for restorative personal spaces',
    image: BATHROOM_IMAGE.src,
    imageAlt: BATHROOM_IMAGE.alt,
    representativePoints: [
      'Scrubbing and sanitizing showers, tubs, tile surrounds, and glass doors',
      'Cleaning vanities, sinks, chrome or brushed fixtures, and mirrors',
      'Sanitizing toilets thoroughly inside, outside, and around the base',
      'Neatly straightening towels and emptying waste receptacles',
      'Sweeping and damp-mopping bathroom tile and stone floors',
    ],
    note: 'Representative examples shown. Your office confirms any specific surface preferences or priority bathrooms before your visit.',
  },
  {
    id: 'living',
    number: '03',
    title: 'Living Rooms & Bedrooms',
    subtitle: 'Representative examples for daily comfort and rest',
    image: BEDROOM_IMAGE.src,
    imageAlt: BEDROOM_IMAGE.alt,
    representativePoints: [
      'Dusting reachable furniture, shelves, picture frames, and decor',
      'Making beds neatly and tidying visible pillows and throws',
      'Vacuuming carpets, area rugs, upholstery edges, and stairs',
      'Sweeping and mopping hardwood, laminate, or tile floors',
      'Removing cobwebs from reachable corners and ceiling edges',
    ],
    note: 'Representative examples shown. All 49 points are not claimed to be identically performed on every specialized or partial-home booking.',
  },
  {
    id: 'details',
    number: '04',
    title: 'Detailed Trim & Touchpoints',
    subtitle: 'Representative examples emphasized in Deep & Moving cleans',
    image: HERO_IMAGE.src,
    imageAlt: HERO_IMAGE.alt,
    representativePoints: [
      'Wiping baseboards, window sills, and door trim where specified',
      'Dusting and cleaning accessible light fixtures and ceiling fans',
      'Addressing air vent covers and return grilles for accumulated dust',
      'Cleaning blinds and reachable window ledges',
      'Sanitizing high-touch light switches and door handles',
    ],
    note: 'Many detail items such as baseboards, vent covers, blinds, and light fixtures are highlighted in Maid OK’s Deep Cleaning and Move-In / Move-Out services.',
  },
];

export const TRUST_PILLARS = [
  {
    index: '01',
    title: 'Family-Owned Local Company',
    description:
      'Rooted in Norman, Oklahoma, Maid OK has built a long-standing local presence serving neighbors across the greater Oklahoma City metro with personal accountability.',
  },
  {
    index: '02',
    title: 'Licensed & Insured',
    description:
      'Every visit is backed by proper licensing and insurance coverage so homeowners can welcome our team with confidence.',
  },
  {
    index: '03',
    title: 'Supplies & Equipment Provided',
    description:
      'You never need to stock special products or haul out vacuums. Our cleaners arrive prepared with cleaning supplies and equipment, or accommodate approved product preferences upon request.',
  },
  {
    index: '04',
    title: 'No Contracts Required',
    description:
      'Recurring clients stay because they appreciate the work—not because of locked-in paperwork. Adjust or pause your schedule with 48 hours’ notice.',
  },
  {
    index: '05',
    title: '49-Point Quality-Control Process',
    description:
      'A structured 49-point checklist guides our teams room by room so quality remains consistent from your first visit to your fiftieth.',
  },
  {
    index: '06',
    title: 'Published Satisfaction Guarantee',
    description:
      'Backed by a 100% satisfaction guarantee: if an issue is reported under our published policy, Maid OK addresses the concern within 48 hours at no additional cost.',
  },
];

export const AUTHENTIC_REVIEWS: CustomerReview[] = [
  {
    id: 'review-amy',
    author: 'Amy',
    context: 'Published Maid OK Customer Review',
    quote:
      'The Maid OK team did an amazing job! They showed up on time and worked their butts off!',
  },
  {
    id: 'review-al',
    author: 'Al',
    context: 'Published Maid OK Customer Review',
    quote:
      'The reason they absolutely deserve five stars is their attention to detail. They even watered one of my bonsai trees!',
  },
  {
    id: 'review-morgan',
    author: 'Morgan',
    context: 'Published Maid OK Customer Review',
    quote:
      'Maid OK was super easy to schedule, very communicative, and most of all did an AMAZING job on my home.',
  },
  {
    id: 'review-david',
    author: 'David',
    context: 'Published Maid OK Customer Review',
    quote:
      'We have used Maid OK for three years and they have done a fantastic job with regular and deep cleans!',
  },
  {
    id: 'review-ivy',
    author: 'Ivy',
    context: 'Published Maid OK Customer Review',
    quote:
      'My floors, walls, baseboards, fans, doors — everything looks so clean and amazing.',
  },
  {
    id: 'review-darin',
    author: 'Darin',
    context: 'Published Maid OK Customer Review',
    quote: 'I recommend Maid OK to people who want a job well done.',
  },
];

export const SERVICE_CITIES: ServiceCity[] = [
  {
    name: 'Norman',
    region: 'Home Base · Cleveland County',
    zipPrefixes: ['73019', '73026', '73069', '73070', '73071', '73072'],
    note: 'Maid OK office location at 3200 Broce Dr, Suite 106.',
  },
  {
    name: 'Oklahoma City',
    region: 'OKC Metro Core',
    zipPrefixes: ['731'],
    note: 'Residential coverage across metro neighborhoods subject to office confirmation.',
  },
  {
    name: 'Edmond',
    region: 'North Metro',
    zipPrefixes: ['73003', '73012', '73013', '73025', '73034'],
    note: 'Serving Edmond households within our ~50-mile service radius.',
  },
  {
    name: 'Moore',
    region: 'Central Corridor',
    zipPrefixes: ['73160', '73165', '73170'],
    note: 'Reference center for our ~50-mile metro coverage radius.',
  },
  {
    name: 'Mustang',
    region: 'West Metro',
    zipPrefixes: ['73064'],
    note: 'Recurring, one-time, deep, and moving cleans available.',
  },
  {
    name: 'Yukon',
    region: 'West Metro',
    zipPrefixes: ['73085', '73099'],
    note: 'Residential cleaning and organizing requests confirmed by address.',
  },
  {
    name: 'Midwest City',
    region: 'East Metro',
    zipPrefixes: ['73110', '73130', '73140', '73141'],
    note: 'Eastern metro residential service subject to office availability.',
  },
  {
    name: 'Del City',
    region: 'East Metro',
    zipPrefixes: ['73115', '73135'],
    note: 'Convenient access along the I-40 / I-35 corridor.',
  },
  {
    name: 'Choctaw',
    region: 'East Metro',
    zipPrefixes: ['73020'],
    note: 'Address and route availability confirmed prior to booking.',
  },
  {
    name: 'Guthrie',
    region: 'Logan County · North',
    zipPrefixes: ['73044'],
    note: 'Northern edge of coverage—please verify exact address with our office.',
  },
  {
    name: 'Goldsby',
    region: 'McClain County · South',
    zipPrefixes: ['73093'],
    note: 'Just south of Norman across the Canadian River.',
  },
  {
    name: 'Blanchard',
    region: 'McClain County · Southwest',
    zipPrefixes: ['73010'],
    note: 'Serving Blanchard homes with office route confirmation.',
  },
  {
    name: 'Purcell',
    region: 'McClain County · South',
    zipPrefixes: ['73080'],
    note: 'South I-35 corridor residential coverage.',
  },
  {
    name: 'Noble',
    region: 'Cleveland County · South',
    zipPrefixes: ['73068'],
    note: 'Neighboring community immediately south of Norman.',
  },
  {
    name: 'Newcastle',
    region: 'McClain County · West',
    zipPrefixes: ['73065'],
    note: 'Convenient Tri-City residential coverage.',
  },
  {
    name: 'Lexington',
    region: 'Cleveland County · South',
    zipPrefixes: ['73051'],
    note: 'Southern Cleveland County availability confirmed by office.',
  },
  {
    name: 'Wayne',
    region: 'McClain County · South',
    zipPrefixes: ['73095'],
    note: 'Rural and residential addresses verified individually.',
  },
  {
    name: 'Tuttle',
    region: 'Grady County · Southwest',
    zipPrefixes: ['73089'],
    note: 'Tri-City and southwest metro coverage subject to confirmation.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-quotes',
    category: 'Scheduling & Quotes',
    question: 'How do quotes and pricing work?',
    answer:
      'Maid OK services start at $95. When you request a quote online or by phone, our office reviews your home details and service goals to prepare an estimate. Final pricing depends on the actual condition of the home, and any needed adjustments are always confirmed with your approval before work proceeds. Submitting a quote request online does not automatically confirm an appointment.',
  },
  {
    id: 'faq-supplies',
    category: 'Services',
    question: 'Do I need to provide cleaning supplies or equipment?',
    answer:
      'No. Maid OK brings all necessary cleaning supplies and equipment to every visit. If you prefer specific household products to be used on delicate surfaces, simply let the office know ahead of time so we can note your preference.',
  },
  {
    id: 'faq-access',
    category: 'Policies & Access',
    question: 'Do I have to be home while the team cleans?',
    answer:
      'You do not need to be home during your cleaning visit. Once your appointment is scheduled and confirmed with the office, you may arrange home entry privately with our staff—such as a key handoff, lockbox, or temporary access note kept securely by the office. Please do not enter alarm codes or door-entry passwords in public website forms.',
  },
  {
    id: 'faq-pets',
    category: 'Policies & Access',
    question: 'What if I have pets at home?',
    answer:
      'Friendly pets are welcome while our team works. However, if a pet is anxious around visitors, protective, or likely to slip out an open door, please let the office know and make secure arrangements (such as a kennel or quiet room) during the scheduled visit.',
  },
  {
    id: 'faq-frequencies',
    category: 'Scheduling & Quotes',
    question: 'What cleaning frequencies do you offer, and are contracts required?',
    answer:
      'Maid OK offers weekly, every-other-week, and monthly recurring cleanings, as well as one-time visits. No long-term contracts are required. Maid OK advertises savings of up to 15% on qualifying recurring schedules—our office confirms applicable rates for your specific home.',
  },
  {
    id: 'faq-priorities',
    category: 'Services',
    question: 'Can I request custom cleaning priorities for my visit?',
    answer:
      'Yes. While our 49-point quality-control process guides every clean, you can share specific priority rooms, surfaces, or requests when completing your quote inquiry or speaking with our office so your team focuses where it matters most.',
  },
  {
    id: 'faq-cancellation',
    category: 'Policies & Access',
    question: 'What is Maid OK’s cancellation and rescheduling policy?',
    answer:
      'Because Maid OK manages its schedule carefully without overbooking, please notify the office at least 48 hours in advance if you need to cancel or reschedule a visit. Cancellations or rescheduling requests made within 48 hours of your scheduled cleaning may result in a charge equal to the full cleaning amount.',
  },
  {
    id: 'faq-payment',
    category: 'Policies & Access',
    question: 'How is payment handled?',
    answer:
      'Customers typically keep a payment card on file with the office, or leave cash or a check on the kitchen counter on the day of service. If cash or a check is not left out, the card on file is used according to your confirmed arrangement with the office. Never submit payment card details through this public website.',
  },
  {
    id: 'faq-areas',
    category: 'Scheduling & Quotes',
    question: 'Which Oklahoma cities does Maid OK serve?',
    answer:
      'Based in Norman (3200 Broce Dr, Suite 106), Maid OK serves an area extending approximately 50 miles from Moore, Oklahoma—including Norman, Oklahoma City, Edmond, Moore, Mustang, Yukon, Midwest City, Del City, Choctaw, Guthrie, Goldsby, Blanchard, Purcell, Noble, Newcastle, Lexington, Wayne, and Tuttle. Individual address eligibility and route availability are always confirmed by the office.',
  },
  {
    id: 'faq-guarantee',
    category: 'Policies & Access',
    question: 'How does the 100% satisfaction guarantee work?',
    answer:
      'Maid OK stands behind its work with a published 100% satisfaction guarantee. If you report a cleaning concern under the company’s published guarantee conditions, Maid OK states that it will address the reported issue within 48 hours at no additional cost.',
  },
  {
    id: 'faq-windows',
    category: 'Services',
    question: 'Do you offer window cleaning?',
    answer:
      'Yes. Maid OK provides professional inside-and-out residential window cleaning. Quotes are tailored based on your property type, approximate window count, and whether you would like interior glass, exterior glass, or both cleaned.',
  },
  {
    id: 'faq-organizing',
    category: 'Services',
    question: 'How is Home Organizing different from house cleaning?',
    answer:
      'Home Organizing is a dedicated service focused on sorting, decluttering, organizing rooms or closets, and unpacking boxes after a move. It is separate from residential cleaning (which focuses on sanitizing, dusting, vacuuming, and surface care). You can request Home Organizing on its own or alongside a cleaning visit.',
  },
];
