import React, { Component } from 'react';

import AppHeader from './../AppHeader/';
import SearchPanel from './../SearchPanel/';
import TodoList from './../TodoList/';
import ItemStatusFilter from './../ItemStatusFilter';
import AddTodo from './../AddTodo';

import './App.css';

class App extends Component {

    state = {
        todoData: [
            { label: 'Drink Cofee', important: false, id: 1, done: false },
            { label: 'Create React App', important: true, id: 2, done: false },
            { label: 'Eat Lunch', important: false, id: 3, done: false }
        ]
    }

    deleteTodo = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter(item => item.id !== id)
            }
        });
    }

    addTodo = (todo) => {
        if (todo.length > 0) {
            this.setState(({todoData}) => {
                const id = (todoData[todoData.length - 1]) ? todoData[todoData.length - 1]['id'] + 1 : 1;

                console.log(id);

                const newTodo = { 
                    label: todo, 
                    important: false, 
                    id: id,
                    done: false
                };
                return {
                    todoData: [...todoData, newTodo]
                }
            });
        }
    }

    render() {
        const { todoData } = this.state;
        return (
            <div className='app'>
                <AppHeader todo={1} done={3} />
                <div className='app-actions'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todoData={todoData} deleteHandler={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default App;