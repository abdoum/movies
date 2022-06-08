import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesFilter from './components/CategoriesFilter';
import { movies$ } from './movies';
import { allCategories, allMovies } from './store/reducers/movie';

/**
 * Return the App base component
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { categories } = useSelector((state) => state.movies);

  useEffect(() => {
    movies$
      .then((moviesData) => {
        dispatch(allMovies(moviesData));
        dispatch(allCategories(moviesData));
      })
      .catch((e) => new Error(`could not load data: ${e}`));
  }, [dispatch, movies]);

  return (
    <div className="App">
      <ol>
        {movies && movies.map((movie) => (<li key={movie.id}>{movie.title}</li>))}
      </ol>
      <CategoriesFilter movies={movies} categories={categories} />
    </div>
  );
}

export default App;
