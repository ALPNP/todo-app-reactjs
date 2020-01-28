import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {

    doAddTodo = () => {
        this.props.addTodo(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <div className='add-todo'>
                <input 
                    ref={ref => this.input = ref}
                    className='form-control'
                    placeholder='type new todo'
                />
                <button type='button' onClick={this.doAddTodo} className='btn btn-sm btn-success add-todo-button'>
                    <i className="fas fa-plus fa-fw"></i>
                </button>
            </div>
        )
    }
}

export default AddTodo;