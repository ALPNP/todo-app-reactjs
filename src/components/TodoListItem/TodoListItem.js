import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {

    state = {
        done: this.props.done,
        important: this.props.important
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    }

    onImportantClick = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        });
    }

    render() {
        const { label, onDelete } = this.props;
        const { done, important } = this.state;
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
                <span className='todo-label' style={spanStyle} onClick={this.onLabelClick}>
                    {label}
                </span>
                <div className='todo-actions'>
                    <button type='button' className='btn btn-sm btn-danger' onClick={onDelete}>
                        <i className="fas fa-trash fa-fw"></i>
                    </button>
                    <button type='button' disabled={done} onClick={this.onImportantClick} className='btn btn-sm btn-success'>
                        <i className="fas fa-exclamation fa-fw"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoListItem;