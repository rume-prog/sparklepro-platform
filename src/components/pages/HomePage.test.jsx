import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Mock the config
vi.mock('../../config/site', () => ({
  siteConfig: {
    businessName: 'Test Business',
    tagline: 'Test Tagline',
    description: 'Test description',
    heroImage: {
      src: '/images/hero.webp',
      alt: 'Gloved hand scrubbing a wet floor with foam'
    },
    services: [
      {
        name: 'Test Service',
        slug: 'test-service',
        description: 'Test service description.',
        priceText: '[PRICE]',
        image: null
      }
    ],
    values: [
      { title: 'Test Value', description: 'Test value description' }
    ],
    features: {
      pricingSection: false,
      faqSection: false,
      howItWorksSection: false,
      areasServedSection: false
    },
    pricing: [],
    faq: [],
    howItWorks: [],
    areasServed: ['Nairobi']
  }
}));

// Mock section components
vi.mock('../sections/PricingSection', () => ({
  default: () => null
}));

vi.mock('../sections/FAQSection', () => ({
  default: () => null
}));

vi.mock('../sections/HowItWorksSection', () => ({
  default: () => null
}));

vi.mock('../sections/AreasServedSection', () => ({
  default: () => null
}));

describe('HomePage', () => {
  it('renders hero section with image', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText('Gloved hand scrubbing a wet floor with foam');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/images/hero.webp');
    expect(heroImage).toHaveAttribute('width', '1920');
    expect(heroImage).toHaveAttribute('height', '1080');
  });

  it('renders hero text', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
    const heroSubtitle = screen.getByText('Test description', { selector: '.hero-subtitle' });
    expect(heroSubtitle).toBeInTheDocument();
  });

  it('renders hero buttons', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText('Get a Free Quote')).toBeInTheDocument();
    expect(screen.getByText('View Services')).toBeInTheDocument();
  });
});
