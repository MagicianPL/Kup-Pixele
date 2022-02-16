import React, { useEffect } from 'react';
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

            @media (max-width: 450px) {
                font-size: 20px;
            }
        }

        p:nth-child(3) {
            margin-bottom: 60px;
        }

        .error {
            color: red;
        }
    }
`;

interface IProps {
    fetchingError: string,
}

const BuyingPlaceInfoModal: React.FC<IProps> = ({fetchingError}) => {
    
    //If error from fetching is true - redirect to homepage after 5s
    useEffect(() => {
        if(fetchingError) {
            setTimeout(() => {
                window.location.href="https://magicianpl.github.io/Kup-Pixele";
            }, 5000);
        };
    });

    return(
        <StyledOverlay>
            <div>
            {!fetchingError ?
            <>
            <p>Nasi pixelowi pracownicy rezerwują dla Ciebie miejsca!</p>
            <p>Może to potrwać nieco dłużej w zależności od ilości miejsc - poczekaj cierpliwie, robią co w ich mocy :)</p>
            <p>Za chwilę zostaniesz przekierowany na stronę płatności</p>
            <SyncLoader color="white" size={30} speedMultiplier={0.7} />
            </>
            :
            <>
            <p className="error">Ups, coś poszło nie tak...</p>
            <p className="error">{fetchingError}</p>
            <p className="error">Nastąpi przekierowanie na stronę główną</p>
            </>
            }
            </div>
        </StyledOverlay>
    )
};

export default BuyingPlaceInfoModal;