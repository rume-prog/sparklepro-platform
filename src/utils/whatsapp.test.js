import { describe, it, expect } from 'vitest';
import { buildWhatsAppMessage } from './whatsapp';

describe('buildWhatsAppMessage', () => {
  it('builds message with all fields filled', () => {
    const formData = {
      name: 'John Doe',
      phone: '+254712345678',
      service: 'Residential Cleaning',
      area: 'Westlands',
      date: '2024-01-15',
      message: 'Please send a quote'
    };

    const result = buildWhatsAppMessage(formData);

    expect(result).toContain('John%20Doe');
    expect(result).toContain('%2B254712345678');
    expect(result).toContain('Residential%20Cleaning');
    expect(result).toContain('Westlands');
    expect(result).toContain('2024-01-15');
    expect(result).toContain('Please%20send%20a%20quote');
    expect(result).toContain('*New%20Booking%20Request*');
  });

  it('builds message without optional message field', () => {
    const formData = {
      name: 'Jane Smith',
      phone: '+254798765432',
      service: 'Commercial Cleaning',
      area: 'Karen',
      date: '2024-02-20',
      message: ''
    };

    const result = buildWhatsAppMessage(formData);

    expect(result).toContain('Jane%20Smith');
    expect(result).toContain('Commercial%20Cleaning');
    expect(result).not.toContain('*Message*');
  });

  it('handles special characters in message', () => {
    const formData = {
      name: 'Test User',
      phone: '+254700000000',
      service: 'Deep Cleaning',
      area: 'Nairobi CBD',
      date: '2024-03-01',
      message: 'Need ASAP! $50 budget?'
    };

    const result = buildWhatsAppMessage(formData);

    // encodeURIComponent does not encode ! by default
    expect(result).toContain('Need%20ASAP!%20%2450%20budget%3F');
  });

  it('handles message with only whitespace as empty', () => {
    const formData = {
      name: 'Test User',
      phone: '+254700000000',
      service: 'Deep Cleaning',
      area: 'Nairobi',
      date: '2024-03-01',
      message: '   '
    };

    const result = buildWhatsAppMessage(formData);

    expect(result).not.toContain('*Message*');
  });
});
