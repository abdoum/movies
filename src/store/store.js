import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/movie';
import categoriesReducer from './reducers/category';

// eslint-disable-next-line no-underscore-dangle
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    categories: categoriesReducer
  }
});

export default store;
