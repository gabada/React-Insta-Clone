import React from 'react';
import Logo from '../../img/instagram.svg';
import LogoName from '../../img/insta-logo.png';
import Heart from '../../img/heart.svg';
import UserLogo from '../../img/user.svg';
import Compass from '../../img/compass.svg';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';

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

const LogoNames = styled.img`
    width: 125px;
    margin-left: 10px;
`;

const LogoImg = styled.img`
    margin-left: 10px;
`;

const HeaderHeart = styled.img`
    margin: 0 40px;
`;

const Header = props => {
    return (
        <HeaderStyle>
            <div>
                <LogoImg src={Logo} alt="instagram"/>{ " |" }
                <LogoNames src={LogoName} alt="instagram"/>
            </div>
            <SearchBar searchPost={props.searchPost} />
            <div>
                <img src={ Compass } alt="compass" className="headerCompass"/>
                <HeaderHeart src={ Heart } alt="heart"/>
                <img src={ UserLogo } alt="profile" className="headerUserLogo"/>
            </div>
        </HeaderStyle>
    );
}

export default Header;