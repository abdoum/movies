import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './reducers/movie';
import categoriesReducer from './reducers/category';
import itemsReducer from './reducers/itemsPerPage';
import pagesReducer from './reducers/page';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    categories: categoriesReducer,
    items: itemsReducer,
    pages: pagesReducer
  }
});

export default store;
