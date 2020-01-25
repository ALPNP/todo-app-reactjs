import React from 'react';

const SearchPanel = () => { 
    const searchText = 'Type here';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input style={searchStyle} placeholder={searchText}></input>;
};

export default SearchPanel;