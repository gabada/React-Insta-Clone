import React from 'react';
import Logo from '../../img/instagram.svg';
import LogoName from '../../img/insta-logo.png';
import Heart from '../../img/heart.svg';
import UserLogo from '../../img/user.svg';
import Compass from '../../img/compass.svg';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

const Header = props => {
    return (
        <header className="header">
            <div>
                <img src={Logo} alt="instagram" className="logoImg"/>{ "|" }
                <img src={LogoName} alt="instagram" className="logoName"/>
            </div>
            <SearchBar />
            <div>
                <img src={ Compass } alt="compass" className="headerCompass"/>
                <img src={ Heart } alt="heart" className="headerHeart"/>
                <img src={ UserLogo } alt="profile" className="headerUserLogo"/>
            </div>
        </header>
    );
}

export default Header;