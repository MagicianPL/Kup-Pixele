import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';
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

const UserUpdatePage = () => {
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        login: "",
        email: "",
        password: "",
        confirmedPassword: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    }

    //JWT user token
    const {user: {token}} = useContext(UserContext);
    const {setUser} = useContext(UserContext);

    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValues.login || !inputValues.email || !inputValues.password || !inputValues.confirmedPassword) {
            setError("Wszystkie pola muszą być wypełnione");
        } else if (inputValues.password !== inputValues.confirmedPassword) {
            setError("Hasła nie są takie same");
        } else {
            try {
                const res = await fetch("http://localhost:5000/api/user/update", {
                    method: "PUT",
                    body: JSON.stringify({
                        login: inputValues.login,
                        email: inputValues.email,
                        password: inputValues.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        //'Content-Type': 'application/x-www-form-urlencoded',
                        'authorization': `Bearer ${token}`
                      },
                });
                const data = await res.json();
                if (!res.ok) {
                    return setError(data.message);
                };
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data);
                navigate("/");
            } catch(err: any) {
                setError(err.message);
            }
        }
    };

    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Zmień dane</h1>
            <form onSubmit={handleFormSubmit}>
            <Input id="login" label="Login" name="login" value={inputValues.login} onChange={handleInputChange} placeholder="Wybrany login" />
            <Input id="email" label="Adres E-mail" name="email" value={inputValues.email} onChange={handleInputChange} placeholder="Wybrany e-mail" type="email" />
            <Input id="password" label="Hasło" name="password" value={inputValues.password} onChange={handleInputChange} type="password" />
            <Input id="confirmedPassword" name="confirmedPassword" label="Powtórz hasło" value={inputValues.confirmedPassword} onChange={handleInputChange} type="password" />
            {error && <p className="error">{error}</p>}
            <StyledButton primary={true}>Wyślij</StyledButton>
            </form>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default UserUpdatePage;