import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';

const StyledWrapper = styled.div`
    width: 100%;
    padding-bottom: 40px;

    h1 {
        color: #150140;
        text-align: center;
        margin-bottom: 25px;

        @media (max-width: 430px) {
            font-size: 26px;
        }

        span {
            color: #FCC201;
        }
    }
`;

const LimitedEdition = () => {
    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Więcej informacji o <span>Edycji Limitowanej</span> już niedługo!</h1>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default LimitedEdition;