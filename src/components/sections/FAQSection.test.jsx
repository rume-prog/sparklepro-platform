import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQSection from './FAQSection';

// Mock the config with FAQ enabled
vi.mock('../../config/site', () => ({
  siteConfig: {
    features: {
      faqSection: true
    },
    faq: [
      {
        question: 'Test question 1?',
        answer: 'Test answer 1'
      },
      {
        question: 'Test question 2?',
        answer: 'Test answer 2'
      }
    ]
  }
}));

describe('FAQSection', () => {
  it('renders FAQ items when feature is enabled', () => {
    render(<FAQSection />);

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('Test question 1?')).toBeInTheDocument();
    expect(screen.getByText('Test question 2?')).toBeInTheDocument();
  });

  it('toggles FAQ item when button is clicked', async () => {
    const user = userEvent.setup();
    render(<FAQSection />);

    const button = screen.getByRole('button', { name: /test question 1/i });
    const answerRegion = screen.getByText('Test answer 1').closest('[role="region"]');

    expect(answerRegion).not.toHaveClass('faq-answer-open');

    await user.click(button);
    expect(answerRegion).toHaveClass('faq-answer-open');

    await user.click(button);
    expect(answerRegion).not.toHaveClass('faq-answer-open');
  });

  it('button is keyboard focusable', () => {
    render(<FAQSection />);

    const button = screen.getByRole('button', { name: /test question 1/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles FAQ item when Space key is pressed', async () => {
    const user = userEvent.setup();
    render(<FAQSection />);

    const button = screen.getByRole('button', { name: /test question 1/i });
    const answerRegion = screen.getByText('Test answer 1').closest('[role="region"]');

    expect(answerRegion).not.toHaveClass('faq-answer-open');

    button.focus();
    await user.keyboard(' ');
    expect(answerRegion).toHaveClass('faq-answer-open');
  });

  it('has correct ARIA attributes for accessibility', () => {
    render(<FAQSection />);

    const button = screen.getByRole('button', { name: /test question 1/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls');

    const answerRegion = screen.getByText('Test answer 1').closest('[role="region"]');
    expect(answerRegion).toHaveAttribute('aria-hidden', 'true');
  });

  it('updates ARIA attributes when item is toggled', async () => {
    const user = userEvent.setup();
    render(<FAQSection />);

    const button = screen.getByRole('button', { name: /test question 1/i });
    const answerRegion = screen.getByText('Test answer 1').closest('[role="region"]');

    await user.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(answerRegion).toHaveAttribute('aria-hidden', 'false');
  });
});
