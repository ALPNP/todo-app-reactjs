import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {
    const { label, onDelete, onToggleImportant, onToggleDone, done, important } = props;
    const spanStyle = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal',
        textDecoration: done ? 'line-through' : 'none'
    };

    if (done) {
        spanStyle.color = 'grey';
    }

    return (
        <div className='todo-list-item'>
            <span className='todo-label' style={spanStyle} onClick={onToggleDone}>
                {label}
            </span>
            <div className='todo-actions'>
                <button type='button' className='btn btn-sm btn-danger' onClick={onDelete}>
                    <i className="fas fa-trash fa-fw"></i>
                </button>
                <button type='button' disabled={done} onClick={onToggleImportant} className='btn btn-sm btn-success'>
                    <i className="fas fa-exclamation fa-fw"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;