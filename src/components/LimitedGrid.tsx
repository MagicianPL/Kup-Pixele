import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PixelsContext } from '../context/PixelsContext';

const StyledSubgrid = styled.div`
    display: grid;
    background: #FCC201;
    border: 1px solid #FCC201;
    grid-column: 45/55;
    grid-row: 45/55;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);

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

        &:hover {
            border: 1px solid yellow;
        }
    }

    .limited {
        position: relative;

        p {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 16px;
            color: black;
            visibility: hidden;
            color: #150140;
        }

        &:hover p {
            visibility: visible;
            cursor: default;
        }
    }
`;

const LimitedGrid = () => {
    const pixels = useContext(PixelsContext);
    const [limitPixelPackages, setLimitPixelPackages] = useState([]);

    //For setting only limited pixels
    useEffect(() => {
        if (pixels.length > 1) {
            const limitPixels = pixels.filter((item: any) => item.isLimited === true);
            setLimitPixelPackages(limitPixels);
        }
    }, [pixels])

    return(
        <StyledSubgrid>
            {limitPixelPackages.map((item: any) => {
                return(
                    item.isSold ? <a key={item._id} className="limited" href={item.url} style={{background: `${item.background}`}}><div></div></a> : <div key={item._id} className="empty limited"><p>Edycja Limitowana</p></div>
                )
            })}
        </StyledSubgrid>
    );
};

export default LimitedGrid;
