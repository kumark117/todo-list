import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  completed: {
    color: 'gray',
    textDecoration: 'line-through',
  },
};

export default function TodoRow({
  todo, complete, onClickComplete, onClickDelete,
}) {
  return (
    <div style={{ width: '80%' }}>
      <ListItem
        primaryText={todo}
        leftCheckbox={(
          <Checkbox
            onCheck={onClickComplete}
            checked={!!complete}
          />
        )}
        rightIconButton={(
          <IconButton
            onClick={onClickDelete}
          >
            <DeleteIcon />
          </IconButton>
        )}
        style={complete ? styles.completed : {}}
      />
    </div>
  );
}

TodoRow.propTypes = {
  todo: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  onClickComplete: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

TodoRow.defaultProps = {
  complete: false,
};
