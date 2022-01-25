import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

const CenteredContainer: React.FC = ({children}) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default CenteredContainer;