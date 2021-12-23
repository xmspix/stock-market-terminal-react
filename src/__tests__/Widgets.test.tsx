import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders Market Screener', () => {
  render(<App />);
  const tab = screen.getByText(/Market Screener/i);
  expect(tab).toBeInTheDocument();
});