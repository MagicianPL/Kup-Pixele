import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
    width: 100%;
    max-width: 900px;
    margin: 30px auto 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-size: 18px;

    li {
        cursor: pointer;
    }

    li:nth-child(1):hover {
        color: yellow;
    }

    li:nth-child(2):hover {
        color: brown;
    }

    li:nth-child(3):hover {
        color: gray;
    }

    li:nth-child(4):hover {
        color: green;
    }

    li:nth-child(5):hover {
        color: yellow;
    }
`;

const Menu = () => {
    return(
        <StyledUl>
            <li>Pixele</li>
            <li>O co chodzi?</li>
            <li>Lista</li>
            <li>Kup Pixele</li>
            <li>Edycja Limitowana</li>
        </StyledUl>
    );
};

export default Menu;