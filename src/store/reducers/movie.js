// eslint-disable-next-line default-param-last
import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  movies: [],
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
    deleteMovie: (state, action) => {
      const id = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.movies = state.movies.filter((movie) => movie.id !== id);
      return state;
    },
    like: (state, action) => {
      const movieId = action.payload;
      // eslint-disable-next-line no-param-reassign,no-plusplus
      state.movies.filter((movie) => movie.id === movieId).map((movie) => {
        // eslint-disable-next-line no-param-reassign
        movie.liked = true;
        // eslint-disable-next-line no-param-reassign,no-plusplus
        movie.likes++;
        return movie;
      });
      return state;
    },
    unlike: (state, action) => {
      const movieId = action.payload;
      // eslint-disable-next-line no-param-reassign,no-plusplus
      state.movies.filter((movie) => movie.id === movieId).map((movie) => {
        // eslint-disable-next-line no-param-reassign
        movie.liked = false;
        // eslint-disable-next-line no-param-reassign,no-plusplus
        movie.likes--;
        return movie;
      });
      return state;
    },
    dislike: (state, action) => {
      const movieId = action.payload;
      // eslint-disable-next-line no-param-reassign,no-plusplus
      state.movies.filter((movie) => movie.id === movieId).map((movie) => {
        // eslint-disable-next-line no-param-reassign
        movie.disliked = true;
        // eslint-disable-next-line no-param-reassign,no-plusplus
        movie.dislikes++;
        return movie;
      });
      return state;
    },
    unDislike: (state, action) => {
      const movieId = action.payload;
      // eslint-disable-next-line no-param-reassign,no-plusplus
      state.movies.filter((movie) => movie.id === movieId).map((movie) => {
        // eslint-disable-next-line no-param-reassign
        movie.disliked = false;
        // eslint-disable-next-line no-param-reassign,no-plusplus
        movie.dislikes--;
        return movie;
      });
      return state;
    }
  }
});

export const {
  allMovies, deleteMovie, like, unlike, dislike, unDislike
} = moviesSlice.actions;
export default moviesSlice.reducer;
