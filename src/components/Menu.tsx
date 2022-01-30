import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BsArrowRightCircleFill} from 'react-icons/bs';

const StyledUl = styled.ul`
    width: 100%;
    max-width: 900px;
    margin: 30px auto 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-size: 18px;

    svg {
        display: none;
    }

    @media (max-width: 699px) {
        width: 60%;
        position: fixed;
        top: 0;
        right: -100%;
        flex-direction: column;
        background: #150140;
        margin-top: -25px;
        height: 200vh;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 45px 55px 20px 20px;
        gap: 25px;
        z-index: 6;
        font-size: 25px;
        border-left: 3px solid white;
        transition: all 0.5s;

        &.mobileMenuActive {
            right: 0;
        }

        svg {
            display: block;
            font-size: 40px;
            position: absolute;
            top: 46px;
            left: 25px;
        }
    }

    @media (max-width: 545px) {
        width: 80%;
    }

    @media (max-width: 400px) {
        font-size: 22px;
        width: 100%;
    }

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

    a {
        text-decoration: none;
        color: inherit;
    }
`;

interface IProps {
    showMobileNav: boolean
    toggleNav: () => void
}

const Menu: React.FC<IProps> = ({showMobileNav, toggleNav}) => {

    return(
        <StyledUl className={showMobileNav ? "mobileMenuActive" : undefined}>
            <li onClick={()=> toggleNav()}><Link to="/">Pixele</Link></li>
            <li onClick={()=> toggleNav()}><a href="/#aboutPage">O co chodzi?</a></li>
            <li onClick={()=> toggleNav()}><Link to="/soldlist">Lista</Link></li>
            <li onClick={()=> toggleNav()}>Kup Pixele</li>
            <li onClick={()=> toggleNav()}>Edycja Limitowana</li>
            <BsArrowRightCircleFill onClick={toggleNav}/>
        </StyledUl>
    );
};

export default Menu;