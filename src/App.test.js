import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components';

describe('Header component', () => {
  it('renders the Reserve a Table button', () => {
    render(<Header />);
    const reserveButton = screen.getByRole('button', { name: /reserve a table/i });
    expect(reserveButton).toBeInTheDocument();
  });
});