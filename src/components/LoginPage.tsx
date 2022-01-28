import React, { useState } from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import Input from './Input';
import StyledButton from './StyledButton';

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
    }

    .error {
        font-weight: bold;
        color: red;
        text-align: center;
        margin-bottom: 15px;
        font-size: 20px;
    }
`;

const LoginPage = () => {
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    }
    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Zaloguj</h1>
            <form>
            <Input id="email" label="Adres E-mail" name="email" value={inputValues.email} onChange={handleInputChange} placeholder="Twój e-mail" type="email" />
            <Input id="password" label="Hasło" name="password" value={inputValues.password} onChange={handleInputChange} type="password" />
            <p className="error">Hasła do siebie nie pasują</p>
            <StyledButton primary={true}>Zaloguj</StyledButton>
            </form>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default LoginPage;