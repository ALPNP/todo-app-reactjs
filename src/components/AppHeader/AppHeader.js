import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className='app-header'>
            <div>
                <h1>Todo List</h1>
            </div>
            <div>
                <span className='app-header-info'>{todo} more to do, {done} done</span>
            </div>
        </div>
    )
};

export default AppHeader;