import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { movies$ } from './movies';
import { allMovies } from './store/reducers/movie';
import MovieCards from './components/MovieCards';
import { allCategories } from './store/reducers/category';
import CategoriesFilter from './components/CategoriesFilter';
import Loader from './components/Loader';

const AppContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: 12em 1fr;
`;

/**
 * Return the App base component
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { categories } = useSelector((state) => state.categories);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movies?.length > 0 && categories?.length > 0) {
      const selectedCategories = categories
        .filter((cat) => cat.isSelected).map((cat) => cat.name.toLowerCase());
      if (selectedCategories.length > 0) {
        setFilteredMovies(movies.filter((movie) => selectedCategories
          .includes(movie.category.toLowerCase())));
      } else {
        setFilteredMovies(movies);
        setLoading(false);
      }
    } else {
      movies$
        .then((moviesData) => {
          setLoading(false);
          dispatch(allMovies(moviesData));
          dispatch(allCategories(moviesData));
        })
        .catch((e) => new Error(`could not load data: ${e}`));
    }
  }, [movies, categories]);

  return (
    <AppContainer>
      {loading
        ? <Loader />
        : (
          <>
            <CategoriesFilter movies={movies} categories={categories} />
            {movies && <MovieCards movies={filteredMovies} />}
          </>
        )}
    </AppContainer>
  );
}

export default App;
