import React, { Component } from 'react';
import { List } from 'material-ui/List';
import TodoRow from './TodoRow';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                 {
                    this.props.todos.map((todo, key) => {
                        return (
                            <TodoRow 
                                key={todo.id}
                                todo={todo.todo}
                                tags={todo.tags}
                                complete={todo.complete}
                            />
                        )
                    })
                }
            </div>
        )
    }
}