import React from 'react';
import styled from 'styled-components';
import SyncLoader from "react-spinners/SyncLoader";

const StyledOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(21, 1, 64, 0.96);
    padding: 60px 20px 30px 20px;

    h1 {
        color: white;
    }

    div {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            color: white;
            font-size: 26px;
            text-align: center;
            margin: 0 auto 30px auto;
            line-height: 34px;
            max-width: 780px;
        }

        p:nth-child(3) {
            margin-bottom: 60px;
        }
    }
`;

const BuyingPlaceInfoModal = () => {
    return(
        <StyledOverlay>
            <h1>FFFFFFFFF</h1>
            <div>
            <p>Nasi pixelowi pracownicy rezerwują dla Ciebie miejsca!</p>
            <p>Może to potrwać nieco dłużej w zależności od ilości miejsc - poczekaj cierpliwie, robią co w ich mocy :)</p>
            <p>Za chwilę zostaniesz przekierowany na stronę płatności</p>
            <SyncLoader color="white" size={30} speedMultiplier={0.7} />
            </div>
        </StyledOverlay>
    )
};

export default BuyingPlaceInfoModal;