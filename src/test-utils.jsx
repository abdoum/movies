import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import moviesReducer from './store/reducers/movie';
import categoriesReducer from './store/reducers/category';
import itemsReducer from './store/reducers/itemsPerPage';
import pagesReducer from './store/reducers/page';

function render(
  ui,
  {
    _preloadedState,
    store = configureStore({
      reducer: {
        movies: moviesReducer,
        categories: categoriesReducer,
        items: itemsReducer,
        pages: pagesReducer
      }
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
