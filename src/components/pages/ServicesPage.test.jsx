import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesPage from './ServicesPage';

// Mock the config
vi.mock('../../config/site', () => ({
  siteConfig: {
    areasServed: ['Nairobi'],
    services: [
      {
        name: 'Residential Cleaning',
        slug: 'residential-cleaning',
        description: 'Complete home cleaning services.',
        priceText: 'Starting from [PRICE]',
        image: null
      },
      {
        name: 'Commercial Cleaning',
        slug: 'commercial-cleaning',
        description: 'Professional cleaning for businesses.',
        priceText: 'Starting from [PRICE]',
        image: {
          src: '/images/commercial.webp',
          alt: 'Commercial cleaning'
        }
      }
    ],
    contact: {
      phone: '[PHONE NUMBER]'
    },
    heroImage: {
      src: '/images/hero.webp',
      alt: 'Hero image'
    }
  }
}));

describe('ServicesPage', () => {
  it('renders services list', () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Our Cleaning Services')).toBeInTheDocument();
    expect(screen.getByText('Residential Cleaning')).toBeInTheDocument();
    expect(screen.getByText('Commercial Cleaning')).toBeInTheDocument();
  });

  it('does not render image when service has no image', () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    );

    const residentialImage = screen.queryByAltText('Complete home cleaning services.');
    expect(residentialImage).not.toBeInTheDocument();
  });

  it('renders image when service has image', () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    );

    const commercialImage = screen.getByAltText('Commercial cleaning');
    expect(commercialImage).toBeInTheDocument();
    expect(commercialImage).toHaveAttribute('src', '/images/commercial.webp');
    expect(commercialImage).toHaveAttribute('loading', 'lazy');
  });

  it('renders Learn More links for each service', () => {
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    );

    const learnMoreLinks = screen.getAllByText('Learn More');
    expect(learnMoreLinks).toHaveLength(2);
  });
});
