import React, { Component } from 'react';
import { List } from 'material-ui/List';
import TodoRowContainer from '../containers/TodoRowContainer';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                 {
                    this.props.todos.map((todo, key) => {
                        return (
                            <TodoRowContainer
                                key={todo.id}
                                todo={todo.todo}
                                tags={todo.tags}
                                complete={todo.complete} />
                        )
                    })
                }
            </div>
        )
    }
}