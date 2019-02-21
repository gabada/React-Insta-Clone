import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    text-align: center;
`;

const SearchBar = props => {
    return (
        <div>
        <SearchInput type="text" onChange={props.searchPost} value={props.filterTarget} placeholder="&#x1F50D;Search"/>
        </div>
    );
};

export default SearchBar;