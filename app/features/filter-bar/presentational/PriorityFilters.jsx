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

  remainingTodosByPriority = (todos, remainingTodos) => {
    let remainingLow = [];
    let remainingMedium = []; 
    let remainingHigh = [];
    remainingTodos.map(key => {
        switch(todos[key].priority) {
            case "low":
                console.log("this one is low")
                remainingLow.push(key)
            case "medium":
                console.log(todos[key].todo, "this one is medium")
                remainingMedium.push(key)
            case "high":
                console.log(todos[key].todo, "this one is high")
                remainingHigh.push(key)
        }
    })
    let remainingByPriorityMap = {};
    remainingByPriorityMap["low"] = remainingLow.length
    remainingByPriorityMap["medium"] = remainingMedium.length
    remainingByPriorityMap["high"] = remainingHigh.length
    return remainingByPriorityMap;
  }

  render() {
    debugger;
    const { classes, onSelectPriority, todos, remainingTodos } = this.props;
    this.remainingTodosByPriority(todos, remainingTodos);
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Priority"
            name="priorityRadios"
            value={this.state.value}
            onChange={(event) => {
                onSelectPriority(event.target.value);
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
              label={`all (${remainingByPriorityMap.high})`}
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
