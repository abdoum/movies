import ActionTypes from './actionTypes';

const deleteMovie = (id) => ({
  type: ActionTypes.DELETE_MOVIE,
  payload: id
});

const filterMovies = (categories) => ({
  type: ActionTypes.FILTER_CATEGORIES,
  payload: categories
});

export default {
  deleteMovie,
  filterMovies
};
