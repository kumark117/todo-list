import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import { withStyles } from '@material-ui/core/styles';

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

  state = {
      value: "all"
  }

  onSelectPriority = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { classes, onSelectPriority } = this.props;
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Priority"
            name="priorityRadios"
            value={this.state.value}
            onChange={(event) => {
                onSelectPriority("priority", event.target.value);
                this.setState({ value: event.target.value });
            }} >
            <FormControlLabel
              value="all"
              control={<Radio color="primary" />}
              label="all"
            />
            <FormControlLabel
              value="high"
              control={<Radio color="primary" />}
              label="high"
            />
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" />}
              label="medium"
            />
            <FormControlLabel
              value="low"
              control={<Radio color="primary" />}
              label="low"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(PriorityFilters);
