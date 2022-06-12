import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  categories: []
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: defaultState,
  reducers: {
    allCategories: (state, action) => {
      const moviesCategories = action.payload.map((movie) => movie.category);
      // eslint-disable-next-line no-param-reassign
      state.categories = [...new Set(moviesCategories)].map((cat) => {
        const occurrences = (cats, val) => cats.reduce((a, v) => (v === val ? a + 1 : a), 0);
        return {
          name: cat,
          isSelected: false,
          occurrences: occurrences(moviesCategories, cat)
        };
      });
      return state;
    },
    toggleSelected: (state, action) => {
      const category = action.payload;
      const existingCategory = state.categories.find((cat) => cat.name === category.name);
      existingCategory.isSelected = !category.isSelected;
      return state;
    },
  }
});

export const { allCategories, toggleSelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;
