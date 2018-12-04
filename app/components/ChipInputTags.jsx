import React from 'react';
import PropTypes from 'prop-types';
import ChipInput from 'material-ui-chip-input';

const ChipInputTags = ({ value, onAddChip, onRemoveChip }) => (
  <ChipInput
    style={{ marginRight: 15, marginBottom: 12.5 }}
    fullWidth={false}
    floatingLabelText="Tags"
    value={value}
    onRequestAdd={chip => onAddChip(chip)}
    onRequestDelete={(chip, index) => onRemoveChip(chip, index)}
  />
);

ChipInputTags.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onAddChip: PropTypes.func.isRequired,
  onRemoveChip: PropTypes.func.isRequired,
};

export default ChipInputTags;
