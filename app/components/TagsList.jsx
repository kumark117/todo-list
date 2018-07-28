import React, { Component } from 'react';
import ChipFilters from './ChipFilters.jsx';
import { Chip } from 'material-ui';

const TagsList = () => {
  const { tags } = this.props;
  return (
    <div>
      {
        this.props.tags.map((tag, key) => {
          return (
            <ChipFilters
              label={tag}
              key={tag}
            />
          );
        })
      }
    </div>
  );
};

export default TagsList;
