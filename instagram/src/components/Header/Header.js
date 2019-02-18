import React from 'react';

const Header = props => {
    return (
        <header className="header">
            <img src={require ("../../img/insta-header.png") } alt="instagram"/>
        </header>
    );
}

export default Header;