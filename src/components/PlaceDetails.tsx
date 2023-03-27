import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import CenteredContainer from "./CenteredContainer";
import Input from "./Input";
import StyledButton from "./StyledButton";

const StyledWrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;

  h1,
  h2,
  h3,
  p {
    color: #150140;
    text-align: center;
    margin-bottom: 25px;
  }

  h1,
  h2,
  h3 {
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
      color: #fcc201;
    }
  }

  a {
    display: block;
    margin: 0 0 20px 0;
    text-align: center;
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

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const PlaceDetails = () => {
  //id of place
  const { id } = useParams();
  //user id
  const { user } = useContext(UserContext);
  const userId = user ? user._id : null;

  const [place, setPlace] = useState<any>(null);
  const [placeError, setPlaceError] = useState<any>("");
  const [error, setError] = useState("");
  const [successUpdate, setSuccessUpdate] = useState<any>(place);
  const [successInfo, setSuccessInfo] = useState("");

  //For fetching place from DB
  useEffect(() => {
    const fetchPlace = async () => {
      const res = await fetch(
        `https://busy-gray-prawn-hem.cyclic.app/api/pixels/${id}`
      );
      const data = await res.json();
      if (!res.ok) {
        return setPlaceError(data.message);
      }
      setPlace(data);
    };
    fetchPlace();
  }, [id, successUpdate]);

  const [inputValues, setInputValues] = useState({
    name: "",
    url: "",
    description: "",
    background: "",
  });
  //Update input values from fetched place
  useEffect(() => {
    if (place) {
      setInputValues({
        name: place.name || "",
        url: place.url || "",
        description: place.description || "",
        background: place.background || "",
      });
    }
  }, [place]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const token = user ? user.token : null;
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValues.name || !inputValues.url || !inputValues.background) {
      setError("Nazwa, adres url oraz kolor muszą być wypełnione");
    } else {
      try {
        const res = await fetch(
          `https://busy-gray-prawn-hem.cyclic.app/api/pixels/${id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              name: inputValues.name,
              url: inputValues.url,
              description: inputValues.description,
              background: inputValues.background,
            }),
            headers: {
              "Content-Type": "application/json",
              //'Content-Type': 'application/x-www-form-urlencoded',
              authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          return setError(data.message);
        }
        setSuccessUpdate(data);
        setSuccessInfo("Zaktualizowano");
        setError("");
        setPlaceError("");
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  return (
    <StyledWrapper>
      <CenteredContainer>
        {placeError && <h1>{placeError}</h1>}
        {place === null ? (
          !error ? (
            <h1 className="loading">Ładowanie</h1>
          ) : null
        ) : null}
        {place && (
          <>
            {place.isLimited && <p className="limited">Edycja Limitowana</p>}
            <h1>
              Miejsce nr {place.number}{" "}
              <div style={{ background: `${place.background}` }}></div>
            </h1>
            <h2>
              Nazwa: <span>{place.name}</span>
            </h2>
            <h3>
              Adres:{" "}
              <span style={{ maxWidth: "100%", wordBreak: "break-all" }}>
                <a href={place.url} target="_blank" rel="noreferrer">
                  {place.url}
                </a>
              </span>
            </h3>
            <p>{place.description}</p>
            {place.owner === userId && (
              <form onSubmit={handleFormSubmit}>
                <Input
                  id="name"
                  label="Nazwa"
                  name="name"
                  value={inputValues.name}
                  onChange={handleInputChange}
                />
                <Input
                  id="url"
                  label="Adres URL"
                  name="url"
                  value={inputValues.url}
                  onChange={handleInputChange}
                />
                <Input
                  id="description"
                  label="Opis"
                  name="description"
                  value={inputValues.description}
                  onChange={handleInputChange}
                  textarea={true}
                />
                <Input
                  id="background"
                  name="background"
                  label="Kolor (HEX Code)"
                  value={inputValues.background}
                  onChange={handleInputChange}
                />
                <a
                  href="https://htmlcolorcodes.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Generator kolorów
                </a>
                {error && <p className="error">{error}</p>}
                {successInfo && <p>{successInfo}</p>}
                <StyledButton primary={true}>Zmień dane</StyledButton>
              </form>
            )}
          </>
        )}
      </CenteredContainer>
    </StyledWrapper>
  );
};

export default PlaceDetails;
