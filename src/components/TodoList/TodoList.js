import React from 'react';
import TodoListItem from '../TodoListItem/';
import './TodoList.css';

const TodoList = ({todoData, deleteHandler, onToggleImportant, onToggleDone}) => {

    const list = todoData.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem 
                    {...itemProps} 
                    onDelete={() => {deleteHandler(id)}} 
                    onToggleImportant={() => onToggleImportant(id)} 
                    onToggleDone={() => onToggleDone(id)} 
                />
            </li>
        )
    });

    return (
        <ul className='list-group todo-list'>
            {list}
        </ul>
    )
};

export default TodoList;