import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default class SelectPriority extends Component {
    render() {
        return (
            <div>
                <InputLabel style={{ 'fontSize': 12 }}>
                    Priority
                </InputLabel>
                <Select
                    value={this.props.value}
                    onChange={this.props.onChangePriority}
                    >
                    <MenuItem value={"high"}>High</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"low"}>Low</MenuItem>
                </Select>
            </div>
        )
    }
}