import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import {GiHamburgerMenu} from 'react-icons/gi';

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

        @media (max-width: 400px) {
            font-size: 50px;
        }
    }

    h2 {
        @media (max-width: 400px) {
            font-size: 18px;
        }
    }

    h1, h2 {
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 30px;

        @media (max-width: 400px) {
            font-size: 16px;
        }
    }

    .hamburgerIcon {
        display: none;

        @media (max-width: 699px) {
            display: block;
            margin: 20px auto 0 auto;
            font-size: 51px;
        }
    }
`;



const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    //For toggling mobile navigation and prevent scrolling
    const toggleNav = () => {
        setShowMobileNav((prev) => !prev);

        if(document.body.style.overflow === "hidden") {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    return(
        <StyledHeader>
            <h1>Kup Pixele</h1>
            <h2>Bądź częścią miliona pixeli!</h2>
            <h3>Bądź częścią historii...</h3>
            <Logo />
            <GiHamburgerMenu className="hamburgerIcon" onClick={toggleNav} />
            <Menu showMobileNav={showMobileNav} toggleNav={toggleNav} />
        </StyledHeader>
    );
};

export default Header;