import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders the four page links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
