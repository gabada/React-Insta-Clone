import React from 'react';
import Logo from '../../img/insta-header.png';
import Profile from '../../img/insta-profile.png';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

const Header = props => {
    return (
        <header className="header">
            <img src={ Logo } alt="instagram"/>
            <SearchBar />
            <img src={ Profile } alt="profile"/>
        </header>
    );
}

export default Header;