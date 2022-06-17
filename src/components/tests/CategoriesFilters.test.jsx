/* eslint-disable no-undef */
import React from 'react';
import { render as reduxRender, fireEvent, screen } from '../../test-utils';
import App from '../../App';

test('renders filters unchecked by default', async () => {
  reduxRender(<App />);
  // should display the categories section
  const categoriesSection = screen.findByText(/Categories/i);
  expect(await categoriesSection).toBeInTheDocument();

  // should display the categories filters
  const comedyFilter = screen.findByText(/Comedy/i);
  expect(await comedyFilter).toBeInTheDocument();
  expect(await comedyFilter).not.toBeChecked();
});

test('renders filtered movies when a filter is checked', async () => {
  reduxRender(<App />);
  // should display the filtered movies only
  fireEvent.click(await screen.findByTestId(/comedy-filter/i));

  const movies = await screen.findAllByTestId(/movie[0-9]+/);
  expect(movies).toHaveLength(2);
});

test('shows 4 different categories filters', async () => {
  reduxRender(<App />);
  const filters = await screen.findAllByTestId(/[a-z]+-filter/i);
  expect(filters).toHaveLength(4);
});

test('if all movies of a given category are deleted, it should not appear in filters', async () => {
  reduxRender(<App />);
  // select the drame category filter
  const drameFilter = await screen.findByTestId(/drame-filter/i);
  fireEvent.click(drameFilter);
  // should display the filtered movies only
  const deleteMovieButton = screen.getByTestId(/delete-button0/);
  fireEvent.click(deleteMovieButton);
  // deleted movie should not appear
  expect(deleteMovieButton).not.toBeInTheDocument();
  // deleted category should not appear in the filters
  const filters = await screen.findAllByTestId(/[a-z]+-filter/i);
  expect(filters).toHaveLength(3);
});
