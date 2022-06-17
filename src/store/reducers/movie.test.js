/* eslint-disable no-undef */
import * as moviesActions from './movie';
import moviesReducer from './movie';

describe('Movies actions', () => {
  it('should create a like/dislike movie action object', () => {
    expect(moviesActions.like(2)).toEqual({
      payload: 2,
      type: 'movies/like',
    });
    expect(moviesActions.dislike(4)).toEqual({
      payload: 4,
      type: 'movies/dislike',
    });
  });

  it('should create a delete movie action objet', () => {
    expect(moviesActions.deleteMovie(2)).toEqual({
      type: 'movies/deleteMovie',
      payload: 2,
    });
  });

  it('should create a allMovies action objet', () => {
    expect(moviesActions.allMovies([{
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    }])).toEqual({
      type: 'movies/allMovies',
      payload: [{
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1
      }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12
      }],
    });
  });

  it('should return the initial state when state is undefined', () => {
    expect(moviesReducer(undefined, { type: '@INIT' })).toEqual({
      movies: [],
    });
  });
});
