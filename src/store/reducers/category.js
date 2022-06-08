import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  categories: [{
    name: '',
    isSelected: false
  }]
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: defaultState,
  reducers: {
    allCategories: (state, action) => {
      const movies = action.payload;
      const categories = movies.map((movie) => movie.category);
      const distinctCategories = [...new Set(categories)];
      const categoriesObjects = distinctCategories.map((cat) => (
        {
          name: cat,
          isSelected: false
        }));
      // eslint-disable-next-line no-param-reassign
      state.categories = categoriesObjects;
      return state;
    },
    toggleSelected: (state, action) => {
      const category = action.payload;
      const existingCategory = state.categories.find((cat) => cat.name === category.name);
      existingCategory.isSelected = !category.isSelected;
      // eslint-disable-next-line no-param-reassign
      // state.categories[category.name].isSelected = !category.isSelected;
      return state;
    },
  }
});

export const { allCategories, toggleSelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;
