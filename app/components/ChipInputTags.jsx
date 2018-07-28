import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

export default function ChipInputTags(props) {
  const { value, onRequestAdd, onRequestDelete } = props;
  return (
    <ChipInput
      style={{ marginRight: 15, marginBottom: 12.5 }}
      fullWidth={false}
      floatingLabelText="Tags"
      value={value}
      onRequestAdd={chip => onAddChip(chip)}
      onRequestDelete={(chip, index) => onRemoveChip(chip, index)}
    />
  );
}

ChipInputTags.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onRequestAdd: PropTypes.func.isRequired,
  onRequestDelete: PropTypes.func.isRequired,
};
