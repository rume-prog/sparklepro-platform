import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

// Mock window.open
global.open = vi.fn();

// Mock the config with placeholder WhatsApp number
vi.mock('../../config/site', () => ({
  siteConfig: {
    businessName: 'Test Business',
    services: [
      { name: 'Residential Cleaning', description: 'Test', priceText: '[PRICE]' },
      { name: 'Commercial Cleaning', description: 'Test', priceText: '[PRICE]' }
    ],
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
    features: {
      bookingForm: true,
      gallery: false,
      pricingTable: false
    }
  }
}));

describe('ContactPage', () => {
  it('disables submit button when WhatsApp number is a placeholder', () => {
    render(<ContactPage />);

    const submitButton = screen.getByRole('button', { name: /send via whatsapp/i });
    expect(submitButton).toBeDisabled();
  });

  it('shows notice when WhatsApp number is not set up', () => {
    render(<ContactPage />);

    const notice = screen.getByText('WhatsApp number not set up yet');
    expect(notice).toBeInTheDocument();
  });

  it('disables quick contact WhatsApp button when WhatsApp number is a placeholder', () => {
    render(<ContactPage />);

    const whatsappButton = screen.getByRole('button', { name: /contact via whatsapp/i });
    expect(whatsappButton).toBeDisabled();
  });

  it('disables phone link when phone number is a placeholder', () => {
    render(<ContactPage />);

    const phoneLink = screen.queryByRole('link', { name: /\[PHONE NUMBER\]/i });
    expect(phoneLink).not.toBeInTheDocument();
  });

  it('disables call button when phone number is a placeholder', () => {
    render(<ContactPage />);

    const callButton = screen.getByRole('button', { name: /call/i });
    expect(callButton).toBeDisabled();
  });
});
