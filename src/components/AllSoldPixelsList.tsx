import React, { useContext, useEffect, useState } from 'react';
import {PixelsContext} from '../context/PixelsContext';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';

const StyledWrapper = styled.div`
    width: 100%;

    h1, h2 {
        color: #150140;
        margin-bottom: 30px;
        text-align: center;

        @media (max-width: 420px) {
            font-size: 26px;
        }
    }

    h2 {
        text-align: left;
        margin-bottom: 40px;
        font-size: 22px;
        display: flex;

        @media (max-width: 750px) {
            flex-direction: column;
        }

        span {
            color: #FCC201;
            margin-left: 30px;

            @media (max-width: 750px) {
                margin-left: 0;
                margin-top: 12px;
            }
        }
    }

    ul {
        list-style: none;
    }

    .place {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 25px;
        padding: 10px;
        border: 3px solid transparent;
        transition: all 0.4s;
        cursor: pointer;

        @media (max-width: 750px) {
            border: 3px solid #150140;
        }

        &:hover {
            border: 3px solid #150140;
        }

        div {
            width: 50px;
            height: 100%;
            aspect-ratio: 1/1;
        }

        .limited {
            width: 100%;
            text-align: center;
            color: #FCC201;
        }
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
`

const AllSoldPixelsList = () => {
    const wholeList = useContext(PixelsContext);
    const [soldPlaces, setSoldPlaces] = useState<any>(null);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        if(wholeList.length > 0 && loadingData === true) {
            setLoadingData(false);
            setSoldPlaces(wholeList.filter((place: any) => place.isSold === true));
        }
    }, [wholeList, soldPlaces, loadingData]);

    useEffect(() => {
        console.log("render");
    })


    return(
    <StyledWrapper>
        <CenteredContainer>
            {loadingData && <h1 className="loading">Ładowanie...</h1>}
            {!loadingData ? soldPlaces.length > 0 ?
            <>
                <h1>Twoje miejsca (pixele)</h1>
                <h2 className="info">Wykupione miejsca: {soldPlaces.length}</h2>
                <ul>
                {soldPlaces.map((item: any) => {
                    return(
                        <li key={item.number} className="place">
                            <div style={{background: `${item.background}`}}></div>
                            <p>Numer miejsca: {item.number}</p>
                            <p>Adres: https://www.testtakitamtest.pl</p>
                            <p className="limited">EDYCJA LIMITOWANA</p>
                        </li>
                    )
                })}
            </ul>
            </> : <h1>Brak wykupionych miejsc</h1> : null}
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default AllSoldPixelsList;