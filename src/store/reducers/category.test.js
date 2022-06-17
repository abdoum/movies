/* eslint-disable no-undef */
import * as categoryActions from './category';
import categoryReducer from './category';

describe('category actions', () => {
  it('should create a selectCount action object', () => {
    expect(categoryActions.allCategories({
      name: 'Drame',
      isSelected: false,
      occurrences: 3
    })).toEqual({
      payload: {
        name: 'Drame',
        isSelected: false,
        occurrences: 3
      },
      type: 'categories/allCategories',
    });
    expect(categoryActions.toggleSelected({
      name: 'Drame',
      isSelected: false,
      occurrences: 3
    })).toEqual({
      payload: {
        name: 'Drame',
        isSelected: false,
        occurrences: 3
      },
      type: 'categories/toggleSelected',
    });
  });

  it('should return the initial state when state is undefined', () => {
    expect(categoryReducer(undefined, { type: '@INIT' })).toEqual({
      categories: [],
      selectedCategories: []
    });
  });
});
