import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const StyledHeader = styled.header`
    width: 100%;
    min-height: 250px;
    background: rgb(41,23,70);
    background: linear-gradient(189deg, rgba(41,23,70,1) 83%, rgba(21,1,64,1) 93%);
    color: white;
    text-align: center;
    padding: 25px 10px 20px 10px;
    margin-bottom: 45px;

    h1 {
        font-size: 60px;
    }

    h1, h2 {
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 30px;
    }
`;



const Header = () => {
    return(
        <StyledHeader>
            <h1>Kup Pixele</h1>
            <h2>Bądź częścią miliona pixeli!</h2>
            <h3>Bądź częścią historii...</h3>
            <Logo />
            <Menu />
        </StyledHeader>
    );
};

export default Header;