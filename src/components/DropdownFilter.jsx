import React from 'react';

export default function DropdownFilter({ categories }) {
  return (
    <div className="filters">
      {categories.map((category) => (
        <label htmlFor={category.toLowerCase()} className="form-control">
          <input id={category.toLowerCase()} type="checkbox" name="checkbox" />
          {category}
        </label>
      ))}
    </div>
  );
}
