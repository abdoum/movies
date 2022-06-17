/* eslint-disable no-undef */
import React from 'react';
import { render as reduxRender, screen } from './test-utils';
import App from './App';

test('renders movies', async () => {
  reduxRender(<App />);
  // should show all the movies
  const firstMovie = await screen.findByText(/Oceans 8/i);
  expect(firstMovie).toBeInTheDocument();
});
