import React, { Component } from 'react';
import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group item-status-filter" role="group" aria-label="Search filter">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}

export default ItemStatusFilter;