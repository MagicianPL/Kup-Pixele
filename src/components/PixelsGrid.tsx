import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LimitedGrid from './LimitedGrid';

const StyledGridContainer = styled.div`
    display: grid;
    width: 100%;
    max-width: 1002px;
    margin: 0 auto;
    height: 100%;
    aspect-ratio: 1/1;
    border: 1px solid #FCC201;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
    margin-top: 20px;
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

const PixelsGrid = () => {
    const [pixelPackages, setPixelPackages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pixels/nonlimited")
        .then(res => res.json())
        .then(data => setPixelPackages(data))
    }, []);

    return(
        <>
        {pixelPackages.length < 1 && <h2>Loading...</h2>}
        {pixelPackages.length > 0 &&
            <StyledGridContainer>
            {pixelPackages.map((item: any) => {
                return(
                    item.isSold ? <a href="/" style={{background: `${item.background}`}}><div></div></a> : <div className="empty"></div>
                )
            })}
            <LimitedGrid />
        </StyledGridContainer>
        }
        </>
    );
};

export default PixelsGrid;