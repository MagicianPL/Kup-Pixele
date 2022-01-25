import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';

const StyledWrapper = styled.div`
    width: 100%;
    color: white;
    min-height: 50vh;
    background: #150140;
`;

const About = () => {
    return(
        <StyledWrapper>
            <CenteredContainer>
                jiiuu
            </CenteredContainer>
        </StyledWrapper>
    );
};

export default About;