import React, { Component } from 'react';
import { List } from 'material-ui/List';
import TodoRow from './TodoRow';

export default class TodoList extends Component {

    render() {
        return (
            <div>
                <TodoRow />
            </div>
        )
    }
}