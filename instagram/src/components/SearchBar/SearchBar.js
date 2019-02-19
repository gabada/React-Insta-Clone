import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div>
        <input type="text" placeholder="&#x1F50D;Search" className="searchPlaceHolder"/>
        </div>
    );
};

export default SearchBar;