import React, { useState } from 'react';
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
    const [inputValues, setInputValues] = useState({
        login: "",
        email: "",
        password: "",
        confirmedPassword: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues((prev) => {
            return(
                {
                    ...prev,
                    [e.currentTarget.name]: e.currentTarget.value,
                }
            )
        });
        console.log(inputValues);
    }
    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Zarejestruj się</h1>
            <h2>Zajmie Ci to tylko 30 sekund!</h2>
            <Input id="login" label="Login" name="login" value={inputValues.login} onChange={handleInputChange} placeholder="Twój login" />
            <Input id="email" label="Adres E-mail" name="email" value={inputValues.email} onChange={handleInputChange} placeholder="Twój e-mail" type="email" />
            <Input id="password" label="Hasło" name="password" value={inputValues.password} onChange={handleInputChange} type="password" />
            <Input id="confirmedPassword" name="confirmedPassword" label="Powtórz hasło" value={inputValues.confirmedPassword} onChange={handleInputChange} type="password" />
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default RegisterPage;