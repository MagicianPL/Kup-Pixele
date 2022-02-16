import React from 'react';
import styled from 'styled-components';
import SyncLoader from "react-spinners/SyncLoader";

const StyledOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.96);
    padding: 20px;

    && h1 {
        color: white;
    }

    p {
        color: white;
    }
`;

const BuyingPlaceInfoModal = () => {
    return(
        <StyledOverlay>
            <div>
            <p>Nasi pixelowi pracownicy rezerwują dla Ciebie miejsca!<br />
            Może to potrwać nieco dłużej w zależności od ilości miejsc, poczekaj cierpliwie, robią co w ich mocy!</p>
            <p>Za chwilę zostaniesz przekierowany na stronę płatności</p>
            <SyncLoader color="white" size={40} />
            </div>
        </StyledOverlay>
    )
};

export default BuyingPlaceInfoModal;