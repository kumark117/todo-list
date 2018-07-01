import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class TodoRow extends Component {
  render() {
    const { todo, handleRemoveTodo, handleCompleteTodo } = this.props;

    return (
      <ListItem
        primaryText="test"
        leftCheckbox={
          <Checkbox
            checked={false}
          />
        }
        rightIconButton={
          <IconButton >
            <FontIcon
              className="material-icons"
              color="red"
            >
              clear
            </FontIcon>
          </IconButton>
        }
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