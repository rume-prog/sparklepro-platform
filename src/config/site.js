// Site configuration - all business-specific content lives here
// Replace placeholders marked with [BRACKETS] with real client details

export const siteConfig = {
  // Business identity
  businessName: 'SparklePro',
  tagline: 'Professional Cleaning in Nairobi',
  description: 'Expert cleaning services for homes and businesses',

  // Hero image
  heroImage: {
    src: '/images/hero.webp',
    alt: 'Gloved hand scrubbing a wet floor with foam'
  },

  // Services offered
  services: [
    {
      name: 'Residential Cleaning',
      slug: 'residential-cleaning',
      description: 'Complete home cleaning services including regular cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleaning.',
      tagline: 'Come Home to Calm',
      intro: 'After a long day, the last thing you want is a to-do list waiting at the door. Our residential cleaning takes the chores off your hands, leaving every room fresh, tidy and ready to enjoy. From busy families to professionals with packed calendars, we shape each visit around the way you actually live.',
      subheading: 'What makes a SparklePro visit different',
      features: [
        {
          title: 'Plans That Fit Your Routine',
          description: 'Pick weekly, bi-weekly, monthly or a one-off visit, and change it when life changes.',
          icon: 'calendar'
        },
        {
          title: 'Gentle on Your Family, Tough on Grime',
          description: 'Our eco-conscious products are chosen to be safe around children and pets while still cutting through everyday dirt.',
          icon: 'leaf'
        },
        {
          title: 'A Trained, Careful Team',
          description: 'Your cleaners follow a room-by-room checklist covering kitchens, bathrooms, bedrooms and living areas, so nothing gets skipped.',
          icon: 'check'
        }
      ],
      closing: 'Picture opening your door to gleaming surfaces, soft clean floors and that fresh, just-cleaned feel. Let us handle the scrubbing while you get back to the things you love.',
      bestFor: 'Families, busy professionals, apartments and houses',
      duration: '2-4 hours',
      frequency: 'Weekly, bi-weekly, monthly, one-off',
      priceText: 'Request a quote',
      image: {
        src: '/images/services/residential.webp',
        alt: 'Bright and tidy living room with clean furniture and polished floors'
      }
    },
    {
      name: 'Commercial Cleaning',
      slug: 'commercial-cleaning',
      description: 'Professional cleaning for businesses including office cleaning, retail space cleaning, restaurant cleaning, and warehouse cleaning.',
      tagline: 'Where Business Looks Its Best',
      intro: 'Your workspace speaks before you do. Clients notice the entrance, the washrooms, and the way a meeting room feels the moment they walk in. Our commercial cleaning keeps offices, shops, and shared spaces fresh, safe, and ready for whatever the day brings, so you can focus on running your business.',
      subheading: 'A clean workplace, without the disruption',
      features: [
        {
          title: 'Works Around Your Day',
          description: 'Early-morning, evening, and weekend schedules, so cleaning never gets in the way of your team or your customers.',
          icon: 'clock'
        },
        {
          title: 'First Impressions, Handled',
          description: 'Reception areas, floors, glass, and washrooms finished to a standard that makes visitors feel welcome.',
          icon: 'star'
        },
        {
          title: 'Hygiene You Can Count On',
          description: 'Regular attention to high-touch surfaces such as handles, desks, and shared equipment, guided by a clear cleaning checklist for every visit.',
          icon: 'shield'
        }
      ],
      closing: 'A tidy space lifts morale, protects health, and shows clients you care about details. Leave the cleaning to us and walk into a workplace that works as hard as you do.',
      bestFor: 'Offices, retail shops, clinics, co-working spaces',
      duration: 'Depends on size, assessed with a free walkthrough',
      frequency: 'Daily, weekly, monthly, or custom contract',
      priceText: 'Request a quote',
      image: {
        src: '/images/services/commercial.jpg',
        alt: 'Modern office workspace with clean desks and bright natural lighting'
      }
    },
    {
      name: 'Deep Cleaning',
      slug: 'deep-cleaning',
      description: 'Thorough cleaning for kitchens and bathrooms, carpets and upholstery, windows and blinds, and hard-to-reach areas.',
      tagline: 'A Fresh Start, From Floor to Ceiling',
      intro: 'Some dirt hides where everyday cleaning doesn\'t reach: behind appliances, in grout lines, deep in carpet fibers. Our deep cleaning goes beyond the surface to reset your space completely, whether it\'s a seasonal refresh, a move, or a home that simply needs a new beginning.',
      subheading: 'The corners other cleans miss',
      features: [
        {
          title: 'Kitchens Brought Back to Life',
          description: 'Built-up grease, stovetops, ovens, and cabinet fronts scrubbed until they shine.',
          icon: 'sparkle'
        },
        {
          title: 'Bathrooms Restored',
          description: 'Limescale, soap scum, and stubborn grout lines removed, with fixtures left sparkling.',
          icon: 'droplet'
        },
        {
          title: 'Fabrics Refreshed',
          description: 'Carpets and upholstery cleaned to lift out dust, stains, and odors that vacuuming leaves behind.',
          icon: 'fabric'
        }
      ],
      closing: 'Moving in or out, finishing a renovation, or just ready for a reset? A deep clean gives you a space that feels brand new, and a home you\'ll love coming back to.',
      bestFor: 'Move-in/move-out, post-renovation, seasonal resets',
      duration: '4-8 hours depending on size',
      frequency: 'One-off, or quarterly top-up',
      priceText: 'Request a quote',
      image: {
        src: '/images/services/deep-cleaning.jpg',
        alt: 'Sparkling clean kitchen with polished countertops and gleaming appliances'
      }
    },
    {
      name: 'Specialized Services',
      slug: 'specialized-services',
      description: 'Additional services including carpet cleaning, upholstery cleaning, window cleaning, and pressure washing.',
      tagline: 'Targeted Care for Specific Needs',
      intro: 'Sometimes you need more than a general clean. Our specialized services focus on particular materials, surfaces, or problem areas that require dedicated attention and expertise.',
      subheading: 'Precision cleaning for unique challenges',
      features: [
        {
          title: 'Carpet & Upholstery Care',
          description: 'Deep extraction cleaning that removes embedded dirt, allergens, and stubborn stains from fabrics.',
          icon: 'clean'
        },
        {
          title: 'Window & Glass Expertise',
          description: 'Streak-free cleaning for interior and exterior windows, glass doors, and mirrors.',
          icon: 'window'
        },
        {
          title: 'Exterior Surface Renewal',
          description: 'Pressure washing and specialized treatments for driveways, patios, and building exteriors.',
          icon: 'spray'
        }
      ],
      closing: 'From stubborn stains to seasonal refreshes, our specialized services bring focus and expertise to the areas that matter most to you.',
      bestFor: 'Specific problem areas, material-specific care, seasonal maintenance',
      duration: '1-3 hours per service',
      frequency: 'As needed',
      priceText: 'Request a quote',
      image: {
        src: '/images/services/specialized.jpg',
        alt: 'Professional cleaning equipment and supplies ready for specialized service'
      }
    }
  ],

  // Contact information
  contact: {
    phone: '[PHONE NUMBER]',
    email: '[EMAIL ADDRESS]',
    address: '[ADDRESS]',
    city: 'Nairobi, Kenya',
    hours: {
      weekday: '[BUSINESS HOURS]',
      saturday: '[BUSINESS HOURS]',
      sunday: 'Closed'
    },
    whatsappNumber: '[PHONE NUMBER]',
    responseTime: '[RESPONSE TIME]'
  },

  // Geographic areas served
  areasServed: ['Nairobi'],

  // Pricing packages
  pricing: [
    {
      name: 'Basic Clean',
      priceText: '[PRICE]',
      included: ['Regular cleaning of all rooms', 'Dusting and vacuuming', 'Kitchen cleaning', 'Bathroom cleaning']
    },
    {
      name: 'Deep Clean',
      priceText: '[PRICE]',
      included: ['All Basic Clean features', 'Inside appliances', 'Window cleaning', 'Baseboard cleaning', 'Cabinet cleaning']
    },
    {
      name: 'Premium Clean',
      priceText: '[PRICE]',
      included: ['All Deep Clean features', 'Carpet cleaning', 'Upholstery cleaning', 'Moving furniture (light items)', 'Specialized stain treatment']
    }
  ],

  // FAQ questions
  faq: [
    {
      question: 'What areas do you serve?',
      answer: 'We currently serve the Nairobi area and surrounding regions. Contact us to confirm availability in your specific location.'
    },
    {
      question: 'How do I book a cleaning service?',
      answer: 'You can book a cleaning service by contacting us through our contact form, calling our phone number, or sending us a message on WhatsApp. We will respond within our stated response time.'
    },
    {
      question: 'What cleaning products do you use?',
      answer: 'We use professional-grade cleaning products that are effective and safe for your home or business. If you have specific preferences or allergies, please let us know in advance.'
    },
    {
      question: 'Do I need to be present during the cleaning?',
      answer: 'This depends on your preference. Many customers are comfortable providing access and having our team clean while they are away. We can discuss what works best for you.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including cash, mobile money transfers, and bank transfers. Payment details will be provided when you book your service.'
    }
  ],

  // How it works steps
  howItWorks: [
    {
      step: 1,
      title: 'Contact Us',
      description: 'Reach out via phone, WhatsApp, or our contact form to tell us about your cleaning needs.'
    },
    {
      step: 2,
      title: 'Get a Quote',
      description: 'We will provide you with a transparent quote based on your specific requirements.'
    },
    {
      step: 3,
      title: 'Schedule Service',
      description: 'Choose a convenient time for your cleaning service, and we will confirm the appointment.'
    },
    {
      step: 4,
      title: 'Enjoy Clean Space',
      description: 'Our professional team will arrive on time and deliver a thorough cleaning service.'
    }
  ],

  // Feature toggles - control which features are enabled
  features: {
    bookingForm: false,
    gallery: false,
    pricingTable: false,
    pricingSection: false,
    faqSection: false,
    howItWorksSection: false,
    areasServedSection: false,
    reviewsSection: true,
    demoNotice: true // Show "Demo site for a fictional business" in footer - set to false for real client sites
  },

  // Google Review URL
  googleReviewUrl: '[GOOGLE REVIEW URL]',

  // About page content
  about: {
    story: 'SparklePro was founded with a simple mission: to provide reliable, high-quality cleaning services that make life easier for Nairobi residents and businesses. We understand that your time is valuable. That\'s why we\'ve built a service that you can trust to deliver consistent results, every single time. From humble beginnings, we\'ve grown to serve [CUSTOMER COUNT] customers across Nairobi, maintaining our commitment to excellence and customer satisfaction.',
    mission: 'To provide exceptional cleaning services that exceed expectations, creating cleaner, healthier spaces for our customers.',
    customerCount: '[CUSTOMER COUNT]',
    productType: '[PRODUCT TYPE]',
    satisfactionPolicy: '[SATISFACTION POLICY]'
  },

  // Value propositions (Why Choose Us section)
  values: [
    { title: 'Reliable', description: 'Consistent quality for every cleaning visit.' },
    { title: 'Affordable', description: 'Competitive pricing with no hidden fees.' },
    { title: 'Professional', description: 'Trained cleaning professionals.' },
    { title: 'Flexible', description: 'Scheduling that works around your busy life.' }
  ],

  aboutValues: [
    { title: 'Integrity', description: 'We believe in honest communication and transparent pricing.' },
    { title: 'Quality', description: 'Every cleaning job is done to high standards.' },
    { title: 'Reliability', description: 'We aim to deliver consistent service.' },
    { title: 'Respect', description: 'We treat your property and belongings with care.' }
  ],

  whyChooseUs: [
    { title: 'Experienced Team', description: 'Our cleaning professionals are trained and experienced in all types of cleaning services.' },
    { title: 'Quality Products', description: 'We use [PRODUCT TYPE] cleaning products that are tough on dirt but gentle on your space.' },
    { title: 'Customer Focus', description: '[SATISFACTION POLICY]' }
  ]
};
