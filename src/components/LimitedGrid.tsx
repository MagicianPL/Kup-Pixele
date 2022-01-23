import React from 'react';
import styled from 'styled-components';

const StyledSubgrid = styled.div`
    display: grid;
    background: red;
    grid-column: 45/55;
    grid-row: 45/55;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
`;

const LimitedGrid = () => {
    return(
        <StyledSubgrid />
    );
};

export default LimitedGrid;