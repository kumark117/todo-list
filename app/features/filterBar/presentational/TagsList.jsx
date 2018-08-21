import React from 'react';
import ChipFilters from './ChipFilters.jsx';

export default function TagsList({ tags }) {
  return (
    <div>
      {
        tags.map(tag => (
          <ChipFilters
            label={tag}
            key={tag}
          />
        ))
      }
    </div>
  );
}
