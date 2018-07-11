import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from 'material-ui/Paper';
import MoreIcon from '@material-ui/icons/More';

export default class TodoRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      isPopoverOpen: false 
    }
  };

  onClickDelete = () => {
    console.log('testing delete button')
    this.props.removeTodo()
  };

  render() {
    const { todo, tags, complete } = this.props;

    return (
      <div>
      <ListItem
        primaryText={todo}
        leftCheckbox={
          <Checkbox
            checked={complete ? true : false}
          />
        }
        rightIconButton={
          <IconButton
            onClick={this.onClickDelete}>
            <DeleteIcon />
          </IconButton>
        }
        style={complete ? styles.completed : {}}
      />
      </div>
    );
  }
}

const styles = {
    completed: {
        color: 'gray',
        textDecoration: 'line-through'
    }
};