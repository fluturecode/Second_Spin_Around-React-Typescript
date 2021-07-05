import { render, screen } from '@testing-library/react';
import React from 'react';
import { Main } from './Main';

test('renders learn react link', () => {
  render(<Main/>);
  const linkElement = screen.getByText(/main component/i);
  expect(linkElement).toBeInTheDocument();
});
