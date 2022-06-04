import React, { useEffect, useState } from 'react';
import './App.css';
import DropdownFilter from './components/DropdownFilter';
import { movies$ } from './movies';

/**
 * Return the App base component
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movies$.then((moviesData) => {
      const categoriesList = moviesData.map((movie) => movie.category);
      setCategories([...new Set(categoriesList)]);
      setMovies(moviesData);
    });
  }, [movies]);

  return (
    <div className="App">
      <DropdownFilter categories={categories} />
    </div>
  );
}

export default App;
