import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class TodoRow extends Component {
  render() {
    const { todo, tags, complete } = this.props;

    return (
      <ListItem
        primaryText={todo}
        leftCheckbox={
          <Checkbox
            checked={complete ? true : false}
          />
        }
        rightIconButton={
          <IconButton >
            <DeleteIcon />
          </IconButton>
        }
        style={complete ? styles.completed : {}}
      />
    );
  }
}

const styles = {
    completed: {
        color: 'gray',
        textDecoration: 'line-through'
    }
};