// Site configuration - all business-specific content lives here
// Replace placeholders marked with [BRACKETS] with real client details

export const siteConfig = {
  // Business identity
  businessName: 'SparklePro',
  tagline: 'Professional Cleaning in Nairobi',
  description: 'Expert cleaning services for homes and businesses',

  // Services offered
  services: [
    {
      name: 'Residential Cleaning',
      description: 'Complete home cleaning services including regular cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleaning.',
      priceText: 'Starting from [PRICE]'
    },
    {
      name: 'Commercial Cleaning',
      description: 'Professional cleaning for businesses including office cleaning, retail space cleaning, restaurant cleaning, and warehouse cleaning.',
      priceText: 'Starting from [PRICE]'
    },
    {
      name: 'Deep Cleaning',
      description: 'Thorough cleaning for kitchens and bathrooms, carpets and upholstery, windows and blinds, and hard-to-reach areas.',
      priceText: 'Starting from [PRICE]'
    },
    {
      name: 'Specialized Services',
      description: 'Additional services including carpet cleaning, upholstery cleaning, window cleaning, and pressure washing.',
      priceText: 'Starting from [PRICE]'
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

  // Feature toggles - control which features are enabled
  features: {
    bookingForm: false,
    gallery: false,
    pricingTable: false
  },

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
