import React from 'react';
import PropTypes from 'prop-types';
import ChipFilters from '../../../components/ChipFilters.jsx';

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

TagsList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
