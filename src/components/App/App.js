import React, { Component } from 'react';

import AppHeader from './../AppHeader/';
import SearchPanel from './../SearchPanel/';
import TodoList from './../TodoList/';
import ItemStatusFilter from './../ItemStatusFilter';
import AddTodo from './../AddTodo';

import './App.css';

class App extends Component {

    state = {
        todoData: this.generateItems(),
        searchValue: '',
        filterKey: 'all'
    }

    generateItems() {
        const fromApi = ['Drink Cofee', 'Create React App', 'Eat Lunch'];
        let generatedItems = [];

        fromApi.forEach((item) => {
            generatedItems.push(this.createTodoItem(item, generatedItems));
        });

        return generatedItems;
    }

    createTodoItem(label, from = this.state.todoData) {
        const id = this.getId(from);
        return {
            label,
            important: false,
            done: false,
            id: id
        }
    }

    toggleProp(arr, id, propName) {
        const todoIndex = arr.findIndex((el) => el.id === id);
        const oldItem = arr[todoIndex];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        const newTodoData = [
            ...arr.slice(0, todoIndex),
            newItem,
            ...arr.slice(todoIndex + 1)
        ]

        return {
            todoData: newTodoData
        }
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => this.toggleProp(todoData, id, 'done'));
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => this.toggleProp(todoData, id, 'important'));
    }

    deleteTodo = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter(item => item.id !== id)
            }
        });
    }

    getId(from) {
        return (from[from.length - 1]) ? from[from.length - 1]['id'] + 1 : 1;
    }

    addTodo = (todo) => {
        if (todo.length > 0) {
            this.setState(({todoData}) => {
                return {
                    todoData: [...todoData, this.createTodoItem(todo)]
                }
            });
        }
    }

    search = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    filter = (key) => {
        this.setState({ filterKey: key });
    }

    render() {
        const { searchValue, filterKey } = this.state;
        let { todoData } = this.state;

        if (searchValue.length > 0) {
            todoData = [...todoData.filter((item) => item.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)];
        }

        if (filterKey !== 'all') {
            todoData = [...todoData.filter((item) => item.done === (filterKey === 'done'))];
        }

        const doneCount = todoData.filter((el) => el.done).length;

        return (
            <div className='app'>
                <AppHeader todo={todoData.length - doneCount} done={doneCount} />
                <div className='app-actions'>
                    <SearchPanel doSearch={this.search} />
                    <ItemStatusFilter filter={this.filter} filterKey={filterKey} />
                </div>
                <TodoList
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    todoData={todoData}
                    deleteHandler={this.deleteTodo}
                />
                <AddTodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default App;