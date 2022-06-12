import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleSelected } from '../store/reducers/category';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  //justify-content: center;
  //text-align: center;
  //font-size: calc(10px + 2vmin);
  margin: 2rem;
`;

export default function CategoriesFilter({ movies, categories }) {
  const dispatch = useDispatch();
  const [remainingCategories, setRemainingCategories] = useState(categories);

  useEffect(() => {
    const movieCategories = movies.map((movie) => movie.category);
    setRemainingCategories(categories.filter((cat) => movieCategories.includes(cat.name)));
  }, [movies, categories]);

  return (
    <FiltersContainer>
      <section>
        <h3>Categories:</h3>
        {remainingCategories.map((category) => (
          <label key={category.name.toLowerCase()} htmlFor={category.name.toLowerCase()} className="form-control">
            <input
              id={category.name.toLowerCase()}
              type="checkbox"
              name="checkbox"
              checked={category.isSelected}
              onChange={() => {
                dispatch(toggleSelected(category));
              }}
            />
            {`${category.name} (${category.occurrences})`}
          </label>
        ))}
      </section>
    </FiltersContainer>
  );
}
