import React from 'react';

import { render, screen } from '@testing-library/react';

import App from '../../../App';
import navLinksArray from '../../constants/navLinks.constants';

describe('Test the Nav component', () => {
  it('should have four links', () => {
    render(<App />);
    const navLinks = screen.getAllByRole('listitem');
    expect(navLinks).toHaveLength(4);
  });
  it('should each element rendered successfully', () => {
    render(<App />);
    const navLinks = screen.getAllByRole('listitem');
    navLinks.forEach((navLink) => {
      expect(navLink).toBeInTheDocument();
    });
  });
  it('should each element have our specified text', () => {
    render(<App />);
    const navLinks = screen.getAllByRole('listitem');
    navLinks.forEach((navLink, index) => {
      expect(navLink).toHaveTextContent(navLinksArray[index]);
    });
  });
});