import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ServiceDetailPage from './ServiceDetailPage';

// Mock the config
vi.mock('../../config/site', () => ({
  siteConfig: {
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
        image: null
      }
    ],
    heroImage: {
      src: '/images/hero.webp',
      alt: 'Hero image'
    }
  }
}));

describe('ServiceDetailPage', () => {
  it('renders service details for valid slug', () => {
    render(
      <MemoryRouter initialEntries={['/services/residential-cleaning']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Residential Cleaning')).toBeInTheDocument();
    expect(screen.getByText('Complete home cleaning services.')).toBeInTheDocument();
    expect(screen.getByText('Starting from [PRICE]')).toBeInTheDocument();
    expect(screen.getByText('Book This Service')).toBeInTheDocument();
  });

  it('shows not found message for invalid slug', () => {
    render(
      <MemoryRouter initialEntries={['/services/invalid-slug']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Service Not Found')).toBeInTheDocument();
    expect(screen.getByText('The service you are looking for does not exist.')).toBeInTheDocument();
    expect(screen.getByText('View All Services')).toBeInTheDocument();
  });

  it('links back to services page', () => {
    render(
      <MemoryRouter initialEntries={['/services/residential-cleaning']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    const backLink = screen.getByText('← Back to Services');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/services');
  });

  it('links to contact page for booking', () => {
    render(
      <MemoryRouter initialEntries={['/services/residential-cleaning']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    const contactLink = screen.getByText('Request a Quote');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });
});
