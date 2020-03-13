import React from 'react';
import './ItemStatusFilter.css';

const ItemStatusFilter = (props) => {
    const { filter, filterKey } = props;
    return (
        <div className="btn-group item-status-filter" role="group" aria-label="Search filter">
            <button type="button" onClick={() => filter('all')} className={`btn ${(filterKey === 'all') ? 'btn-primary' : 'btn-outline-secondary'}`}>All</button>
            <button type="button" onClick={() => filter('active')} className={`btn ${(filterKey === 'active') ? 'btn-primary' : 'btn-outline-secondary'}`}>Active</button>
            <button type="button" onClick={() => filter('done')} className={`btn ${(filterKey === 'done') ? 'btn-primary' : 'btn-outline-secondary'}`}>Done</button>
        </div>
    )
}

export default ItemStatusFilter;