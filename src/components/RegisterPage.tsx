import React, { useState } from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import Input from './Input';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    padding-bottom: 40px;

    h1, h2 {
        color: #150140;
        text-align: center;
        margin-bottom: 25px;
    }

    h1 {
        @media (max-width: 430px) {
            font-size: 26px;
        }
    }

    h2 {
        @media (max-width: 430px) {
            font-size: 18px;
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

const RegisterPage = () => {
    const [inputValues, setInputValues] = useState({
        login: "",
        email: "",
        password: "",
        confirmedPassword: "",
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
            <h1>Zarejestruj się</h1>
            <h2>Zajmie Ci to tylko 30 sekund!</h2>
            <form>
            <Input id="login" label="Login" name="login" value={inputValues.login} onChange={handleInputChange} placeholder="Twój login" />
            <Input id="email" label="Adres E-mail" name="email" value={inputValues.email} onChange={handleInputChange} placeholder="Twój e-mail" type="email" />
            <Input id="password" label="Hasło" name="password" value={inputValues.password} onChange={handleInputChange} type="password" />
            <Input id="confirmedPassword" name="confirmedPassword" label="Powtórz hasło" value={inputValues.confirmedPassword} onChange={handleInputChange} type="password" />
            <p className="error">Hasła do siebie nie pasują</p>
            <StyledButton primary={true}>Zarejestruj</StyledButton>
            </form>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default RegisterPage;