import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

    const todoData = [
        { label: 'Drink Cofee', important: false, id: 1 }, 
        { label: 'Create React App', important: true, id: 2 },
        { label: 'Eat Lunch', important: false, id: 3 }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todoData={todoData}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));