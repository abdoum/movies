import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSelected } from '../store/reducers/movie';

export default function CategoriesFilter({ categories }) {
  const dispatch = useDispatch();
  return (
    <div className="filters">
      { categories.map((category) => (
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
          {category.name}
        </label>
      ))}
    </div>
  );
}
