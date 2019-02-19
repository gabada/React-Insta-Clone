import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div>
        <input type="text" onChange={props.searchPost} value={props.filterTarget} placeholder="&#x1F50D;Search" className="searchPlaceHolder"/>
        </div>
    );
};

export default SearchBar;