import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

    .info {
        text-align: center;
        font-size: 23px;
        margin-bottom: 18px;
        color: green;
        padding: 8px 5px;
    }
`;

const LoginPage = () => {
    //For redirection from Register Page
    const {pathname} = useLocation();
    const successRegister = pathname.split('&')[1];
    //----------------

    const [error, setError] = useState("");

    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const res = await fetch("http://localhost:5000/api/user/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: inputValues.email,
                        password: inputValues.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                        //'Content-Type': 'application/x-www-form-urlencoded',
                      },
                });
                const data = await res.json();
                if (!res.ok) {
                    return setError(data.message);
                };
                console.log({success: true, user: data});
                navigate("/");
        } catch(err: any) {
            setError(err.message);
        };
    };
    return(
        <StyledWrapper>
        <CenteredContainer>
            {successRegister && <p className="info">Rejestracja przebiegła pomyślnie, możesz się zalogować</p>}
            <h1>Zaloguj</h1>
            <form onSubmit={handleFormSubmit}>
            <Input id="email" label="Adres E-mail" name="email" value={inputValues.email} onChange={handleInputChange} placeholder="Twój e-mail" type="email" />
            <Input id="password" label="Hasło" name="password" value={inputValues.password} onChange={handleInputChange} placeholder="Wpisz hasło" type="password" />
            <p className="error">Hasła do siebie nie pasują</p>
            <StyledButton primary={true}>Zaloguj</StyledButton>
            </form>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default LoginPage;