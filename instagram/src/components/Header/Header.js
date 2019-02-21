import React from 'react';
import Logo from '../../img/instagram.svg';
import LogoName from '../../img/insta-logo.png';
import Heart from '../../img/heart.svg';
import UserLogo from '../../img/user.svg';
import Compass from '../../img/compass.svg';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';

import './Header.css';

const HeaderStyle = styled.header`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px lightgray solid;
`;

const Header = props => {
    return (
        <HeaderStyle>
            <div>
                <img src={Logo} alt="instagram" className="logoImg"/>{ "|" }
                <img src={LogoName} alt="instagram" className="logoName"/>
            </div>
            <SearchBar searchPost={props.searchPost} />
            <div>
                <img src={ Compass } alt="compass" className="headerCompass"/>
                <img src={ Heart } alt="heart" className="headerHeart"/>
                <img src={ UserLogo } alt="profile" className="headerUserLogo"/>
            </div>
        </HeaderStyle>
    );
}

export default Header;