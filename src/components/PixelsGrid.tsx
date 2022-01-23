import React from 'react';
import styled from 'styled-components';
import LimitedGrid from './LimitedGrid';

const StyledGridContainer = styled.div`
    display: grid;
    width: 100%;
    max-width: 1002px;
    margin: 0 auto;
    height: 100%;
    aspect-ratio: 1/1;
    border: 1px solid red;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(100, 1fr);
    margin-top: 20px;
    background: yellow;
`;

const PixelsGrid = () => {
    return(
        <StyledGridContainer>
            <LimitedGrid />
        </StyledGridContainer>
    );
};

export default PixelsGrid;