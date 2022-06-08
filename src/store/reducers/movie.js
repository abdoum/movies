// eslint-disable-next-line default-param-last
import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  movies: [],
  categories: []
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: defaultState,
  reducers: {
    allMovies: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.movies = action.payload;
      return state;
    },
    allCategories: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.categories = [...new Set(action.payload.map((movie) => movie.category))].map((cat) => (
        {
          name: cat,
          isSelected: false
        }));
      return state;
    },
    deleteMovie: (state, action) => {
      const id = action.payload;
      return state.movies.filter((movie) => movie.id !== id);
    },
    toggleSelected: (state, action) => {
      // eslint-disable-next-line no-shadow
      const category = action.payload;
      // eslint-disable-next-line no-param-reassign,no-return-assign
      state.categories.find((cat) => cat.name === category.name)
        .isSelected = !category.isSelected;
      return state;
    },
  }
});

export const {
  toggleSelected, allMovies, deleteMovie, filterByCategory, allCategories
} = moviesSlice.actions;
export default moviesSlice.reducer;
