import React from 'react';
import styled from 'styled-components';

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

const Logo = () => {
    return(
        <StyledLogo>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLogo>
    );
};

export default Logo;