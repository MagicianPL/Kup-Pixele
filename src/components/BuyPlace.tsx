import React, { useState } from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import Input from './Input';

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
`;

const BuyPlace = () => {
    const initialValues = {
        name: "",
        url: "",
        description: "",
        background: "",
        qty: "",
    }

    const [inputValues, setInputValues] = useState(initialValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValues((prevValues) => {
           return {
                ...prevValues,
                [e.target.name]: e.target.value,
            }
        });
    };

    return(
        <StyledWrapper>
        <CenteredContainer>
            <h1>Kupno Miejsc</h1>
            <form>
                <Input id="name" name="name" label="Nazwa" placeholder="Podaj nazwę miejsca" value={inputValues.name} onChange={handleInputChange} />
                <Input id="url" name="url" label="Adres URL" value={inputValues.url} placeholder="Adres www" onChange={handleInputChange} />
                <Input id="description" name="description" label="Opis (opcjonalnie)" textarea={true} value={inputValues.description} onChange={handleInputChange} />
                <Input id="background" name="background" label="Kolor (w HEX kodzie)" value={inputValues.background} onChange={handleInputChange} />
                <Input id="qty" name="qty" label="Ilość miejsc" value={inputValues.qty} onChange={handleInputChange} />
            </form>
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default BuyPlace;