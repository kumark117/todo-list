import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_action';

class TextInputContainers extends Component {
    render() {
        return (
            <TextInput />
        )
    };
}