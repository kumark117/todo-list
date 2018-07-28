import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const ChipFilters = ({ label }) => (
  <Chip
      /* style = {{ 'width': '100%', 'marginBottom': 20 }} */
    label={label}
    clickable
  />
);

ChipFilters.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ChipFilters;
