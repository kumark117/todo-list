import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const TagsList = ({ tags, onSelectTag }) => (
  <div>
    {
      tags.map(tag => (
        <Chip
          style={{ margin: 5 }}
          key={tag}
          label={tag === 'All' ? 'SHOW ALL' : tag}
          onClick={() => onSelectTag("tag", tag)}
        />
      ))
    }
  </div>
);

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectTag: PropTypes.func.isRequired,
};

export default TagsList;
