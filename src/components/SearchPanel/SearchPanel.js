import React from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
    return (
        <div className='search-panel'>
            <input onChange={props.doSearch} className='form-control' placeholder='type to search' />
        </div>
    )
};

export default SearchPanel;