import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PixelsContext } from '../context/PixelsContext';
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
`;

const BuyPlace = () => {
    const places = useContext(PixelsContext);
    const nonLimitedPlaces = places.filter((place: any) => place.isLimited === false && place.isSold === false);

    //violet || red || green
    const [borderOn, setBorderOn] = useState<string | null>("violet");

    const initialValues = {
        name: "",
        url: "",
        description: "",
        //violet is default
        background: "#21092f",
        qty: "",
    }

    const [inputValues, setInputValues] = useState(initialValues);

    useEffect(() => {
        if(borderOn) {
            setInputValues((prev: any) => {
                return {
                    ...prev,
                    background: borderOn === 'violet' ? '#21092f' : borderOn === 'red' ? '#a62508' : borderOn === "green" ? '#0da608' : "",
                }
            })
        }
    }, [borderOn])

    useEffect(() => {
        if (inputValues.background !== '#21092f' && inputValues.background !== '#a62508' && inputValues.background !== '#0da608') {
            setBorderOn(null);
        };
    }, [inputValues]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValues((prevValues) => {
           return {
                ...prevValues,
                [e.target.name]: e.target.value,
            }
        });
    };

    const handleColorClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const value = (e.currentTarget.getAttribute("data-value"));
        setBorderOn(value);
    };

    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Kupno Miejsc</h1>
            <form>
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
                <StyledButton primary>Kupuję</StyledButton>
            </form>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default BuyPlace;