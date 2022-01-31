import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {PixelsContext} from '../context/PixelsContext';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import { UserContext } from '../context/UserContext';
import StyledButton from './StyledButton';

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

        .break {
            @media (max-width: 731px) {
                width: 100%;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
            margin: 0 0 0 auto;
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
`;

const StyledEditButton = styled(StyledButton)`
    font-size: 20px;
    margin: 0;
`;

const ListOfPixelsPage = () => {
    const wholeList = useContext(PixelsContext);
    const {user} = useContext(UserContext);
    const id = user ? user._id : null;

    const [buyedPlaces, setBuyedPlaces] = useState<any>(null);

    useEffect(() => {
        if(id && wholeList.length > 0) {
            setBuyedPlaces(wholeList.filter((item: any) => item.owner === id));
        }
    }, [id, wholeList]);

    const limitedPlaces = buyedPlaces !== null ? buyedPlaces.length > 0 ? buyedPlaces.filter((place: any) => place.isLimited === true) : [] : [];

    return(
    <StyledWrapper>
        <CenteredContainer>
            {buyedPlaces === null && <h1 className="loading">Ładowanie...</h1>}
            {buyedPlaces !== null ?
            buyedPlaces.length > 0 ?
            <>
                <h1>Twoje miejsca (pixele)</h1>
                <h2 className="info">Wykupione miejsca: {buyedPlaces.length} <span>Edycja Limitowana: {limitedPlaces.length}</span></h2>
                <ul>
                {buyedPlaces.map((item: any) => {
                    return(
                        <li key={item.number} className="place">
                            <div style={{background: `${item.background}`}}></div>
                            <p>Numer miejsca: {item.number}</p>
                            <p>Adres: {item.url}</p>
                            <span className="break"></span>
                            <Link to={`/place/${item._id}`}><StyledEditButton>Edytuj</StyledEditButton></Link>
                            {item.isLimited && <p className="limited">EDYCJA LIMITOWANA</p>}
                        </li>
                    )
                })}
            </ul>
            </> :
            <>
            <h1>W tej chwili nie masz wykupionych miejsc</h1>
            <Link to="/buy"><StyledButton primary>Kup Pixele</StyledButton></Link>
            </> : null}
        </CenteredContainer>
    </StyledWrapper>
    );
};

export default ListOfPixelsPage;