import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { movies$ } from './movies';
import { allMovies } from './store/reducers/movie';
import MovieCards from './components/MovieCards';
import { allCategories } from './store/reducers/category';
import CategoriesFilter from './components/CategoriesFilter';
import Loader from './components/Loader';
import useInterval from './hooks/useInterval';

const AppContainer = styled.div`
  background: var(--main-bg-color);
  min-height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: 12em 1fr;
  @media (max-width: 80em){
    grid-template-columns: 1fr;
  }
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
  const { selectedCategories } = useSelector((state) => state.categories);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { selectedCount } = useSelector((state) => state.items);
  const [title, setTitle] = useState('Movie APp');
  const [offset, setOffset] = useState(0);

  function filterByCategory(selection) {
    return movies.filter((movie) => selection
      .includes(movie.category.toLowerCase()));
  }

  function moveTitle() {
    setOffset(offset >= title.length ? 0 : offset + 1);
    document.title = title;
    const titleStart = 'MoViE APp                   '.split('').slice(offset).join('');
    setTitle(titleStart);
  }

  function fetchMoviesAndCategories() {
    if (movies?.length > 0 && categories?.length > 0) {
      if (selectedCategories.length > 0) {
        setFilteredMovies(filterByCategory(selectedCategories));
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
        .catch((e) => {
          setError(e);
          return new Error(`could not load data: ${e}}`);
        });
    }
  }

  useInterval(() => {
    moveTitle();
  }, 250);

  useEffect(() => {
    fetchMoviesAndCategories();
  }, [movies, categories, selectedCount, selectedCategories]);

  return (
    <AppContainer>
      {loading
        ? <Loader />
        : (
          <>
            <CategoriesFilter />
            {movies && <MovieCards filteredMovies={filteredMovies} />}
          </>
        )}
      {error && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        :( Error...
        Could not load data...
      </motion.div>
      )}
    </AppContainer>
  );
}

export default App;
