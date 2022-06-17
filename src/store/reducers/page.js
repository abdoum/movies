import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  pages: [],
  selectedPage: 1
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState: defaultState,
  reducers: {
    setAllPages: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.pages = action.payload;
      return state;
    },
    selectPage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedPage = action.payload;
      return state;
    },
  }
});

export const { setAllPages, selectPage } = pagesSlice.actions;

export default pagesSlice.reducer;
