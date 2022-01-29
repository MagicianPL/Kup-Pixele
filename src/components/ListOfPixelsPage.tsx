import React, { useContext } from 'react';
import {PixelsContext} from '../context/PixelsContext';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import { UserContext } from '../context/UserContext';

const StyledWrapper = styled.div`
    width: 100%;

    h1, h2 {
        color: #150140;
        margin-bottom: 30px;
        text-align: center;
    }

    h2 {
        text-align: left;
        margin-bottom: 40px;
        font-size: 22px;

        span {
            color: #FCC201;
            margin-left: 30px;
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
`

const ListOfPixelsPage = () => {
    const wholeList = useContext(PixelsContext);
    const {user} = useContext(UserContext);
    const id = user ? user._id : null;

    const buyedPlaces = id ? wholeList.filter((item: any) => item.owner === id) : [];
    const limitedPlaces = buyedPlaces.length > 0 ? buyedPlaces.filter((place: any) => place.isLimited === true) : [];

    return(
    <StyledWrapper>
        <CenteredContainer>
            <h1>Twoje miejsca (pixele)</h1>
            <h2>Wykupione miejsca: {buyedPlaces.length} <span>Edycja Limitowana: {limitedPlaces.length}</span></h2>
            <ul>
                {buyedPlaces.map((item: any) => {
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
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default ListOfPixelsPage;