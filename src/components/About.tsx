import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CenteredContainer from './CenteredContainer';
import Logo from './Logo';
import StyledButton from './StyledButton';
import {FaSquare, FaAt} from 'react-icons/fa';
import {RiEditCircleFill} from 'react-icons/ri';
import {GiGoldBar} from 'react-icons/gi';

const StyledWrapper = styled.div`
    width: 100%;
    color: white;
    min-height: 50vh;
    background: #150140;
    padding-top: 35px;
    padding-bottom: 35px;

    h1 {
        text-align: center;
        margin: 55px auto 20px auto;
    }

    .info {
        display: flex;
        align-items: center;

        @media (max-width: 600px) {
            flex-direction: column;
        }

        p {
            font-size: 20px;
            margin-bottom: 20px;

            @media (max-width: 550px) {
                text-align: center;
            }

            @media (max-width: 350px) {
                margin-bottom: 30px;
            }
        }

        p:nth-child(3) {
            @media (max-width: 600px) {
                padding-bottom: 25px;
            }
        }

        div:nth-child(1) {
            width: 75%;

            @media (max-width: 550px) {
                width: 90%;
            }
        }

         div:nth-child(2) {
            flex: 1;

            @media (max-width: 600px) {
                width: 75%;
            }
        }
    }

    .steps {
        font-size: 20px;
        font-weight: bold;
        max-width: 1100px;
        margin: 40px auto 50px auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        @media (max-width: 1050px) {
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 400px) {
            font-size: 17px;
        }

        .step {
            display: flex;
            gap: 15px;
            align-items: center;
            max-width: 47%;
            margin-bottom: 20px;

            @media(max-width: 1050px) {
                max-width: 525px;
            }

            p {
                flex: 1;
                line-height: 25px;
            }

            svg {
                font-size: 60px;

                @media (max-width: 400px) {
                    font-size: 50px;
                }
            }
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const About = () => {
    return(
        <StyledWrapper id="aboutPage">
            <CenteredContainer>
                <div className="info">
                    <div>
                    <p>Milion r??wno podzielonych pixeli, ??eby stworzy?? jedyne takie miejsce w Polsce.</p>
                    <p>Ka??de miejsce na powy??szej mapie to kwadrat, kt??ry ma w sobie 100 pixeli.</p>
                    <p>Ka??de wykupione miejsce jest klikalne i prowadzi do strony, kt??r?? Ty wybierasz!</p>
                    </div>
                    <div>
                        <Logo />
                    </div>
                </div>
                <h1>Jak kupi?? w??asn?? cz???????</h1>
                <div className="steps">
                    <div className="step">
                    <FaSquare style={{color: "green"}} />
                    <p>Wybierasz ilo???? miejsc, w??asny kolor a tak??e odno??nik do strony</p>
                    </div>
                    <div className="step">
                    <RiEditCircleFill style={{color: "white"}} />
                    <p>W ka??dej chwili na swoim koncie masz dost??p do swoich miejsc (pixeli) - w dowolnym momencie mo??esz zmieni?? ich kolory lub odno??niki</p>
                    </div>
                    <div className="step">
                    <FaAt style={{color: "white"}} />
                    <p>Ilo???? miejsc do wykupienia jest ograniczona i z czasem b??dzie mala??a.<br />To tak??e ??wietny spos??b na reklam??!</p>
                    </div>
                    <div className="step">
                    <GiGoldBar style={{color: "#FCC201"}} />
                    <p>Zainwestuj, b??d?? w??a??cicielem pixelowego miejsca, zosta?? cz??onkiem spo??eczno??ci!<br/>Miejsce kosztuje tylko 10&nbsp;z??otych!</p>
                    </div>
                </div>
                <Link to="/buy"><StyledButton>Kup Pixele</StyledButton></Link>
            </CenteredContainer>
        </StyledWrapper>
    );
};

export default About;