import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
    min-height: 50vh;
    position: relative;

    &::before {
        content "";
        position: absolute;
        width: 100vw;
        top: 0;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        z-index: -1;
        background: #150140;
    }
`;

const About = () => {
    return(
        <StyledWrapper/>
    );
};

export default About;