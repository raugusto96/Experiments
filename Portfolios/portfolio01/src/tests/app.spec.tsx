import React from 'react';

import { render, screen } from '@testing-library/react';

import App from '../App';

describe('Teste', () => {
  it('should have a text with "Hello world"', () => {
    render(<App />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });
});