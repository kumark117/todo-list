import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const styles = {
  root: {
    color: red[600],
    '&$checked': {
      color: red[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class PriorityFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onSelectPriority = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <RadioGroup
          aria-label="Priority"
          name="priorityRadios"
          value={this.state.value}
          onChange={this.onSelectPriority}
        >
          <Radio
            checked={false}
            value="high"
            name="radio-button-high"
            aria-label="HIGH"
            classes={{
              root: classes.root,
              checked: classes.checked,
            }}
          />
          <Radio
            checked={false}
            value="medium"
            name="radio-button-medium"
            aria-label="MEDIUM"
          />
          <Radio
            checked={false}
            value="low"
            name="radio-button-low"
            aria-label="LOW"
          />
        </RadioGroup>
      </div>
    );
  }
}

export default withStyles(styles)(PriorityFilters);
