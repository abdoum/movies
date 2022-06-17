/* eslint-disable no-undef */
import * as itemsActions from './items';
import itemsReducer from './items';

describe('items actions', () => {
  it('should create a selectCount action object', () => {
    expect(itemsActions.setAllCounts([4, 8, 12])).toEqual({
      payload: [4, 8, 12],
      type: 'items/setAllCounts',
    });
    expect(itemsActions.selectCount(4)).toEqual({
      payload: 4,
      type: 'items/selectCount',
    });
  });

  it('should return the initial state when state is undefined', () => {
    expect(itemsReducer(undefined, { type: '@INIT' })).toEqual({
      allCounts: [4, 8, 12],
      selectedCount: 4
    });
  });
});
