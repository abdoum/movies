import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { deleteMovie } from '../store/reducers/movie';
import LikeButton from './LikeButton';
import Pagination from './Pagination';
import DeleteMovieButton from './DeleteMovieButton';
import { selectPage } from '../store/reducers/page';

const Card = styled.div`
  height: 20em;
  min-width: 90%;
  max-width: max(30%);
  margin: 1em;
  padding: 1em;
  border: beige dashed medium;
  border-radius: 12px;
  em{
    color: var(--secondary-color);
  }
  button{
    width: 2.5em;
    height: 2.5em;
    border: none;
    text-decoration: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: darkgray;
    padding: .3rem .4rem;
    background-color: transparent;
    :hover {
      color: var(--secondary-color);
      transition: background 250ms ease-in-out,
      transform 150ms ease;
    }
  }
`;

const CardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  align-items: start;
  justify-content: space-between;
  overflow: auto;
  margin: 2em;
  padding: 2em;
  @media (max-width: 80em){
    grid-template-columns: 1fr;
  }
`;

const MovieTitle = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 0;
    top: -1.5em;
  }
`;

const CardsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Displays each movie in a card
 * @param movies
 * @returns {JSX.Element}
 * @constructor
 */
export default function MovieCards({ filteredMovies }) {
  const dispatch = useDispatch();
  const [moviesPerPage, setMoviesPerPage] = useState([]);
  const { pages } = useSelector((state) => state.pages);
  const { selectedPage } = useSelector((state) => state.pages);
  const { selectedCount } = useSelector((state) => state.items);
  const { movies } = useSelector((state) => state.movies);

  const offset = selectedPage === 1 ? 0 : (selectedPage - 1) * selectedCount;

  function displayMovies() {
    if (selectedPage > pages.length) {
      dispatch(selectPage(1));
    }
    setMoviesPerPage(filteredMovies
      .slice(
        offset,
        offset + selectedCount
      ));
  }

  function removeMovie(id) {
    dispatch(deleteMovie(id));
  }

  useEffect(() => {
    displayMovies();
  }, [pages, selectedPage, selectedCount, filteredMovies, movies]);

  return (
    <CardsDiv>
      <CardsContainer>
        {moviesPerPage.map((movie, index) => (
          <Card key={movie.id} data-testid={`movie${index}`}>
            <MovieTitle>
              <h3>{movie.title}</h3>
              <DeleteMovieButton index={index} clickAction={() => removeMovie(movie.id)} />
            </MovieTitle>
            <em>
              {movie.category}
            </em>
            <LikeButton movie={movie} />
          </Card>
        ))}
        <Pagination moviesCount={filteredMovies.length} />
      </CardsContainer>
    </CardsDiv>
  );
}
