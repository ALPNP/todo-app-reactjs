import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {

    state = {
        value: ''
    }

    onLabelChange = (e) => {
        this.setState({ value: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form className='add-todo' onSubmit={this.onSubmit}>
                <input
                    ref={ref => this.input = ref}
                    className='form-control'
                    placeholder='type new todo'
                    value={this.state.value}
                    onChange={this.onLabelChange}
                />
                <button type='submit' className='btn btn-sm btn-success add-todo-button'>
                    <i className="fas fa-plus fa-fw"></i>
                </button>
            </form>
        )
    }
}

export default AddTodo;