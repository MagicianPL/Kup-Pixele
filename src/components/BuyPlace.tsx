import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PixelsContext } from '../context/PixelsContext';
import { UserContext } from '../context/UserContext';
import CenteredContainer from './CenteredContainer';
import Input from './Input';
import StyledButton from './StyledButton';
import BuyingPlaceInfoModal from './BuyingPlaceInfoModal';

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

    .colors {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin: 30px auto 15px auto;

        div {
            width: 100%;
            max-width: 35px;
            height: 100%;
            aspect-ratio: 1/1;
            cursor: pointer;
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background: lightgray;
            border: 1px solid transparent;
            transition: border 0.4s;

        &:hover {
            border: 1px solid black;
        }

        &.border {
            border: 1px solid black;
        }

            &::after {
                content: "";
                width: 100%;
                height: 100%;
                display: block;
            }

            &:nth-child(1)::after {
                background: #21092f;
            }

            &:nth-child(2)::after {
                background: #a62508;
            }

            &:nth-child(3)::after {
                background: #0da608;
            }
        }
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;
        text-align: center;
        margin: 10px 0 30px 0;
    }

    .error {
        text-align: center;
        font-weight: bold;
        color: red;
        margin-bottom: 20px;
        font-size: 20px;
    }
`;

const BuyPlace = () => {
    const places = useContext(PixelsContext);
    const nonLimitedPlaces = places.filter((place: any) => place.isLimited === false && place.isSold === false);

    //violet || red || green
    //conditional className on colors div
    //also if true - it's sets input background value
    const [borderOn, setBorderOn] = useState<string | null>("violet");

    const initialValues = {
        name: "",
        url: "",
        description: "",
        //violet is default
        background: "#21092f",
        qty: "1",
    }

    const [inputValues, setInputValues] = useState(initialValues);

    //Checking if background on input value is not equal to one of colors to choose. If not - set border on null
    useEffect(() => {
        if (inputValues.background !== '#21092f' && inputValues.background !== '#a62508' && inputValues.background !== '#0da608') {
            setBorderOn(null);
        };
    }, [inputValues]);

    //when borderOn is changing && when is still true - set background input value
    useEffect(() => {
        if(borderOn) {
            setInputValues((prev: any) => {
                return {
                    ...prev,
                    background: borderOn === 'violet' ? '#21092f' : borderOn === 'red' ? '#a62508' : borderOn === "green" ? '#0da608' : "",
                }
            })
        }
    }, [borderOn]);

    const handleColorClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const value = (e.currentTarget.getAttribute("data-value"));
        setBorderOn(value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValues((prevValues) => {
           return {
                ...prevValues,
                [e.target.name]: e.target.value,
            }
        });
    };

    //validating error
    const [error, setError] = useState("");

    const validateInputs = () => {
        if (!inputValues.name || !inputValues.url || !inputValues.background || !inputValues.qty) {
            setError("Wszystkie wymagane pola muszą być wypełnione");
            return false;
        } else {
            const amount = parseFloat(inputValues.qty);
            if (!Number.isInteger(amount)) {
                setError("Nieprawidłowa ilość miejsc");
                return false;
            } else if (amount < 1 || amount > nonLimitedPlaces.length) {
                setError("Nieprawidłowa ilość miejsc");
                return false;
            } else {
                setError("");
                return true;
            }
        }
    };

    //Conditionally rendering for BuyingPlaceInfoModal - when data is fetching
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [fetchingError, setFetchingError] = useState("");

    const { user } = useContext(UserContext);
    const token = user?.token;
    const navigate = useNavigate();
    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //If user is not logged navigate to login page
        if (!user) return navigate("/login");
        //returns true when values are valid
        const isValid = validateInputs();
        if (isValid) {
            console.log("Submitting form");
            if (inputValues.url.indexOf("http://") !== 0 && inputValues.url.indexOf("https://") !== 0) {
             setInputValues({...inputValues, url: `https://${inputValues.url}`})
            };
            setShowLoadingModal(true);
            const res = await fetch("https://kup-pixele-api.herokuapp.com/api/pixels/buy/nonlimited", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify(inputValues)
            });

            if (!res.ok) {
                const error = await res.json();
                setFetchingError(error.message);
                return;
            };

            const sessionUrl = await res.json();
            window.location.href = sessionUrl;
        }
    };

    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Kupno Miejsc</h1>
            <form onSubmit={handleFormSubmit}>
                <Input id="name" name="name" label="Nazwa" placeholder="Podaj własną nazwę" value={inputValues.name} onChange={handleInputChange} />
                <Input id="url" name="url" label="Adres URL" value={inputValues.url} placeholder="Adres www" onChange={handleInputChange} />
                <Input id="description" name="description" label="Opis (opcjonalnie)" textarea={true} value={inputValues.description} onChange={handleInputChange} />
                <div className="colors">
                    <div className={borderOn === "violet" ? "border" : ""} data-value="violet" onClick={handleColorClick}></div>
                    <div className={borderOn === "red" ? "border" : ""} data-value="red" onClick={handleColorClick}></div>
                    <div className={borderOn === "green" ? "border" : ""} data-value="green" onClick={handleColorClick}></div>
                </div>
                <Input id="background" name="background" label="Kolor (w HEX kodzie)" value={inputValues.background} onChange={handleInputChange} />
                <a href="https://htmlcolorcodes.com/" target="_blank" rel="noreferrer">Generator kolorów</a>
                <Input id="qty" name="qty" type="number" label={`Ilość miejsc ${places.length > 0 ? `(${nonLimitedPlaces.length} dostępnych z edycji nielimitowanej)` : ""}`} value={inputValues.qty} onChange={handleInputChange} />
                {error && <p className="error">{error}</p>}
                <StyledButton primary>Kupuję</StyledButton>
            </form>
        </CenteredContainer>
        {showLoadingModal && <BuyingPlaceInfoModal fetchingError={fetchingError} />}
    </StyledWrapper>
    );
};

export default BuyPlace;