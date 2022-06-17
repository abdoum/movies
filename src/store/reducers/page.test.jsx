/* eslint-disable no-undef */
import * as pageActions from './page';

describe('Page actions', () => {
  it('should create a select page action object', () => {
    expect(pageActions.selectPage(2)).toEqual({
      payload: 2,
      type: 'pages/selectPage',
    });
    expect(pageActions.selectPage(4)).toEqual({
      payload: 4,
      type: 'pages/selectPage',
    });
  });

  it('should create a setAllPages action objet', () => {
    expect(pageActions.setAllPages([1, 2, 3, 4, 5, 6, 7, 8])).toEqual({
      type: 'pages/setAllPages',
      payload: [1, 2, 3, 4, 5, 6, 7, 8],
    });
    expect(pageActions.setAllPages([1, 2])).toEqual({
      type: 'pages/setAllPages',
      payload: [1, 2],
    });
  });

  it('should return the initial state when state is undefined', () => {
    expect(pagesReducer(undefined, { type: '@INIT' })).toEqual({
      pages: [],
      selectedPage: 1
    });
  });
});
