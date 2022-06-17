import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  allCounts: [4, 8, 12],
  selectedCount: 4
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: defaultState,
  reducers: {
    setAllCounts: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.allCounts = action.payload;
      return state;
    },
    selectCount: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedCount = action.payload;
      return state;
    },
  }
});

export const { setAllCounts, selectCount } = itemsSlice.actions;

export default itemsSlice.reducer;
