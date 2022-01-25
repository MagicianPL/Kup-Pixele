import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

        &:hover::before {
            content: "Edycja Limitowana"
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
        }
    }
`;

const LimitedGrid = () => {
    const [limitPixelPackages, setLimitPixelPackages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pixels/limited")
        .then(res => res.json())
        .then(data => setLimitPixelPackages(data))
    }, []);

    return(
        <StyledSubgrid>
            {limitPixelPackages.map((item: any) => {
                return(
                    item.isSold ? <a className="limited" href="/" style={{background: `${item.background}`}}><div></div></a> : <div className="empty limited"></div>
                )
            })}
        </StyledSubgrid>
    );
};

export default LimitedGrid;