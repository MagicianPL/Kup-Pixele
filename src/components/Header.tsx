import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    min-height: 250px;
    background: rgb(41,23,70);
    background: linear-gradient(189deg, rgba(41,23,70,1) 83%, rgba(21,1,64,1) 93%);
    color: white;
    font-family: Comfortaa;
    text-align: center;
    padding: 25px 10px 20px 10px;

    h1 {
        font-size: 60px;
    }

    h1, h2, h3 {
        margin-bottom: 20px;
    }
`;

const StyledLogo = styled.div`
    width: 90%;
    max-width: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 10px;
    position: relative;
    bottom: 10px;

    div {
        flex: 1;
        aspect-ratio: 1/1;
        background: red;
    }

    div:nth-child(1) {
        background: green;
    }

    div:nth-child(2) {
        background: yellow;
    }

    div:nth-child(3) {
        background: brown;
    }

    div:nth-child(4) {
        background: gray;
    }
`;

const Header = () => {
    return(
        <StyledHeader>
            <h1>Kup Pixele</h1>
            <h2>Bądź częścią miliona pixeli!</h2>
            <h3>Bądź częścią historii...</h3>
            <StyledLogo>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledLogo>
        </StyledHeader>
    );
};

export default Header;