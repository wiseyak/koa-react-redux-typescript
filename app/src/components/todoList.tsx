import * as React from 'react';
import {TodoComponent, todoProps} from './todo';

interface todoListProps {
    todos: todoProps[];
    onTodoClick: (id: number) => any;
}

export class TodoListComponent extends React.Component< todoListProps, any> {
    constructor(props: todoListProps){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <ul>
                {this.props.todos.map(todo => 
                    <TodoComponent key={todo.id}
                        {...todo}
                        onClick={()=> this.props.onTodoClick(todo.id)} />
                )}
            </ul>
        );
    }
}