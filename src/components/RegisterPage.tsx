import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import Input from './Input';

const StyledWrapper = styled.div`
    width: 100%;

    h1, h2 {
        color: #150140;
        text-align: center;
        margin-bottom: 25px;
    }
`;

const RegisterPage = () => {
    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Zarejestruj się</h1>
            <h2>Zajmie Ci to tylko 30 sekund!</h2>
            <Input id="login" label="Login" value="" onClick={() => console.log("")} placeholder="Twój login" />
            <Input id="email" label="Adres E-mail" value="" onClick={() => console.log("")} placeholder="Twój e-mail" type="email" />
            <Input id="password" label="Hasło" value="" onClick={() => console.log("")} type="password" />
            <Input id="confirmedPassword" label="Powtórz hasło" value="" onClick={() => console.log("")} type="password" />
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default RegisterPage;