import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Popover from '@material-ui/core/Popover';
import Paper from 'material-ui/Paper';
import MoreIcon from '@material-ui/icons/More';

export default class TodoRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null 
    }
  };

  onClickDelete = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  onCloseDelete = () => {
    console.log('closing')
    this.setState({
      anchorEl: null,
    });
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
            onClick={this.onClickDelete} >
            <DeleteIcon />
            <MoreIcon />
            <Popover
              open={Boolean(this.state.anchorEl)}
              anchorEl={this.state.anchorEl}
              onClose={this.onClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Paper style={{ 'padding': 15 }}>Delete?</Paper>
            </Popover>
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