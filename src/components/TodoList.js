import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoData}) => {

    const list = todoData.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}><TodoListItem {...itemProps} /></li>
        )
    });

    return (
        <ul>{list}</ul>
    )
};

export default TodoList;