import React, { useContext } from 'react';
import styled from 'styled-components';
import { PixelsContext } from '../context/PixelsContext';
import LimitedGrid from './LimitedGrid';

const StyledGridContainer = styled.div`
    display: grid;
    width: 100%;
    max-width: 1002px;
    margin: 20px auto 30px auto;
    height: 100%;
    aspect-ratio: 1/1;
    border: 1px solid #FCC201;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("images/earth.jpg");
        background-size: cover;
        opacity: 0.5;
        z-index: -1;
    }

    a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        background: yellow;
        cursor: pointer;
        border: 1px solid transparent;
        transition: border 0.4s;

        &:hover {
            border: 1px solid blue;
        }
    }

    .empty {
        width: 100%;
        height: 100%;
    }
`;

const StyledLoadingInfo = styled.h2`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 50vh auto;
    text-align: center;
    font-size: 28px;
    animation: loading 3s infinite;

    @keyframes loading {
        0% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.9);
        }
    }

    span {
        color: #150140;
    }
`;

const StyledSoldInfo = styled.p`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 20px auto;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
`;

const PixelsGrid = () => {
    const pixelPackages = useContext(PixelsContext);
    const soldQty = pixelPackages.length > 0 ? pixelPackages.filter((item: any) => item.isSold === true).length : "";

    return(
        <>
        {pixelPackages.length < 1 && <StyledLoadingInfo>Ładuję <span>milion pixeli</span> specjalnie dla Ciebie...<br />Poczekaj kilka sekund</StyledLoadingInfo>}
        {pixelPackages.length > 0 &&
            <>
            <StyledSoldInfo>Wykupione miejsca: {soldQty} / 10 000</StyledSoldInfo>
            <StyledGridContainer>
            {pixelPackages.map((item: any) => {
                return(
                    !item.isLimited && item.isSold ? <a key={item._id} href="/" style={{background: `${item.background}`}}><div></div></a> : <div key={item._id} className="empty"></div>
                )
            })}
            <LimitedGrid />
        </StyledGridContainer>
        </>
        }
        </>
    );
};

export default PixelsGrid;