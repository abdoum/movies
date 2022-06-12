import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../store/reducers/movie';
import LikeButton from './LikeButton';

const Card = styled.div`
  height: 20em;
  min-width: 90%;
  max-width: max(30%);
  margin: 1em;
  padding: 1em;
  border: beige dashed medium;
  border-radius: 12px;
`;

const CardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-content: space-between;
  overflow: auto;
  margin: 2em;
  padding: 2em;
  @media (max-width: 80em){
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  position: relative;
  button{
    position: absolute;
    right: 0em;
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
export default function MovieCards({ movies }) {
  const dispatch = useDispatch();

  return (
    <CardsDiv>
      <CardsContainer>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Title>
              <h3>{movie.title}</h3>
              <button type="button" onClick={() => dispatch(deleteMovie(movie.id))}>X</button>
            </Title>
            <span>
              {movie.category}
            </span>
            <LikeButton movie={movie} />
          </Card>
        ))}
      </CardsContainer>
    </CardsDiv>
  );
}
