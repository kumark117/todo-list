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

  render() {
    const { todo, tags, complete } = this.props;

    return (
      <div style={{ 'width': '80%' }}>
      <ListItem
        primaryText={todo}
        leftCheckbox={
          <Checkbox
            onCheck={this.props.onClickComplete}
            checked={complete ? true : false}
          />
        }
        rightIconButton={
          <IconButton
            onClick={this.props.onClickDelete}>
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