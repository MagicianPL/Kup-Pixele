import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';
import CenteredContainer from './CenteredContainer';
import Input from './Input';
import StyledButton from './StyledButton';

const StyledWrapper = styled.div`
    width: 100%;
    padding-bottom: 40px;

    h1, h2, h3, p {
        color: #150140;
        text-align: center;
        margin-bottom: 25px;
    }

    h1, h2, h3 {
        @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
        }

        span {
            @media (max-width: 400px) {
                font-size: 16px;
            }
        }
    }

    h1 {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;

        div {
            width: 50px;
            height: 100%;
            aspect-ratio: 1/1;
        }

        @media (max-width: 430px) {
            font-size: 26px;
        }
    }

    h2 {
        @media (max-width: 430px) {
            font-size: 18px;
        }
    }

    p {
        font-size: 18px;

        &.limited {
            color: #FCC201;
        }
    }

    .error {
        font-weight: bold;
        color: red;
        text-align: center;
        margin-bottom: 15px;
        font-size: 20px;
    }

    .loading {
        animation: loading 3s infinite;
    }

    @keyframes loading {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(0.8);
        }

        100% {
            transform: scale(1);
        }
    }
`;

const PlaceDetails = () => {
    const navigate = useNavigate();
    //id of place
    const {id} = useParams();
    //user id
    const {user: {_id: userId}} = useContext(UserContext);

    const [place, setPlace] = useState<any>(null);
    const [error, setError] = useState("");

    //For fetching place from DB
    useEffect(() => {
        const fetchPlace = async() => {
            const res = await fetch(`http://localhost:5000/api/pixels/${id}`)
            const data = await res.json();
            if(!res.ok) {
                return setError(data.message);
            };
            setPlace(data);
        };
        fetchPlace();
    }, [id]);

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

    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValues.login || !inputValues.email || !inputValues.password || !inputValues.confirmedPassword) {
            setError("Wszystkie pola muszą być wypełnione");
        } else if (inputValues.password !== inputValues.confirmedPassword) {
            setError("Hasła nie są takie same");
        } else {
            try {
                const res = await fetch("http://localhost:5000/api/user/register", {
                    method: "POST",
                    body: JSON.stringify({
                        login: inputValues.login,
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
                navigate("/login&successregister");
            } catch(err: any) {
                setError(err.message);
            }
        }
    };

    return(
        <StyledWrapper>
        <CenteredContainer>
            {error && <h1>{error}</h1>}
            {place === null ? !error ? <h1 className="loading">Ładowanie</h1> : null : null}
            {place &&
            <>
            <p className="limited">Edycja Limitowana</p>
            <h1>Miejsce nr {place.number} <div style={{background: `${place.background}`}}></div></h1>
            <h2>Nazwa: <span>Jakaś testowa nazwa firmy</span></h2>
            <h3>Adres: <span style={{maxWidth: "100%", wordBreak: "break-all"}}>https://www.jakaśtestowastrona.pl</span></h3>
            <p>Opis: Jakiś tam opis firmy. Najlepsza firma, sprzedajemy mleko. Bla bla bla. Wejdź i zobacz</p>
            {place.owner === userId &&
                <form onSubmit={handleFormSubmit}>
                <Input id="name" label="Nazwa" name="name" value={inputValues.login} onChange={handleInputChange} />
                <Input id="url" label="Adres URL" name="url" value={inputValues.email} onChange={handleInputChange} />
                <Input id="description" label="Opis" name="description" value={inputValues.password} onChange={handleInputChange} />
                <Input id="background" name="background" label="Kolor" value={inputValues.confirmedPassword} onChange={handleInputChange} />
                {error && <p className="error">{error}</p>}
                <StyledButton primary={true}>Zmień dane</StyledButton>
                </form>
            }
            </>}
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default PlaceDetails;